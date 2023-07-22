export const hasImitatedEnglishCharacters = (input: string): boolean => {
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
  const chineseCharactersPattern = /[\u15B0-\u15FF]/;

  // Define a regular expression pattern to match Greek letters that resemble English letters.
  const greekLettersPattern = /[\u0391-\u03A2]/;

  // Define a regular expression pattern to match Cyrillic characters that resemble English letters.
  const cyrillicLettersPattern = /[\u0421-\u0425]/;

  // Define a regular expression pattern to match common ligatures like "æ" or "œ".
  const ligaturesPattern = /[\u00E6\u0153]/;

  // Define a regular expression pattern to match characters from the Phonetic Extensions (Latin characters).
  const phoneticExtensionsPattern = /[\u0250-\u02AF]/;

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
    chineseCharactersPattern.test(input) ||
    greekLettersPattern.test(input) ||
    cyrillicLettersPattern.test(input) ||
    ligaturesPattern.test(input) ||
    phoneticExtensionsPattern.test(input)
  );
};
