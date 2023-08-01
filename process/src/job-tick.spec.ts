import { describe, expect, it, vi } from "vitest";

import { TICK_EMAIL } from "./__mocks__/emails/tick-email.js";
import { ODD_FONT_EMAIL } from "./__mocks__/emails/odd-font-email.js";
import { jobTick } from "./job-tick.js";
import { Mail, MailResponse } from "./outlook-api/types/mail-type.js";
import { IMAGE_EMAIL } from "./__mocks__/emails/image-email.js";
import { BRACKET_EMAIL_1 } from "./__mocks__/emails/bracket-email.js";

vi.mock("./auth-details.js", () => ({
  getAuthDetails: () => ({
    clientId: "clientId",
    clientSecret: "clientSecret",
    refreshToken: "refreshToken",
    accessToken: "accessToken",
    expiresAt: 0,
  }),
}));

vi.mock("./outlook-api/get-emails.js", () => ({
  getEmails: vi.fn<[], Promise<MailResponse>>().mockResolvedValue({
    "@odata.context": "",
    value: [TICK_EMAIL],
    "@odata.nextLink": "",
  }),
}));

vi.mock("./serializer.js", () => ({
  deserialize: vi.fn(),
  getNewMail: vi.fn<[], Mail[]>().mockReturnValue([TICK_EMAIL]),
  serialize: vi.fn(),
}));
const serializerModule = await import("./serializer.js");

vi.mock("./outlook-api/move-email.js", () => ({
  moveEmail: vi.fn(),
}));
const moveModule = await import("./outlook-api/move-email.js");

describe("job-tick", () => {
  it("should work with tick spam", async () => {
    vi.spyOn(serializerModule, "getNewMail").mockReturnValue([TICK_EMAIL]);
    const spy = vi.spyOn(moveModule, "moveEmail");
    await jobTick();
    expect(spy).toHaveBeenCalledWith(
      expect.anything(),
      TICK_EMAIL,
      "junkemail",
    );
  });

  it("should work with odd font email spam", async () => {
    vi.spyOn(serializerModule, "getNewMail").mockReturnValue([ODD_FONT_EMAIL]);
    const spy = vi.spyOn(moveModule, "moveEmail");
    await jobTick();
    expect(spy).toHaveBeenCalledWith(
      expect.anything(),
      ODD_FONT_EMAIL,
      "junkemail",
    );
  });

  it("should work with image email spam", async () => {
    vi.spyOn(serializerModule, "getNewMail").mockReturnValue([IMAGE_EMAIL]);
    const spy = vi.spyOn(moveModule, "moveEmail");
    await jobTick();
    expect(spy).toHaveBeenCalledWith(
      expect.anything(),
      IMAGE_EMAIL,
      "junkemail",
    );
  });

  it("should work with bracket email spam", async () => {
    vi.spyOn(serializerModule, "getNewMail").mockReturnValue([BRACKET_EMAIL_1]);
    const spy = vi.spyOn(moveModule, "moveEmail");
    await jobTick();
    expect(spy).toHaveBeenCalledWith(
      expect.anything(),
      BRACKET_EMAIL_1,
      "junkemail",
    );
  });
});
