"use client";

import { motion } from "framer-motion";

type BurgerButtonProps = {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
};

/** Figma burger: two offset lines (closed) → X (open) */
export function BurgerButton({ isOpen, onClick, className = "" }: BurgerButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative h-6 w-6 shrink-0 ${className}`}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
    >
      {/* Top line — full width when closed, rotates to X */}
      <motion.span
        className="absolute left-0 h-0.5 w-6 bg-[#d9d9d9]"
        initial={false}
        animate={
          isOpen
            ? { top: 11, rotate: 45 }
            : { top: 5, rotate: 0, width: 24 }
        }
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      />
      {/* Bottom line — shorter when closed, rotates to X */}
      <motion.span
        className="absolute h-0.5 bg-[#d9d9d9]"
        initial={false}
        animate={
          isOpen
            ? { top: 11, left: 0, rotate: -45, width: 24 }
            : { top: 12, left: 9, rotate: 0, width: 15 }
        }
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      />
    </button>
  );
}
