import { describe, expect, it, vi } from "vitest";

import { hasImitatedEnglishCharacters } from "./imitated-english-check.js";

describe("hasImitatedEnglishCharacters", () => {
  it("should work", () => {
    expect(hasImitatedEnglishCharacters("ܿlܿRܿS Tܿaܿx Rܿetܿuܿrܿn")).toBe(true);
  });

  it("should work", () => {
    expect(hasImitatedEnglishCharacters("--ᗰᑕᗩᖴee®")).toBe(true);
    expect(hasImitatedEnglishCharacters("ᗰ")).toBe(true);
    expect(hasImitatedEnglishCharacters("ᑕ")).toBe(true);
    expect(hasImitatedEnglishCharacters("ᗩ")).toBe(true);
    expect(hasImitatedEnglishCharacters("ᖴ")).toBe(true);
  });

  it("should work", () => {
    expect(hasImitatedEnglishCharacters("✔NOTIC_Sᴇᴄᴜʀɪᴛ.")).toBe(true);
  });

  it("should work", () => {
    expect(hasImitatedEnglishCharacters("Iᴘᴀᴅ Pʀᴏ")).toBe(true);
  });

  it("should work", () => {
    expect(hasImitatedEnglishCharacters("拢ee匚uʀɪт")).toBe(true);
  });

  it("should work", () => {
    expect(hasImitatedEnglishCharacters("ΑΒΓΔ РΟЅТ")).toBe(true);
  });

  it("should work", () => {
    expect(hasImitatedEnglishCharacters("ԼՕɌЅ ТӀՏТ")).toBe(true);
  });

  it("should work", () => {
    expect(hasImitatedEnglishCharacters("æther ᴘrobleᴍ")).toBe(true);
  });

  it("should work", () => {
    expect(hasImitatedEnglishCharacters("ᵒᶜᵗᵒᵖᵘˢ")).toBe(true);
  });

  it("should work", () => {
    expect(hasImitatedEnglishCharacters("Tʜɪꜱ ɪꜱ ᴀ ᴍɪꜱᴄᴇʟʟᴀɴᴇᴏᴜꜱ ᴛᴇꜱᴛ")).toBe(
      true,
    );
  });

  it("should work", () => {
    expect(hasImitatedEnglishCharacters("𝒜𝓑𝓒𝒟")).toBe(true);
  });

  it("should work", () => {
    expect(hasImitatedEnglishCharacters("𝒜𝓑𝓒𝒟")).toBe(true);
  });

  it("should work", () => {
    expect(hasImitatedEnglishCharacters("ǎ")).toBe(true);
  });

  //   it("should work", () => {
  //     expect(hasImitatedEnglishCharacters("ϭ")).toBe(true);
  //   });

  //   it("should work", () => {
  //     expect(hasImitatedEnglishCharacters("д")).toBe(true);
  //   });

  it("should work", () => {
    expect(hasImitatedEnglishCharacters("ℓΩ℧ℵℶℷℸℼℽℾ")).toBe(true);
  });

  it("should work", () => {
    expect(hasImitatedEnglishCharacters("⁰")).toBe(true);
  });

  it("should work", () => {
    expect(hasImitatedEnglishCharacters("Ⓐⓐⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞ")).toBe(true);
  });

  it("should work", () => {
    expect(hasImitatedEnglishCharacters("╚")).toBe(true);
  });

  it("should work", () => {
    expect(hasImitatedEnglishCharacters("ⁱ⁰ⁿ⁺⁻⁼⁽⁾ⁿᵖ")).toBe(true);
  });

  //   it("should work", () => {
  //     expect(hasImitatedEnglishCharacters("⒜⒝⒞⒟⒠⒡⒢⒣⒤⒥⒦⒧⒨⒩⒪⒫⒬⒭⒮⒯")).toBe(true);
  //   });

  it("should work", () => {
    expect(
      hasImitatedEnglishCharacters("Regular normal text: Hello World!"),
    ).toBe(false);
  });

  it("should not filter Miu Aquatics", () => {
    expect(
      hasImitatedEnglishCharacters("Miu Aquatics - New Feedback! 收到新反馈！"),
    ).toBe(true);
    expect(
      hasImitatedEnglishCharacters(
        "Miu Aquatics - New Feedback! 收到新反馈！",
        ["收到新反馈！"],
      ),
    ).toBe(false);
  });

  it("should work", () => {
    expect(
      hasImitatedEnglishCharacters("𝘕𝘦𝘸 𝘚𝘬𝘪𝘯𝘯𝘺 𝘗𝘪𝘭𝘭 𝘒𝘪𝘭𝘭𝘴 𝘛𝘰𝘰 𝘔𝘶𝘤𝘩 𝘍𝘢𝘵"),
    ).toBe(true);
    expect(hasImitatedEnglishCharacters("𝙖𝙙𝙫𝙖𝙣𝙘𝙚𝙙 𝙣𝙖𝙩𝙪𝙧𝙖𝙡 𝙥𝙖𝙞𝙣 𝙧𝙚𝙡𝙞𝙚𝙛")).toBe(
      true,
    );
    expect(
      hasImitatedEnglishCharacters("𝙉𝙚𝙬 𝙎𝙠𝙞𝙣𝙣𝙮 𝙋𝙞𝙡𝙡 𝙆𝙞𝙡𝙡𝙨 𝙏𝙤𝙤 𝙈𝙪𝙘𝙝 𝙁𝙖𝙩"),
    ).toBe(true);
    expect(
      hasImitatedEnglishCharacters("𝐍𝐞𝐰 𝐒𝐤𝐢𝐧𝐧𝐲 𝐏𝐢𝐥𝐥 𝐊𝐢𝐥𝐥𝐬 𝐓𝐨𝐨 𝐌𝐮𝐜𝐡 𝐅𝐚𝐭"),
    ).toBe(true);
    // Todo
    // expect(hasImitatedEnglishCharacters("Mιrᥲᥴᥣᥱ CBD Gᥙmmιᥱs")).toBe(true);
  });
});
