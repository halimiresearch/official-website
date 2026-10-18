import { describe, expect, test } from "bun:test";
import { getDictionary } from "./dictionary";
import { getNote } from "./notes";

function keys(value: unknown, prefix = ""): string[] {
  if (Array.isArray(value)) {
    expect(value.length).toBeGreaterThan(0);
    return value.flatMap((item, i) => keys(item, `${prefix}[${i}]`));
  }
  if (typeof value === "object" && value !== null) {
    const entries = Object.entries(value);
    expect(entries.length).toBeGreaterThan(0);
    return entries.flatMap(([k, v]) => [`${prefix}.${k}`, ...keys(v, `${prefix}.${k}`)]);
  }
  return [];
}

describe("dictionaries", () => {
  test("en and id share the same shape", () => {
    const enKeys = keys(getDictionary("en")).sort();
    const idKeys = keys(getDictionary("id")).sort();
    expect(idKeys).toEqual(enKeys);
  });

  test("every nav target is internal", () => {
    for (const locale of ["en", "id"] as const) {
      for (const group of getDictionary(locale).header.nav) {
        for (const item of group.children) {
          expect(item.href.startsWith("/")).toBe(true);
        }
      }
    }
  });

  test("every product links somewhere real", () => {
    const dict = getDictionary("en");
    expect(dict.products.items.length).toBeGreaterThan(0);
    for (const item of dict.products.items) {
      expect(item.slug.length).toBeGreaterThan(0);
      expect(item.url.startsWith("https://")).toBe(true);
      if (item.noteSlug) expect(getNote(item.noteSlug)).not.toBeNull();
    }
  });
});
