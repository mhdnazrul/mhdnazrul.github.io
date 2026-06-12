"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github, Linkedin, Mail, Send, Twitter, Loader2 } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    value: "@nazrulislam",
    href: "https://github.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "@nazrulislam",
    href: "https://linkedin.com",
  },
  {
    icon: Twitter,
    label: "Twitter",
    value: "@nazrulislam",
    href: "https://twitter.com",
  },
  {
    icon: Mail,
    label: "Email",
    value: "mhdnazrul511@gmail.com",
    href: "mailto:mhdnazrul511@gmail.com",
  },
];

type FormStatus = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        // Reset to idle after 5 seconds
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection and try again.");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-16" ref={ref}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={fadeUp} className="mb-12">
            <h2 className="section-heading">
              <span className="text-[var(--text-secondary)] font-normal">/</span>
              <span className="text-[var(--text-primary)]">contacts</span>
            </h2>
            <p className="text-[var(--text-muted)] text-sm font-mono mt-1">Who am i?</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left */}
            <motion.div variants={fadeUp}>
              <p className="text-[var(--text-secondary)] font-mono text-sm leading-7 mb-8 max-w-md">
                I&apos;m interested in freelance opportunities. However, if you
                have other requests or questions, don&apos;t hesitate to contact
                me.
              </p>

              <div className="border border-[var(--border-subtle)] p-4 mb-8">
                <p className="text-[var(--text-muted)] text-xs font-mono mb-3">
                  Message me here
                </p>
                <div className="space-y-2">
                  {socialLinks.map(({ icon: Icon, href, value, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex items-center gap-3 text-[var(--text-secondary)] text-sm font-mono hover:text-[#a855f7] transition-colors group"
                    >
                      <Icon
                        size={15}
                        className="text-[#a855f7] group-hover:scale-110 transition-transform"
                      />
                      {value}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-[var(--text-primary)] font-bold text-base mb-4">
                  <span className="text-[#a855f7]">#</span>all-media
                </h3>
                <div className="flex items-center gap-4">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="text-[var(--text-muted)] hover:text-[#a855f7] transition-colors hover:-translate-y-0.5"
                    >
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div variants={fadeUp}>
              <form
                onSubmit={handleSubmit}
                className="border border-[var(--border-subtle)] bg-[var(--bg-card)] p-6 space-y-5"
                aria-label="Contact form"
              >
                <h3 className="text-[var(--text-primary)] font-bold text-sm mb-4">
                  Send a message
                </h3>

                <div>
                  <label
                    htmlFor="name"
                    className="block text-[var(--text-muted)] text-xs font-mono mb-1.5"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    minLength={2}
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    disabled={status === "loading"}
                    className="w-full bg-[var(--bg-input)] border border-[var(--border-medium)] px-4 py-3 text-[var(--text-primary)] text-sm font-mono placeholder-[var(--text-muted)] focus:outline-none focus:border-[#a855f7] transition-colors disabled:opacity-50"
                    aria-required="true"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-[var(--text-muted)] text-xs font-mono mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    disabled={status === "loading"}
                    className="w-full bg-[var(--bg-input)] border border-[var(--border-medium)] px-4 py-3 text-[var(--text-primary)] text-sm font-mono placeholder-[var(--text-muted)] focus:outline-none focus:border-[#a855f7] transition-colors disabled:opacity-50"
                    aria-required="true"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-[var(--text-muted)] text-xs font-mono mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    minLength={10}
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    disabled={status === "loading"}
                    className="w-full bg-[var(--bg-input)] border border-[var(--border-medium)] px-4 py-3 text-[var(--text-primary)] text-sm font-mono placeholder-[var(--text-muted)] focus:outline-none focus:border-[#a855f7] transition-colors resize-none disabled:opacity-50"
                    aria-required="true"
                  />
                </div>

                {/* Success message */}
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="px-4 py-3 bg-[#22c55e]/10 border border-[#22c55e]/30 text-[#22c55e] text-xs font-mono"
                  >
                    ✓ Message sent successfully! I&apos;ll get back to you soon.
                  </motion.div>
                )}

                {/* Error message */}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="px-4 py-3 bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono"
                  >
                    ✗ {errorMsg}
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  whileHover={status === "idle" ? { scale: 1.02 } : {}}
                  whileTap={status === "idle" ? { scale: 0.98 } : {}}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-[#a855f7] text-white font-mono text-sm font-semibold hover:bg-[#9333ea] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  aria-label="Send message"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={14} className="animate-spin" />
                      Sending...
                    </>
                  ) : status === "success" ? (
                    "Message Sent! 🎉"
                  ) : (
                    <>
                      Send Message
                      <Send size={14} />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
