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
});
