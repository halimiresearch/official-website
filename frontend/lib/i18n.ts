export type Locale = "en" | "id";

export const LOCALES: Locale[] = ["en", "id"];

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "English",
  id: "Indonesia",
};

export const DEFAULT_LOCALE: Locale = "en";
export const LOCALE_COOKIE = "hr-locale";

export function isLocale(value: unknown): value is Locale {
  return value === "en" || value === "id";
}
