import { PlusIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import UploadPhotoModal from "./UploadPhotoModal";
import DeletePhotoModal from "./DeletePhotoModal";
// import DeletePhotoModal from "./DeletePhotoModal";

function UserPhotoGallery({ id, data, setAllUserPhotos }) {
  const [uploadModalIsOpen, setUploadModalIsOpen] = useState(false);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);

  return (
    <div className="user-photo relative rounded-xl border border-gray-200 p-2 transition-all hover:border-gray-300">
      {typeof data === "string" ? (
        <>
          <div className="h-full w-full rounded-lg bg-gray-50">
            <img
              src={data}
              className={`h-full w-full rounded-lg object-cover`}
            />
            <button
              onClick={() => setDeleteModalIsOpen(true)}
              className="cross group absolute inset-0 left-auto right-[1.2px] h-fit w-fit rounded-lg bg-white p-1.5"
            >
              <XMarkIcon
                className={`h-4 w-4 stroke-current stroke-[1.5] text-gray-400 transition-all group-hover:text-gray-500`}
              />
            </button>
            <DeletePhotoModal
              modalIsOpen={deleteModalIsOpen}
              setModalIsOpen={setDeleteModalIsOpen}
              setAllUserPhotos={setAllUserPhotos}
              data={data}
            />
          </div>
        </>
      ) : (
        <>
          <div
            onClick={() => setUploadModalIsOpen(true)}
            className="group h-full w-full rounded-lg bg-gray-50"
          >
            <div className="flex h-full w-full cursor-pointer items-center justify-center">
              <PlusIcon className="h-6 w-6 stroke-current stroke-1 text-gray-400 transition-all group-hover:text-gray-500" />
            </div>
          </div>
          <UploadPhotoModal
            modalIsOpen={uploadModalIsOpen}
            setModalIsOpen={setUploadModalIsOpen}
            setAllUserPhotos={setAllUserPhotos}
          />
        </>
      )}
    </div>
  );
}

export default UserPhotoGallery;
