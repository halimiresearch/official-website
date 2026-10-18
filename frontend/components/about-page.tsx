import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import type { Dictionary } from "@/lib/dictionary";

export function AboutPage({ dict }: { dict: Dictionary }) {

  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <SectionHeading index={dict.about.index} title={dict.about.title} />
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
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <SectionHeading
              index={dict.about.storyIndex}
              title={dict.about.storyTitle}
            />
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-10 max-w-2xl space-y-6">
              {dict.about.story.map((paragraph) => (
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

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <SectionHeading
              index={dict.about.valuesIndex}
              title={dict.about.valuesTitle}
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {dict.about.values.map((value, i) => (
              <Reveal key={value.title} delay={i * 100} className="h-full">
                <article className="h-full border border-border p-8">
                  <p className="text-xs font-bold tracking-[0.2em] text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 text-lg font-bold text-ink">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {value.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="focus" className="scroll-mt-6 border-t border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <SectionHeading
              index={dict.about.focusIndex}
              title={dict.about.focusTitle}
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {dict.focus.map((item, i) => (
              <Reveal key={item.title} delay={i * 100} className="h-full">
                <article className="h-full border border-border bg-paper p-7">
                  <p className="text-xs font-bold tracking-[0.2em] text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 text-lg font-bold text-ink">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
