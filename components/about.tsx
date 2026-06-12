"use client";

import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const EASE = [0.25, 0.1, 0.25, 1] as const;

const SKILLS = [
  {
    category: "BACKEND",
    tags: ["Node.js", "Express", "FastAPI", "Kafka", "BullMQ", "WebSockets", "REST", "GraphQL"],
  },
  {
    category: "AI / ML",
    tags: ["LangChain", "RAG", "Pinecone", "XGBoost", "OpenAI API", "Gemini API"],
  },
  {
    category: "DATABASES",
    tags: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    category: "CLOUD & DEVOPS",
    tags: ["AWS EC2", "Docker", "GCP", "GitHub Actions", "CI/CD"],
  },
];

const PillTag = ({ label }: { label: string }) => (
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

function CountUp({
  to,
  duration,
  format,
}: {
  to: number;
  duration: number;
  format: (n: number) => string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const val = useMotionValue(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(val, to, {
      duration,
      ease: [0.25, 0.1, 0.25, 1],
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = format(Math.round(v));
      },
    });
    return controls.stop;
  }, [inView, to, duration, format, val]);

  return <span ref={ref}>0</span>;
}

export default function About() {
  return (
    <section
      id="about"
      className="py-24"
      style={{
        paddingLeft: "clamp(1.5rem, 8%, 9rem)",
        paddingRight: "clamp(1.5rem, 8%, 9rem)",
      }}
    >
      <div className="flex flex-col md:flex-row gap-16 md:gap-24">
        {/* Left column */}
        <div className="w-full md:w-1/2 relative">
          {/* Decorative number — desktop only */}
          <span
            aria-hidden="true"
            className="hidden md:block absolute -top-8 -left-4 select-none pointer-events-none"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: "120px",
              color: "var(--bg-secondary)",
              lineHeight: 1,
              zIndex: 0,
            }}
          >
            03
          </span>

          {/* Section label */}
          <div className="relative z-10 mb-8 flex items-center gap-4">
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                letterSpacing: "0.25em",
                color: "var(--accent)",
              }}
            >
              ABOUT
            </span>
            <div
              style={{ width: "48px", height: "1px", backgroundColor: "var(--bg-secondary)" }}
            />
          </div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="relative z-10"
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: 1.8,
              color: "var(--text-muted)",
              marginBottom: "40px",
            }}
          >
            Backend and AI engineer who builds production systems end-to-end.
            Currently at Novostack shipping fintech infrastructure for Ruloans —
            Kafka pipelines, credit bureau integrations, invoice microservices.
            On the AI side: RAG agents, ML inference pipelines, async distributed
            architectures. Open to remote backend and AI roles at early-stage
            startups.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.4, ease: EASE, delay: 0.08 }}
            className="flex flex-col gap-4"
          >
            <div
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
                fontSize: "15px",
                color: "var(--text-muted)",
              }}
            >
              <span style={{ color: "var(--accent)" }}>
                $<CountUp to={2000} duration={1.6} format={(n) => n.toLocaleString("en-US")} />
                {" USDC"}
              </span>
              {" in Solana Foundation grants"}
            </div>

            <div
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
                fontSize: "15px",
                color: "var(--text-muted)",
              }}
            >
              <span style={{ color: "var(--accent)" }}>
                <CountUp to={4} duration={1.0} format={(n) => String(n)} />
                {" projects"}
              </span>
              {" in production"}
            </div>

          </motion.div>
        </div>

        {/* Right column: skills grid */}
        <div className="w-full md:w-1/2 flex flex-col gap-8">
          {SKILLS.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, ease: EASE, delay: gi * 0.06 }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  letterSpacing: "0.2em",
                  color: "var(--accent)",
                  display: "block",
                  marginBottom: "10px",
                }}
              >
                {group.category}
              </span>
              <div className="flex flex-wrap gap-2">
                {group.tags.map((tag) => (
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
