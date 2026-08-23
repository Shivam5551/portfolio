"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
const DESKTOP_W = 1440;
const DESKTOP_H = 900;

export default function DesktopIframe({
    src,
    title,
}: {
    src: string;
    title: string;
}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [scale, setScale] = useState(0);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const update = () => setScale(el.offsetWidth / DESKTOP_W);
        update();

        const ro = new ResizeObserver(update);
        ro.observe(el);
        return () => ro.disconnect();
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative w-full overflow-hidden rounded-xl bg-gray-100 dark:bg-neutral-900 shadow-inner"
            style={{ aspectRatio: `${DESKTOP_W} / ${DESKTOP_H}` }}
        >
            {!loaded && (
                <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="h-8 w-8 rounded-full border-2 border-yellow-400 border-t-transparent animate-spin" />
                </div>
            )}

            {scale > 0 && (
                <div
                    className="absolute top-0 left-0 origin-top-left"
                    style={{
                        width: DESKTOP_W,
                        height: DESKTOP_H,
                        transform: `scale(${scale})`,
                    }}
                >
                    <iframe
                        src={src}
                        title={title}
                        loading="lazy"
                        onLoad={() => setLoaded(true)}
                        sandbox="allow-scripts allow-same-origin"
                        style={{
                            width: DESKTOP_W,
                            height: DESKTOP_H,
                            border: 0,
                        }}
                        className={`pointer-events-none sm:pointer-events-auto transition-opacity duration-500 ${
                            loaded ? "opacity-100" : "opacity-0"
                        }`}
                    />
                </div>
            )}

            <Link
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-20 sm:hidden"
                aria-label={`Open ${title}`}
            />
        </div>
    );
}
