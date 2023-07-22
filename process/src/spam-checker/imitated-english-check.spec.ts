import { describe, expect, it, vi } from "vitest";

import { hasImitatedEnglishCharacters } from "./imitated-english-check.js";

describe("hasImitatedEnglishCharacters", () => {
  it("should work", () => {
    expect(hasImitatedEnglishCharacters("ܿlܿRܿS Tܿaܿx Rܿetܿuܿrܿn")).toBe(true);
  });

  it("should work", () => {
    expect(hasImitatedEnglishCharacters("--ᗰᑕᗩᖴee®")).toBe(true);
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
});
