"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "@/lib/data/profile";

const navLinks = [
  { label: "home", href: "#home" },
  { label: "works", href: "#works" },
  { label: "about-me", href: "#about" },
  { label: "contacts", href: "#contact" },
];

function LogoMark() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M0 12V4h4v4H4v4H0z"
        fill="#C778DD"
        stroke="#C778DD"
        strokeWidth="0.5"
      />
      <path
        d="M8 0h8v4h-4v4H8V0z"
        fill="none"
        stroke="#C778DD"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function NavLink({
  label,
  href,
  active,
  onClick,
}: {
  label: string;
  href: string;
  active: boolean;
  onClick: (href: string) => void;
}) {
  return (
    <button
      onClick={() => onClick(href)}
      className={`inline-flex items-start text-base leading-normal transition-colors duration-200 hover:text-primary ${
        active
          ? "font-medium text-white"
          : "font-normal text-gray"
      }`}
      aria-label={`Navigate to ${label}`}
      aria-current={active ? "page" : undefined}
    >
      <span className="text-primary">#</span>
      <span>{label}</span>
    </button>
  );
}

function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1 text-base font-semibold text-gray transition-colors hover:text-primary"
        aria-label="Language switcher"
        aria-expanded={open}
      >
        EN
        <ChevronDown
          size={10}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-[calc(100%+8px)] z-50 flex flex-col gap-2 border border-gray bg-background p-2 text-base font-normal text-gray"
          >
            {["BN", "EN"].map((lang) => (
              <button
                key={lang}
                onClick={() => setOpen(false)}
                className="whitespace-nowrap text-left transition-colors hover:text-white"
              >
                {lang}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("#home");

  const handleNavClick = (href: string) => {
    setActive(href);
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background">
      <nav className="mx-auto flex max-w-[1024px] items-end justify-between px-6 pb-2 pt-8 lg:px-0">
        {/* Logo + name */}
        <button
          onClick={() => handleNavClick("#home")}
          className="inline-flex items-center gap-2 transition-opacity hover:opacity-80"
          aria-label="Go to home"
        >
          <LogoMark />
          <span className="text-base font-bold text-white">Nazrul Islam</span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <NavLink
                label={link.label}
                href={link.href}
                active={active === link.href}
                onClick={handleNavClick}
              />
            </li>
          ))}

          <li>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Resume"
              className="btn-outline inline-flex items-center gap-1.5"
            >
              <FileText size={14} />
              Resume
            </a>
          </li>

          <li>
            <LanguageSwitcher />
          </li>
        </ul>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Resume"
            className="btn-outline inline-flex items-center gap-1 px-3 py-1.5 text-sm"
          >
            <FileText size={13} />
            Resume
          </a>
          <button
            className="text-gray transition-colors hover:text-primary"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-b border-gray bg-background md:hidden"
          >
            <ul className="flex flex-col gap-4 px-6 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <NavLink
                    label={link.label}
                    href={link.href}
                    active={active === link.href}
                    onClick={handleNavClick}
                  />
                </li>
              ))}
              <li>
                <LanguageSwitcher />
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
