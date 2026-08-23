import { ReactNode } from "react";
import Link from "next/link";
import { user } from "@/details";

export default function Topbar({ children }: { children: ReactNode }) {
    return (
        <header
            className="
        fixed top-8 left-10 right-10 z-50
        flex h-20 items-center justify-between
        rounded-full px-10 py-4
        bg-black/25 backdrop-blur-lg backdrop-saturate-150 border border-white/20
        shadow-[0_8px_32px_rgba(0,0,0,0.35)] dark:shadow-[0_8px_32px_rgba(255,248,220,0.35)]
        transition-all duration-300
        hover:shadow-[0_10px_36px_rgba(0,0,0,0.45)] dark:hover:shadow-[0_10px_36px_rgba(255,248,220,0.45)]
        ring-1 ring-inset ring-white/5
      "
        >
            <Link
                href="/"
                className="relative z-10 text-xl dark:text-yellow-50 font-semibold font-[Sora] cursor-pointer hover:tracking-wide transform duration-300"
            >
                {user.firstName} {user.lastName}
            </Link>
            <div className="flex items-center space-x-6">
                <Link
                    href="#home"
                    className="relative z-10 text-lg dark:text-yellow-50 font-[Sora] cursor-pointer hover:tracking-wide transform duration-300"
                >
                    Home
                </Link>
                <Link
                    href="#projects"
                    className="relative z-10 text-lg dark:text-yellow-50 font-[Sora] cursor-pointer hover:tracking-wide transform duration-300  "
                >
                    Projects
                </Link>
                <Link
                    href="#skills"
                    className="relative z-10 text-lg dark:text-yellow-50 font-[Sora] cursor-pointer hover:tracking-wide transform duration-300  "
                >
                    Skills
                </Link>
                <Link
                    href="#about"
                    className="relative z-10 text-lg dark:text-yellow-50 font-[Sora] cursor-pointer hover:tracking-wide transform duration-300  "
                >
                    About
                </Link>
                <Link
                    href="#contact"
                    className="relative z-10 text-lg dark:text-yellow-50 font-[Sora] cursor-pointer hover:tracking-wide transform duration-300  "
                >
                    Contact
                </Link>
            </div>
            <div className="relative h-12 w-12 flex justify-center items-center z-10 border border-black/15 dark:border-white/20 rounded-full">
                {children}
            </div>
        </header>
    );
}
