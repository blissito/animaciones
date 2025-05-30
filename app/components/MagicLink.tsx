import { Form, useFetcher } from "@remix-run/react";
import { FormEvent, useEffect } from "react";
import { googleLogin } from "~/lib/firebase";
import { cn } from "~/lib/utils";
import { action } from "~/routes/portal"; // this may change if reuse
import { NavBar } from "./NavBar";
import { useToast } from "./Toaster";

export const MagicLink = () => {
  const fetcher = useFetcher<typeof action>();
  const isLoading = fetcher.state !== "idle";
  const error = fetcher.data?.error;
  const success = fetcher.data?.success;

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    fetcher.submit(
      {
        intent: "magic_link",
        email: event.currentTarget.email.value,
      },
      { method: "POST" }
    );
  };

  const toast = useToast();
  useEffect(() => {
    if (fetcher.data?.error && fetcher.state === "idle") {
      toast.error({ text: fetcher.data.error });
    }
  }, [fetcher]);

  const handleGoogleLogin = async () => {
    const user = await googleLogin();
    const data = {
      displayName: user.displayName,
      email: user.email,
      confirmed: user.emailVerified,
      phoneNumber: user.phoneNumber,
      photoURL: user.photoURL,
      uid: user.uid,
    };

    fetcher.submit(
      {
        intent: "google_login",
        data: JSON.stringify(data),
      },
      { method: "POST" }
    );
  };

  return (
    <article className="bg-white bg-magic text-dark dark:text-white  bg-no-repeat bg-right dark:bg-dark h-screen flex pt-[120px] justify-center items-center  gap-2">
      <NavBar />
      <div className="-mt-20 w-[90%] md:w-fit mx-auto">
        <img className="w-52 mx-auto" src="/hat.png" alt="logo" />
        <h2 className="text-2xl text-center font-semibold md:text-4xl mt-8 ">
          Inicia sesión
        </h2>
        <p className="text-lg text-center dark:text-metal text-iron font-light mt-0 mb-8">
          Continua con tu cuenta de Google o con Magic link
        </p>
        {!success && (
          <Form onSubmit={onSubmit} method="POST">
            <button
              disabled={isLoading}
              onClick={handleGoogleLogin}
              type="button"
              className="w-full md:w-[480px] h-16 rounded-full  dark:bg-dark bg-white border border-lightGray dark:border-lightGray/20  my-2 p-2 flex justify-center items-center hover:scale-105 transition-all active:scale-100 hover:shadow-sm disabled:pointer-events-none"
            >
              <img
                className="h-12 object-cover"
                src="https://preview.redd.it/u5xicew35ps51.png?auto=webp&s=60d75f170b4b57c4210ed8ccb3f5e5f93350a8d9"
                alt="gmail logo"
              />
              {/* <h3>Inicia sesión con Google</h3> */}
            </button>
            <hr className="dark:bg-lightGray/10 bg-lightGray/30 h-[1px] border-none w-full my-8" />
            <div className="flex relative w-full md:w-[480px] gap-2 h-16 rounded-full border border-lightGray  dark:border-lightGray/20  ">
              <input
                disabled={isLoading}
                aria-disabled={isLoading}
                name="email"
                type="email"
                placeholder="brendi@ejemplo.com"
                className={cn(
                  " py-2 px-6 w-full h-full bg-transparent rounded-full border-none focus:border-none focus:ring-indigo-500",
                  {
                    "ring-fish ring-4": error,
                    "disabled:bg-lightGray/30": isLoading,
                  }
                )}
              />
              {error && <p className="text-red-500 mt-2 text-xs">{error}</p>}
              <button
                disabled={isLoading}
                type="submit"
                className={cn(
                  "absolute right-0 h-full not-disabled:hover:bg-indigo-600 rounded-full bg-fish  py-2 px-2 md:px-6 text-white not-disabled:active:scale-95 disabled:cursor-not-allowed w-[180px] md:w-[220px] flex justify-center items-center"
                )}
              >
                {isLoading ? (
                  <div className="border-4 border-gray-700 border-t-white rounded-full animate-spin h-6 w-6" />
                ) : (
                  " Enviar magic link 🪄"
                )}
              </button>
            </div>
          </Form>
        )}

        {success && (
          <section className="text-lg text-center text-iron">
            <p>Ya te hemos enviado el token de acceso a tu cuenta. ✅</p>
            <p>
              Revisa tu{" "}
              <a
                rel="noreferrer"
                target="_blank"
                href="http://gmail.com"
                className="text-blue-500 hover:text-blue-400"
              >
                mail.
              </a>{" "}
              (y tu bandeja de spam 😉).
            </p>
          </section>
        )}
      </div>
    </article>
  );
};
