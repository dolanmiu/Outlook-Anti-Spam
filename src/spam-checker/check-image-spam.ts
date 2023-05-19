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

export const magLitSpam = async (mail: Mail) => {
  if (
    mail.from.emailAddress.address.endsWith("@gmail.com") &&
    mail.body.content.includes("maglit.me")
  ) {
    return true;
  } else {
    return false;
  }
};

export const inlineImageSpam = async (mail: Mail) => {
  // Checks if there are massive images in the content
  if (mail.from.emailAddress.address.endsWith("@gmail.com")) {
    const matches = mail.body.content.matchAll(/image:url\((.+)\)/g);

    for (const match of matches) {
      if (!match) {
        continue;
      }

      if (match[1].length > 200000) {
        return true;
      } else {
        return false;
      }
    }
  }
};
