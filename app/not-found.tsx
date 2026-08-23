import Link from "next/link";
import { user } from "@/details";

export default function NotFound() {
    return (
        <main
            className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-cover bg-top bg-no-repeat"
            style={{
                backgroundImage: `url(${user.notFound})`,
            }}
        >
            <div className="absolute inset-0 flex flex-col items-center justify-center pt-80 text-center">
                <h1 className="mb-4 text-4xl font-medium tracking-wide text-white md:text-5xl">
                    PAGE NOT FOUND
                </h1>

                <p className="text-lg text-zinc-300 md:text-xl">
                    The cats have been nibbling the cables again...
                </p>

                <p className="mt-1 text-lg text-zinc-300 md:text-xl">
                    Maybe this will help{" "}
                    <Link
                        href="/"
                        className="text-blue-500 underline underline-offset-4 transition-opacity hover:opacity-70 dark:text-blue-400"
                    >
                        Home
                    </Link>
                </p>
            </div>
        </main>
    );
}