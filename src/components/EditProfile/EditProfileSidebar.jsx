import { useState } from "react";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/solid";
import { getAccessToken, getDecrAccessToken } from "@/utils/authUtils";
import axios from "@/api/axios";
import Modal from "../shared/Modal";
import ButtonLoader from "../shared/ButtonLoader";
import Link from "next/link";

const URL_LOGOUT = "/logout";

function EditProfileSidebar() {
  const [logoutModalIsOpen, setLogoutModalIsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 flex h-screen w-full flex-col border-r border-r-gray-300">
      <header className="flex h-20 items-center justify-between px-4">
        <Link href={`/app`}>
          <div className="backButton cursor-pointer rounded-full bg-gray-50 p-2 text-gray-500 transition-all hover:bg-gray-100 hover:text-gray-800">
            <ArrowUturnLeftIcon className="h-4 w-4 stroke-2" />
          </div>
        </Link>
        <div className="userPhoto cursor-pointer">
          <Link href={`/app/edit-profile`}>
            {/* <img
              src={UserPhoto}
              alt="user name"
              className="h-12 select-none rounded-full"
            /> */}
            <div className="usericon rounded-full bg-gray-100 p-2">
              <UserIcon className="h-8 w-8 text-gray-300" />
            </div>
          </Link>
        </div>
      </header>
      <section className="flex h-full flex-col gap-3 px-4 py-4">
        <Link
          href="/app/edit-profile"
          className="rounded-full bg-gray-50 py-3 text-center font-medium text-gray-800 transition-all hover:bg-gray-50 hover:text-gray-800"
        >
          Edit Profile
        </Link>
        <Link
          href="/app/edit-profile"
          className="rounded-full py-3 text-center font-medium text-gray-500 transition-all hover:bg-gray-50 hover:text-gray-800"
        >
          Settings
        </Link>
        <Link
          href="/app/edit-profile"
          className="rounded-full py-3 text-center font-medium text-gray-500 transition-all hover:bg-gray-50 hover:text-gray-800"
        >
          FAQs
        </Link>
        <>
          <button
            onClick={() => setLogoutModalIsOpen(true)}
            className="mt-auto rounded-full py-3 font-medium text-red-400 transition-all hover:bg-red-500 hover:text-white"
          >
            Logout
          </button>
          <LogoutModal
            modalIsOpen={logoutModalIsOpen}
            setModalIsOpen={setLogoutModalIsOpen}
          />
        </>
      </section>
    </div>
  );
}

function LogoutModal({ modalIsOpen, setModalIsOpen }) {
  const [buttonLoader, setButtonLoader] = useState(false);

  const handleLogout = async () => {
    setButtonLoader(true);
    try {
      const accessToken = getAccessToken();

      const res = await axios.get(URL_LOGOUT, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      setTimeout(() => {
        setButtonLoader(false);
        localStorage.removeItem("accessToken");
        window.location.href = "/login";
      }, 600);
    } catch (err) {
      setButtonLoader(false);
      console.log(err);
    }
  };

  return (
    <Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
      <div className="w-96 text-center">
        <span className="block text-2xl font-medium">
          Are you sure you want to logout?
        </span>
        <div className="save mt-7 flex flex-col items-center gap-3">
          <button
            onClick={handleLogout}
            className={`w-fit rounded-full bg-theme-purple px-6 py-2 font-medium text-white transition-all ${
              buttonLoader ? "cursor-not-allowed" : "hover:bg-violet-500"
            }`}
            disabled={buttonLoader}
          >
            {buttonLoader ? <ButtonLoader /> : "Logout"}
          </button>
          <button
            onClick={() => setModalIsOpen(false)}
            className={`bg-theme-white w-fit rounded-full px-6 py-2 font-medium text-theme-purple transition-all hover:bg-gray-50`}
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default EditProfileSidebar;
