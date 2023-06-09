import { getEmails } from "./outlook-api/get-emails.js";
import { getAuthDetails } from "./auth-details.js";
import {
  dashSpam,
  fromMyselfSpam,
  inlineImageSpam,
  isImageSpamMail,
  isTextSpamMail,
  singularDashSpam,
  tickSpam,
} from "./spam-checker/check-image-spam.js";
import { moveEmail } from "./outlook-api/move-email.js";
import { deserialize, getNewMail, serialize } from "./serializer.js";

export const jobTick = async () => {
  const authDetails = getAuthDetails();
  if (!authDetails) {
    console.log("No auth details, skipping job tick");
    return;
  }

  const mails = await getEmails(authDetails);
  const newMail = getNewMail(deserialize(), mails.value);

  for (const mail of newMail) {
    const reason =
      isImageSpamMail(mail) ||
      inlineImageSpam(mail) ||
      isTextSpamMail(mail) ||
      dashSpam(mail) ||
      tickSpam(mail) ||
      singularDashSpam(mail) ||
      fromMyselfSpam(mail);
    if (reason) {
      moveEmail(authDetails, mail, "junkemail");
      console.log("Moved spam mail to junk email:", mail.subject);
      console.log("Reason:", reason);
      console.log("Full mail:", mail);
    }
  }

  if (newMail.length > 0) {
    serialize(mails.value);
  }
};
