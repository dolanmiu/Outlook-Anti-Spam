import { Mail } from "../outlook-api/types/mail-type.js";

export const isImageSpamMail = async (mail: Mail) => {
  if (addressFromBlackList(mail) && urlBlackList(mail)) {
    return true;
  } else {
    return false;
  }
};

export const inlineImageSpam = async (mail: Mail) => {
  // Checks if there are massive images in the content
  if (addressFromBlackList(mail)) {
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

const addressFromBlackList = (mail: Mail) => {
  return (
    mail.from.emailAddress.address.endsWith("@gmail.com") ||
    mail.from.emailAddress.address.endsWith("@yahoo.com")
  );
};

const urlBlackList = (mail: Mail) => {
  return (
    mail.body.content.includes("https://t.co/") ||
    mail.body.content.includes("maglit.me") ||
    mail.body.content.includes("zupimages.net") ||
    mail.body.content.includes("img.mailinblue.com")
  );
};
