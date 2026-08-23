import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import ScrollBack from "@/components/scrollBack";
import Skills from "@/components/skills";
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
            <div id="home" className="mb-24 md:mb-34">
                <Topbar>
                <ThemeToggle />
            </Topbar>
            </div>
            <Hero/>
            <Projects/>
            <Skills/>
            <About/>
            <Contact/>
            <Footer/>
            <ScrollBack/>
        </main>
    );
}
