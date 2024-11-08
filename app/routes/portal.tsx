import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { Link, useActionData, useLoaderData } from "@remix-run/react";
import { MagicLink } from "~/components/MagicLink";
import { PrimaryButton } from "~/components/PrimaryButton";
import { z } from "zod";
import {
  sendMagicLink,
  setSessionWithEmailAndRedirect,
  verifyToken,
} from "~/.server/user";

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const intent = formData.get("intent");
  if (intent === "magic_link") {
    const email = String(formData.get("email"));
    const parsed = z.string().email().safeParse(email);
    if (!parsed.success) return { error: "El email es incorrectoS" };
    const { error } = await sendMagicLink(email);
    return { error, success: !error };
  }
  return null;
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const token = url.searchParams.get("token");
  if (token) {
    const verified = verifyToken(token as string);
    if (!verified.success) return { screen: "wrong_token" };
    // set cookie
    return await setSessionWithEmailAndRedirect(verified.decoded.email, {
      request,
    });
  }

  // validate token, and invalidate it
  // setCookie an eternal one*
  // return handlePurchaseToken(token) // this will redirect
  return { screen: "login" }; // 'wrong_token', 'welcome?', 'unsiscribe?'
};

export default function Route() {
  const { screen } = useLoaderData<typeof loader>();

  switch (screen) {
    case "wrong_token":
      return (
        <article className="flex flex-col items-center h-screen justify-center gap-4 bg-slate-200">
          <h2 className="text-2xl">Este token no sirve más. 👩🏻‍🔧</h2>
          <Link to="/">
            <PrimaryButton>Volver al inicio</PrimaryButton>
          </Link>
        </article>
      );
    default:
      return (
        <>
          <MagicLink />
        </>
      );
  }
}
