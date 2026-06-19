import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import LoadingScreen from "@/components/LoadingScreen";
import VisitorTracker from "@/components/VisitorTracker";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Aryan Pachori — Backend & AI Engineer",
  description:
    "Backend and AI engineer building distributed systems, Kafka microservices, and LLM-powered infrastructure. Open to remote roles.",
  metadataBase: new URL("https://aryanpachori.live"),
  alternates: { canonical: "https://aryanpachori.live" },
  openGraph: {
    title: "Aryan Pachori — Backend & AI Engineer",
    description:
      "Backend and AI engineer building distributed systems, Kafka microservices, and LLM-powered infrastructure.",
    url: "https://aryanpachori.live",
    siteName: "Aryan Pachori",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryan Pachori — Backend & AI Engineer",
    description:
      "Backend and AI engineer building distributed systems, Kafka microservices, and LLM-powered infrastructure.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body style={{ backgroundColor: "var(--bg-primary)", color: "var(--text-primary)" }}>
        <LoadingScreen />
        <ScrollProgress />
        <VisitorTracker />
        <Navbar />
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
