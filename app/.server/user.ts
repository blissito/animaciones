import { db } from "./db";
import jwt, { type JwtPayload } from "jsonwebtoken";
import { sendMagicLinkEmail } from "./emails";
import { isValid } from "zod";
import { commitSession, destroySession, getSession } from "~/sessions";
import { redirect, Session } from "@remix-run/node";

const secret = "pelusina69";

// throw redirect
const throwRedirect = async (redirectURL: string, session: Session) => {
  throw redirect(redirectURL, {
    headers: {
      "Set-Cookie": await destroySession(session),
    },
  });
};

// getUserOrRedirect
export const getUserOrRedirect = async (
  request: Request,
  { redirectURL = "/" }: { redirectURL?: string }
) => {
  const session = await getSession(request.headers.get("Cookie"));
  if (!session.has("userEmail")) {
    throw throwRedirect(redirectURL, session);
  }
  const email = session.get("userEmail");
  const user = await db.user.findUnique({ where: { email } });
  if (!user) throw throwRedirect(redirectURL, session);
};

// getUserORNull
export const getUserORNull = async (request: Request) => {
  const session = await getSession(request.headers.get("Cookie"));
  if (!session.has("userEmail")) return null;
  const email = session.get("userEmail");
  return await db.user.findUnique({ where: { email } });
};

// set cookie session
export const setSessionWithEmailAndRedirect = async (
  email: string,
  {
    request,
    redirectURL = "/player",
  }: { request: Request; redirectURL?: string }
) => {
  const session = await getSession(request.headers.get("Cookie"));
  // email because is easier
  session.set("userEmail", email);
  throw redirect(redirectURL, {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
};

// verify token
export const verifyToken = (token: string) => {
  try {
    const decoded = jwt.verify(token, secret);
    return {
      success: true,
      decoded,
    };
  } catch (e: unknown) {
    console.error(e);
    return {
      success: false,
    };
  }
};

// magic link 🪄
export const sendMagicLink = async (
  email: string
): Promise<{
  error: boolean | string;
}> => {
  const user = await db.user.findUnique({
    where: {
      email,
    },
  });
  if (!user) return { error: "No existe una cuenta con este correo" };
  const token = jwt.sign({ email }, secret, { expiresIn: "1h" });
  await sendMagicLinkEmail(user, token);
  return { error: false };
};

// @todo review this
export const getOrCreateUser = async ({
  email,
  displayName,
  username,
}: {
  email: string;
  displayName: string;
  username: string;
}) => {
  const exist = await db.user.findUnique({
    where: {
      email,
    },
  });
  if (exist) return exist;
  return await db.user.create({ data: { email, displayName, username } });
};
