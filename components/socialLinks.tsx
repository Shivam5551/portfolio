import * as motion from "motion/react-client";
import Link from "next/link";

export default function SocialLink({
    href,
    label,
    children,
}: {
    href: string;
    label: string;
    children: React.ReactNode;
}) {
    return (
        <Link href={href} target="_blank" aria-label={label}>
            <motion.div
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="
                    flex items-center justify-center
                    w-11 h-11 rounded-full
                    transition-colors duration-300
                "
            >
                {children}
            </motion.div>
        </Link>
    );
}