"use client";
import { user } from "@/details";
import Image from "next/image";
import { motion, type Variants } from "motion/react";
import { MapPin, GraduationCap, Briefcase } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import SocialLink from "./socialLinks";

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1 },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 260, damping: 22 },
    },
};

export default function About() {
    const hasEducation = user.education && user.education.length > 0;
    const hasExperience = user.experience && user.experience.length > 0;

    return (
        <section
            id="about"
            className="
                h-fit
                rounded-[2rem] md:rounded-[3rem] backdrop-blur-2xl
                px-6 md:px-10 mx-4 md:mx-10
                py-10 md:py-14 my-3
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
                About
            </motion.h2>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="grid grid-cols-1 md:grid-cols-8 gap-8 md:gap-10 items-center"
            >
                <motion.div
                    variants={itemVariants}
                    className="hidden md:flex md:col-span-3 justify-center"
                >
                    <div className="relative w-64 h-64 lg:w-72 lg:h-72 rounded-3xl overflow-hidden bg-neutral-50 dark:bg-black shadow-[0_8px_32px_rgba(0,0,0,0.35)] dark:shadow-[0_8px_32px_rgba(255,248,220,0.35)]">
                        <Image
                            src={user.profileImageLight}
                            alt={`${user.firstName} ${user.lastName}`}
                            fill
                            loading="eager"
                            sizes="288px"
                            className="object-cover dark:hidden"
                        />
                        <Image
                            src={user.profileImageDark}
                            alt={`${user.firstName} ${user.lastName}`}
                            fill
                            loading="eager"
                            sizes="288px"
                            className="object-cover hidden dark:block"
                        />
                    </div>
                </motion.div>

                <div className="col-span-1 md:col-span-5 flex flex-col gap-6">
                    <motion.div variants={itemVariants}>
                        <h3 className="text-2xl sm:text-3xl font-[Sora] font-bold">
                            {user.firstName} {user.lastName}
                        </h3>
                        <p className="text-lg text-black/70 dark:text-yellow-50/70 font-[Sora] mt-1">
                            {user.title}
                        </p>
                        {user.location && (
                            <div className="flex items-center gap-1.5 mt-2 text-sm text-black/60 dark:text-yellow-50/60">
                                <MapPin size={16} />
                                <span>{user.location}</span>
                            </div>
                        )}
                    </motion.div>

                    <motion.p
                        variants={itemVariants}
                        className="text-base sm:text-lg text-justify leading-relaxed"
                    >
                        {user.about}
                    </motion.p>

                    {(hasEducation || hasExperience) && (
                        <div
                            className={`grid grid-cols-1 ${
                                hasEducation && hasExperience
                                    ? "lg:grid-cols-2"
                                    : ""
                            } gap-6`}
                        >
                            {hasEducation && (
                                <motion.div
                                    variants={itemVariants}
                                    className="flex flex-col gap-3"
                                >
                                    <div className="flex items-center gap-2 text-lg font-[Sora] font-semibold">
                                        <GraduationCap size={20} />
                                        <span>Education</span>
                                    </div>
                                    <div className="flex flex-col gap-3 pl-1">
                                        {user.education.map((edu, i) => (
                                            <div
                                                key={i}
                                                className="border-l-2 border-black/15 dark:border-white/20 pl-4"
                                            >
                                                <p className="font-medium">
                                                    {edu.degree}
                                                </p>
                                                <p className="text-sm text-black/60 dark:text-yellow-50/60">
                                                    {edu.institution} •{" "}
                                                    {edu.year}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {hasExperience && (
                                <motion.div
                                    variants={itemVariants}
                                    className="flex flex-col gap-3"
                                >
                                    <div className="flex items-center gap-2 text-lg font-[Sora] font-semibold">
                                        <Briefcase size={20} />
                                        <span>Experience</span>
                                    </div>
                                    <div className="flex flex-col gap-3 pl-1">
                                        {user.experience.map((exp, i) => (
                                            <div
                                                key={i}
                                                className="border-l-2 border-black/15 dark:border-white/20 pl-4"
                                            >
                                                <p className="font-medium">
                                                    {exp.title}
                                                </p>
                                                <p className="text-sm text-black/60 dark:text-yellow-50/60">
                                                    {exp.company} •{" "}
                                                    {exp.duration}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    )}

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap items-center gap-3 mt-2"
                    >
                        {user.socials?.github && (
                            <SocialLink
                                href={user.socials.github}
                                label="GitHub"
                            >
                                <FaGithub size={64} />
                            </SocialLink>
                        )}
                        {user.socials?.linkedin && (
                            <SocialLink
                                href={user.socials.linkedin}
                                label="LinkedIn"
                            >
                                <FaLinkedin size={64} />
                            </SocialLink>
                        )}
                        {user.email && (
                            <SocialLink
                                href={`mailto:${user.email}`}
                                label="Email"
                            >
                                <IoMdMail size={64} />
                            </SocialLink>
                        )}
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}