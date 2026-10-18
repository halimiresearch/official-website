import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/reveal";
import type { Dictionary } from "@/lib/dictionary";

export function ProductDetailPage({
  slug,
  dict,
}: {
  slug: string;
  dict: Dictionary;
}) {
  const d = dict.productDetail;
  const project = dict.products.items.find((i) => i.slug === slug);
  if (!project) notFound();

  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <p className="text-xs font-bold tracking-[0.2em] text-accent uppercase">
              {d.caseStudy}
            </p>
            <span aria-hidden="true" className="mt-2 block h-px w-10 bg-accent" />
            <h1 className="mt-5 text-4xl leading-[1.08] font-bold tracking-tight text-ink sm:text-5xl">
              {project.name}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              {project.tagline}
            </p>
            <dl className="mt-10 grid max-w-2xl grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-3">
              <div>
                <dt className="text-xs font-bold tracking-[0.18em] text-faint uppercase">
                  {d.statusLabel}
                </dt>
                <dd className="mt-1 text-sm font-semibold text-accent">
                  {project.status}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-bold tracking-[0.18em] text-faint uppercase">
                  {d.fieldLabel}
                </dt>
                <dd className="mt-1 text-sm font-semibold text-ink">
                  {d.fieldValue}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-bold tracking-[0.18em] text-faint uppercase">
                  {d.typeLabel}
                </dt>
                <dd className="mt-1 text-sm font-semibold text-ink">
                  {d.typeValue}
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-8 sm:py-24">
          <div className="max-w-2xl space-y-16">
            {d.sections.map((section, i) => (
              <Reveal key={section.heading} delay={i * 80}>
                <article>
                  <h2 className="text-2xl font-bold tracking-tight text-ink">
                    {section.heading}
                  </h2>
                  {section.body.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 32)}
                      className="mt-5 text-base leading-8 text-muted"
                    >
                      {paragraph}
                    </p>
                  ))}
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="mt-16 max-w-2xl border border-border bg-surface p-8">
              <h2 className="text-lg font-bold text-ink">{d.followTitle}</h2>
              <p className="mt-3 text-sm leading-6 text-muted">
                {d.followBody}
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center bg-ink px-6 text-sm font-semibold text-paper transition-colors hover:bg-accent"
                >
                  {project.urlLabel}
                </a>
                {project.noteSlug ? (
                  <Link
                    href={`/notes/${project.noteSlug}`}
                    className="inline-flex min-h-11 items-center justify-center border border-border px-6 text-sm font-semibold text-ink transition-colors hover:border-ink"
                  >
                    {d.readNote}
                  </Link>
                ) : null}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
