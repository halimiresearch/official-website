"use client";

import Link from "next/link";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, -apple-system, sans-serif",
          background: "#ffffff",
          color: "#111111",
        }}
      >
        <div style={{ textAlign: "center", padding: 24, maxWidth: 480 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.2em" }}>
            500
          </p>
          <h1 style={{ fontSize: 28, margin: "12px 0 0" }}>
            Something went wrong.
          </h1>
          <p style={{ color: "#5c5c5c", lineHeight: 1.7 }}>
            Please try again, or return to familiar waters.
          </p>
          <div
            style={{
              marginTop: 24,
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <button
              type="button"
              onClick={() => reset()}
              style={{
                padding: "12px 28px",
                background: "#111111",
                color: "#ffffff",
                border: "none",
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              Try again
            </button>
            <Link
              href="/"
              style={{
                padding: "12px 28px",
                border: "1px solid #e6e6e6",
                color: "#111111",
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              Back to home
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
