import { Video } from "@prisma/client";
import { Link } from "@remix-run/react";
import {
  AnimatePresence,
  motion,
  MotionValue,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";
import { BsMenuButtonWide } from "react-icons/bs";
import { FaPlay } from "react-icons/fa6";
import { IoMdLock } from "react-icons/io";
import {
  MdMenuOpen,
  MdOutlineRadioButtonChecked,
  MdOutlineRadioButtonUnchecked,
} from "react-icons/md";
import { useClickOutside } from "~/hooks/useClickOutside";
import { cn } from "~/lib/utils";

export const VideosMenu = ({
  isLocked,
  videos,
  defaultOpen,
  moduleNames,
  currentVideoSlug,
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (arg0: any) => void;
  isLocked?: boolean;
  currentVideoSlug?: string;
  moduleNames: string[];
  videos: Partial<Video>[];
  defaultOpen?: boolean;
}) => {
  // const [isOpen, setIsOpen] = useState(defaultOpen);
  const x = useMotionValue(0);
  const springX = useSpring(x, { bounce: 0.2 });
  const buttonX = useTransform(springX, [-400, 0], [0, 394]);
  const [completed, setCompleted] = useState<string[]>([]);
  const [videosCompleted, setVideosCompleted] = useState<string[]>([]);

  useEffect(() => {
    isOpen ? x.set(0) : x.set(-400);
  }, [isOpen, x]);

  const checkIfWatched = (slug: string) => {
    if (typeof window === "undefined") return;
    let list = localStorage.getItem("watched") || "[]";
    list = JSON.parse(list);
    return list.includes(slug);
  };

  useEffect(() => {
    const list: string[] = [];
    moduleNames.map((moduleName) => {
      const allCompleted = videos
        .filter((vi) => vi.moduleName === moduleName)
        .every((v) => checkIfWatched(v.slug));
      allCompleted && list.push(moduleName);
    });
    setCompleted(list);
    // all videos completed @todo improve
    let otraList = localStorage.getItem("watched") || "[]";
    otraList = JSON.parse(otraList);
    setVideosCompleted(otraList);
  }, []);

  return (
    <>
      <MenuButton
        x={buttonX}
        onToggle={() => setIsOpen((o) => !o)}
        isOpen={isOpen}
      />
      <MenuListContainer
        isOpen={isOpen}
        x={springX}
        onOutsideClick={() => setIsOpen(false)}
      >
        {moduleNames.map((moduleName, index) => {
          return (
            <div key={index}>
              <ModuleHeader
                title={moduleName}
                subtitle={"unidad 0" + (index + 1)}
                isCompleted={completed.includes(moduleName)}
              />
              {videos
                .filter((vid) => vid.moduleName === moduleName)
                .sort((a, b) => (a.index < b.index ? -1 : 1))
                .map((v) => (
                  <ListItem
                    // why this is not receiving the video as a prop? ...because I am creative... 😄
                    isLocked={v.isPublic ? false : isLocked}
                    isCompleted={videosCompleted.includes(v.slug)}
                    isCurrent={currentVideoSlug === v.slug}
                    slug={v.slug || ""}
                    key={v.id}
                    title={v.title || ""}
                    duration={v.duration || 60}
                  />
                ))}
            </div>
          );
        })}
        {/* Esto empuja la lista */}
        <div className="h-40" />
      </MenuListContainer>
    </>
  );
};

const ListItem = ({
  isCompleted,
  duration,
  title,
  isCurrent,
  slug,
  isLocked,
}: {
  isLocked?: boolean;
  slug: string;
  isCurrent?: boolean;
  duration: number | string;
  isCompleted?: boolean;
  title: string;
}) => {
  const formatDuration = (mins: number | string) => {
    const duration = String(mins).split(".");
    const m = duration[0];
    const s = duration[1]
      ? `.${Math.floor(Number(`.${duration[1]}`) * 60)}` // pinches puntitos 🥶
      : "";
    return m + s + "m";
  };
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (isCurrent && ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        // inline: "center",
      });
    }
  }, [isCurrent]);

  return (
    <Link
      ref={ref}
      to={`/player?videoSlug=${slug}`}
      // reloadDocument
      className={cn(
        "group text-metal/50 overflow-hidden w-[90%] mx-auto relative pl-4 flex py-4  hover:brightness-100 rounded-2xl hover:text-metal/80 transition-all items-center",
        {
          "bg-[#1B1C20]  hover:text-white text-white ": isCurrent,
          "cursor-pointer": !isLocked,
          "cursor-not-allowed": isLocked,
        }
      )}
    >
      <div className="absolute w-0 group-hover:w-[120%] transition-all duration-700 bg-[rgba(35,35,44,.3)] h-full rounded-3xl -left-4"></div>
      <span
        className={cn("text-2xl ", {
          "text-green-500": isCompleted,
          "p-2 bg-fish w-6 h-6 rounded-full flex items-center justify-center":
            isCurrent,
        })}
      >
        {isCurrent ? (
          <FaPlay className="text-base" />
        ) : isCompleted ? (
          <MdOutlineRadioButtonChecked />
        ) : (
          <MdOutlineRadioButtonUnchecked />
        )}
      </span>
      <div className="capitalize text-sm pl-4 z-20">{title}</div>
      {isLocked ? (
        <span className="ml-auto pr-8">
          <IoMdLock />
        </span>
      ) : (
        <div className="text-xs pl-auto ml-auto pr-4">
          {formatDuration(duration)}
        </div>
      )}
    </Link>
  );
};

const MenuListContainer = ({
  children,
  x = 0,
  onOutsideClick,
  isOpen: isActive = false,
}: {
  isOpen?: boolean;
  children: ReactNode;
  x?: MotionValue | number;
  onOutsideClick?: () => void;
}) => {
  const ref = useClickOutside({ isActive, onOutsideClick });
  const maskImage = useMotionTemplate`linear-gradient(to bottom, white 80%, transparent 100%`;
  return (
    <motion.div
      ref={ref}
      style={{
        x,
        scrollbarWidth: "none",
        maskImage,
      }}
      className="md:w-[380px] w-[300px] fixed z-10 rounded-xl overflow-y-scroll h-[88%] bg-dark top-0 left-0 pt-20 z-20"
    >
      {children}
    </motion.div>
  );
};

const ModuleHeader = ({
  title,
  subtitle,
  isCompleted,
}: {
  isCompleted?: boolean;
  title: string;
  subtitle?: string;
}) => {
  return (
    <header className="text-fish rounded-3xl pl-9 py-3 bg-[#141518] flex items-center gap-4 mb-2">
      {/* <span className={cn("text-4xl", isCompleted && "text-green-500")}>
        {isCompleted ? (
          <MdOutlineRadioButtonChecked />
        ) : (
          <MdOutlineRadioButtonUnchecked />
        )}
      </span> */}
      <div>
        <p className="font-sans capitalize font-semibold text-white">
          {subtitle}
        </p>
        <h3
          className={cn("text-lg md:text-2xl font-bold font-sans", {
            "text-green-500": isCompleted,
          })}
        >
          {title}
        </h3>
      </div>
    </header>
  );
};

const MenuButton = ({
  isOpen,
  x = 0,
  onToggle,
}: {
  x?: MotionValue | number;
  onToggle?: () => void;
  isOpen?: boolean;
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      style={{ x }}
      onClick={onToggle}
      className={cn(
        "fixed bg-[#141518] text-4xl w-14 h-14 text-white top-0 mt-20 p-2 z-20 flex items-center justify-center rounded-r-2xl hover:bg-[rgba(35,35,44)]",
        {
          "left-[-80px] md:left-auto": isOpen,
          "rounded-2xl": isOpen,
        }
      )}
    >
      <AnimatePresence mode="popLayout">
        {isOpen ? (
          <motion.span
            key="open"
            initial={{ filter: "blur(9px)", opacity: 0 }}
            animate={{ filter: "blur(0px)", opacity: 1 }}
            exit={{ filter: "blur(9px)", opacity: 0 }}
          >
            <MdMenuOpen />
          </motion.span>
        ) : (
          <motion.span
            initial={{ filter: "blur(9px)", opacity: 0 }}
            animate={{ filter: "blur(0px)", opacity: 1 }}
            exit={{ filter: "blur(9px)", opacity: 0 }}
            key="close"
          >
            <BsMenuButtonWide className="text-3xl " />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
};
