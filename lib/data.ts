import React from "react";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import TeamChatApplicationImg from "@/public/TeamChatApplication.png"
import ExpenseCalculatorImg from "@/public/ExpenseCalculator.png"
import PortfolioImg from "@/public/Portfolio.png"

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
      "I am currently in my 5th semester pursuing a Bachelor's degree in Computer Science.",
   
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2025",
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
    title: "Team Chat Application",
    description:
      "A team chat application for modern, real-time, and responsive communication platform for teams.",
    tags: ["React", "TypeScript", "Next.js", "MYSQL", "Tailwind", "Prisma"],
    imageUrl: TeamChatApplicationImg,
  },
  {
    title: "Expense Calculator",
    description:
      "A web application built using the React JavaScript library, designed to help users manage and calculate their monthly expenses effortlessly.",
    tags: ["React", "Javascript", "CSS"],
    imageUrl: ExpenseCalculatorImg,
  },
  {
    title: "Portfolio",
    description:
      "A personal portfolio for presenting a comprehensive overview of who I am as a developer",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Framer"],
    imageUrl: PortfolioImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "JAVA",
  "Express",
  "MYSQL",
  "Python",
  "Socket",
  "Framer Motion",
] as const;