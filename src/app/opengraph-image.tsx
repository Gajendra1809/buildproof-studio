import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "BuildProof Studio — Prove your software idea before you build it";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logo = await readFile(join(process.cwd(), "public/logo.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#08090a",
          padding: "72px 80px",
          color: "#f3f1ec",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex" }}>
          <img src={logoSrc} width={280} height={92} alt="BuildProof Studio" />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 64,
              lineHeight: 1.1,
              letterSpacing: "-0.04em",
              fontWeight: 500,
              maxWidth: 980,
            }}
          >
            Have a software idea? Prove it before you build it.
          </div>
          <div style={{ fontSize: 26, color: "#8f8a82", maxWidth: 820 }}>
            Working prototypes in 14–21 days. Prove the idea first.
          </div>
        </div>
        <div style={{ display: "flex", gap: 16, color: "#d4a574", fontSize: 20 }}>
          <span>Idea</span>
          <span>→</span>
          <span>Prototype</span>
          <span>→</span>
          <span>Validation</span>
          <span>→</span>
          <span>MVP</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
