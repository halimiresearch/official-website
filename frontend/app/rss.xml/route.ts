import { SITE_URL, site } from "@/content/site";
import { getAllNotes } from "@/lib/notes";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function GET() {
  const items = getAllNotes()
    .map(
      (note) => `    <item>
      <title>${escapeXml(note.title)}</title>
      <link>${SITE_URL}/notes/${note.slug}</link>
      <guid>${SITE_URL}/notes/${note.slug}</guid>
      <pubDate>${new Date(`${note.date}T00:00:00Z`).toUTCString()}</pubDate>
      ${note.description ? `<description>${escapeXml(note.description)}</description>` : ""}
    </item>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(`${site.brand.name}, Research Notes`)}</title>
    <link>${SITE_URL}/notes</link>
    <description>${escapeXml(site.seo.description)}</description>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { "Content-Type": "text/xml; charset=utf-8" },
  });
}
