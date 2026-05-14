import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "EmpruntCalcul - Simulateur de capacité d'emprunt immobilier gratuit";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 80px",
          background: "linear-gradient(135deg, #020617 0%, #00150e 55%, #001f15 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Radial glow top-right */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -80,
            width: 700,
            height: 700,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(38,142,107,0.18) 0%, transparent 70%)",
          }}
        />
        {/* Radial glow bottom-left */}
        <div
          style={{
            position: "absolute",
            bottom: -150,
            left: -100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(0,61,43,0.35) 0%, transparent 70%)",
          }}
        />

        {/* Header row - logo + brand */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
          }}
        >
          <div
            style={{
              width: 60,
              height: 60,
              borderRadius: 14,
              background: "#003d2b",
              border: "2px solid rgba(128,192,170,0.45)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              fontSize: 22,
              fontWeight: 900,
              fontFamily: "system-ui",
              letterSpacing: "-1px",
            }}
          >
            CE
          </div>
          <span
            style={{
              color: "#ffffff",
              fontSize: 26,
              fontWeight: 700,
              fontFamily: "system-ui",
              letterSpacing: "-0.5px",
            }}
          >
            EmpruntCalcul
          </span>
        </div>

        {/* Main content */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignSelf: "flex-start",
              padding: "8px 20px",
              borderRadius: 100,
              background: "rgba(0,61,43,0.6)",
              border: "1px solid rgba(128,192,170,0.3)",
              color: "#80c0aa",
              fontSize: 14,
              fontWeight: 600,
              fontFamily: "system-ui",
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            Outil gratuit · Règle HCSF 2026 · Calcul instantané
          </div>

          {/* Heading */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 0,
            }}
          >
            <span
              style={{
                color: "#ffffff",
                fontSize: 72,
                fontWeight: 800,
                fontFamily: "system-ui",
                lineHeight: 1.1,
                letterSpacing: "-2px",
              }}
            >
              Calculez votre
            </span>
            <span
              style={{
                color: "#80c0aa",
                fontSize: 72,
                fontWeight: 800,
                fontFamily: "system-ui",
                lineHeight: 1.1,
                letterSpacing: "-2px",
              }}
            >
              capacité d&apos;emprunt
            </span>
            <span
              style={{
                color: "#ffffff",
                fontSize: 72,
                fontWeight: 800,
                fontFamily: "system-ui",
                lineHeight: 1.1,
                letterSpacing: "-2px",
              }}
            >
              immobilier
            </span>
          </div>
        </div>

        {/* Footer row - pills + URL */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", gap: 12 }}>
            {["✓ Gratuit", "✓ Sans inscription", "✓ Formule bancaire officielle"].map(
              (tag) => (
                <div
                  key={tag}
                  style={{
                    padding: "8px 20px",
                    borderRadius: 100,
                    border: "1px solid rgba(128,192,170,0.25)",
                    color: "rgba(255,255,255,0.72)",
                    fontSize: 16,
                    fontFamily: "system-ui",
                    background: "rgba(0,61,43,0.35)",
                  }}
                >
                  {tag}
                </div>
              )
            )}
          </div>
          <span
            style={{
              color: "rgba(255,255,255,0.35)",
              fontSize: 16,
              fontFamily: "system-ui",
            }}
          >
            empruntcalcul.fr
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
