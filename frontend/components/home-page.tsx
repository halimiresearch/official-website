import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { FishField } from "@/components/fish-field";
import { Reveal } from "@/components/reveal";
import type { Dictionary } from "@/lib/dictionary";
import { getNoteYear, type NoteMeta } from "@/lib/notes";

export function HomePage({
  notes,
  dict,
}: {
  notes: NoteMeta[];
  dict: Dictionary;
}) {
  const latest = notes.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <FishField />
        <div className="relative mx-auto max-w-4xl px-4 py-24 text-center sm:px-8 sm:py-32 lg:py-40">
          <h1 className="animate-rise text-4xl leading-[1.08] font-bold tracking-tight text-ink sm:text-6xl lg:text-7xl">
            {dict.home.headline}
          </h1>
          <p
            className="animate-rise mx-auto mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8"
            style={{ animationDelay: "150ms" }}
          >
            {dict.home.description}
          </p>
          <div
            className="animate-rise mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
            style={{ animationDelay: "300ms" }}
          >
            <Link
              href="/contact"
              className="inline-flex min-h-12 w-full items-center justify-center bg-ink px-7 text-sm font-semibold text-paper transition-colors hover:bg-accent sm:w-auto"
            >
              {dict.home.primaryCta}
            </Link>
            <Link
              href="/products"
              className="inline-flex min-h-12 w-full items-center justify-center border border-border px-7 text-sm font-semibold text-ink transition-colors hover:border-ink sm:w-auto"
            >
              {dict.home.secondaryCta}
            </Link>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="relative flex flex-col items-center gap-3 pb-10"
        >
          <p className="text-center text-[11px] font-semibold tracking-[0.3em] text-faint uppercase">
            {dict.home.scroll}
          </p>
          <span className="scroll-cue-line block h-8 w-px bg-border" />
        </div>
      </section>

      {/* About */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <SectionHeading index={dict.home.aboutIndex} title={dict.about.title} />
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-10 grid gap-12 lg:grid-cols-[3fr_2fr] lg:gap-20">
              <p className="max-w-2xl text-lg leading-8 text-muted">
                {dict.about.body}
              </p>
              <blockquote className="border-l-2 border-accent pl-6 text-lg leading-8 font-medium text-ink">
                {dict.about.mission}
              </blockquote>
            </div>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:text-accent-deep hover:decoration-accent-deep"
            >
              {dict.home.aboutLink}
              <span aria-hidden="true">&#8599;</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Products */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <SectionHeading
              index={dict.home.productsIndex}
              title={dict.products.title}
              intro={dict.products.intro}
            />
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {dict.products.items.map((item, i) => (
              <Reveal key={item.slug} delay={i * 120}>
                <article className="h-full border border-border bg-paper p-8 transition-colors hover:border-ink sm:p-10">
                  <p className="text-xs font-bold tracking-[0.2em] text-accent uppercase">
                    {item.status}
                  </p>
                  <h3 className="mt-4 text-2xl font-bold tracking-tight text-ink">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-base font-semibold text-ink">
                    {item.tagline}
                  </p>
                  <ul className="mt-7 space-y-5">
                    {item.features.map((feature) => (
                      <li key={feature.title} className="flex gap-3">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                        />
                        <div>
                          <p className="text-sm font-bold text-ink">
                            {feature.title}
                          </p>
                          <p className="mt-1 text-sm leading-6 text-muted">
                            {feature.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-border pt-6">
                    <Link
                      href={`/products/${item.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:text-accent-deep hover:decoration-accent-deep"
                    >
                      {dict.home.learnMore}
                      <span aria-hidden="true">&#8599;</span>
                    </Link>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:text-accent-deep hover:decoration-accent-deep"
                    >
                      {item.urlLabel}
                      <span aria-hidden="true">&#8599;</span>
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Research Notes */}
      {latest.length > 0 ? (
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-8 sm:py-28">
            <Reveal>
              <SectionHeading
                index={dict.home.notesIndex}
                title={dict.home.notesTitle}
                intro={dict.home.notesIntro}
              />
            </Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {latest.map((note, i) => (
                <Reveal key={note.slug} delay={i * 120} className="h-full">
                  <Link
                    href={`/notes/${note.slug}`}
                    className="group flex h-full flex-col border border-border p-7 transition-all hover:-translate-y-1 hover:border-ink"
                  >
                    <p className="text-xs font-bold tracking-[0.18em] uppercase">
                      <span className="text-accent">
                        {getNoteYear(note.date)}
                      </span>
                      {note.tags.length > 0 ? (
                        <span className="ml-3 text-faint">
                          {note.tags.join(" / ")}
                        </span>
                      ) : null}
                    </p>
                    <h3 className="mt-4 text-lg leading-snug font-bold text-ink transition-colors group-hover:text-accent">
                      {note.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-6 text-muted">
                      {note.description}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                      {dict.home.readNote}
                      <span aria-hidden="true">&#8599;</span>
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
            <Reveal delay={200}>
              <Link
                href="/notes"
                className="mt-10 inline-flex min-h-12 items-center justify-center bg-ink px-7 text-sm font-semibold text-paper transition-colors hover:bg-accent"
              >
                {dict.home.readAllNotes}
              </Link>
            </Reveal>
            <Reveal delay={280}>
              <p className="mt-8 text-sm leading-6 text-muted">
                {dict.contact.title}{" "}
                <Link
                  href="/contact"
                  className="font-semibold text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:text-accent-deep hover:decoration-accent-deep"
                >
                  {dict.home.primaryCta}
                  <span aria-hidden="true"> &#8599;</span>
                </Link>
              </p>
            </Reveal>
          </div>
        </section>
      ) : null}
    </>
  );
}
