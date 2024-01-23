import { URL_DELETE_PHOTO } from "@/api/apiUrls";
import axios from "@/api/axios";
import ButtonLoader from "@/components/shared/ButtonLoader";
import Modal from "@/components/shared/Modal";
import { getAccessToken } from "@/utils/authUtils";
import { useState } from "react";

function DeletePhotoModal({
  modalIsOpen,
  setModalIsOpen,
  setAllUserPhotos,
  data,
}) {
  const [buttonLoader, setButtonLoader] = useState(false);

  const handleImgDelete = async () => {
    setButtonLoader(true);

    const payload = {
      image_url: data,
    };

    try {
      const accessToken = getAccessToken();

      const res = await axios.post(URL_DELETE_PHOTO, JSON.stringify(payload), {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const updatedGallery = res.data.data;
      setTimeout(() => {
        setAllUserPhotos(updatedGallery);
        setButtonLoader(false);
        setModalIsOpen(false);
      }, 1200);
    } catch (error) {
      setButtonLoader(false);
      console.error(error);
    }
  };

  return (
    <Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
      <div className="w-96 text-center">
        <span className="block text-2xl font-medium">
          Are you sure you want to delete this photo?
        </span>
        <div className="save mt-7">
          <button
            onClick={() => handleImgDelete()}
            className={`rounded-full px-6 py-2 font-medium text-white transition-all ${
              buttonLoader
                ? "bg-theme-purple/50 cursor-not-allowed"
                : "bg-theme-purple hover:bg-violet-500"
            }`}
            disabled={buttonLoader}
          >
            {buttonLoader ? <ButtonLoader /> : "Delete Photo"}
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default DeletePhotoModal;
