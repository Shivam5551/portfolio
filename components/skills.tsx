"use client";
import Image from "next/image";
import { motion, type Variants } from "motion/react";
import { user } from "@/details";

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.06,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 260,
            damping: 20,
        },
    },
};

export default function Skills() {
    return (
        <section
            id="skills"
            className="
                h-fit
                rounded-[2rem] md:rounded-[3rem] backdrop-blur-2xl
                px-6 md:px-10 mx-4 md:mx-10
                py-10 md:py-12 my-3
                bg-black/10 border border-white/20
                dark:text-yellow-50
                shadow-[0_8px_32px_rgba(0,0,0,0.35)] dark:shadow-[0_8px_32px_rgba(255,248,220,0.35)]
                transition-all duration-300
                hover:shadow-[0_10px_36px_rgba(0,0,0,0.45)] dark:hover:shadow-[0_10px_36px_rgba(255,248,220,0.45)]
                ring-1 ring-inset ring-white/5
            "
        >
            <motion.h2
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4 }}
                className="text-3xl sm:text-4xl md:text-5xl font-[Sora] font-bold mb-8 md:mb-12 text-center md:text-left"
            >
                Skills
            </motion.h2>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="
                    grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6
                    gap-3 sm:gap-4 md:gap-6
                "
            >
                {user.skills.map((skill) => (
                    <motion.div
                        key={skill.title}
                        variants={itemVariants}
                        whileHover={{
                            scale: 1.08,
                            transition: { duration: 0.2, ease: "easeInOut" },
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="
                            flex flex-col items-center justify-center
                            gap-2 sm:gap-3
                            px-3 py-5 sm:px-4 sm:py-6
                            rounded-2xl
                            bg-black/10 dark:bg-white/5
                            border border-white/10 dark:border-white/15
                            backdrop-blur-md
                            shadow-[0_4px_16px_rgba(0,0,0,0.2)]
                            hover:shadow-[0_6px_20px_rgba(0,0,0,0.3)]
                            dark:hover:shadow-[0_6px_20px_rgba(255,248,220,0.2)]
                            transition-shadow duration-300
                            cursor-default
                        "
                    >
                        <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12">
                            <Image
                                src={skill.icon}
                                alt={skill.title}
                                fill
                                sizes="(max-width: 640px) 32px, (max-width: 768px) 40px, 48px"
                                className={`object-contain ${skill.title === "Express.js" ? "bg-none rounded-xl dark:p-2 dark:bg-white" : ""}`}
                            />
                        </div>
                        <span className="text-xs sm:text-sm md:text-base font-[Sora] font-medium text-center leading-tight">
                            {skill.title}
                        </span>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}