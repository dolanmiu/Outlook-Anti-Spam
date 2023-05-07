import { getAuthDetails, setAccessToken } from "../auth-details.js";
import refresh from "passport-oauth2-refresh";

export const refreshAccessToken = async (): Promise<string> => {
  const authDetails = getAuthDetails();
  if (!authDetails) {
    throw new Error("No auth details, skipping job tick");
  }

  return new Promise((resolve) => {
    refresh.requestNewAccessToken(
      "microsoft",
      authDetails.refreshToken,
      (err, accessToken, _refreshToken) => {
        if (err) {
          console.error(err);
        }
        console.log("Refreshed access token");

        setAccessToken(accessToken);
        resolve(accessToken);
      },
    );
  });
};
