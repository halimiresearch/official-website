import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NoteArticle } from "@/components/note-article";
import { getDictionary } from "@/lib/dictionary";
import { getLocale } from "@/lib/get-locale";
import { getAllNotes, getNote } from "@/lib/notes";

export function generateStaticParams() {
  return getAllNotes().map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/notes/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const note = getNote(slug);
  if (!note) return {};
  return {
    title: note.title,
    description: note.description,
    alternates: { canonical: `/notes/${note.slug}` },
  };
}

export default async function NotePage({
  params,
}: PageProps<"/notes/[slug]">) {
  const { slug } = await params;
  if (!/^[a-z0-9-]+$/i.test(slug)) notFound();
  const note = getNote(slug);
  if (!note) notFound();

  const { default: Content } = await import(`@/content/notes/${note.slug}.mdx`);

  const locale = await getLocale();
  return (
    <NoteArticle note={note} dict={getDictionary(locale)} locale={locale}>
      <Content />
    </NoteArticle>
  );
}
