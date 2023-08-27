import axios from "axios";

import { AuthDetails } from "../auth-details.js";
import { MailResponse } from "./types/mail-type.js";

export const getEmails = async (
  authDetails: AuthDetails,
  folder: string = "inbox",
): Promise<MailResponse> => {
  const res = await axios.get<MailResponse>(
    `https://graph.microsoft.com/v1.0/me/mailFolders/${folder}/messages`,
    {
      headers: {
        Authorization: `Bearer ${authDetails.accessToken}`,
      },
    },
  );

  return res.data;
};
