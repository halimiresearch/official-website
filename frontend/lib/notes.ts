import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { Locale } from "./i18n";

const NOTES_DIR = path.join(process.cwd(), "content", "notes");

const SLUG_PATTERN = /^[a-z0-9-]+$/i;
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

export type NoteMeta = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
};

function readNoteFile(fileName: string): NoteMeta | null {
  const slug = fileName.replace(/\.mdx?$/, "");
  if (!SLUG_PATTERN.test(slug)) return null;

  let raw: string;
  try {
    raw = fs.readFileSync(path.join(NOTES_DIR, fileName), "utf8");
  } catch {
    return null;
  }
  const { data } = matter(raw);

  if (typeof data.title !== "string" || typeof data.date !== "string") {
    return null;
  }
  if (
    !DATE_PATTERN.test(data.date) ||
    Number.isNaN(Date.parse(`${data.date}T00:00:00`))
  ) {
    return null;
  }

  return {
    slug,
    title: data.title,
    date: data.date,
    description:
      typeof data.description === "string" ? data.description : "",
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
  };
}

// Invalid dates fall back to the raw string so a bad frontmatter date
// never crashes a page.
export function formatNoteDate(
  iso: string,
  locale: Locale,
  options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  },
): string {
  const time = Date.parse(`${iso}T00:00:00`);
  if (Number.isNaN(time)) return iso;
  return new Date(time).toLocaleDateString(
    locale === "id" ? "id-ID" : "en-US",
    options,
  );
}

export function getNoteYear(iso: string): string {
  const time = Date.parse(`${iso}T00:00:00`);
  return Number.isNaN(time) ? iso : String(new Date(time).getFullYear());
}

export function getAllNotes(): NoteMeta[] {
  if (!fs.existsSync(NOTES_DIR)) return [];
  return fs
    .readdirSync(NOTES_DIR)
    .filter((f) => /\.mdx?$/.test(f))
    .map(readNoteFile)
    .filter((n): n is NoteMeta => n !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getNote(slug: string): NoteMeta | null {
  if (!SLUG_PATTERN.test(slug)) return null;
  for (const ext of [".mdx", ".md"]) {
    const file = path.join(NOTES_DIR, `${slug}${ext}`);
    if (fs.existsSync(file)) return readNoteFile(`${slug}${ext}`);
  }
  return null;
}
