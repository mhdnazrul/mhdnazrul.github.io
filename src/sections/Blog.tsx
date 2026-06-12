"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ArrowRight, ChevronUp, Clock, Tag } from "lucide-react";
import { blogPosts } from "@/lib/data/blog";
import { fadeUp, staggerContainer } from "@/lib/animations";

const INITIAL_DISPLAY = 3;

const gradients = [
  "from-[#a855f7]/20 to-[#1a1a1a]",
  "from-[#22c55e]/20 to-[#1a1a1a]",
  "from-[#3b82f6]/20 to-[#1a1a1a]",
  "from-[#f59e0b]/20 to-[#1a1a1a]",
  "from-[#ec4899]/20 to-[#1a1a1a]",
  "from-[#06b6d4]/20 to-[#1a1a1a]",
];

function BlogCard({ post, index }: { post: (typeof blogPosts)[0]; index: number }) {
  return (
    <motion.article
      variants={fadeUp}
      layout
      className="border border-[var(--border-subtle)] bg-[var(--bg-card)] flex flex-col group card-glow overflow-hidden"
      aria-label={`Blog post: ${post.title}`}
    >
      <div
        className={`h-36 bg-gradient-to-br ${gradients[index % gradients.length]} flex items-center justify-center border-b border-[var(--border-dark)]`}
      >
        <span className="text-3xl opacity-30 select-none">{"{}"}</span>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex flex-wrap gap-2 mb-3">
          {post.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-1 text-[var(--text-muted)] text-xs font-mono"
            >
              <Tag size={9} />
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-[var(--text-primary)] text-sm font-bold leading-snug mb-2 group-hover:text-[#a855f7] transition-colors">
          {post.title}
        </h3>

        <p className="text-[var(--text-muted)] text-xs font-mono leading-5 flex-1 mb-4">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1 text-[var(--text-dimmer)] text-xs font-mono">
            <Clock size={10} />
            {post.readTime}
          </span>
          <a
            href={`/blog/${post.slug}`}
            className="flex items-center gap-1.5 text-[#a855f7] text-xs font-mono hover:gap-2.5 transition-all"
            aria-label={`Read more about ${post.title}`}
          >
            Read more
            <ArrowRight size={12} />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function Blog() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [showAll, setShowAll] = useState(false);

  const visiblePosts = showAll ? blogPosts : blogPosts.slice(0, INITIAL_DISPLAY);

  return (
    <section id="blog" className="py-24 relative">
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
                  <span className="text-[#a855f7]">#</span>
                  <span className="text-[var(--text-primary)]">blog</span>
                </h2>
                <div className="mt-3 h-px w-32 bg-gradient-to-r from-[#a855f7]/50 to-transparent" />
                <p className="text-[var(--text-muted)] text-sm font-mono mt-3">
                  Thoughts, articles, and notes from my journey
                </p>
              </div>
              <button
                onClick={() => setShowAll((v) => !v)}
                className="hidden md:flex items-center gap-2 text-[var(--text-secondary)] text-sm font-mono hover:text-[#a855f7] transition-colors group"
                aria-label={showAll ? "Show fewer posts" : "View all posts"}
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

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence>
              {visiblePosts.map((post, i) => (
                <BlogCard key={post.id} post={post} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* View All / Show Less button (always visible at bottom) */}
          {blogPosts.length > INITIAL_DISPLAY && (
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
                    View All Posts
                  </>
                )}
              </motion.button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
