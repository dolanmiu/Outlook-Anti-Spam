import { Mail } from "../outlook-api/types/mail-type.js";

export const isImageSpamMail = async (mail: Mail) => {
  if (
    mail.from.emailAddress.address.endsWith("@gmail.com") &&
    mail.body.content.includes("https://t.co/")
  ) {
    return true;
  } else {
    return false;
  }
};
