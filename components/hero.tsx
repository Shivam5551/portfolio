"use client";
import { user } from "@/details";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import TypewriterEffect from "typewriter-effect";

export default function Hero() {
    return (
        <section
            className="
            dark:text-yellow-50
            h-fit
        grid grid-cols-8 items-center
        rounded-[3rem] backdrop-blur-2xl px-10 mx-10 py-8 my-3
        bg-black/10  border border-white/20
        shadow-[0_8px_32px_rgba(0,0,0,0.35)] dark:shadow-[0_8px_32px_rgba(255,248,220,0.35)]
        transition-all duration-300
        hover:shadow-[0_10px_36px_rgba(0,0,0,0.45)] dark:hover:shadow-[0_10px_36px_rgba(255,248,220,0.45)]
        ring-1 ring-inset ring-white/5
      "
        >
            <div className="relative z-10 col-span-8 md:col-span-5">
                <h1 className="text-4xl h-12 md:h-18 whitespace-pre md:text-6xl font-[Sora] font-bold mb-4">
                    <TypewriterEffect
                        options={{
                            strings: [
                                `Hi, I'm ${user.firstName} ${user.lastName}`,
                            ],
                            autoStart: true,
                            loop: true,
                            delay: 75,
                            skipAddStyles: true,
                            cursor: "|",
                            cursorClassName:
                                "text-black font-extralight dark:text-white",
                        }}
                    />
                </h1>
                <h2 className="text-2xl h-6 md:h-12 md:text-4xl font-semibold mb-6">
                    <TypewriterEffect
                        options={{
                            strings: [`${user.title}`],
                            autoStart: true,
                            loop: true,
                            delay: 83,
                            skipAddStyles: true,
                            cursor: "|",
                        }}
                    />
                </h2>
                <p className="text-lg mb-6 text-justify pr-30 flex justify-start">
                    {user.description}
                </p>
                <div className="flex justify-start flex-col md:flex-row space-y-2 md:space-x-4">
                    <Link href="#projects">
                        <motion.button
                            whileHover={{
                                scale: 1.05,
                                textShadow:
                                    "0px 0px 8px rgba(255, 255, 255, 0.8)",
                                transition: {
                                    duration: 0.3,
                                    ease: "easeInOut",
                                },
                            }}
                            whileTap={{
                                scale: 0.95,
                            }}
                            className="
                    px-6 py-3
                    bg-black text-white dark:bg-white dark:text-black
                    rounded-full
                    cursor-pointer
                    font-semibold
                    shadow-md
                    hover:shadow-lg
                    transition-shadow duration-300
                  "
                        >
                            View Projects
                        </motion.button>
                    </Link>
                    <Link href="#contact">
                        <motion.button
                            whileHover={{
                                scale: 1.05,
                                textShadow:
                                    "0px 0px 8px rgba(255, 255, 255, 0.8)",
                                transition: {
                                    duration: 0.3,
                                    ease: "easeInOut",
                                },
                            }}
                            whileTap={{
                                scale: 0.95,
                            }}
                            className="
                    px-6 py-3
                    bg-white text-black dark:bg-amber-100 dark:text-black
                    rounded-full
                    cursor-pointer
                    font-semibold
                    shadow-md
                    hover:shadow-lg
                    transition-shadow duration-300
                  "
                        >
                            Contact Me
                        </motion.button>
                    </Link>
                </div>
            </div>
            <div className="relative z-10 justify-center items-center hidden md:flex md:col-span-3">
                <div className="relative w-80 h-80 bg-neutral-50  flex justify-center dark:bg-black rounded-full overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.35)] dark:shadow-[0_8px_32px_rgba(255,248,220,0.35)]">
                    <Image
                        src={user.profileImageLight}
                        alt="Profile Light"
                        width={300}
                        height={400}
                        priority
                        className="h-auto object-cover dark:hidden"
                    />
                    <Image
                        src={user.profileImageDark}
                        alt="Profile Dark"
                        width={300}
                        height={400}
                        priority
                        className="h-auto  object-cover hidden dark:block"
                    />
                </div>
            </div>
        </section>
    );
}
