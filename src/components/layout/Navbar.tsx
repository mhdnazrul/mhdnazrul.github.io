"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, Code2, Globe, Feather } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "@/lib/data/profile";
import { LogoMark } from "@/components/ui/Logo";

const navLinks = [
  { label: "home", href: "#home" },
  { label: "works", href: "#works" },
  { label: "blog", href: "#blog" },
  { label: "about-me", href: "#about" },
  { label: "contacts", href: "#contact" },
];

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
      className={`inline-flex items-start text-base leading-normal transition-colors duration-200 hover:text-primary ${active
          ? "font-medium text-white"
          : "font-normal text-gray"
        }`}
      aria-label={`Maps to ${label}`}
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

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background">
      <nav className="max-w-7xl mx-auto flex items-end justify-between px-6 pb-2 pt-8 lg:px-16">
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
            <LanguageSwitcher />
          </li>
        </ul>

        {/* Mobile controls (Hamburger Menu) */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            className="text-gray transition-colors hover:text-primary"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer & Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Background Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Slide-in Drawer */}
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed left-0 top-0 z-50 flex h-screen w-[300px] flex-col overflow-y-auto bg-background p-6 shadow-2xl md:hidden"
            >
              {/* Drawer Top: Logo & Close Button */}
              <div className="mb-12 flex items-center justify-between">
                <button
                  onClick={() => handleNavClick("#home")}
                  className="inline-flex items-center gap-2"
                >
                  <LogoMark />
                  <span className="text-base font-bold text-white">Nazrul</span>
                </button>
                <button
                  className="text-gray transition-colors hover:text-white"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Navigation Links */}
              <ul className="flex flex-col gap-6 mb-10">
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
              </ul>

              {/* Language Switcher */}
              <div className="mb-auto">
                <LanguageSwitcher />
              </div>

              {/* Social Icons (Bottom) */}
              <div className="mt-10 flex items-center justify-center gap-6 pt-6 text-gray">
                <a href="#" className="transition-colors hover:text-white" aria-label="GitHub">
                  <Code2 size={28} />
                </a>
                <a href="#" className="transition-colors hover:text-white" aria-label="Website">
                  <Globe size={28} />
                </a>
                <a href="#" className="transition-colors hover:text-white" aria-label="Design">
                  <Feather size={28} />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
