"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("ap-loaded")) return;
    setVisible(true);
    const t = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("ap-loaded", "1");
    }, 1000);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "var(--bg-primary)",
            zIndex: 99999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: "32px",
              color: "var(--text-primary)",
              letterSpacing: "-0.02em",
            }}
          >
            AP
          </span>

          <div
            style={{
              width: "120px",
              height: "1px",
              backgroundColor: "rgba(148,137,121,0.2)",
              overflow: "hidden",
            }}
          >
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.85, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ height: "100%", backgroundColor: "var(--accent)" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
