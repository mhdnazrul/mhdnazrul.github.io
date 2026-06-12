"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import Image from "next/image";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { profile } from "@/lib/data/profile";

export default function Hero() {
  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden pt-20"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#a855f7]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#a855f7]/3 rounded-full blur-3xl" />
      </div>

      {/* Decorative Ellipse 8 — top-right area */}
      <div
        className="absolute top-8 right-8 w-32 h-32 pointer-events-none opacity-60 select-none"
        aria-hidden="true"
      >
        <Image
          src="/ellipse-8.png"
          alt=""
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Decorative Ellipse 9 — bottom-left area */}
      <div
        className="absolute bottom-16 left-4 w-24 h-24 pointer-events-none opacity-50 select-none"
        aria-hidden="true"
      >
        <Image
          src="/ellipse-9.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Tag line */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-2 mb-6"
            >
              <span className="w-2 h-2 bg-[#22c55e] rounded-full animate-pulse" />
              <span className="text-[var(--text-secondary)] text-sm font-mono">
                Currently working on{" "}
                <span className="text-[var(--text-primary)] font-semibold">{profile.currentWork}</span>
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              variants={fadeUp}
              className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6"
            >
              <span className="text-[var(--text-primary)]">NazrulIslam is a </span>
              <span className="text-[#a855f7]">web developer</span>
              <span className="text-[var(--text-primary)]"> and </span>
              <br />
              <span className="text-[#a855f7]">software engineer</span>
            </motion.h1>

            {/* Bio */}
            <motion.p
              variants={fadeUp}
              className="text-[var(--text-secondary)] text-base leading-relaxed mb-8 max-w-lg font-mono"
            >
              {profile.bio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollToSection("#works")}
                className="flex items-center gap-2 px-6 py-3 bg-[#a855f7] text-white font-mono text-sm font-semibold rounded-sm hover:bg-[#9333ea] transition-colors duration-200"
                aria-label="View projects"
              >
                View Projects
                <ArrowRight size={16} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollToSection("#contact")}
                className="flex items-center gap-2 px-6 py-3 border border-[var(--border-medium)] text-[var(--text-secondary)] font-mono text-sm font-semibold rounded-sm hover:border-[#a855f7] hover:text-[#a855f7] transition-colors duration-200"
                aria-label="Contact me"
              >
                Contact me!!
                <Mail size={16} />
              </motion.button>

              {/* Resume Download Button */}
              <motion.a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                aria-label="Download Resume"
                className="flex items-center gap-2 px-6 py-3 border border-[#a855f7]/50 text-[#a855f7] font-mono text-sm font-semibold rounded-sm hover:bg-[#a855f7]/10 transition-colors duration-200"
              >
                Resume
                <Download size={16} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center"
          >
            {/* Decorative dot-grid */}
            <div
              className="absolute -top-8 -right-8 w-32 h-32 opacity-30 dot-pattern"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-8 -left-8 w-24 h-24 opacity-20 dot-pattern"
              aria-hidden="true"
            />

            {/* Profile container */}
            <div className="relative w-72 h-72 lg:w-80 lg:h-80">
              <div className="absolute inset-0 rounded-full border border-[#a855f7]/20" />
              <div className="absolute inset-4 rounded-full border border-[#a855f7]/10" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#a855f7]/20 to-transparent rounded-[60%_40%_30%_70%/60%_30%_70%_40%]" />

              <div className="absolute inset-8 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] overflow-hidden border-2 border-[#a855f7]/30">
                <Image
                  src="/nazrulislam_profile.png"
                  alt="NazrulIslam - Developer"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#a855f7] rounded-full opacity-60 blur-sm" />
              <div className="absolute -bottom-2 -left-4 w-5 h-5 bg-[#a855f7] rounded-full opacity-40 blur-sm" />
            </div>
          </motion.div>
        </div>

        {/* Quote section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 border border-[var(--border-subtle)] bg-[var(--bg-card)] p-6 max-w-xl relative"
        >
          <span className="text-[#a855f7] text-3xl absolute -top-4 left-4 select-none">
            "
          </span>
          <p className="text-[var(--text-primary)] font-mono text-sm leading-relaxed pl-4">
            With great power comes great electricity bill
          </p>
          <p className="text-[var(--text-muted)] font-mono text-sm mt-3 text-right">
            — Dr. Who
          </p>
          <span className="text-[#a855f7] text-3xl absolute -bottom-5 right-8 select-none">
            "
          </span>
        </motion.div>
      </div>
    </section>
  );
}
