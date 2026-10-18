import { describe, expect, test } from "bun:test";
import {
  formatNoteDate,
  getAllNotes,
  getNote,
  getNoteYear,
} from "./notes";

describe("getAllNotes", () => {
  test("returns notes sorted newest first with valid shape", () => {
    const notes = getAllNotes();
    expect(notes.length).toBeGreaterThan(0);
    for (const note of notes) {
      expect(note.slug).toMatch(/^[a-z0-9-]+$/i);
      expect(note.title.length).toBeGreaterThan(0);
      expect(note.date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    }
    const dates = notes.map((n) => n.date);
    expect([...dates].sort().reverse()).toEqual(dates);
  });
});

describe("getNote", () => {
  test("rejects traversal and unknown slugs", () => {
    expect(getNote("..")).toBeNull();
    expect(getNote("../package")).toBeNull();
    expect(getNote("no-such-note")).toBeNull();
  });

  test("round-trips a known slug", () => {
    const [first] = getAllNotes();
    expect(getNote(first.slug)).toEqual(first);
  });
});

describe("date helpers", () => {
  test("fall back to raw input on invalid dates", () => {
    expect(formatNoteDate("not-a-date", "en")).toBe("not-a-date");
    expect(getNoteYear("not-a-date")).toBe("not-a-date");
  });

  test("apply the requested locale", () => {
    const en = formatNoteDate("2026-01-15", "en");
    const id = formatNoteDate("2026-01-15", "id");
    expect(en).toContain("2026");
    expect(id).toContain("2026");
    expect(en).not.toBe(id);
    expect(getNoteYear("2026-01-15")).toBe("2026");
  });
});
