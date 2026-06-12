"use client";

import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { label: "WORK", href: "#projects" },
  { label: "ABOUT", href: "#about" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["projects", "about", "contact"];
    const targets = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    targets.forEach((el) => observerRef.current!.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "64px",
        zIndex: 50,
        backgroundColor: "rgba(34, 40, 49, 0.88)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid #393E46" : "1px solid transparent",
        transition: "border-color 300ms ease",
        display: "flex",
        alignItems: "center",
        paddingLeft: "clamp(1.5rem, 8%, 9rem)",
        paddingRight: "clamp(1.5rem, 8%, 9rem)",
      }}
    >
      {/* Monogram */}
      <a
        href="/"
        style={{
          fontFamily: "var(--font-heading)",
          fontWeight: 700,
          fontSize: "20px",
          color: "var(--text-primary)",
          textDecoration: "none",
          flexShrink: 0,
        }}
      >
        AP
      </a>

      {/* Vertical separator */}
      <div
        aria-hidden="true"
        style={{
          width: "1px",
          height: "20px",
          backgroundColor: "rgba(57,62,70,0.4)",
          margin: "0 24px",
          flexShrink: 0,
        }}
        className="hidden md:block"
      />

      {/* Nav links — hidden on mobile */}
      <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
        {NAV_LINKS.map(({ label, href }) => {
          const sectionId = href.replace("#", "");
          const isActive = activeSection === sectionId;
          return (
            <a
              key={label}
              href={href}
              data-cursor="hover"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 500,
                fontSize: "13px",
                letterSpacing: "0.12em",
                color: isActive ? "var(--text-primary)" : "var(--text-muted)",
                textDecoration: "none",
                paddingBottom: "2px",
                borderBottom: isActive ? "2px solid var(--accent)" : "2px solid transparent",
                transition: "color 200ms ease, border-color 200ms ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--text-primary)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = isActive
                  ? "var(--text-primary)"
                  : "var(--text-muted)")
              }
            >
              {label}
            </a>
          );
        })}
      </nav>
    </header>
  );
}
