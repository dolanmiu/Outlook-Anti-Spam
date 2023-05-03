import axios from "axios";
import { getAuthDetails } from "../auth-details.js";
import { AUTH_SCOPE, CLIENT_ID, CLIENT_SECRET } from "./constants.js";

export const refreshAccessToken = async (): Promise<string> => {
  const authDetails = getAuthDetails();
  if (!authDetails) {
    throw new Error("No auth details, skipping job tick");
  }

  const res = await axios.request<{
    access_token: string;
    refresh_token: string;
  }>({
    method: "POST",
    url: "https://login.microsoftonline.com/common/oauth2/v2.0/token",
    data: {
      client_id: CLIENT_ID,
      scope: AUTH_SCOPE.join(" "),
      refresh_token: authDetails.refreshToken,
      grant_type: "refresh_token",
      client_secret: CLIENT_SECRET,
    },
  });

  console.log("Refreshed access token");
  return res.data.access_token;
};
