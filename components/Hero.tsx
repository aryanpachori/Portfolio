"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import { useTextScramble } from "@/hooks/useTextScramble";
import CurrentStatus from "@/components/CurrentStatus";
import dynamic from "next/dynamic";

const VisitorGlobe = dynamic(() => import("@/components/VisitorGlobe"), {
  ssr: false,
  loading: () => null,
});

const EASE = [0.25, 0.1, 0.25, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: EASE, delay },
});

export default function Hero() {
  const { display, scramble } = useTextScramble("ARYAN\nPACHORI");

  useEffect(() => {
    const t = setTimeout(scramble, 300);
    return () => clearTimeout(t);
  }, [scramble]);

  return (
    <section
      style={{ minHeight: "100svh" }}
      className="relative flex flex-col justify-center overflow-hidden"
    >
      {/* Noise grain */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full"
        style={{ opacity: 0.02 }}
      >
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>

      {/* Two-column layout */}
      <div
        className="relative z-10 flex items-center justify-between"
        style={{
          paddingLeft: "clamp(1.5rem, 8%, 9rem)",
          paddingRight: "clamp(1.5rem, 8%, 9rem)",
        }}
      >
        {/* Left: text content */}
        <div className="flex flex-col gap-7 flex-1 min-w-0">
          {/* Label */}
          <motion.p
            {...fadeUp(0.05)}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              letterSpacing: "0.2em",
              color: "var(--accent)",
            }}
          >
            BACKEND &amp; AI ENGINEER
          </motion.p>

          {/* Heading */}
          <motion.h1
            {...fadeUp(0.15)}
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: "clamp(40px, 8vw, 96px)",
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              cursor: "default",
              whiteSpace: "pre-line",
              willChange: "transform",
            }}
          >
            {display.map((c, i) =>
              c.char === "\n" ? (
                <br key={i} />
              ) : (
                <span
                  key={i}
                  style={{
                    color: c.resolved ? "var(--text-primary)" : "var(--accent)",
                    transition: c.resolved ? "color 80ms" : "none",
                  }}
                >
                  {c.char}
                </span>
              )
            )}
          </motion.h1>

          {/* Subheading */}
          <motion.p
            {...fadeUp(0.25)}
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 400,
              fontSize: "18px",
              color: "var(--text-muted)",
            }}
          >
            Building distributed systems &amp; AI infrastructure that ships.
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...fadeUp(0.35)}
            className="flex flex-col sm:flex-row gap-4"
            style={{ width: "fit-content" }}
          >
            <a
              href="#projects"
              data-cursor="hover"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
                fontSize: "13px",
                letterSpacing: "0.15em",
                padding: "14px 32px",
                borderRadius: 0,
                backgroundColor: "var(--accent)",
                color: "var(--text-primary)",
                border: "1px solid var(--accent)",
                display: "block",
                textAlign: "center",
                textDecoration: "none",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              VIEW WORK
            </a>

            <a
              href="#contact"
              data-cursor="hover"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
                fontSize: "13px",
                letterSpacing: "0.15em",
                padding: "14px 32px",
                borderRadius: 0,
                backgroundColor: "transparent",
                color: "var(--text-primary)",
                border: "1px solid var(--accent)",
                display: "block",
                textAlign: "center",
                textDecoration: "none",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "rgba(148,137,121,0.15)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "transparent")
              }
            >
              GET IN TOUCH
            </a>
          </motion.div>

          <CurrentStatus />
        </div>

        {/* Right: globe — desktop only */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8, ease: EASE }}
          className="hidden lg:flex items-center justify-center"
          style={{ flexShrink: 0, marginLeft: "4rem" }}
        >
          <VisitorGlobe />
        </motion.div>
      </div>

      {/* Bottom rule */}
      <div
        className="absolute bottom-0 left-0 w-full"
        style={{ height: "1px", backgroundColor: "var(--bg-secondary)" }}
      />
    </section>
  );
}
