"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Send, Loader2 } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";

// --- Custom SVG Icons for Brands ---
const Github = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

const Linkedin = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Twitter = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

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
          {/* --- Updated Heading Design to match image_d07f0e.png --- */}
          <motion.div variants={fadeUp} className="mb-12">
            <div className="flex items-center gap-4">
              <h2 className="text-white font-mono text-3xl font-medium">
                <span className="text-[#C778DD]">#</span>contacts
              </h2>
              {/* Horizontal Line */}
              <div className="h-[1px] bg-[#C778DD] w-[100%]"></div>          </div>
            <p className="text-[var(--text-muted)] text-sm font-mono mt-4">Who am i?</p>
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
                      className="flex items-center gap-3 text-[var(--text-secondary)] text-sm font-mono hover:text-[#C778DD] transition-colors group"
                    >
                      <Icon
                        size={15}
                        className="text-[#C778DD] group-hover:scale-110 transition-transform"
                      />
                      {value}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-[var(--text-primary)] font-bold text-base mb-4">
                  <span className="text-[#C778DD]">#</span>all-media
                </h3>
                <div className="flex items-center gap-4">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="text-[var(--text-muted)] hover:text-[#C778DD] transition-colors hover:-translate-y-0.5"
                    >
                      <Icon size={20} className="" />
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
                    className="w-full bg-[var(--bg-input)] border border-[var(--border-medium)] px-4 py-3 text-[var(--text-primary)] text-sm font-mono placeholder-[var(--text-muted)] focus:outline-none focus:border-[#C778DD] transition-colors duration-200 disabled:opacity-50"
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
                    className="w-full bg-[var(--bg-input)] border border-[var(--border-medium)] px-4 py-3 text-[var(--text-primary)] text-sm font-mono placeholder-[var(--text-muted)] focus:outline-none focus:border-[#C778DD] transition-colors duration-200 disabled:opacity-50"
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
                    className="w-full bg-[var(--bg-input)] border border-[var(--border-medium)] px-4 py-3 text-[var(--text-primary)] text-sm font-mono placeholder-[var(--text-muted)] focus:outline-none focus:border-[#C778DD] transition-colors duration-200 disabled:opacity-50 resize-none"
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
                  className="w-full flex items-center justify-center gap-2 py-3 bg-[#C778DD] text-white font-mono text-sm font-semibold hover:bg-[#b560cb] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
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