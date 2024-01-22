import { calcAge, calcUserFirstName } from "@/utils/userUtils";

function ProfileHeader({ userName, dateOfBirth }) {
  return (
    <div className="profile-header flex flex-col items-center">
      <span className="ff-taviraj inline-block w-full select-none text-center text-3xl font-bold">{`${
        userName && calcUserFirstName(userName, true)
      }, ${dateOfBirth && calcAge(dateOfBirth)}`}</span>
    </div>
  );
}

export default ProfileHeader;
