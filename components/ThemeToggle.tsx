"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { flushSync } from "react-dom";
import { motion } from "motion/react";

export default function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const isDark = resolvedTheme === "dark";

    const toggleTheme = (event: React.MouseEvent<HTMLButtonElement>) => {
        const button = event.currentTarget;

        const rect = button.getBoundingClientRect();

        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;

        // Calculate the radius required to cover
        // the entire viewport.
        const viewport = window.visualViewport;

        const width = viewport?.width ?? window.innerWidth;
        const height = viewport?.height ?? window.innerHeight;

        const distances = [
            Math.hypot(x, y),
            Math.hypot(width - x, y),
            Math.hypot(x, height - y),
            Math.hypot(width - x, height - y),
        ];

        const radius = Math.max(...distances);

        document.documentElement.style.setProperty("--theme-x", `${x}px`);

        document.documentElement.style.setProperty("--theme-y", `${y}px`);

        document.documentElement.style.setProperty(
            "--theme-radius",
            `${radius}px`,
        );

        const newTheme = isDark ? "light" : "dark";

        // Browser fallback
        if (!document.startViewTransition) {
            setTheme(newTheme);
            return;
        }

        const transition = document.startViewTransition(() => {
            /*
             * This is important.
             *
             * flushSync forces React to commit the theme change
             * before the View Transition captures the new state.
             */
            flushSync(() => {
                setTheme(newTheme);
            });
        });

        transition.ready.then(() => {
            document.documentElement.animate(
                {
                    clipPath: [
                        `circle(0px at ${x}px ${y}px)`,
                        `circle(${radius}px at ${x}px ${y}px)`,
                    ],
                },
                {
                    duration: 700,
                    easing: "cubic-bezier(0.4, 0, 0.2, 1)",
                    pseudoElement: "::view-transition-new(root)",
                    fill: "both",
                },
            );
        });
    };

    return (
        <motion.button
            type="button"
            onClick={toggleTheme}
            whileHover={{
                scale: 1.08,
            }}
            whileTap={{
                scale: 0.92,
            }}
            className="
            cursor-pointer
            relative
        z-50
        flex
        w-10
        h-10
        md:w-12
        md:h-12
        items-center
        justify-center
        rounded-full
        border
        border-black/10
        bg-white/30
        text-black
        shadow-sm
        dark:border-white/10
        dark:shadow-sm
        dark:shadow-black/10
        dark:bg-black/30
        dark:text-white
      "
            aria-label="Toggle theme"
        >
            <motion.span
                key={isDark ? "sun" : "moon"}
                initial={{
                    opacity: 0,
                    rotate: -90,
                    scale: 0.5,
                }}
                animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                }}
                transition={{
                    duration: 0.5,
                }}
            >
                {!isDark ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                        />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                        />
                    </svg>
                )}
            </motion.span>
        </motion.button>
    );
}
