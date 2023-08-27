export const hasImitatedEnglishCharacters = (
  input: string,
  overrides: string[] = [],
): boolean => {
  for (const override of overrides) {
    if (input.includes(override)) {
      return false;
    }
  }

  // Define a regular expression pattern to match characters from the Arabic script (Arabic).
  const arabicPattern = /[\u0600-\u06FF]/;

  // Define a regular expression pattern to match characters from the Syriac script (Syriac).
  const syriacPattern = /[\u0700-\u074F]/;

  // Define a regular expression pattern to match characters from the Arabic Supplement script (Arabic).
  const arabicSupplementPattern = /[\u0750-\u077F]/;

  // Define a regular expression pattern to match characters from the Arabic Extended-A script (Arabic).
  const arabicExtendedPattern = /[\u08A0-\u08FF]/;

  // Define a regular expression pattern to match characters from the Arabic Presentation Forms-A (Arabic).
  const arabicPresentationFormsAPattern = /[\uFB50-\uFDFF]/;

  // Define a regular expression pattern to match characters from the Arabic Presentation Forms-B (Arabic).
  const arabicPresentationFormsBPattern = /[\uFE70-\uFEFF]/;

  // Define a regular expression pattern to match characters from the Halfwidth and Fullwidth Forms (Common symbols and punctuations).
  const halfwidthFullwidthFormsPattern = /[\uFF00-\uFFEF]/;

  // Define a regular expression pattern to match small capital letters and compatibility characters.
  const smallCapitalCompatibilityPattern = /[\ufb00-\ufb06\ufe70-\ufeff]/;

  // Define a regular expression pattern to match Chinese characters similar to English letters.
  // Too many false positives, so we're not using this pattern.
  // const chineseCharactersPattern = /[\u15B0-\u15FF]/;

  // Define a regular expression pattern to match Greek letters that resemble English letters.
  const greekLettersPattern = /[\u0391-\u03A2]/;

  // Define a regular expression pattern to match Cyrillic letters that resemble English letters.
  const cyrillicLettersPattern = /[\u0421-\u0425]/;

  // Define a regular expression pattern to match common ligatures like "æ" or "œ".
  const ligaturesPattern = /[\u00E6\u0153]/;

  // Define a regular expression pattern to match characters from the Phonetic Extensions (Latin characters).
  const phoneticExtensionsPattern = /[\u0250-\u02AF]/;

  // Define a regular expression pattern to match Latin characters with modifiers (superscripts and subscripts).
  const latinCharactersWithModifiersPattern = /[\u207F\u1D2C-\u1D61]/;

  // Define a regular expression pattern to match mathematical alphanumeric symbols.
  const mathematicalAlphanumericSymbolsPattern =
    /[\uD835\uDC00\uD835\uDC01\uD835\uDC02\uD835\uDC03\uD835\uDC04\uD835\uDC05\uD835\uDC06\uD835\uDC07\uD835\uDC08\uD835\uDC09\uD835\uDC0A\uD835\uDC0B\uD835\uDC0C\uD835\uDC0D\uD835\uDC0E\uD835\uDC0F\uD835\uDC10\uD835\uDC11\uD835\uDC12\uD835\uDC13\uD835\uDC14\uD835\uDC15\uD835\uDC16\uD835\uDC17\uD835\uDC18\uD835\uDC19\uD835\uDC1A\uD835\uDC1B\uD835\uDC1C\uD835\uDC1D\uD835\uDC1E\uD835\uDC1F\uD835\uDC20\uD835\uDC21\uD835\uDC22\uD835\uDC23\uD835\uDC24\uD835\uDC25\uD835\uDC26\uD835\uDC27\uD835\uDC28\uD835\uDC29\uD835\uDC2A\uD835\uDC2B\uD835\uDC2C\uD835\uDC2D\uD835\uDC2E\uD835\uDC2F\uD835\uDC30\uD835\uDC31\uD835\uDC32\uD835\uDC33\uD835\uDC9C\uD835\uDC9D\uD835\uDC9E\uD835\uDC9F]/;

  // Define a regular expression pattern to match Latin-1 Supplement characters.
  const latin1SupplementPattern =
    /[\u01CE\u00E5\u00DF\u00F0\u014B\u0153\u017F\u0192\u0254\u0283\u0292]/;

  // Define a regular expression pattern to match letterlike symbols.
  const letterlikeSymbolsPattern =
    /[\u2113\u210F\u2126\u2127\u2135-\u2138\u213C-\u213E]/;

  // Define a regular expression pattern to match mathematical symbols (superscripts).
  const mathematicalSymbolsPattern =
    /[\u2070\u2071\u207F\u207A-\u207E\u207F\u1D59]/;

  // Define a regular expression pattern to match enclosed alphanumerics.
  const enclosedAlphanumericsPattern = /[\u24B6-\u24CF\u24D0-\u24E9]/;

  // Define a regular expression pattern to match box drawing characters.
  const boxDrawingCharactersPattern = /[\u255A]/;

  // Define a regular expression pattern to match the Canadian Syllabics range.
  const canadianSyllabicsPattern = /[\u1400-\u167F]/;

  // Test if the input string contains any character that matches any of the individual patterns.
  // If any character from these scripts is found in the input, the test will return true, indicating the presence of imitated English characters.
  return (
    arabicPattern.test(input) ||
    syriacPattern.test(input) ||
    arabicSupplementPattern.test(input) ||
    arabicExtendedPattern.test(input) ||
    arabicPresentationFormsAPattern.test(input) ||
    arabicPresentationFormsBPattern.test(input) ||
    halfwidthFullwidthFormsPattern.test(input) ||
    smallCapitalCompatibilityPattern.test(input) ||
    // chineseCharactersPattern.test(input) ||
    greekLettersPattern.test(input) ||
    cyrillicLettersPattern.test(input) ||
    ligaturesPattern.test(input) ||
    phoneticExtensionsPattern.test(input) ||
    latinCharactersWithModifiersPattern.test(input) ||
    mathematicalAlphanumericSymbolsPattern.test(input) ||
    latin1SupplementPattern.test(input) ||
    letterlikeSymbolsPattern.test(input) ||
    mathematicalSymbolsPattern.test(input) ||
    enclosedAlphanumericsPattern.test(input) ||
    canadianSyllabicsPattern.test(input) ||
    boxDrawingCharactersPattern.test(input)
  );
};
