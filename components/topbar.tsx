"use client";
import { ReactNode, useState } from "react";
import Link from "next/link";
import { user } from "@/details";
import * as motion from "motion/react-client";
import { Menu, X } from "lucide-react";
import { AnimatePresence } from "motion/react";

const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
];

export default function Topbar({ children }: { children: ReactNode }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <motion.header
                initial={{ opacity: 0, scale: 0.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.02, ease: "linear" }}
                animate={{ opacity: 1, scale: 1 }}
                className="
                    fixed top-4 left-4 right-4 z-50
                    md:top-8 md:left-10 md:right-10
                    flex h-16 md:h-20 items-center justify-between
                    rounded-full pl-5 pr-16 md:px-10 py-3 md:py-4
                    bg-black/25 backdrop-blur-lg backdrop-saturate-150 border border-white/20
                    shadow-[0_8px_32px_rgba(0,0,0,0.35)] dark:shadow-[0_8px_32px_rgba(255,248,220,0.35)]
                    transition-all duration-300
                    hover:shadow-[0_10px_36px_rgba(0,0,0,0.45)] dark:hover:shadow-[0_10px_36px_rgba(255,248,220,0.45)]
                    ring-1 ring-inset ring-white/5
                "
            >
                <Link
                    href="/"
                    className="relative z-10 text-lg md:text-xl dark:text-yellow-50 font-semibold font-[Sora] cursor-pointer hover:tracking-wide transform duration-300 truncate max-w-35 md:max-w-none"
                >
                    {user.firstName} {user.lastName}
                </Link>

                <div className="hidden md:flex items-center space-x-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="relative z-10 text-lg dark:text-yellow-50 font-[Sora] cursor-pointer hover:tracking-wide transform duration-300"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-3">
                    <div
                        className="
                            h-10 w-10 md:h-12 md:w-12
                            flex justify-center items-center
                            border border-black/15 dark:border-white/20 rounded-full
                            fixed top-3 right-4
                            md:static md:top-auto md:right-auto
                            bg-transparent
                            z-60
                        "
                    >
                        {children}
                    </div>

                    <button
                        onClick={() => setOpen((prev) => !prev)}
                        aria-label="Toggle menu"
                        className="
                            md:hidden relative z-10
                            flex items-center justify-center h-10 w-10
                            rounded-full border border-black/15 dark:border-white/20
                            dark:text-yellow-50
                        "
                    >
                        {open ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </motion.header>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="
                            md:hidden fixed top-24 left-4 right-4 z-40
                            flex flex-col items-center space-y-4 py-6
                            rounded-3xl bg-black/40 backdrop-blur-lg backdrop-saturate-150 border border-white/20
                            shadow-[0_8px_32px_rgba(0,0,0,0.35)]
                        "
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="text-lg dark:text-yellow-50 font-[Sora] cursor-pointer hover:tracking-wide transform duration-300"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}