"use client";

import { achievementsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.05,
    },
  }),
};

export default function Achievements() {
  const { ref } = useSectionInView("Achievements");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="achievements"
    >
      <SectionHeading>My Achievements</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {achievementsData.map((achievement, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <div className="text-left">
              <h3 className="font-semibold text-gray-900 dark:text-white">
                {achievement.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {achievement.description}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {achievement.date}
              </p>
            </div>
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
}
