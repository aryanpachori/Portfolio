"use client";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175,
      }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
  I'm a passionate and driven computer science student at{" "}
  <span className="font-medium">VIT Bhopal</span>, graduating in May 2025 with a GPA of 7.6. 
  I am proficient in a variety of technologies crucial for{" "}
  <span className="font-medium">full-stack web development</span>.{" "}
  <span className="italic">My favorite part of programming</span> is the
  problem-solving aspect. I am committed to delivering efficient and engaging{" "}
  <span className="underline">web applications</span>. My core stack includes{" "}
  <span className="font-medium">React, Next.js, Node.js, TypeScript, and PostgreSQL</span>.
  I am also familiar with Python, GoLang, Kafka, Redis, and AWS. I have extensive experience in{" "}
  <span className="font-medium">Web3 technologies</span>, with a particular focus
  on developing decentralized applications (dApps) on the{" "}
  <span className="font-medium">Solana</span> blockchain. I am currently working as a{" "}
  <span className="font-medium">Full Stack Developer at Novostack</span> and contributing to{" "}
  <span className="font-medium">Superteam India</span> as a member.
</p>
<p>
  <span className="italic">Outside of coding</span>, I enjoy playing video
  games, watching movies, and working out. I also have a keen interest in{" "}
  <span className="font-medium">reading</span> and solving algorithmic problems on LeetCode.
</p>


    </motion.section>
  );
}
