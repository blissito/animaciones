import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import {
  createSearchParams,
  json,
  MetaFunction,
  redirect,
  useLoaderData,
  useSubmit,
} from "@remix-run/react";
import { useEffect, useState } from "react";
import { db } from "~/.server/db";
import { get40Checkout } from "~/.server/stripe";
import { getUserORNull } from "~/.server/user";
import { NavBar } from "~/components/NavBar";
import { VideosMenu } from "~/components/player/ModulesSideMenu";
import { VideoPlayer } from "~/components/player/VideoPlayer";
import { SuccessDrawer } from "~/components/player/SuccessDrawer";
import { PurchaseDrawer } from "~/components/player/PurchaseDrawer";
import { getMetaTags } from "~/utils/getMetaTags";
import { VideosResources } from "~/components/player/VideosResources";

const courseId = "645d3dbd668b73b34443789c";

export const meta: MetaFunction = () =>
  getMetaTags({
    title: "Visualizador del curso de animaciones con React",
    description: "Mira todos los videos del curso en alta definición.",
  });

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const intent = formData.get("intent");
  if (intent === "checkout") {
    const url = await get40Checkout(); // @todo checkout update
    return redirect(url);
  }
  return null;
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const searchParams = url.searchParams;
  const videos = await db.video.findMany({
    where: {
      courseIds: {
        has: "645d3dbd668b73b34443789c",
      },
    },
    orderBy: { index: "asc" }, // good!
    select: {
      title: true,
      id: true,
      slug: true,
      moduleName: true,
      duration: true,
      index: true,
      poster: true,
      isPublic: true,
    },
  });
  const video = await db.video.findUnique({
    where: {
      slug: searchParams.get("videoSlug") || "bienvenida-al-curso", // @todo better sorting
    },
  });

  if (!video) throw json(null, { status: 404 });
  const nextVideo = await db.video.findFirst({
    where: {
      index: video.index + 1,
      courseIds: { has: courseId },
    },
  });
  const moduleNames = [...new Set(videos.map((video) => video.moduleName))];
  const user = await getUserORNull(request);
  const isPurchased = user
    ? user.courses.includes("645d3dbd668b73b34443789c")
    : false;
  return {
    nextVideo,
    user,
    isPurchased,
    video:
      !isPurchased && !video.isPublic ? { ...video, storageLink: "" } : video,
    videos,
    moduleNames,
    searchParams: {
      success: searchParams.get("success") === "1",
    },
  };
};

export default function Route() {
  const { nextVideo, isPurchased, video, videos, searchParams, moduleNames } =
    useLoaderData<typeof loader>();
  const [successIsOpen] = useState(searchParams.success);
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [isTabOpen, setIsTabOpen] = useState(true);
  const submit = useSubmit();

  const [autoPlay, setAutoPlay] = useState(false);

  const handleClickEnding = (_: MouseEvent, slug?: string) => {
    const searchParams = createSearchParams();
    searchParams.set("videoSlug", slug || nextVideo?.slug);
    setAutoPlay(true);
    setIsMenuOpen(false);
    submit(searchParams);
  };

  useEffect(() => {
    let list = localStorage.getItem("watched") || "[]";
    list = JSON.parse(list);
    const last = list[list.length - 1];
  }, []);

  return (
    <>
      <NavBar mode="player" className="m-0" />
      <article className="bg-dark relative overflow-x-hidden pt-20">
        {/* // @todo visit and refactor please */}
        <VideoPlayer
          isPurchased={isPurchased}
          autoPlay={autoPlay}
          video={video}
          onClickNextVideo={handleClickEnding}
          nextVideo={nextVideo || undefined}
          onPlay={() => {
            setIsMenuOpen(false);
          }}
        />

        <VideosMenu
          isOpen={isMenuOpen}
          setIsOpen={setIsMenuOpen}
          currentVideoSlug={video.slug}
          videos={videos}
          moduleNames={moduleNames.filter((n) => typeof n === "string")}
          defaultOpen={!searchParams.success}
          isLocked={!isPurchased}
        />
        {isPurchased ? (
          <VideosResources isOpen={isTabOpen} setIsOpen={setIsTabOpen} />
        ) : null}
      </article>
      {searchParams.success && <SuccessDrawer isOpen={successIsOpen} />}
      {!isPurchased && !video.isPublic && <PurchaseDrawer />}
    </>
  );
}
