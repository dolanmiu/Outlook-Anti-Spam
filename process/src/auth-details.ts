export type AuthDetails = {
  accessToken: string;
  refreshToken: string;
  profile: Record<string, any>;
};

let authDetails: AuthDetails | undefined;

export const getAuthDetails = (): AuthDetails | undefined => {
  return authDetails;
};

export const setAuthDetails = (details: AuthDetails): void => {
  console.log("Setting auth details", details);
  authDetails = details;
};

export const setAccessToken = (accessToken: string): void => {
  if (!authDetails) {
    console.log("No auth details, skipping setting access token");
    return;
  }

  authDetails.accessToken = accessToken;
};
