import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Scroll-in motion used across every section.
 * `rise`  — y 26 → 0 (text, list rows)
 * `lift`  — y 48 + scale .97 → none (whole blocks)
 */
const variants: Record<"rise" | "lift", Variants> = {
  rise: {
    hidden: { opacity: 0, y: 26 },
    shown: { opacity: 1, y: 0 },
  },
  lift: {
    hidden: { opacity: 0, y: 48, scale: 0.97 },
    shown: { opacity: 1, y: 0, scale: 1 },
  },
};

interface RevealProps {
  children: ReactNode;
  as?: "div" | "section" | "li" | "p" | "h2" | "span";
  kind?: "rise" | "lift";
  delay?: number;
  className?: string;
  id?: string;
}

export const Reveal = ({
  children,
  as = "div",
  kind = "rise",
  delay = 0,
  className,
  id,
}: RevealProps) => {
  const Tag = motion[as];
  return (
    <Tag
      id={id}
      className={className}
      variants={variants[kind]}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.75, delay, ease: [0, 0, 0.2, 1] }}
    >
      {children}
    </Tag>
  );
};
