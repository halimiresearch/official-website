import type { Metadata } from "next";
import { NotesIndexPage } from "@/components/notes-index-page";
import { getDictionary } from "@/lib/dictionary";
import { getLocale } from "@/lib/get-locale";
import { getAllNotes } from "@/lib/notes";

export const metadata: Metadata = {
  title: "Research Notes",
  description:
    "Short write-ups from what we are reading, testing, and building at Halimi Research.",
  alternates: { canonical: "/notes" },
};

export default async function Notes() {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  return <NotesIndexPage notes={getAllNotes()} dict={dict} locale={locale} />;
}
