"use client";

import { useEffect, useRef } from "react";

type FishGlyphProps = {
  x: number;
  y: number;
  r?: number;
  s?: number;
  className?: string;
};

function FishGlyph({ x, y, r = 0, s = 1, className }: FishGlyphProps) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`}>
      <path
        d="M-6 0c3-3 8-3 12 0-4 3-9 3-12 0Zm12 0 4-3v6l-4-3Zm-8.5 0c.8-.6 1.6-.6 2.4 0-.8.6-1.6.6-2.4 0Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
        className={className}
      />
    </g>
  );
}

const FAINT = "stroke-faint/50";

function LoneFish() {
  return (
    <>
      <FishGlyph x={180} y={120} r={-18} s={0.9} className={FAINT} />
      <FishGlyph x={1020} y={90} r={24} s={0.8} className={FAINT} />
      <FishGlyph x={90} y={420} r={10} s={0.7} className={FAINT} />
      <FishGlyph x={1120} y={380} r={-30} s={0.9} className={FAINT} />
      <FishGlyph x={320} y={700} r={-8} s={0.8} className={FAINT} />
      <FishGlyph x={120} y={220} r={-12} s={0.8} className={FAINT} />
      <FishGlyph x={150} y={245} r={-6} s={0.7} className={FAINT} />
    </>
  );
}

function UpperSchool() {
  return (
    <>
      <FishGlyph x={860} y={180} r={18} s={0.85} className={FAINT} />
      <FishGlyph x={895} y={165} r={14} s={0.8} className={FAINT} />
      <FishGlyph x={930} y={185} r={20} s={0.85} className={FAINT} />
      <FishGlyph x={900} y={205} r={16} s={0.75} className={FAINT} />
      <FishGlyph x={960} y={160} r={22} s={0.8} className={FAINT} />
      <FishGlyph x={880} y={150} r={12} s={0.7} className={FAINT} />
      <FishGlyph x={930} y={150} r={16} s={0.85} className="stroke-accent" />
    </>
  );
}

function LowerSchool() {
  return (
    <>
      <FishGlyph x={940} y={600} r={-14} s={0.85} className={FAINT} />
      <FishGlyph x={975} y={585} r={-10} s={0.8} className={FAINT} />
      <FishGlyph x={1010} y={605} r={-16} s={0.85} className={FAINT} />
      <FishGlyph x={1045} y={590} r={-8} s={0.8} className={FAINT} />
      <FishGlyph x={1080} y={610} r={-12} s={0.85} className={FAINT} />
      <FishGlyph x={955} y={630} r={-10} s={0.75} className={FAINT} />
      <FishGlyph x={990} y={645} r={-14} s={0.85} className={FAINT} />
      <FishGlyph x={1025} y={630} r={-6} s={0.8} className={FAINT} />
      <FishGlyph x={1060} y={650} r={-10} s={0.85} className={FAINT} />
      <FishGlyph x={1095} y={635} r={-14} s={0.75} className={FAINT} />
      <FishGlyph x={975} y={665} r={-8} s={0.8} className={FAINT} />
      <FishGlyph x={1010} y={680} r={-12} s={0.85} className={FAINT} />
      <FishGlyph x={1045} y={668} r={-6} s={0.8} className={FAINT} />
      <FishGlyph x={1080} y={685} r={-10} s={0.75} className={FAINT} />
      <FishGlyph x={995} y={710} r={-8} s={0.8} className={FAINT} />
      <FishGlyph x={1030} y={720} r={-12} s={0.75} className={FAINT} />
      <FishGlyph x={1065} y={708} r={-6} s={0.8} className={FAINT} />
      <FishGlyph x={1100} y={725} r={-10} s={0.7} className={FAINT} />
    </>
  );
}

/**
 * Decorative school-of-fish scatter. Fish drift slowly on their own and the
 * two schools shift gently with the pointer. Fully disabled for
 * reduced-motion users.
 */
export function FishField() {
  const rootRef = useRef<SVGSVGElement>(null);
  const upperRef = useRef<SVGGElement>(null);
  const lowerRef = useRef<SVGGElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let raf = 0;
    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;

    const onMove = (e: PointerEvent) => {
      tx = e.clientX / window.innerWidth - 0.5;
      ty = e.clientY / window.innerHeight - 0.5;
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const tick = () => {
      cx += (tx - cx) * 0.05;
      cy += (ty - cy) * 0.05;
      upperRef.current?.setAttribute(
        "transform",
        `translate(${(cx * 30).toFixed(2)} ${(cy * 20).toFixed(2)})`,
      );
      lowerRef.current?.setAttribute(
        "transform",
        `translate(${(cx * -22).toFixed(2)} ${(cy * -14).toFixed(2)})`,
      );
      raf =
        Math.abs(tx - cx) > 0.001 || Math.abs(ty - cy) > 0.001
          ? requestAnimationFrame(tick)
          : 0;
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <svg
      ref={rootRef}
      viewBox="0 0 1200 800"
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <g className="fish-drift-slow">
        <LoneFish />
      </g>
      <g ref={upperRef}>
        <g className="fish-drift">
          <UpperSchool />
        </g>
      </g>
      <g ref={lowerRef}>
        <g className="fish-drift-slow">
          <LowerSchool />
        </g>
      </g>
    </svg>
  );
}
