import Link from "next/link";
import type { Dictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";
import { formatNoteDate, type NoteMeta } from "@/lib/notes";
import type { ReactNode } from "react";

export function NoteArticle({
  note,
  dict,
  locale,
  children,
}: {
  note: NoteMeta;
  dict: Dictionary;
  locale: Locale;
  children: ReactNode;
}) {

  return (
    <article className="border-b border-border">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-8 sm:py-28">
        <p className="text-xs font-bold tracking-[0.2em] text-accent uppercase">
          {dict.notes.eyebrow}
        </p>
        <span aria-hidden="true" className="mt-2 block h-px w-10 bg-accent" />
        <h1 className="mt-5 text-3xl leading-tight font-bold tracking-tight text-ink sm:text-4xl">
          {note.title}
        </h1>
        <p className="mt-4 text-sm text-faint">
          <time dateTime={note.date}>
            {formatNoteDate(note.date, locale)}
          </time>
          {note.tags.length > 0 ? (
            <span className="ml-3 font-bold tracking-[0.18em] uppercase">
              {note.tags.join(" / ")}
            </span>
          ) : null}
        </p>

        <div className="mt-10">{children}</div>

        <div className="mt-16 border-t border-border pt-8">
          <Link
            href="/notes"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:text-accent-deep hover:decoration-accent-deep"
          >
            {dict.notes.backToAll}
          </Link>
        </div>
      </div>
    </article>
  );
}
