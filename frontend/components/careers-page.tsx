import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import type { Dictionary } from "@/lib/dictionary";

export function CareersPage({ dict }: { dict: Dictionary }) {

  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <SectionHeading
              index={dict.careers.index}
              title={dict.careers.title}
              intro={dict.careers.intro}
            />
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-10 max-w-2xl space-y-6">
              {dict.careers.body.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 32)}
                  className="text-base leading-8 text-muted"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <SectionHeading
              index={dict.careers.waysIndex}
              title={dict.careers.waysTitle}
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {dict.careers.lookingFor.map((item, i) => (
              <Reveal key={item.title} delay={i * 120} className="h-full">
                <article className="h-full border border-border bg-paper p-8">
                  <p className="text-xs font-bold tracking-[0.2em] text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 text-lg font-bold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <div className="mt-12 flex flex-col gap-3 sm:flex-row">
              <a
                href={`mailto:${dict.contact.email}?subject=Working%20with%20Halimi%20Research`}
                className="inline-flex min-h-12 items-center justify-center bg-ink px-7 text-sm font-semibold text-paper transition-colors hover:bg-accent"
              >
                {dict.careers.introduce}
              </a>
              <Link
                href="/notes"
                className="inline-flex min-h-12 items-center justify-center border border-border px-7 text-sm font-semibold text-ink transition-colors hover:border-ink"
              >
                {dict.careers.readResearch}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
