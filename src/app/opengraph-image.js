import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Bineet Barthwal · Product & Brand Designer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "#ffffff",
          padding: "80px 96px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            background: "#3B5BFF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: "20px",
            fontWeight: "700",
            marginBottom: "32px",
          }}
        >
          BB
        </div>
        <div
          style={{
            fontSize: "72px",
            fontWeight: "800",
            color: "#3B5BFF",
            lineHeight: "1.0",
            letterSpacing: "-0.04em",
            marginBottom: "16px",
          }}
        >
          Bineet Barthwal
        </div>
        <div
          style={{
            fontSize: "32px",
            fontWeight: "400",
            color: "#52525B",
            letterSpacing: "-0.01em",
          }}
        >
          Product &amp; Brand Designer
        </div>
        <div
          style={{
            marginTop: "auto",
            fontSize: "20px",
            color: "#A1A1AA",
            fontWeight: "400",
          }}
        >
          bineet.in
        </div>
      </div>
    ),
    { ...size }
  );
}
