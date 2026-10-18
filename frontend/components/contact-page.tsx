import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import type { Dictionary } from "@/lib/dictionary";
import { site } from "@/content/site";

export function ContactPage({ dict }: { dict: Dictionary }) {

  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <SectionHeading index={dict.contact.index} title={dict.contact.title} />
        </Reveal>
        <div className="mt-10 grid gap-12 lg:grid-cols-[3fr_2fr] lg:gap-20">
          <Reveal delay={120}>
            <p className="max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
              {dict.contact.body}
            </p>

            <h2 className="mt-12 text-lg font-bold text-ink">
              {dict.contact.expectationsTitle}
            </h2>
            <ul className="mt-5 max-w-2xl list-disc space-y-2 pl-6 text-sm leading-7 text-muted">
              {dict.contact.expectations.map((item) => (
                <li key={item.slice(0, 32)} className="pl-1">
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={`mailto:${dict.contact.email}`}
                className="inline-flex min-h-12 items-center justify-center bg-ink px-7 text-sm font-semibold text-paper transition-colors hover:bg-accent"
              >
                {dict.contact.email}
              </a>
              {site.contact.socials.map((s) => (
                <a
                  key={s.url}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center border border-border px-7 text-sm font-semibold text-ink transition-colors hover:border-ink"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={200}>
            <aside
              aria-label={dict.contact.profileAria}
              className="h-fit border border-border"
            >
              <dl className="divide-y divide-border text-sm">
                {dict.contact.profile.map(([term, value]) => (
                  <div key={term} className="px-5 py-4">
                    <dt className="text-xs font-bold tracking-[0.18em] text-accent uppercase">
                      {term}
                    </dt>
                    <dd className="mt-1 leading-6 text-ink">{value}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
