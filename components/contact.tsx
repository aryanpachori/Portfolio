"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Briefcase, Zap, Rocket, Building2 } from "lucide-react";
import { FiLinkedin, FiGithub } from "react-icons/fi";

const EASE = [0.25, 0.1, 0.25, 1] as const;

const CARDS = [
  {
    icon: Briefcase,
    title: "Hire Me",
    label: "HIRE ME",
    body: "Full-time remote backend or AI engineer roles at early-stage startups.",
    cta: "Send JD →",
    subject: "Backend Engineer Role",
  },
  {
    icon: Zap,
    title: "Contract Work",
    label: "CONTRACT / GIGS",
    body: "Backend APIs, microservices, AI integrations, or short-term contracts. Available for scoped projects.",
    cta: "Let's Scope It →",
    subject: "Contract Project",
  },
  {
    icon: Rocket,
    title: "Building Something?",
    label: "BUILDING SOMETHING",
    body: "Working on an interesting startup or side project? Always happy to talk shop.",
    cta: "Hit Me Up →",
    subject: "Let's Build",
  },
];

function Toast({ visible }: { visible: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 8 }}
      transition={{ duration: 0.2, ease: EASE }}
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        backgroundColor: "var(--bg-secondary)",
        color: "var(--text-primary)",
        fontFamily: "var(--font-mono)",
        fontSize: "12px",
        padding: "10px 18px",
        pointerEvents: "none",
        zIndex: 9998,
      }}
    >
      Copied!
    </motion.div>
  );
}

export default function Contact() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [toastVisible, setToastVisible] = useState(false);

  function copyEmail() {
    navigator.clipboard.writeText("aryanpachori03@gmail.com").then(() => {
      setToastVisible(true);
      setTimeout(() => setToastVisible(false), 2000);
    });
  }

  return (
    <>
      <section
        id="contact"
        style={{
          backgroundColor: "var(--bg-primary)",
          paddingTop: "140px",
          paddingBottom: "140px",
          paddingLeft: "clamp(1.5rem, 8%, 9rem)",
          paddingRight: "clamp(1.5rem, 8%, 9rem)",
        }}
      >
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4, ease: EASE }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            backgroundColor: "var(--bg-secondary)",
            padding: "6px 14px",
            marginBottom: "40px",
          }}
        >
          <motion.span
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: "#4CAF50",
              display: "inline-block",
              willChange: "transform",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              color: "var(--accent)",
              letterSpacing: "0.12em",
            }}
          >
            OPEN TO WORK
          </span>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4, ease: EASE, delay: 0.05 }}
          style={{ marginBottom: "20px" }}
        >
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: "clamp(36px, 5vw, 72px)",
              lineHeight: 0.95,
              margin: 0,
            }}
          >
            <span style={{ color: "var(--text-primary)", display: "block" }}>
              GOT SOMETHING
            </span>
            <span style={{ color: "var(--accent)", display: "block" }}>EXCITING?</span>
          </h2>
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4, ease: EASE, delay: 0.1 }}
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 400,
            fontSize: "17px",
            color: "var(--text-muted)",
            maxWidth: "520px",
            lineHeight: 1.7,
            marginBottom: "56px",
          }}
        >
          Whether you&apos;re hiring a backend engineer, have a contract project,
          or building something interesting and want a technical co-builder — I&apos;m
          all ears.
        </motion.p>

        {/* Three cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          style={{ marginBottom: "48px" }}
        >
          {CARDS.map((card, i) => {
            const Icon = card.icon;
            const isHov = hoveredCard === i;
            return (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, ease: EASE, delay: i * 0.1 }}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  border: `1px solid ${isHov ? "var(--accent)" : "transparent"}`,
                  padding: "24px",
                  transition: "border-color 250ms ease",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  willChange: "transform",
                }}
              >
                {/* Label */}
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    letterSpacing: "0.18em",
                    color: "var(--accent)",
                  }}
                >
                  {card.label}
                </span>

                {/* Icon + title */}
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <Icon size={20} color="var(--accent)" strokeWidth={1.5} />
                  <span
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 600,
                      fontSize: "16px",
                      color: "var(--text-primary)",
                    }}
                  >
                    {card.title}
                  </span>
                </div>

                {/* Body */}
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "14px",
                    lineHeight: 1.65,
                    color: "var(--text-muted)",
                    flex: 1,
                    margin: 0,
                  }}
                >
                  {card.body}
                </p>

                {/* CTA */}
                <a
                  href={`mailto:aryanpachori03@gmail.com?subject=${encodeURIComponent(card.subject)}`}
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 600,
                    fontSize: "13px",
                    letterSpacing: "0.05em",
                    color: isHov ? "var(--text-primary)" : "var(--accent)",
                    textDecoration: "none",
                    transition: "color 200ms ease",
                    marginTop: "4px",
                  }}
                >
                  {card.cta}
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            backgroundColor: "var(--bg-secondary)",
            marginBottom: "40px",
          }}
        />

        {/* Direct email + resume */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4, ease: EASE, delay: 0.15 }}
          style={{ display: "flex", flexDirection: "column", gap: "16px" }}
        >
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 400,
              fontSize: "14px",
              color: "var(--text-muted)",
            }}
          >
            Or just email directly:
          </span>

          <button
            onClick={copyEmail}
            data-cursor="text"
            data-cursor-label="COPY"
            className="email-cta"
            style={{
              all: "unset",
              fontFamily: "var(--font-heading)",
              fontWeight: 600,
              fontSize: "clamp(16px, 2.5vw, 22px)",
              color: "var(--accent)",
              cursor: "pointer",
              position: "relative",
              display: "inline-block",
              width: "fit-content",
            }}
          >
            aryanpachori03@gmail.com
            <span
              className="email-underline"
              style={{
                position: "absolute",
                left: 0,
                bottom: "-2px",
                height: "2px",
                width: "0%",
                backgroundColor: "var(--accent)",
                transition: "width 300ms ease",
                display: "block",
              }}
            />
          </button>

          <a
            href="/aryanp_cv.pdf"
            download="Aryan_Pachori_Resume.pdf"
            data-cursor="hover"
            className="resume-btn"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              letterSpacing: "0.12em",
              color: "var(--text-muted)",
              border: "1px solid var(--bg-secondary)",
              padding: "12px 28px",
              display: "inline-block",
              width: "fit-content",
              textDecoration: "none",
              transition: "border-color 200ms ease, color 200ms ease",
            }}
          >
            ↓ DOWNLOAD RESUME
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid var(--bg-secondary)",
          paddingTop: "40px",
          paddingBottom: "32px",
          paddingLeft: "clamp(1.5rem, 8%, 9rem)",
          paddingRight: "clamp(1.5rem, 8%, 9rem)",
        }}
      >
        {/* Bottom bar */}
        <div
          style={{ borderTop: "1px solid var(--bg-secondary)", paddingTop: "24px" }}
        >
        <div className="w-full flex items-center justify-between flex-wrap gap-3">
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "var(--text-muted)",
            }}
          >
            AP © 2025
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "var(--text-muted)",
            }}
          >
            BUILT WITH NEXT.JS + FRAMER MOTION
          </span>
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/in/aryanpachori"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              style={{ color: "var(--text-muted)", transition: "color 200ms", display: "flex" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href="https://github.com/aryanpachori"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Personal GitHub"
              title="Personal GitHub"
              data-cursor="hover"
              style={{ color: "var(--text-muted)", transition: "color 200ms", display: "flex" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              <FiGithub size={20} />
            </a>
            <a
              href="https://github.com/aryan-pachori-novostack"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Company GitHub (Novostack)"
              title="Novostack GitHub"
              data-cursor="hover"
              style={{ color: "var(--text-muted)", transition: "color 200ms", display: "flex" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              <Building2 size={20} strokeWidth={1.75} />
            </a>
          </div>
        </div>
        </div>
      </footer>

      <Toast visible={toastVisible} />

      <style>{`
        .email-cta:hover .email-underline { width: 100%; }
        .resume-btn:hover { border-color: var(--accent) !important; color: var(--text-primary) !important; }
      `}</style>
    </>
  );
}
