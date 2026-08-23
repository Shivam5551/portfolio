"use client";
import { user } from "@/details";
import { motion } from "motion/react";
import { Heart } from "lucide-react";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <motion.footer
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
            className="
                mx-4 md:mx-10 mb-6 mt-3
                rounded-[2rem] md:rounded-[3rem]
                px-6 md:px-10 py-6 md:py-8
                bg-black/10 border border-white/20
                backdrop-blur-2xl
                dark:text-yellow-50
                shadow-[0_8px_32px_rgba(0,0,0,0.25)] dark:shadow-[0_8px_32px_rgba(255,248,220,0.2)]
                ring-1 ring-inset ring-white/5
            "
        >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-black/50 dark:text-yellow-50/50 font-[Sora]">
                <p>
                    © {year} {user.firstName} {user.lastName}. All rights reserved.
                </p>
                <p className="flex items-center gap-1">
                    Built with <Heart size={12} className="fill-red-500 text-red-500" /> using Next.js
                </p>
            </div>
        </motion.footer>
    );
}