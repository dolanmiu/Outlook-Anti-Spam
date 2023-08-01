import axios, { AxiosResponse } from "axios";

import { AuthDetails } from "../auth-details.js";
import { MoveResponse } from "./types/move-type.js";
import { Mail } from "./types/mail-type.js";
import { retryPromise } from "./retry-promise.js";

export const moveEmail = async (
  authDetails: AuthDetails,
  mail: Mail,
  destinationId: string,
) => {
  const res = await retryPromise<AxiosResponse<MoveResponse, any>>(
    () =>
      axios.request<MoveResponse>({
        method: "POST",
        url: `https://graph.microsoft.com/v1.0/me/messages/${mail.id}/move`,
        headers: {
          Authorization: `Bearer ${authDetails.accessToken}`,
        },
        data: {
          destinationId,
        },
      }),
    10,
    5000,
  );

  return res.data;
};
