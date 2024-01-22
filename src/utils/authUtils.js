export function getAccessToken() {
  const accessToken =
    typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;

  if (accessToken) {
    console.log("ACCESS TOKEN FETCHED");

    return accessToken;
  }

  return null;
}

export function setAccessToken(accessToken) {
  if (accessToken) {
    console.log("ACCESS TOKEN SET");

    localStorage.setItem("accessToken", accessToken);
    return accessToken;
  }

  return null;
}
