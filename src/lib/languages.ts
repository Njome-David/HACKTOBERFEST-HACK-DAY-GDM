export interface LanguageOption {
  code: string;
  label: string;
  languageName?: string;
  speechLang?: string;
}

export const LANGUAGES: LanguageOption[] = [
  { code: "en", label: "English", languageName: "English", speechLang: "en-US" },
  { code: "ha", label: "Hausa", languageName: "Hausa", speechLang: "ha-NG" },
  { code: "ewo", label: "Ewondo (pilot)", languageName: "Ewondo" },
  { code: "cameroon-pidgin", label: "Cameroon Pidgin (experimental)", languageName: "Cameroon Pidgin" },
];

export const LANGUAGE_NAMES: Record<string, string> = Object.fromEntries(
  LANGUAGES.map((language) => [language.code, language.languageName ?? language.label])
);
