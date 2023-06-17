import fs from "fs";

import { Mail } from "./outlook-api/types/mail-type.js";

export const serialize = (data: Mail[]): void => {
  fs.writeFileSync("latest_emails.json", JSON.stringify(data));
};

export const deserialize = (): Mail[] => {
  try {
    const data = fs.readFileSync("latest_emails.json", "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
};

export const getNewMail = (oldMail: Mail[], newMail: Mail[]): Mail[] => {
  const oldIds = oldMail.map((r) => r.id);

  const oldIdsSet = new Set(oldIds);

  const newReviews = newMail.filter((r) => !oldIdsSet.has(r.id));

  return newReviews;
}