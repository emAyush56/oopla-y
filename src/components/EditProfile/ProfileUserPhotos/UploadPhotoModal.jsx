import { useState } from "react";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { getAccessToken } from "@/utils/authUtils";
import Modal from "@/components/shared/Modal";
import ButtonLoaderBg from "@/components/shared/ButtonLoaderBg";
import ErrorBox from "@/components/shared/ErrorBox";
import axios from "@/api/axios";
import { URL_UPLOAD_PHOTOS } from "@/api/apiUrls";

function UploadPhotoModal({ modalIsOpen, setModalIsOpen, setAllUserPhotos }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const [buttonLoader, setButtonLoader] = useState(false);
  const [showErrorMsg, setShowErrorMsg] = useState(false);

  const handleUploadPhoto = async (event) => {
    setShowErrorMsg(false);
    setButtonLoader(true);

    const img = event.target.files[0];
    if (!img) return;

    const fileType = img.name.split(".").pop().toLowerCase();
    let contentType;

    switch (fileType) {
      case "png":
        contentType = "image/png";
        break;
      case "jpeg":
      case "jpg":
        contentType = "image/jpeg";
        break;
      case "heic":
        contentType = "image/heic";
        break;
      default:
        contentType = "multipart/form-data";
        break;
    }

    setSelectedImage(img);

    try {
      const accessToken = getAccessToken();
      const formData = new FormData();
      formData.append("file", img);

      const res = await axios.post(URL_UPLOAD_PHOTOS, formData, {
        headers: {
          "Content-Type": contentType,
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const newPhotoItem = res.data.msg2;
      setAllUserPhotos((prev) => [...prev, newPhotoItem]);
      setButtonLoader(false);
      setModalIsOpen(false);
    } catch (err) {
      setButtonLoader(false);
      setShowErrorMsg(true);
      console.error("Error uploading photo:", err.response);
    }
  };

  return (
    <Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
      <div className="w-96 text-center">
        <span className="block text-2xl font-medium">Upload a Photo</span>
        <div className="mb-4 mt-8">
          {buttonLoader ? (
            <ButtonLoaderBg h={`h-2`} w={`w-2`} />
          ) : (
            <>
              <label
                className="bg-theme-purple/10 ring-theme-purple mx-auto flex h-full w-80 cursor-pointer flex-col items-center justify-center gap-2 rounded-xl p-8 ring-1 ring-offset-[6px] transition-all"
                htmlFor="user-photo-upload"
              >
                <PhotoIcon className={`text-theme-purple h-10 w-10`} />
                <span className="text-theme-purple text-sm font-medium">
                  Upload from computer
                </span>
                <input
                  type="file"
                  accept=".png, .jpg, .heic, .jpeg"
                  name="user-photo-upload"
                  id="user-photo-upload"
                  className="sr-only"
                  onChange={handleUploadPhoto}
                />
              </label>
              <div className="errorMsg mb-[-5px] mt-5">
                {showErrorMsg ? (
                  <ErrorBox
                    msg={`Sorry, couldn't upload. Image size is too big.`}
                  />
                ) : null}
              </div>
            </>
          )}
        </div>
        {/* <div className="save mt-8">
          <button
            onClick={() => handleSavePhoto()}
            className="rounded-full bg-theme-purple px-6 py-2 font-medium text-white transition-all hover:bg-violet-500"
          >
            Save
          </button>
        </div> */}
      </div>
    </Modal>
  );
}

export default UploadPhotoModal;
