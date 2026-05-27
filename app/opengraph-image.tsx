import { ImageResponse } from "next/og";

export const alt = "KainosEdge research, data, and policy consulting preview";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#fff8ed",
          color: "#2a1f14",
          display: "flex",
          height: "100%",
          width: "100%",
          padding: "64px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            border: "1px solid #e2d8ce",
            borderRadius: "28px",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "space-between",
            overflow: "hidden",
            padding: "56px",
            position: "relative",
            width: "100%",
          }}
        >
          <div
            style={{
              background: "#fdebc8",
              borderRadius: "999px",
              height: "420px",
              position: "absolute",
              right: "-120px",
              top: "-140px",
              width: "420px",
            }}
          />
          <div
            style={{
              background: "#c97b2a",
              borderRadius: "999px",
              bottom: "-90px",
              height: "220px",
              opacity: 0.24,
              position: "absolute",
              right: "120px",
              width: "220px",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <div
              style={{
                color: "#864a0e",
                fontSize: "30px",
                fontWeight: 800,
                letterSpacing: "0.04em",
              }}
            >
              KainosEdge
            </div>
            <div
              style={{
                display: "flex",
                fontSize: "72px",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                lineHeight: 1.03,
                maxWidth: "800px",
              }}
            >
              Research, Data & Policy Consulting
            </div>
            <div
              style={{
                color: "#5a5248",
                display: "flex",
                fontSize: "30px",
                lineHeight: 1.35,
                maxWidth: "790px",
              }}
            >
              Evidence-based reports, curated datasets, and expert insight for
              institutional decision-making across Africa.
            </div>
          </div>

          <div
            style={{
              alignItems: "center",
              color: "#864a0e",
              display: "flex",
              fontSize: "24px",
              fontWeight: 700,
              gap: "18px",
            }}
          >
            <span>Reports</span>
            <span style={{ color: "#c97b2a" }}>•</span>
            <span>Datasets</span>
            <span style={{ color: "#c97b2a" }}>•</span>
            <span>Consultancy</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
