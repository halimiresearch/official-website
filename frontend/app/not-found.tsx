import { NotFoundContent } from "@/components/not-found-content";
import { getDictionary } from "@/lib/dictionary";
import { DEFAULT_LOCALE } from "@/lib/i18n";
import { getLocale } from "@/lib/get-locale";

export default async function NotFound() {
  let locale = DEFAULT_LOCALE;
  try {
    locale = await getLocale();
  } catch {
    // Build-time prerender has no request context; keep default locale.
  }
  return <NotFoundContent dict={getDictionary(locale)} />;
}
