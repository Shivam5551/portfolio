import Hero from "@/components/hero";
import Projects from "@/components/projects";
import ThemeToggle from "@/components/ThemeToggle";
import Topbar from "@/components/topbar";

export default function Home() {
    return (
        <main
            className="
        min-h-screen
        flex
        flex-col
        bg-white
        text-black
        dark:bg-black
        dark:text-white
      "
        >
            <div className="mb-34">
                <Topbar>
                <ThemeToggle />
            </Topbar>
            </div>
            <Hero/>
            <Projects/>
        </main>
    );
}
