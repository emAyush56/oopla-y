import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "@/api/axios";
import Link from "next/link";
import ButtonLoader from "@/components/shared/ButtonLoader";
import { setAccessToken } from "@/utils/authUtils";

const URL_LOGIN = "/login";

function Login() {
  const router = useRouter();

  const [userEmail, setUserEmail] = useState("");
  const [userAccess, setUserAccess] = useState("");
  const [buttonLoader, setButtonLoader] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  async function handleLoginSubmit(e) {
    e.preventDefault();
    setButtonLoader(true);

    try {
      const res = await axios.post(
        URL_LOGIN,
        JSON.stringify({
          email: userEmail,
          pass: userAccess,
        }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      const rawAccessToken = res?.data.access_token;
      setAccessToken(rawAccessToken);

      setButtonLoader(false);
      window.location.href = "/app";
    } catch (error) {
      setButtonLoader(false);
      console.log(error);
    }
  }

  useEffect(() => {
    if (localStorage.getItem("accessToken")) router.push("/app");
  }, []);

  return (
    <div className="bg-theme-purple/20x flex h-screen items-center justify-center">
      <div className="wrapper flex h-full w-[512px] flex-col bg-white p-4">
        <header className="ff-taviraj text-center text-2xl font-semibold text-theme-purple">
          <Link href="/">martiann</Link>
        </header>
        <div className="login-wrapper my-auto pb-20 text-center">
          <div className="title text-2xl font-medium text-gray-800">
            Welcome Back!
          </div>
          <div className="login">
            <form
              onSubmit={handleLoginSubmit}
              className="mx-auto mt-8 flex w-72 flex-col gap-2.5"
            >
              <input
                required
                type="email"
                className="rounded-full border border-gray-300/70 px-5 py-2 text-gray-800 outline-none transition-all focus:bg-gray-50"
                placeholder="email address"
                name="userEmail"
                id="userEmail"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
              />
              <input
                required
                type="password"
                className="rounded-full border border-gray-300/70 px-5 py-2 text-gray-800 outline-none transition-all focus:bg-gray-50"
                placeholder="password"
                name="userAccess"
                id="userAccess"
                value={userAccess}
                onChange={(e) => setUserAccess(e.target.value)}
              />
              <span className="block pr-1.5 text-right text-sm text-theme-purple">
                <span className="cursor-pointer">Forgot password?</span>
              </span>
              <button
                type="submit"
                className="mt-2 rounded-full bg-theme-purple px-6 py-2 font-medium text-white transition-all active:scale-95"
                disabled={buttonLoader}
              >
                {buttonLoader ? <ButtonLoader /> : "Login"}
              </button>
            </form>
            {errMsg === "" ? null : <ErrorMsg msg={errMsg} />}
          </div>
        </div>
        <footer className="text-xs text-gray-300">
          <ul className="flex items-center justify-center gap-4">
            <li className="cursor-pointer transition-all hover:text-gray-400">
              Terms of use
            </li>
            <li className="cursor-pointer transition-all hover:text-gray-400">
              Privacy Policy
            </li>
            <li className="cursor-pointer transition-all hover:text-gray-400">
              <Link href="/app">App</Link>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}

function ErrorMsg({ msg }) {
  return (
    <div className="incorrect-message mx-auto w-72">
      <div className="mt-8 text-sm text-red-500">{msg}</div>
    </div>
  );
}

export default Login;
