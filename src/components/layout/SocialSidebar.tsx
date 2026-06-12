"use client";

import { Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import { profile } from "@/lib/data/profile";

const socialLinks = [
  { icon: Github, href: profile.github, label: "GitHub" },
  { icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
  { icon: Twitter, href: profile.twitter, label: "Twitter" },
];

export default function SocialSidebar() {
  return (
    <motion.aside
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      className="fixed left-[17px] top-0 z-40 hidden h-[311px] flex-col items-center gap-2 bg-background lg:flex"
      aria-label="Social media links"
    >
      {/* Vertical line above icons — 191px per Figma */}
      <div className="mt-auto h-[191px] w-px bg-gray" aria-hidden="true" />

      {/* Social icons — 32px, gap 8px */}
      <div className="flex flex-col items-center gap-2">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-gray transition-colors duration-200 hover:text-primary"
          >
            <Icon size={32} strokeWidth={1.25} />
          </a>
        ))}
      </div>
    </motion.aside>
  );
}
