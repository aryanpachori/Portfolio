"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import ProjectImagePlaceholder from "@/components/ProjectImagePlaceholder";
import { FEATURED_PROJECTS, MORE_PROJECTS, Project } from "@/data/projects";

const EASE = [0.25, 0.1, 0.25, 1] as const;

const PillTag = ({ label }: { label: string }) => (
  <span
    style={{
      fontFamily: "var(--font-mono)",
      fontSize: "10px",
      letterSpacing: "0.05em",
      backgroundColor: "var(--bg-primary)",
      color: "var(--text-primary)",
      padding: "3px 8px",
      display: "inline-block",
    }}
  >
    {label}
  </span>
);

function ProjectCard({ p, i }: { p: Project; i: number }) {
  const [imgError, setImgError] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4, ease: EASE, delay: i * 0.08 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: "var(--bg-secondary)",
        border: `1px solid ${hovered ? "var(--accent)" : "transparent"}`,
        transition: "border-color 250ms ease",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* ── Image area ── */}
      <div
        style={{
          height: "200px",
          position: "relative",
          overflow: "hidden",
          flexShrink: 0,
          backgroundColor: "var(--bg-primary)",
        }}
      >
        {!imgError ? (
          <>
            <img
              src={p.image}
              alt={p.name}
              onError={() => setImgError(true)}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top center",
                display: "block",
                transform: hovered ? "scale(1.04)" : "scale(1)",
                transition: "transform 400ms ease",
              }}
            />
            {/* Bottom gradient blend */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to bottom, transparent 50%, var(--bg-secondary) 100%)",
                pointerEvents: "none",
              }}
            />
          </>
        ) : (
          <ProjectImagePlaceholder project={p} />
        )}
      </div>

      {/* ── Content area ── */}
      <div style={{ padding: "24px 28px", display: "flex", flexDirection: "column", gap: "12px", flex: 1 }}>
        {/* Number + name + links */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-baseline gap-3 flex-wrap">
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                color: "var(--accent)",
                flexShrink: 0,
              }}
            >
              {p.id}
            </span>
            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
                fontSize: "18px",
                color: "var(--text-primary)",
                lineHeight: 1.1,
              }}
            >
              {p.name}
            </span>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            {p.liveUrl && (
              <a
                href={p.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--text-muted)", transition: "color 200ms", display: "flex" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              >
                <FiExternalLink size={15} />
              </a>
            )}
            {p.githubUrl && (
              <a
                href={p.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--text-muted)", transition: "color 200ms", display: "flex" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              >
                <FiGithub size={15} />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "13px",
            lineHeight: 1.65,
            color: "var(--text-muted)",
          }}
        >
          {p.description}
        </p>

        {/* Bullets — hidden on mobile */}
        <ul className="hidden sm:flex flex-col gap-1.5">
          {p.bullets.slice(0, 2).map((b, j) => (
            <li
              key={j}
              className="flex gap-2"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "12px",
                lineHeight: 1.6,
                color: "var(--text-muted)",
              }}
            >
              <span style={{ color: "var(--accent)", flexShrink: 0 }}>—</span>
              {b}
            </li>
          ))}
        </ul>

        {/* Footer: tags + year */}
        <div
          className="flex items-center justify-between flex-wrap gap-2 mt-auto pt-2"
          style={{ borderTop: "1px solid var(--bg-primary)" }}
        >
          <div className="flex flex-wrap gap-1.5">
            {p.tags.slice(0, 5).map((t) => (
              <PillTag key={t} label={t} />
            ))}
          </div>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              color: "var(--accent)",
              flexShrink: 0,
            }}
          >
            {p.year}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24"
      style={{
        paddingLeft: "clamp(1.5rem, 8%, 9rem)",
        paddingRight: "clamp(1.5rem, 8%, 9rem)",
      }}
    >
      {/* Header */}
      <div className="mb-12 flex items-center gap-4">
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            letterSpacing: "0.25em",
            color: "var(--accent)",
          }}
        >
          SELECTED WORK
        </span>
        <div
          style={{ width: "48px", height: "1px", backgroundColor: "var(--bg-secondary)" }}
        />
      </div>

      {/* 2-column grid on md+, single on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
        {FEATURED_PROJECTS.map((p, i) => (
          <ProjectCard key={p.id} p={p} i={i} />
        ))}
      </div>

      {/* More projects */}
      {MORE_PROJECTS.length > 0 && (
        <>
          <div className="mb-8 flex items-center gap-4">
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                letterSpacing: "0.25em",
                color: "var(--text-muted)",
              }}
            >
              MORE PROJECTS
            </span>
            <div
              style={{ width: "48px", height: "1px", backgroundColor: "var(--bg-secondary)" }}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {MORE_PROJECTS.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.35, ease: EASE, delay: i * 0.06 }}
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  padding: "20px 24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <div className="flex items-center justify-between">
                  <span
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 600,
                      fontSize: "14px",
                      color: "var(--text-primary)",
                    }}
                  >
                    {p.name}
                  </span>
                  <div className="flex items-center gap-2">
                    {p.liveUrl && (
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "var(--text-muted)", transition: "color 200ms", display: "flex" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                      >
                        <FiExternalLink size={13} />
                      </a>
                    )}
                    {p.githubUrl && (
                      <a
                        href={p.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "var(--text-muted)", transition: "color 200ms", display: "flex" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                      >
                        <FiGithub size={13} />
                      </a>
                    )}
                  </div>
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "12px",
                    lineHeight: 1.6,
                    color: "var(--text-muted)",
                  }}
                >
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {p.tags.map((t) => <PillTag key={t} label={t} />)}
                </div>
              </motion.div>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
