"use client";

const ITEMS = [
  "Node.js",
  "TypeScript",
  "Apache Kafka",
  "Python",
  "PostgreSQL",
  "Redis",
  "Docker",
  "AWS",
  "FastAPI",
  "LangChain",
  "Pinecone",
  "XGBoost",
  "Next.js",
  "BullMQ",
  "Prisma",
  "GitHub Actions",
  "REST APIs",
  "Microservices",
];

export default function TechStack() {
  const combined = [...ITEMS, ...ITEMS];

  return (
    <div
      style={{
        backgroundColor: "var(--bg-primary)",
        borderTop: "1px solid var(--bg-secondary)",
        borderBottom: "1px solid var(--bg-secondary)",
        padding: "20px 0",
        overflow: "hidden",
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div
        className="marquee-track"
        style={{
          display: "flex",
          alignItems: "center",
          whiteSpace: "nowrap",
          width: "max-content",
          animation: "scrollLeft 35s linear infinite",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.animationPlayState = "paused")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.animationPlayState = "running")
        }
      >
        {combined.map((item, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center" }}>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                letterSpacing: "0.1em",
                color: "var(--text-muted)",
              }}
            >
              {item}
            </span>
            <span
              aria-hidden="true"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "var(--accent)",
                margin: "0 16px",
              }}
            >
              ·
            </span>
          </span>
        ))}
      </div>

      <style>{`
        @keyframes scrollLeft {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
