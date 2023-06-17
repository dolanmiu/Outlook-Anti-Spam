import axios from "axios";

import { AuthDetails } from "../auth-details.js";
import { MoveResponse } from "./types/move-type.js";
import { Mail } from "./types/mail-type.js";

export const moveEmail = async (
  authDetails: AuthDetails,
  mail: Mail,
  destinationId: string,
) => {
  const res = await axios.request<MoveResponse>({
    method: "POST",
    url: `https://graph.microsoft.com/v1.0/me/messages/${mail.id}/move`,
    headers: {
      Authorization: `Bearer ${authDetails.accessToken}`,
    },
    data: {
      destinationId,
    },
  });

  return res.data;
};
