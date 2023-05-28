import { CronJob } from "cron";

import { jobTick } from "./job-tick.js";
import { startServer } from "./server.js";
import { refreshAccessToken } from "./outlook-api/refresh-access-token.js";

const job = new CronJob(
  // every few seconds
  "*/10 * * * * *",
  async () => {
    try {
      await jobTick();
    } catch (e) {}
  },
  null,
  false,
);

const refreshToken = new CronJob(
  // every 50 minutes
  "*/50 * * * *",
  async () => {
    try {
      await refreshAccessToken();
    } catch (e) {
      console.log("Error in getting refresh token");
    }
  },
  null,
  false,
);

console.log("Starting job...");

job.start();
refreshToken.start();

await startServer();

console.log("Login at http://localhost:3000/login");
