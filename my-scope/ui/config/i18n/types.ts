export type I18n = {
  availableLanguages: string[];
  selectedLanguage: string;
};

export type Translations = Record<string, Record<string, string>>;
