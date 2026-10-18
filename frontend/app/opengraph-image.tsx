import { ImageResponse } from "next/og";

export const alt = "Halimi Research, Research and Innovation Company";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#ffffff",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <svg width="72" height="72" viewBox="0 0 32 32" fill="none">
            <path
              d="M4 16c5.5-5.5 15-5.5 23-1l-5 4.5L10 14"
              stroke="#d42a20"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 16c5.5 5.5 15 5.5 23 1"
              stroke="#d42a20"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11 16c1.8-1.4 3.4-1.4 5 0-1.6 1.4-3.2 1.4-5 0Z"
              stroke="#d42a20"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
          <div
            style={{
              fontSize: 44,
              fontWeight: 800,
              color: "#111111",
              letterSpacing: "-0.02em",
            }}
          >
            HalimiResearch
          </div>
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 64,
            fontWeight: 800,
            color: "#111111",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            maxWidth: 900,
          }}
        >
          Building resilient technology through research.
        </div>
        <div
          style={{
            marginTop: 40,
            width: 64,
            height: 4,
            background: "#d42a20",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
