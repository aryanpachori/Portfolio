import { Project } from "@/data/projects";

export default function ProjectImagePlaceholder({ project }: { project: Project }) {
  const initials = project.name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "var(--bg-secondary)",
        position: "relative",
        overflow: "hidden",
        backgroundImage: `
          linear-gradient(rgba(148,137,121,0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(148,137,121,0.05) 1px, transparent 1px)
        `,
        backgroundSize: "32px 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-heading)",
          fontWeight: 700,
          fontSize: "72px",
          color: "rgba(148,137,121,0.25)",
          userSelect: "none",
          lineHeight: 1,
        }}
      >
        {initials}
      </span>

      {/* Tags bottom-left */}
      <div
        style={{
          position: "absolute",
          bottom: "12px",
          left: "14px",
          display: "flex",
          flexWrap: "wrap",
          gap: "4px",
        }}
      >
        {project.tags.slice(0, 4).map((tag) => (
          <span
            key={tag}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "9px",
              letterSpacing: "0.05em",
              backgroundColor: "var(--bg-primary)",
              color: "var(--text-muted)",
              padding: "2px 6px",
              display: "inline-block",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
