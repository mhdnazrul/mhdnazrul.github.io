"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ExternalLink, Github, ArrowRight, ChevronUp } from "lucide-react";
import { projects } from "@/lib/data/projects";
import { fadeUp, staggerContainer } from "@/lib/animations";

const INITIAL_DISPLAY = 3;

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <motion.article
      variants={fadeUp}
      layout
      className="border border-[var(--border-subtle)] bg-[var(--bg-card)] flex flex-col group card-glow"
      aria-label={`Project: ${project.title}`}
    >
      <div className="px-4 pt-4 pb-2 flex flex-wrap gap-2 border-b border-[var(--border-dark)]">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[var(--text-muted)] text-xs font-mono hover:text-[var(--text-secondary)] transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-[var(--text-primary)] font-bold text-sm mb-2 group-hover:text-[#a855f7] transition-colors">
          {project.title}
        </h3>
        <p className="text-[var(--text-muted)] text-xs font-mono leading-5 flex-1 mb-4">
          {project.description}
        </p>

        <div className="flex gap-2 flex-wrap">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Live demo for ${project.title}`}
              className="flex items-center gap-1.5 px-3 py-1.5 border border-[var(--border-medium)] text-[var(--text-secondary)] text-xs font-mono hover:border-[#a855f7] hover:text-[#a855f7] transition-colors"
            >
              Live
              <ExternalLink size={11} />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub repo for ${project.title}`}
              className="flex items-center gap-1.5 px-3 py-1.5 border border-[var(--border-medium)] text-[var(--text-secondary)] text-xs font-mono hover:border-[#a855f7] hover:text-[#a855f7] transition-colors"
            >
              Github
              <Github size={11} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [showAll, setShowAll] = useState(false);

  const featured = projects.filter((p) => p.category === "featured");
  const other = projects.filter((p) => p.category === "other");

  // Initially show all featured but limit other projects
  const visibleOther = showAll ? other : other.slice(0, Math.max(0, INITIAL_DISPLAY - featured.length));

  return (
    <section id="works" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-16" ref={ref}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={fadeUp} className="mb-12">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="section-heading">
                  <span className="text-[var(--text-secondary)] font-normal">/</span>
                  <span className="text-[var(--text-primary)]">projects</span>
                </h2>
                <p className="text-[var(--text-muted)] text-sm font-mono mt-1">
                  List of my projects
                </p>
              </div>
              <button
                onClick={() => setShowAll((v) => !v)}
                className="hidden md:flex items-center gap-2 text-[var(--text-secondary)] text-sm font-mono hover:text-[#a855f7] transition-colors group"
                aria-label={showAll ? "Show fewer projects" : "View all projects"}
              >
                {showAll ? (
                  <>
                    Show Less
                    <ChevronUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
                  </>
                ) : (
                  <>
                    View All
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* Featured / Complete Apps */}
          <motion.h3 variants={fadeUp} className="text-[var(--text-primary)] font-bold text-base mb-5">
            <span className="text-[#a855f7]">#</span>complete-apps
          </motion.h3>
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            <AnimatePresence>
              {featured.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Other / Small Projects */}
          <motion.h3 variants={fadeUp} className="text-[var(--text-primary)] font-bold text-base mb-5">
            <span className="text-[#a855f7]">#</span>small-projects
          </motion.h3>
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence>
              {visibleOther.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* View All / Show Less (mobile + bottom) */}
          <motion.div variants={fadeUp} className="mt-10 flex justify-center">
            <motion.button
              onClick={() => setShowAll((v) => !v)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-6 py-2.5 border border-[var(--border-medium)] text-[var(--text-secondary)] text-sm font-mono hover:border-[#a855f7] hover:text-[#a855f7] transition-colors rounded-sm"
            >
              {showAll ? (
                <>
                  <ChevronUp size={14} />
                  Show Less
                </>
              ) : (
                <>
                  <ArrowRight size={14} />
                  View All Projects
                </>
              )}
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
