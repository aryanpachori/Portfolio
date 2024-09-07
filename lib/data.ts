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
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Vellore Institute of Technology",
    location: "Bhopal, MP",
    description:
      "I am currently in my 7th semester pursuing a Bachelor's degree in Computer Science.",

    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2025",
  },
  {
    title: "SuperteamIN",
    location: "Remote",
    description: "Member at Superteam India",
    icon: React.createElement(FaReact),
    date: "AUG 2024 - Present",
  },
  {
    title: "Full-Stack Developer",
    location: "Remote",
    description:
      "My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "Present",
  },
] as const;

export const projectsData = [
  {
    title: "UpChain",
    description:
      "A decentralized job portal that connects developers with job opportunities on the Solana blockchain.",
    tags: [
      "Next.js",
      "TypeScript",
      "Postgres",
      "Tailwind",
      "Prisma",
      "Web3.js",
      "Express",
    ],
    imageUrl: Upchain,
  },
  {
    title: "LabelChain",
    description:
      "A data labeling application that uses Solana payments to manage transactions for labeling tasks.",
    tags: [
      "Next.js",
      "TypeScript",
      "Postgres",
      "Tailwind",
      "Prisma",
      "Web3.js",
      "Express",
      "AWS S3",
    ],
    imageUrl: LabelChain,
  },
  {
    title: "SolTune",
    description:
      "A decentralized music application that allows users to join spaces, add songs to a queue, and vote on tracks.",
    tags: [
      "Next.js",
      "TypeScript",
      "Postgres",
      "Tailwind",
      "Prisma",
      "Web3.js",
      "Express",
    ],
    imageUrl: SolTune,
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
  "Rust",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git/Github",
  "Tailwind",
  "Prisma",
  "Redux",
  "JAVA",
  "Express",
  "Web3.js",
  "HTML",
  "CSS",
  "AWS",
  "Clouflare",
  "Docker",
  "Hono",
] as const;
