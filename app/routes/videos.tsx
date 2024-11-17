import { json, LoaderFunctionArgs, redirect } from "@remix-run/node";
import { getReadURL } from "~/.server/tigris";
import { getUserOrRedirect } from "~/.server/user";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  // await getUserOrRedirect({ request }); // @todo move public videos?
  const url = new URL(request.url);
  const storageKey = url.searchParams.get("storageKey");
  if (!storageKey) throw json(null, { status: 404 });
  const readURL = await getReadURL(storageKey);
  return redirect(readURL);
};
