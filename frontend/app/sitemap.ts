import type { MetadataRoute } from "next";
import { SITE_URL, site } from "@/content/site";
import { getAllNotes } from "@/lib/notes";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/products",
    "/notes",
    "/careers",
    "/contact",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));

  const productRoutes = site.products.items.map((item) => ({
    url: `${SITE_URL}/products/${item.slug}`,
    lastModified: new Date(),
  }));

  const noteRoutes = getAllNotes().map((note) => ({
    url: `${SITE_URL}/notes/${note.slug}`,
    lastModified: new Date(`${note.date}T00:00:00`),
  }));

  return [...staticRoutes, ...productRoutes, ...noteRoutes];
}
