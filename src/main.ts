import { CronJob } from "cron";

import { jobTick } from "./job-tick.js";
import { startServer } from "./server.js";
import { refreshAccessToken } from "./outlook-api/refresh-access-token.js";

const job = new CronJob(
  // every 5 seconds
  "*/5 * * * * *",
  async () => {
    await jobTick();
  },
  null,
  false,
);

const refreshToken = new CronJob(
  // every 50 minutes
  "*/50 * * * *",
  async () => {
    await refreshAccessToken();
  },
  null,
  false,
);

console.log("Starting job...");

job.start();
refreshToken.start();

await startServer();

console.log("Login at http://localhost:3000/login");
