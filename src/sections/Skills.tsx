"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { skillCategories } from "@/lib/data/skills";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-24 relative">
      <div
        className="absolute left-4 top-1/3 w-24 h-24 dot-pattern opacity-30 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute right-8 bottom-1/4 w-20 h-20 dot-pattern opacity-20 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-16" ref={ref}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={fadeUp} className="mb-12">
            <h2 className="section-heading">
              <span className="text-[#a855f7]">#</span>
              <span className="text-[var(--text-primary)]">skills</span>
            </h2>
            <div className="mt-3 h-px w-48 bg-gradient-to-r from-[#a855f7]/50 to-transparent" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {skillCategories.map((category) => (
              <motion.div
                key={category.name}
                variants={fadeUp}
                className="border border-[var(--border-subtle)] bg-[var(--bg-card)] p-5 card-glow group"
              >
                <p className="text-[var(--text-primary)] font-bold text-sm mb-4 pb-3 border-b border-[var(--border-subtle)] group-hover:text-[#a855f7] transition-colors">
                  {category.name}
                </p>
                <div className="flex flex-wrap gap-y-2 gap-x-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[var(--text-secondary)] text-xs font-mono hover:text-[var(--text-primary)] transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeUp}
            className="mt-16 flex items-center justify-center gap-6 opacity-30"
            aria-hidden="true"
          >
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-12 h-12 border border-[var(--border-medium)] rotate-45"
                style={{ opacity: 0.3 + i * 0.14 }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
