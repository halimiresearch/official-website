import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import type { Dictionary } from "@/lib/dictionary";

export function ProductsPage({ dict }: { dict: Dictionary }) {

  return (
    <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <SectionHeading
              index={dict.products.index}
              title={dict.products.title}
              intro={dict.products.intro}
            />
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {dict.products.items.map((item, i) => (
              <Reveal key={item.slug} delay={i * 120} className="h-full">
                <article className="h-full border border-border p-8 transition-colors hover:border-ink sm:p-10">
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
                      {dict.products.learnMore}
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
  );
}
