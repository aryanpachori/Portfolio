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
      <p className="mb-3 ">
        I&apos;m,a passionate and driven third-year computer science student at{" "}
        <span className="font-medium">VIT Bhopal</span>, I am proficient in a
        variety of technologies crucial for{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect.Committed to delivering efficient and engaging{" "}
        <span className="underline">web applications</span>. My core stack is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am presently seeking a{" "}
        <span className="font-medium">role</span> as a software developer.
      </p>
      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy
        playing video games, watching movies, and gymming. I also enjoy{" "}
        <span className="font-medium">reading books</span>. I am currently
        reading <span className="font-medium">Think like a monk </span>by author
        Jay Shetty.
      </p>
    </motion.section>
  );
}
