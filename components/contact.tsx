"use client";
import { useState, FormEvent } from "react";
import { motion, type Variants } from "motion/react";
import { Mail, Send, MapPin, Loader2, CheckCircle2, XCircle } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { user } from "@/details";
import SocialLink from "./socialLinks";

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1 },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 260, damping: 22 },
    },
};

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [status, setStatus] = useState<Status>("idle");
    const [errorMsg, setErrorMsg] = useState("");

    function handleChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        setStatus("loading");
        setErrorMsg("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data?.error || "Something went wrong");
            }

            setStatus("success");
            setFormData({ name: "", email: "", subject: "", message: "" });

            setTimeout(() => setStatus("idle"), 4000);
        } catch (err) {
            setStatus("error");
            setErrorMsg(
                err instanceof Error ? err.message : "Failed to send message"
            );
            setTimeout(() => setStatus("idle"), 4000);
        }
    }

    return (
        <section
            id="contact"
            className="
                h-fit
                rounded-[2rem] md:rounded-[3rem] backdrop-blur-2xl
                px-6 md:px-10 mx-4 md:mx-10
                py-10 md:py-14 my-3
                bg-black/10 border border-white/20
                dark:text-yellow-50
                shadow-[0_8px_32px_rgba(0,0,0,0.35)] dark:shadow-[0_8px_32px_rgba(255,248,220,0.35)]
                transition-all duration-300
                hover:shadow-[0_10px_36px_rgba(0,0,0,0.45)] dark:hover:shadow-[0_10px_36px_rgba(255,248,220,0.45)]
                ring-1 ring-inset ring-white/5
            "
        >
            <motion.h2
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4 }}
                className="text-3xl sm:text-4xl md:text-5xl font-[Sora] font-bold mb-8 md:mb-12 text-center md:text-left"
            >
                Get In Touch
            </motion.h2>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="grid grid-cols-1 md:grid-cols-8 gap-8 md:gap-10"
            >
                <motion.div
                    variants={itemVariants}
                    className="col-span-1 md:col-span-3 flex flex-col gap-6"
                >
                    <p className="text-base sm:text-lg leading-relaxed text-black/80 dark:text-yellow-50/80">
                        Have a project in mind, a question, or just want to
                        say hi? My inbox is always open.
                    </p>

                    <div className="flex flex-col gap-4">
                        {user.email && (
                            <div className="flex items-center gap-3 text-sm sm:text-base">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-black/10 dark:bg-white/10 border border-black/15 dark:border-white/20 shrink-0">
                                    <Mail size={18} />
                                </div>
                                <a
                                    href={`mailto:${user.email}`}
                                    className="hover:underline break-all"
                                >
                                    {user.email}
                                </a>
                            </div>
                        )}
                        {user.location && (
                            <div className="flex items-center gap-3 text-sm sm:text-base">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-black/10 dark:bg-white/10 border border-black/15 dark:border-white/20 shrink-0">
                                    <MapPin size={18} />
                                </div>
                                <span>{user.location}</span>
                            </div>
                        )}
                    </div>

                    <div className="flex items-center gap-3 mt-2">
                        {user.socials?.github && (
                            <SocialLink href={user.socials.github} label="GitHub">
                                <FaGithub size={20} />
                            </SocialLink>
                        )}
                        {user.socials?.linkedin && (
                            <SocialLink href={user.socials.linkedin} label="LinkedIn">
                                <FaLinkedin size={20} />
                            </SocialLink>
                        )}
                    </div>
                </motion.div>

                <motion.form
                    variants={itemVariants}
                    onSubmit={handleSubmit}
                    className="col-span-1 md:col-span-5 flex flex-col gap-4"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                            <label
                                htmlFor="name"
                                className="text-sm font-medium"
                            >
                                Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your name"
                                className="
                                    px-4 py-2.5 rounded-xl
                                    bg-black/5 dark:bg-white/5
                                    border border-black/15 dark:border-white/20
                                    focus:outline-none focus:ring-2 focus:ring-yellow-400/50
                                    placeholder:text-black/40 dark:placeholder:text-yellow-50/40
                                    transition-all duration-200
                                "
                            />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label
                                htmlFor="email"
                                className="text-sm font-medium"
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                                className="
                                    px-4 py-2.5 rounded-xl
                                    bg-black/5 dark:bg-white/5
                                    border border-black/15 dark:border-white/20
                                    focus:outline-none focus:ring-2 focus:ring-yellow-400/50
                                    placeholder:text-black/40 dark:placeholder:text-yellow-50/40
                                    transition-all duration-200
                                "
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="subject" className="text-sm font-medium">
                            Subject
                        </label>
                        <input
                            id="subject"
                            name="subject"
                            type="text"
                            required
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="What's this about?"
                            className="
                                px-4 py-2.5 rounded-xl
                                bg-black/5 dark:bg-white/5
                                border border-black/15 dark:border-white/20
                                focus:outline-none focus:ring-2 focus:ring-yellow-400/50
                                placeholder:text-black/40 dark:placeholder:text-yellow-50/40
                                transition-all duration-200
                            "
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="message" className="text-sm font-medium">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell me about your project..."
                            className="
                                px-4 py-2.5 rounded-xl resize-none
                                bg-black/5 dark:bg-white/5
                                border border-black/15 dark:border-white/20
                                focus:outline-none focus:ring-2 focus:ring-yellow-400/50
                                placeholder:text-black/40 dark:placeholder:text-yellow-50/40
                                transition-all duration-200
                            "
                        />
                    </div>

                    <motion.button
                        type="submit"
                        disabled={status === "loading"}
                        whileHover={{ scale: status === "loading" ? 1 : 1.02 }}
                        whileTap={{ scale: status === "loading" ? 1 : 0.97 }}
                        className="
                            cursor-pointer
                            flex items-center justify-center gap-2
                            mt-2 px-6 py-3
                            bg-black text-white dark:bg-white dark:text-black
                            rounded-full font-semibold
                            shadow-md hover:shadow-lg
                            transition-shadow duration-300
                            disabled:opacity-60 disabled:cursor-not-allowed
                        "
                    >
                        {status === "loading" ? (
                            <>
                                <Loader2 size={18} className="animate-spin" />
                                Sending...
                            </>
                        ) : (
                            <>
                                <Send size={18} />
                                Send Message
                            </>
                        )}
                    </motion.button>

                    {status === "success" && (
                        <motion.div
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400 mt-1"
                        >
                            <CheckCircle2 size={16} />
                            <span>Message sent! I&apos;ll get back to you soon.</span>
                        </motion.div>
                    )}
                    {status === "error" && (
                        <motion.div
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-2 text-sm text-red-600 dark:text-red-400 mt-1"
                        >
                            <XCircle size={16} />
                            <span>{errorMsg}</span>
                        </motion.div>
                    )}
                </motion.form>
            </motion.div>
        </section>
    );
}