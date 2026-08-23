"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollBack() {
    const [scrollPercent, setScrollPercent] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollHeight = document.body.scrollHeight - window.innerHeight;
            const percent = scrollHeight > 0
                ? Math.min((window.scrollY / scrollHeight) * 100, 100)
                : 0;
            setScrollPercent(percent);
            setIsVisible(window.scrollY > 1);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    const radius = 20;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (scrollPercent / 100) * circumference;

    return (
        <div style={{ visibility: isVisible ? "visible" : "hidden" }} className="fixed bottom-10 right-12 z-50">
            <a
                href="#top"
                className="relative backdrop-blur-2xl flex items-center justify-center bg-black/10 dark:bg-white/10 text-black dark:text-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
                <svg
                    className="absolute inset-0 w-full h-full -rotate-90"
                    viewBox="0 0 44 44"
                >
                    <circle
                        cx="22"
                        cy="22"
                        r={radius}
                        fill="none"
                        stroke="currentColor"
                        strokeOpacity="0.15"
                        strokeWidth="2"
                    />
                    <circle
                        cx="22"
                        cy="22"
                        r={radius}
                        fill="none"
                        className="stroke-current text-black dark:text-yellow-400"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        style={{ transition: "stroke-dashoffset 0.1s linear" }}
                    />
                </svg>
                <ArrowUp className="w-6 h-6 relative z-10" />
            </a>
        </div>
    );
}