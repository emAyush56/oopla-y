import axios from "axios";
import { getAccessToken } from "@/utils/authUtils";

const BASE_URL = "https://amitmalik.live";

export const getNewAPIInstance = () => {
  const accessToken = getAccessToken();
  const headers = accessToken
    ? {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      }
    : {};

  return axios.create({
    baseURL: BASE_URL,
    timeout: 30000,
    headers: headers, // Omit the Authorization header if token is null
  });
};

export const ooplaAPI = getNewAPIInstance();
