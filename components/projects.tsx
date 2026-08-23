"use client";
import { user } from "@/details";
import { motion } from "motion/react";
import Project from "./project";

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.05 },
  },
};


export default function Projects() {
  return (
    <motion.section
      initial={"hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      animate={{ opacity: 1, y: 0 }}
      id="projects"
      className="
        dark:text-yellow-50
        h-fit
        rounded-[2rem] sm:rounded-[3rem] backdrop-blur-2xl
        px-4 sm:px-6 md:px-10 mx-3 sm:mx-6 md:mx-10 py-6 sm:py-8 my-3
        bg-black/10 border border-white/20
        shadow-[0_8px_32px_rgba(0,0,0,0.35)] dark:shadow-[0_8px_32px_rgba(255,248,220,0.35)]
        transition-all duration-300
        hover:shadow-[0_10px_36px_rgba(0,0,0,0.45)] dark:hover:shadow-[0_10px_36px_rgba(255,248,220,0.45)]
        ring-1 ring-inset ring-white/5
      "
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.05 }}
        className="flex flex-col gap-8 sm:gap-12 md:gap-16"
      >
        {user.projects.map((project, index) => (
          <Project
            key={index}
            project={project}
            reverse={index % 2 !== 0}
          />
        ))}
      </motion.div>
    </motion.section>
  );
}