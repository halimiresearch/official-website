import Link from "next/link";
import { LogoMark } from "@/components/logo-mark";
import type { Dictionary } from "@/lib/dictionary";

export function NotFoundContent({ dict }: { dict: Dictionary }) {

  return (
    <section className="flex flex-1 items-center border-b border-border">
      <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-8 sm:py-32">
        <LogoMark className="mx-auto h-10 w-10 text-accent" />
        <p className="mt-8 text-xs font-bold tracking-[0.2em] text-accent uppercase">
          404
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          {dict.notFound.title}
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-7 text-muted">
          {dict.notFound.body}
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex min-h-12 w-full items-center justify-center bg-ink px-7 text-sm font-semibold text-paper transition-colors hover:bg-accent sm:w-auto"
          >
            {dict.notFound.home}
          </Link>
          <Link
            href="/notes"
            className="inline-flex min-h-12 w-full items-center justify-center border border-border px-7 text-sm font-semibold text-ink transition-colors hover:border-ink sm:w-auto"
          >
            {dict.notFound.notes}
          </Link>
        </div>
      </div>
    </section>
  );
}
