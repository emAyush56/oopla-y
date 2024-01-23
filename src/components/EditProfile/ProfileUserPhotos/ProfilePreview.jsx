import { useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { getAccessToken } from "@/utils/authUtils";
import Modal from "@/components/shared/Modal";
import ButtonLoader from "@/components/shared/ButtonLoader";
import axios from "@/api/axios";

const URL_GET_PROFILE = "/profile";

function ProfilePreview() {
  const [previewProfileModal, setPreviewProfileModal] = useState(false);

  const [user, setUser] = useState({});
  const [showLoader, setShowLoader] = useState(false);

  const handlePreviewProfileClick = async () => {
    setPreviewProfileModal(true);
    setShowLoader(true);
    try {
      const accessToken = getAccessToken();
      const res = await axios.get(URL_GET_PROFILE, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      // set user's complete data to userData state
      setUser(res.data);

      setTimeout(() => {
        setShowLoader(false);
      }, 600);
    } catch (err) {
      setShowLoader(false);
      console.log(err);
    }
  };

  return (
    <>
      <div
        onClick={handlePreviewProfileClick}
        className="preview-profile group flex cursor-pointer items-center justify-between rounded-full border border-gray-200 py-2 pl-6 pr-5 transition-all hover:bg-gray-50"
      >
        <h4 className="block font-medium">Preview profile</h4>
        <ChevronRightIcon
          className={`h-5 w-5 stroke-current stroke-2 text-gray-300 transition-all group-hover:text-gray-500`}
        />
      </div>
      <PreviewProfileModal
        modalIsOpen={previewProfileModal}
        setModalIsOpen={setPreviewProfileModal}
        user={user}
        showLoader={showLoader}
      />
    </>
  );
}

function PreviewProfileModal({
  modalIsOpen,
  setModalIsOpen,
  user,
  showLoader,
}) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onClose={() => setModalIsOpen(false)}
      padding={`p-0`}
      bg={`bg-transparent`}
      type={`profile-preview`}
    >
      {showLoader ? (
        <div className="loader-wrapper text-center">
          <ButtonLoader />
        </div>
      ) : (
        <div className="cc-finder-height bg-theme-purple-100 select-none overflow-auto scroll-smooth rounded-2xl outline-0 focus:outline-none">
          {/* <Showcase user={user?.data} isVisible={true} /> */} showcase
        </div>
      )}
    </Modal>
  );
}

export default ProfilePreview;
