import React from "react";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import TeamChatApplicationImg from "@/public/TeamChatApplication.png";
import Upchain from "@/public/Upchain.png";
import LabelChain from "@/public/LabelChain.png";
import SolTune from "@/public/soltune.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Achievements",
    hash: "#achievements",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Vellore Institute of Technology",
    location: "Bhopal, MP",
    description:
      "Bachelor of Science in Computer Science (GPA: 7.6). Relevant Coursework: Programming Languages (Java), Data Structures and Algorithms, Database Management Systems, Operating Systems, Computer Networks, Computer Architecture, Software Engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - May 2025",
  },
  {
    title: "Novostack",
    location: "Noida, India",
    description:
      "Full Stack Developer working on Ruloans CRM Platform - a large-scale financial ecosystem. Developed microservices including Notification Service (Kafka-based) and Invoice Processing Microservice. Built Bureau Service for HelloTrade enabling Experian/CRIF bureau API integrations.",
    icon: React.createElement(FaReact),
    date: "Nov 2024 - Present",
  },
  {
    title: "Superteam India",
    location: "Remote",
    description: "Member (Freelance) contributing to the Solana ecosystem by shipping and improving Earn Blinks and related community-driven projects.",
    icon: React.createElement(FaReact),
    date: "Aug 2024 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Opinion Trading App",
    description:
      "Developed an opinion trading platform allowing users to place bets on event outcomes, similar to Probo. Built a dynamic order book system for real-time trading with price adjustments and liquidity management.",
    tags: [
      "Next.js",
      "Node.js",
      "Express",
      "TypeScript",
      "Real-time Trading",
      "Order Matching",
    ],
    imageUrl: Upchain,
  },
  {
    title: "Upchain",
    description:
      "Developed a decentralized job portal leveraging the Solana blockchain. Created a web application that connects job seekers with employers and integrated blinks to post jobs through X.",
    tags: [
      "React",
      "Express",
      "Solana",
      "Web3.js",
      "Decentralized",
      "Job Portal",
    ],
    imageUrl: Upchain,
  },
  {
    title: "Label Chain",
    description:
      "Built a data labeling app that enables users to label data in real time. Provided decentralized payment functionality using the Solana blockchain with secure user authentication system.",
    tags: [
      "React",
      "Express",
      "Solana",
      "Web3.js",
      "Data Labeling",
      "Real-time",
    ],
    imageUrl: LabelChain,
  },
  {
    title: "Team Chat Application",
    description:
      "A team chat application for modern, real-time, and responsive communication platform for teams.",
    tags: ["React", "TypeScript", "Next.js", "MYSQL", "Tailwind", "Prisma"],
    imageUrl: TeamChatApplicationImg,
  },
] as const;

export const skillsData = [
  "Java",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "Hono",
  "Tailwind CSS",
  "Solana web3.js",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Git",
  "GitHub",
  "Docker",
  "AWS",
  "Cloudflare Workers",
  "GCP",
] as const;

export const achievementsData = [
  {
    title: "Solana Foundation & CoinDCX India Grants",
    description: "Awarded a 1,000 USDC grant for the Upchain project",
    date: "2024",
  },
  {
    title: "Solana Foundation & Dialect Blinks Grants", 
    description: "Awarded a 1,000 USDC grant for the JOBLINK project",
    date: "2024",
  },
  {
    title: "LeetCode Problem Solving",
    description: "Solved over 250 problems, demonstrating strong problem-solving skills",
    date: "2024",
  },
] as const;
