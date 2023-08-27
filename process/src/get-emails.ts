import { CronJob } from "cron";

import { getEmails } from "./outlook-api/get-emails.js";
import { getAuthDetails } from "./auth-details.js";
import { startServer } from "./server.js";

const folder = process.argv[2] ?? "inbox";

const job = new CronJob(
  "*/10 * * * * *",
  async () => {
    try {
      await jobTick();
    } catch (e) {}
  },
  null,
  false,
);

job.start();
startServer();

const jobTick = async () => {
  const authDetails = getAuthDetails();
  if (!authDetails) {
    console.log("No auth details, skipping job tick");
    return;
  }

  const mails = await getEmails(authDetails, folder);

  console.log(JSON.stringify(mails.value.slice(0, 4), null, 2));

  job.stop();
};
