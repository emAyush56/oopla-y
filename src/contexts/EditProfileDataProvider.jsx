import { URL_GET_PROFILE } from "@/api/apiUrls";
import { ooplaAPI } from "@/api/instance";
import { createContext, useContext, useEffect, useState } from "react";

const EditProfileContext = createContext({});

function EditProfileDataProvider({ children }) {
  const [loading, setLoading] = useState(true);

  const [userData, setUserData] = useState({});
  const [allUserPhotos, setAllUserPhotos] = useState([]);
  const [allPrompts, setAllPrompts] = useState([]);
  const [allJobs, setAllJobs] = useState([]);
  const [allInstitutions, setAllInstitutions] = useState([]);
  const [allBasics, setAllBasics] = useState([]);
  const [myPlaces, setMyPlaces] = useState([]);

  const getUserData = () => {
    setLoading(true);
    return ooplaAPI
      .get(URL_GET_PROFILE)
      .then((res) => {
        const data = res?.data?.data;

        // set user's complete data to userData state
        setUserData(data);

        // set user's images to allUserPhotos state
        setAllUserPhotos(data?.images);

        // set user's prompts to allPrompts state
        setAllPrompts(data?.prompts);

        // set user's jobs to allJobs state
        setAllJobs(data?.job);

        // set user's education to allInstitutions' state
        setAllInstitutions(data?.education);

        // extract and set user's current and from locations to myPlaces state
        const allPlacesObj = [
          {
            api: "location",
            title: "Add where I live",
            value: data?.location_current,
          },
          {
            api: "from_location",
            title: "Add where I am from",
            value: data?.location_from,
          },
        ];
        setMyPlaces(allPlacesObj);
      })
      .catch((err) => {
        console.error(err);
        return Promise.reject(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const contextValue = {
    loading,
    setLoading,
    userData,
    userData,
    allUserPhotos,
    setAllUserPhotos,
    allPrompts,
    setAllPrompts,
    allJobs,
    setAllJobs,
    allInstitutions,
    setAllInstitutions,
    allBasics,
    setAllBasics,
    myPlaces,
    setMyPlaces,
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <EditProfileContext.Provider value={contextValue}>
      {children}
    </EditProfileContext.Provider>
  );
}

export const useEditProfileData = () => useContext(EditProfileContext);

export default EditProfileDataProvider;
