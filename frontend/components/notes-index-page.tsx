import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import type { Dictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";
import { formatNoteDate, type NoteMeta } from "@/lib/notes";

export function NotesIndexPage({
  notes,
  dict,
  locale,
}: {
  notes: NoteMeta[];
  dict: Dictionary;
  locale: Locale;
}) {
  const copy = dict.notes;

  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <SectionHeading
            index={copy.index}
            title={copy.title}
            intro={copy.intro}
          />
        </Reveal>
        {notes.length > 0 ? (
          <Reveal delay={120}>
            <ul className="mt-12 max-w-3xl divide-y divide-border border-y border-border">
              {notes.map((note) => (
                <li key={note.slug}>
                  <Link href={`/notes/${note.slug}`} className="group block py-7">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1">
                      <h2 className="text-lg font-bold text-ink transition-colors group-hover:text-accent">
                        {note.title}
                      </h2>
                      <time dateTime={note.date} className="text-sm text-faint">
                        {formatNoteDate(note.date, locale, {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </time>
                    </div>
                    {note.description ? (
                      <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
                        {note.description}
                      </p>
                    ) : null}
                    {note.tags.length > 0 ? (
                      <p className="mt-3 text-xs font-bold tracking-[0.18em] text-faint uppercase">
                        {note.tags.join(" / ")}
                      </p>
                    ) : null}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        ) : (
          <p className="mt-12 text-muted">{copy.empty}</p>
        )}
      </div>
    </section>
  );
}
