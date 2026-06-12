"use client";

import { motion } from "framer-motion";
import { currentStatus } from "@/config/status";

const Separator = () => (
  <span
    aria-hidden="true"
    style={{
      display: "inline-block",
      width: "1px",
      height: "14px",
      backgroundColor: "var(--bg-secondary)",
      opacity: 0.6,
      margin: "0 4px",
      flexShrink: 0,
    }}
  />
);

export default function CurrentStatus() {
  const { building, buildingUrl, available } = currentStatus;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
      style={{ marginTop: "40px" }}
    >
      {/* Desktop: single row */}
      <div
        className="hidden sm:inline-flex items-center"
        style={{ gap: "20px" }}
      >
        {/* Item 1 — Building */}
        <span className="inline-flex items-center" style={{ gap: "8px" }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "9px",
              letterSpacing: "0.18em",
              color: "var(--accent)",
            }}
          >
            ⚡ BUILDING
          </span>
          <a
            href={buildingUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="hover"
            className="building-link"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 500,
              fontSize: "13px",
              color: "var(--text-primary)",
              textDecoration: "none",
              position: "relative",
              display: "inline-block",
            }}
          >
            {building}
            <span
              className="building-underline"
              style={{
                position: "absolute",
                left: 0,
                bottom: "-1px",
                height: "1px",
                width: "0%",
                backgroundColor: "var(--accent)",
                transition: "width 250ms ease",
                display: "block",
              }}
            />
          </a>
        </span>

        <Separator />

        {/* Item 2 — Status */}
        <span className="inline-flex items-center" style={{ gap: "8px" }}>
          {available ? (
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              style={{
                display: "inline-block",
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor: "#4CAF50",
                flexShrink: 0,
                willChange: "transform",
              }}
            />
          ) : (
            <span
              style={{
                display: "inline-block",
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor: "var(--accent)",
                flexShrink: 0,
              }}
            />
          )}
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "9px",
              letterSpacing: "0.18em",
              color: available ? "#4CAF50" : "var(--accent)",
            }}
          >
            {available ? "OPEN TO WORK" : "NOT AVAILABLE"}
          </span>
        </span>

        <Separator />

        {/* Item 3 — Type */}
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "9px",
            letterSpacing: "0.12em",
            color: "var(--text-muted)",
          }}
        >
          Remote · Backend · AI
        </span>
      </div>

      {/* Mobile: two rows, no Item 3 */}
      <div className="flex flex-col sm:hidden" style={{ gap: "12px" }}>
        {/* Row 1 — Building */}
        <span className="inline-flex items-center" style={{ gap: "8px" }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "9px",
              letterSpacing: "0.18em",
              color: "var(--accent)",
            }}
          >
            ⚡ BUILDING
          </span>
          <a
            href={buildingUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="hover"
            className="building-link"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 500,
              fontSize: "13px",
              color: "var(--text-primary)",
              textDecoration: "none",
              position: "relative",
              display: "inline-block",
            }}
          >
            {building}
            <span
              className="building-underline"
              style={{
                position: "absolute",
                left: 0,
                bottom: "-1px",
                height: "1px",
                width: "0%",
                backgroundColor: "var(--accent)",
                transition: "width 250ms ease",
                display: "block",
              }}
            />
          </a>
        </span>

        {/* Row 2 — Status */}
        <span className="inline-flex items-center" style={{ gap: "8px" }}>
          {available ? (
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              style={{
                display: "inline-block",
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor: "#4CAF50",
                flexShrink: 0,
                willChange: "transform",
              }}
            />
          ) : (
            <span
              style={{
                display: "inline-block",
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor: "var(--accent)",
                flexShrink: 0,
              }}
            />
          )}
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "9px",
              letterSpacing: "0.18em",
              color: available ? "#4CAF50" : "var(--accent)",
            }}
          >
            {available ? "OPEN TO WORK" : "NOT AVAILABLE"}
          </span>
        </span>
      </div>

      <style>{`
        .building-link:hover .building-underline { width: 100%; }
      `}</style>
    </motion.div>
  );
}
