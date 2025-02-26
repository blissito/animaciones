import { Video } from "@prisma/client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaGooglePlay } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";
import Hls from "hls.js";

import videojs from "video.js";
import "video.js/dist/video-js.css";

const POSTER = "https://i.imgur.com/kP5Rrjt.png";

export const VideoPlayer = ({
  video,
  onPlay,
  onPause,
  onClickNextVideo,
  onEnd,
  nextVideo,
  autoPlay,
  isPurchased,
}: {
  isPurchased?: boolean;
  autoPlay?: boolean;
  video?: Partial<Video>;
  nextVideo?: Partial<Video>;
  onClickNextVideo?: () => void;
  onEnd?: () => void;
  onPlay?: () => void;
  onPause?: () => void;
}) => {
  const containerRef = useRef<HTMLVideoElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isEnding, setIsEnding] = useState(false);

  const togglePlay = () => {
    const controls = videoRef.current || null;
    if (!controls) return;
    // main action
    if (controls.paused) {
      controls.play();
      onPlay?.();
    } else {
      controls.pause();
    }
    setIsPlaying(!controls.paused);
  };

  const setListeners = () => {
    const controls = videoRef.current || null;
    if (!controls) return;

    // listeners
    controls.onplaying = () => {
      onPlay?.();
      setIsPlaying(true);
    };
    controls.onplay = () => setIsPlaying(true);
    controls.onpause = () => {
      setIsPlaying(false);
      onPause?.();
    };
    controls.onended = () => onEnd?.();
    controls.ontimeupdate = () => {
      if (controls.duration - controls.currentTime < 15) {
        setIsEnding(true);
        // save watched videos
        updateWatchedList();
      } else {
        setIsEnding(false);
      }
    };
  };

  const updateWatchedList = () => {
    if (typeof window === "undefined") return;
    let list: string | string[] = localStorage.getItem("watched") || "[]";
    list = JSON.parse(list) as string[];
    list = [...new Set([...list, video?.slug])] as string[];
    localStorage.setItem("watched", JSON.stringify(list));
  };

  useEffect(() => {
    if (!videoRef.current) return;

    // detecting HLS support
    const hlsSupport = (videoNode: HTMLVideoElement) =>
      videoNode.canPlayType("application/vnd.apple.mpegURL");

    if (hlsSupport(videoRef.current)) {
      console.info(`Native HLS Supported ✅::`);
      //@todo improve
      videoRef.current.src = "/playlist/" + video?.storageKey + "/index.m3u8"; // is this in server?
      // @todo this should come in the model
      // videoRef.current.type = "application/x-mpegURL";
    } else {
      if (!video?.isPublic && !isPurchased) return; // @todo server
      console.info("Native HLS Not supported. 😢 Fallbacking to hls.js::");
      const exampleSrc = `/playlist/${video?.storageKey}/index.m3u8`;
      console.log("HLS.JS_IS_UP::", Hls.isSupported());
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(exampleSrc);
        hls.attachMedia(videoRef.current);
      }
    }

    // experiment before xmas 🎅🏼
    // const exampleSrc = "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8";

    // autoplay?
    // autoPlay && setIsPlaying(true);
  }, [video]);

  useEffect(() => {
    setListeners();
  }, []);

  return (
    <section
      className="h-[calc(100vh-80px)] relative overflow-x-hidden"
      ref={containerRef}
    >
      <AnimatePresence>
        {!isPlaying && (
          <motion.button
            onClick={togglePlay}
            initial={{ backdropFilter: "blur(9px)" }}
            animate={{ backdropFilter: "blur(0px)" }}
            exit={{ backdropFilter: "blur(0px)", opacity: 0 }}
            transition={{ duration: 0.2 }}
            key="play_button"
            className="absolute inset-0 bottom-16 flex justify-center items-center cursor-pointer z-10"
          >
            <span className=" bg-white/10 backdrop-blur	 flex items-center justify-center text-6xl text-white rounded-full  w-[120px] h-[90px]">
              <FaGooglePlay />
            </span>
          </motion.button>
        )}
        {nextVideo && isEnding && (
          <motion.div
            onClick={onClickNextVideo}
            whileTap={{ scale: 0.99 }}
            transition={{ type: "spring", bounce: 0.2 }}
            whileHover={{ scale: 1.05 }}
            exit={{ opacity: 0, filter: "blur(9px)", x: 50 }}
            initial={{ opacity: 0, filter: "blur(9px)", x: 50 }}
            animate={{ opacity: 1, filter: "blur(0px)", x: 0 }}
            className="absolute right-2 bg-gray-100 z-20 bottom-20 md:top-4 md:right-4 md:left-auto md:bottom-auto left-2 md:w-[500px] px-6 md:pt-6 pt-10 pb-6 rounded-3xl flex gap-4 shadow-sm items-end"
          >
            <button
              onClick={() => setIsEnding(false)}
              className="self-end text-4xl active:scale-95 md:hidden absolute right-4 top-1"
            >
              <IoIosClose />
            </button>
            <div>
              <p className="text-left dark:text-metal text-iron">
                Siguiente video
              </p>
              <h4 className="text-2xl text-dark md:w-[280px] md:truncate text-left">
                {nextVideo.title}
              </h4>
            </div>
            <img
              alt="poster"
              src={nextVideo.poster || POSTER}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = POSTER;
              }}
              className="aspect-video w-40 rounded-xl object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>
      <video
        autoPlay={autoPlay}
        data-nombre={video.slug}
        poster={
          video?.poster || POSTER // global
        }
        controlsList="nodownload"
        ref={videoRef}
        className="w-full h-full"
        controls
        src={video?.storageLink}
        type={"video/mp4"}
      >
        <track kind="captions" />
      </video>
    </section>
  );
};
