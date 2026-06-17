export interface Project {
  id: string;
  name: string;
  description: string;
  bullets: string[];
  tags: string[];
  liveUrl: string | null;
  githubUrl: string | null;
  year: string;
  image: string;
}

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "01",
    name: "Beacon",
    description:
      "Predictive dependency health SaaS — scores GitHub packages 0–100 using XGBoost, predicting abandonment 60–90 days ahead.",
    bullets: [
      "Two-queue async ML pipeline: BullMQ + Redis Node.js worker feeds Python XGBoost inference service.",
      "Real-time onboarding via Redis pub/sub + SSE with 90-day survival curves and AI migration recommendations.",
    ],
    tags: ["Node.js", "Python", "XGBoost", "BullMQ", "Redis", "PostgreSQL", "Next.js"],
    liveUrl: "https://beacon.forgefastlabs.com",
    githubUrl: "https://github.com/aryanpachori/beacon",
    year: "2025",
    image: "/projects/beacon.png",
  },
  {
    id: "02",
    name: "Night Agent",
    description:
      "Production RAG agent platform — upload documents, query via conversational interface with streaming responses.",
    bullets: [
      "FastAPI backend: document ingestion, chunking, embedding generation, LangChain-orchestrated retrieval.",
      "Per-user Pinecone namespace isolation supporting multi-document workspaces with sub-second query latency.",
    ],
    tags: ["FastAPI", "LangChain", "RAG", "Pinecone", "OpenAI", "Next.js"],
    liveUrl: "https://night-agent-548r.vercel.app",
    githubUrl: "https://github.com/aryanpachori/night_agent",
    year: "2025",
    image: "/projects/nightagent.png",
  },
  {
    id: "03",
    name: "Opinion Trading Platform",
    description:
      "Real-time Probo-style platform with a concurrent order-matching engine and live price discovery.",
    bullets: [
      "Concurrent order-matching engine over persistent WebSockets with optimistic locking for consistency.",
      "JWT auth, live order book, liquidity management under high write concurrency.",
    ],
    tags: ["Node.js", "Express", "WebSockets", "Redis"],
    liveUrl: null,
    githubUrl: "https://github.com/aryanpachori/opinion_trading",
    year: "2024",
    image: "/projects/opiniontrading.png",
  },
  {
    id: "04",
    name: "Upchain",
    description:
      "Decentralized job portal on Solana with milestone-based on-chain escrow payments.",
    bullets: [
      "On-chain escrow with Dialect Blinks integration — job postings actionable directly through X (Twitter).",
      "Awarded 1,000 USDC grant by Solana Foundation & CoinDCX India.",
    ],
    tags: ["React", "Express", "Solana", "Web3.js"],
    liveUrl: "https://upchain-fs5c.vercel.app",
    githubUrl: "https://github.com/aryanpachori/Upchain",
    year: "2024",
    image: "/projects/upchain.png",
  },
];

export const MORE_PROJECTS = [
  {
    name: "JOBLINK Blinks",
    description:
      "On-chain job actions via X (Twitter) using Dialect Blinks — 1,000 USDC Solana Foundation & Dialect grant.",
    tags: ["Solana", "Dialect", "Next.js"],
    liveUrl: null,
    githubUrl: "https://github.com/aryanpachori/Blink_100xdevs",
  },
  {
    name: "LabelChain",
    description:
      "Decentralized data-labelling platform on Solana — workers earn SOL for completing labelling tasks, payouts via on-chain escrow.",
    tags: ["React", "Express", "Solana", "Web3.js", "TypeScript"],
    liveUrl: "https://label-chain-user.vercel.app",
    githubUrl: "https://github.com/aryanpachori/label-chain",
  },
];
