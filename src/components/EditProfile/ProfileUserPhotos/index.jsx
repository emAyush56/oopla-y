import { useEffect, useState } from "react";

import ProfilePreview from "./ProfilePreview";
import UserPhotoGallery from "./UserPhotoGallery";

function ProfileUserPhotos({ allUserPhotos, setAllUserPhotos, userData }) {
  const [dummyPhotos] = useState([1, 2, 3, 4, 5, 6]);
  const [imgGallery, setImgGallery] = useState([]);

  useEffect(() => {
    const mergedGallery = Array.isArray(allUserPhotos)
      ? [...allUserPhotos, ...dummyPhotos.slice(allUserPhotos.length)]
      : dummyPhotos;

    setImgGallery(mergedGallery);
  }, [allUserPhotos]);

  return (
    <>
      <div className="profile-user-photos mb-3 mt-8">
        <div className="grid h-[316px] grid-cols-3 grid-rows-2 gap-3">
          {imgGallery.map((item, id) => (
            <UserPhotoGallery
              key={id}
              id={id}
              data={item}
              setAllUserPhotos={setAllUserPhotos}
            />
          ))}
        </div>
      </div>
      <ProfilePreview />
    </>
  );
}

export default ProfileUserPhotos;
