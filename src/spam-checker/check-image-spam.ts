import { Mail } from "../outlook-api/types/mail-type.js";
import { SpamFilterType } from "./types.js";

export const isImageSpamMail = (mail: Mail): SpamFilterType | undefined => {
  if (addressFromBlackList(mail) && urlBlackList(mail)) {
    return SpamFilterType.Image;
  } else {
    return;
  }
};

export const isTextSpamMail = (mail: Mail): SpamFilterType | undefined => {
  if (addressFromBlackList(mail) && textBlackList(mail)) {
    return SpamFilterType.Text;
  } else {
    return;
  }
};

export const inlineImageSpam = (mail: Mail): SpamFilterType | undefined => {
  // Checks if there are massive images in the content
  if (addressFromBlackList(mail)) {
    const matches = mail.body.content.matchAll(/image:url\((.+)\)/g);

    for (const match of matches) {
      if (!match) {
        continue;
      }

      if (match[1].length > 200000) {
        return SpamFilterType.InlineImage;
      } else {
        return;
      }
    }
  }
};

export const dashSpam = (mail: Mail): SpamFilterType | undefined => {
  if (
    mail.bodyPreview.includes("--------") ||
    mail.bodyPreview.includes("________")
  ) {
    return SpamFilterType.Dash;
  } else {
    return;
  }
};

export const singularDashSpam = (mail: Mail): SpamFilterType | undefined => {
  if (mail.bodyPreview === "-") {
    return SpamFilterType.SingularDash;
  } else {
    return;
  }
};

const addressFromBlackList = (mail: Mail) => {
  return (
    mail.from.emailAddress.address.endsWith("@gmail.com") ||
    mail.from.emailAddress.address.endsWith("@yahoo.com") ||
    mail.from.emailAddress.address.endsWith("toiawaseform.com")
  );
};

const urlBlackList = (mail: Mail) => {
  return (
    mail.body.content.includes("https://t.co/") ||
    mail.body.content.includes("maglit.me") ||
    mail.body.content.includes("zupimages.net") ||
    mail.body.content.includes("img.mailinblue.com") ||
    mail.body.content.includes("berkeley.us14.list-manage.com") ||
    mail.body.content.includes("imgbox.com")
  );
};

const textBlackList = (mail: Mail) => {
  return mail.body.content.toLowerCase().includes("unsubscribe");
};
