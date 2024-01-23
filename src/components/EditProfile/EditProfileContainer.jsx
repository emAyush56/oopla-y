import { useEditProfileData } from "@/contexts/EditProfileDataProvider";
import ProfileHeader from "./ProfileHeader";
import ButtonLoaderBg from "../shared/ButtonLoaderBg";
import ProfileUserPhotos from "./ProfileUserPhotos";

function EditProfileContainer() {
  const { loading, userData, allUserPhotos, setAllUserPhotos } =
    useEditProfileData();

  if (loading) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <ButtonLoaderBg h={"h-3"} w={"w-3"} />
      </div>
    );
  }

  return (
    <div className="wrapper h-full w-full">
      <div className="date-profile mx-auto h-full max-w-lg px-4 py-4">
        <ProfileHeader userName={userData?.name} dateOfBirth={userData?.dob} />
        <ProfileUserPhotos
          allUserPhotos={allUserPhotos}
          setAllUserPhotos={setAllUserPhotos}
          userData={userData}
        />
      </div>
    </div>
  );
}

export default EditProfileContainer;
