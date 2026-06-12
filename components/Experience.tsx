"use client";

import { motion } from "framer-motion";

const EASE = [0.25, 0.1, 0.25, 1] as const;

const ENTRIES = [
  {
    company: "NOVOSTACK",
    role: "Backend Engineer (Full Stack)",
    date: "Nov 2024 – Present",
    location: "Noida, India",
    tag: "CURRENT",
    bullets: [
      "Architected and shipped production microservices for the Ruloans CRM Platform — a fintech lending ecosystem covering DSA onboarding, expense management, MIS reporting, and invoice workflows serving thousands of loan agents.",
      "Delivered an Invoice Processing Microservice with e-signing automation and bi-directional database synchronization across services, replacing a manual reconciliation workflow and reducing processing time from hours to seconds.",
      "Engineered the Bureau Service for HelloTrade (IndiaMART group) — Experian credit API integration with Redis token caching, automated report enrichment pipelines, and analytics generation for B2B credit assessment at scale.",
      "Built the complete backend for Compass Visa Platform (Leverage Edu) — application workflows, document processing, and OCR/verification service integrations.",
      "Built a high-throughput Notification Microservice on Apache Kafka with consumer-group topology fanning out to email, SMS, WhatsApp, and push channels simultaneously; guaranteed at-least-once delivery under burst load.",
    ],
    stack: ["Node.js", "TypeScript", "Kafka", "Redis", "PostgreSQL", "Docker", "AWS EC2"],
  },
  {
    company: "SUPERTEAM INDIA",
    role: "Ecosystem Contributor",
    date: "Aug 2024 – Present",
    location: null,
    tag: "REMOTE",
    bullets: [
      "Contributed to Solana ecosystem growth by building open-source tooling and participating in grant-funded projects, receiving 1,000 USDC from the Solana Foundation.",
    ],
    stack: ["Solana", "Web3.js"],
  },
];

export const PillTag = ({ label }: { label: string }) => (
  <span
    style={{
      fontFamily: "var(--font-mono)",
      fontSize: "10px",
      letterSpacing: "0.05em",
      backgroundColor: "var(--bg-secondary)",
      color: "var(--text-primary)",
      padding: "3px 8px",
      display: "inline-block",
    }}
  >
    {label}
  </span>
);

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24"
      style={{
        paddingLeft: "clamp(1.5rem, 8%, 9rem)",
        paddingRight: "clamp(1.5rem, 8%, 9rem)",
      }}
    >
      {/* Section header */}
      <div className="mb-16 flex items-center gap-4">
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            letterSpacing: "0.25em",
            color: "var(--accent)",
          }}
        >
          EXPERIENCE
        </span>
        <div
          style={{ width: "48px", height: "1px", backgroundColor: "var(--bg-secondary)" }}
        />
      </div>

      {/* Two-column layout */}
      <div className="flex flex-col md:flex-row gap-12 md:gap-0">
        {/* Left: timeline — desktop only, static (no looping animation per audit) */}
        <div
          className="hidden md:flex flex-col items-center"
          style={{ width: "30%", paddingTop: "6px" }}
        >
          <div className="relative flex flex-col items-center w-full">
            {ENTRIES.map((_, i) => (
              <div
                key={i}
                className="flex flex-col items-center"
                style={{ flex: i < ENTRIES.length - 1 ? 1 : 0 }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: "var(--accent)",
                    flexShrink: 0,
                  }}
                />
                {i < ENTRIES.length - 1 && (
                  <div
                    style={{
                      width: "1px",
                      flex: 1,
                      borderLeft: "1px dashed var(--bg-secondary)",
                      margin: "8px 0",
                      minHeight: "200px",
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right: entries */}
        <div className="flex flex-col gap-16 w-full md:w-[70%]">
          {ENTRIES.map((entry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, ease: EASE, delay: i * 0.08 }}
              style={{ willChange: "transform" }}
            >
              {/* Company + date (space-between on mobile) */}
              <div className="flex items-start justify-between gap-2 mb-1 flex-wrap">
                <div className="flex items-baseline gap-4 flex-wrap">
                  <span
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 600,
                      fontSize: "18px",
                      color: "var(--text-primary)",
                    }}
                  >
                    {entry.company}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 400,
                      fontSize: "14px",
                      color: "var(--text-muted)",
                    }}
                  >
                    {entry.role}
                  </span>
                </div>
                <span
                  className="md:hidden"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    color: "var(--text-muted)",
                    flexShrink: 0,
                  }}
                >
                  {entry.date}
                </span>
              </div>

              {/* Meta row */}
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span
                  className="hidden md:inline"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    color: "var(--text-muted)",
                  }}
                >
                  {entry.date}
                </span>
                {entry.location && (
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      color: "var(--text-muted)",
                    }}
                  >
                    {entry.location}
                  </span>
                )}
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    letterSpacing: "0.1em",
                    color: "var(--accent)",
                    border: "1px solid var(--accent)",
                    padding: "1px 6px",
                  }}
                >
                  {entry.tag}
                </span>
              </div>

              {/* Bullets */}
              <ul className="flex flex-col gap-2 mb-5">
                {entry.bullets.map((b, j) => (
                  <li
                    key={j}
                    className="flex gap-3"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "14px",
                      lineHeight: 1.7,
                      color: "var(--text-muted)",
                    }}
                  >
                    <span style={{ color: "var(--accent)", flexShrink: 0, marginTop: "2px" }}>
                      —
                    </span>
                    {b}
                  </li>
                ))}
              </ul>

              {/* Stack tags */}
              <div className="flex flex-wrap gap-2">
                {entry.stack.map((tag) => (
                  <PillTag key={tag} label={tag} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
