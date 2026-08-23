'use client';
import Link from "next/link";
import { motion } from "motion/react";
import DesktopIframe from "./desktopIframe";
import { ArrowRight } from "lucide-react";

const rowVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};


export default function Project({
  project,
  reverse,
}: {
  project: { title: string; description: string; link: string; github: string };
  reverse: boolean;
}) {
  const href = `https://${project.link}`;

  return (
    <motion.div
      variants={rowVariants}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-6 md:gap-10  rounded-2xl overflow-hidden p-4 sm:p-6 md:p-8`}
    >
      <div className="w-full md:w-1/2">
        <DesktopIframe src={href} title={project.title} />
      </div>

      <div className="w-full md:w-1/2 flex flex-col">
        <h3 className="text-xl sm:text-4xl font-semibold mb-3">
          {project.title}
        </h3>
        <p className="text-sm sm:text-xl text-gray-700 dark:text-gray-300 mb-5">
          {project.description}
        </p>
        <div className="flex gap-4">
          <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-blue-500 hover:underline w-fit"
        >
          Visit Project <span aria-hidden><ArrowRight/></span>
        </Link>
        <Link 
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-blue-500 hover:underline w-fit"
        >
          View Code <span aria-hidden><ArrowRight/></span>
        </Link>
        </div>
      </div>
    </motion.div>
  );
}