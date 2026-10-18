"use client";

import { useEffect } from "react";

/**
 * Closes any open <details> dropdown in the header when the user clicks
 * outside of it or presses Escape. The dropdowns themselves are plain
 * <details> elements; this only handles dismissal.
 */
export function HeaderDropdownDismiss() {
  useEffect(() => {
    const onPointerDown = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest("details")) return;
      document
        .querySelectorAll<HTMLDetailsElement>("header details[open]")
        .forEach((d) => d.removeAttribute("open"));
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      document
        .querySelectorAll<HTMLDetailsElement>("header details[open]")
        .forEach((d) => d.removeAttribute("open"));
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return null;
}
