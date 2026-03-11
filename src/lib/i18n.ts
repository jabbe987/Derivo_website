export type Language = "sv" | "en";

export const LANGUAGE_STORAGE_KEY = "derivo-language";

export const supportedLanguages: Language[] = ["sv", "en"];

export const isLanguage = (value: string | undefined): value is Language =>
  value === "sv" || value === "en";

export const getInitialLanguage = (): Language => {
  if (typeof window === "undefined") {
    return "sv";
  }

  const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  if (isLanguage(stored ?? undefined)) {
    return stored;
  }

  return "sv";
};

export const persistLanguagePreference = (language: Language) => {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
};
