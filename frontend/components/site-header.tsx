"use client";

import Link from "next/link";
import { LanguageSwitch } from "@/lib/language-switch";
import type { Dictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";
import { LogoMark } from "./logo-mark";

function Chevron() {
  return (
    <svg
      viewBox="0 0 10 6"
      aria-hidden="true"
      className="h-1.5 w-2.5 transition-transform group-open:rotate-180"
    >
      <path
        d="M1 1l4 4 4-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SiteHeader({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const closeMenu = (e: React.MouseEvent<HTMLElement>) =>
    e.currentTarget.closest("details")?.removeAttribute("open");

  return (
    <header className="relative border-b border-border bg-paper">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          aria-label={dict.brand.homeAria}
        >
          <span className="text-lg font-bold tracking-tight text-ink">
            {dict.brand.wordmark}
          </span>
          <LogoMark className="h-6 w-6 text-accent" />
        </Link>

        {/* Desktop nav with dropdown groups */}
        <nav
          aria-label={dict.header.primaryAria}
          className="hidden items-center gap-9 md:flex"
        >
          {dict.header.nav.map((group) => (
            <details key={group.label} className="group relative">
              <summary className="flex cursor-pointer list-none items-center gap-1.5 py-2 text-sm font-medium text-muted transition-colors hover:text-ink [&::-webkit-details-marker]:hidden">
                {group.label}
                <Chevron />
              </summary>
              <div className="absolute top-full left-1/2 z-20 w-72 -translate-x-1/2 pt-2">
                <ul className="border border-border bg-paper py-2">
                  {group.children.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className="block px-5 py-3 transition-colors hover:bg-surface"
                      >
                        <span className="text-sm font-semibold text-ink">
                          {item.label}
                        </span>
                        <span className="mt-0.5 block text-xs leading-5 text-muted">
                          {item.description}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </details>
          ))}
        </nav>

        <div className="hidden md:block">
          <LanguageSwitch locale={locale} label={dict.header.languageAria} />
        </div>

        {/* Mobile nav */}
        <details className="group md:hidden">
          <summary
            className="inline-flex min-h-10 cursor-pointer list-none items-center gap-2 border border-border px-4 text-sm font-semibold text-ink transition-colors hover:border-ink [&::-webkit-details-marker]:hidden"
          >
            <span className="group-open:hidden">{dict.header.menu}</span>
            <span className="hidden group-open:inline">{dict.header.close}</span>
          </summary>
          <nav
            aria-label={dict.header.mobileAria}
            className="absolute inset-x-0 top-full z-20 border-b border-border bg-paper"
          >
            {dict.header.nav.map((group) => (
              <div key={group.label} className="border-t border-border">
                <p className="px-6 pt-4 pb-1 text-xs font-bold tracking-[0.18em] text-faint uppercase">
                  {group.label}
                </p>
                {group.children.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className="block px-6 py-2.5 text-sm font-medium text-ink"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pb-3" />
              </div>
            ))}
            <div className="border-t border-border px-6 py-4">
              <LanguageSwitch locale={locale} label={dict.header.languageAria} />
            </div>
          </nav>
        </details>
      </div>
    </header>
  );
}
