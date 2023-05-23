import { getEmails } from "./outlook-api/get-emails.js";
import { getAuthDetails } from "./auth-details.js";
import {
  dashSpam,
  inlineImageSpam,
  isImageSpamMail,
  isTextSpamMail,
} from "./spam-checker/check-image-spam.js";
import { moveEmail } from "./outlook-api/move-email.js";

export const jobTick = async () => {
  const authDetails = getAuthDetails();
  if (!authDetails) {
    console.log("No auth details, skipping job tick");
    return;
  }

  const mails = await getEmails(authDetails);

  for (const mail of mails.value) {
    if (
      (await isImageSpamMail(mail)) ||
      (await inlineImageSpam(mail)) ||
      (await isTextSpamMail(mail)) ||
      (await dashSpam(mail))
    ) {
      moveEmail(authDetails, mail, "junkemail");
      console.log("Moved spam mail to junk email:", mail.subject);
    }
  }
};
