import Link from "next/link";
import type { Dictionary } from "@/lib/dictionary";
import { site } from "@/content/site";
import { LogoMark } from "./logo-mark";

export function SiteFooter({ dict }: { dict: Dictionary }) {

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-8 md:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="flex w-fit items-center gap-2.5">
            <span className="text-lg font-bold tracking-tight text-ink">
              {dict.brand.wordmark}
            </span>
            <LogoMark className="h-6 w-6 text-accent" />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-6 text-muted">
            {dict.brand.shortDescription}
          </p>
        </div>

        <nav aria-label={dict.footer.products}>
          <p className="text-xs font-bold tracking-[0.2em] text-faint uppercase">
            {dict.footer.products}
          </p>
          <ul className="mt-4 space-y-2.5">
            {dict.products.items.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/products/${item.slug}`}
                  className="py-1 text-sm text-muted underline-offset-4 transition-colors hover:text-ink"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label={dict.footer.research}>
          <p className="text-xs font-bold tracking-[0.2em] text-faint uppercase">
            {dict.footer.research}
          </p>
          <ul className="mt-4 space-y-2.5">
            <li>
              <Link
                href="/notes"
                className="py-1 text-sm text-muted underline-offset-4 transition-colors hover:text-ink"
              >
                {dict.footer.researchNotes}
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label={dict.footer.company}>
          <p className="text-xs font-bold tracking-[0.2em] text-faint uppercase">
            {dict.footer.company}
          </p>
          <ul className="mt-4 space-y-2.5">
            <li>
              <Link
                href="/about"
                className="py-1 text-sm text-muted underline-offset-4 transition-colors hover:text-ink"
              >
                {dict.footer.corporateInfo}
              </Link>
            </li>
            <li>
              <Link
                href="/careers"
                className="py-1 text-sm text-muted underline-offset-4 transition-colors hover:text-ink"
              >
                {dict.footer.careers}
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="py-1 text-sm text-muted underline-offset-4 transition-colors hover:text-ink"
              >
                {dict.footer.contact}
              </Link>
            </li>
            {site.contact.socials.map((s) => (
              <li key={s.url}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-1 text-sm text-muted underline-offset-4 transition-colors hover:text-ink"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-5 text-xs text-faint sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {new Date().getFullYear()} {dict.footer.rights}
          </p>
          <p>{dict.footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
