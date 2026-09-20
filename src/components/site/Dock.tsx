import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";

const links = [
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "achievements", label: "Achievements" },
  { id: "about", label: "About" },
];

export const Dock = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5"
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-full px-4 py-2 transition-shadow duration-300 sm:px-5 ${
          scrolled ? "shadow-[0_8px_30px_-18px_rgb(44_46_42/0.5)]" : ""
        }`}
        style={{ background: "var(--color-white)", color: "var(--color-ink)" }}
      >
        <a href="#top" className="shrink-0 text-[0.9375rem] font-medium tracking-tight">
          {profile.name}
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="rounded-full px-3 py-1.5 text-[0.875rem] text-stone transition-colors hover:bg-cream hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a href="#contact" className="pill pill-ink shrink-0 !min-h-[38px] !px-4 !text-[0.875rem]">
          Contact
        </a>
      </nav>
    </motion.div>
  );
};
