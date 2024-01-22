import EditProfileContainer from "@/components/EditProfile/EditProfileContainer";
import EditProfileSidebar from "@/components/EditProfile/EditProfileSidebar";
import EditProfileDataProvider from "@/contexts/EditProfileDataProvider";
import Head from "next/head";

function EditProfile() {
  return (
    <>
      <Head>
        <title>Edit profile</title>
      </Head>
      <div className="flex">
        <aside className="w-[400px]">
          <EditProfileSidebar />
        </aside>
        <div className="flex-1">
          <EditProfileDataProvider>
            <EditProfileContainer />
          </EditProfileDataProvider>
        </div>
      </div>
    </>
  );
}

export default EditProfile;
