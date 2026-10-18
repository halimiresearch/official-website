"use client";

import { useRouter } from "next/navigation";
import { LOCALE_COOKIE, LOCALE_LABELS, LOCALES, type Locale } from "./i18n";

function persistLocaleCookie(next: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=31536000; samesite=lax`;
}

export function LanguageSwitch({
  locale,
  label,
}: {
  locale: Locale;
  label: string;
}) {
  const router = useRouter();

  const switchTo = (next: Locale) => {
    if (next === locale) return;
    persistLocaleCookie(next);
    router.refresh();
  };

  return (
    <div
      role="group"
      aria-label={label}
      className="flex items-center gap-2 border border-border px-3.5 py-2 text-sm"
    >
      {LOCALES.map((l, i) => (
        <span key={l} className="flex items-center gap-2">
          {i > 0 ? (
            <span aria-hidden="true" className="h-3.5 w-px bg-border" />
          ) : null}
          <button
            type="button"
            onClick={() => switchTo(l)}
            aria-pressed={locale === l}
            className={
              locale === l
                ? "cursor-pointer font-semibold text-ink underline underline-offset-4"
                : "cursor-pointer text-muted transition-colors hover:text-ink"
            }
          >
            {LOCALE_LABELS[l]}
          </button>
        </span>
      ))}
    </div>
  );
}
