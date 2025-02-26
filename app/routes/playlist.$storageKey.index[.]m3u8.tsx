import { LoaderFunctionArgs } from "@remix-run/node";
import { db } from "~/.server/db";
import { checkIfUserIsEnrolledOrRedirect } from "~/.server/user";
import { getMasterFileResponse } from "~/.server/virtualM3U8";

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  const storageKey = params["storageKey"];
  const video = await db.video.findFirst({
    where: { storageKey },
    select: {
      m3u8: true,
      courseIds: true,
      isPublic: true,
    },
  });
  let sizes = [];
  if (video?.m3u8.includes("480p")) {
    sizes.push("480p");
  }
  if (video?.m3u8.includes("720p")) {
    sizes.push("720p");
  }
  if (video?.m3u8.includes("1080p")) {
    sizes.push("1080p");
  }
  if (video?.m3u8.includes("360p")) {
    sizes.push("360p");
  }
  if (video && !video.isPublic) {
    await checkIfUserIsEnrolledOrRedirect(request, video);
  }
  if (!storageKey) {
    throw Response.json("Not found", { status: 404 });
  }
  //   await getUserOrRedirect({ request }); // off in dev only
  return getMasterFileResponse({ storageKey, sizes }); // @todo others sizes
};
