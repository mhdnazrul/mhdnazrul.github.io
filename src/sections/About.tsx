"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase, Award, Smile } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";

const education = [
  {
    period: "2022 – Present",
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "University of Science & Technology",
    details: "CGPA: 3.80/4.00 · Studying DSA, OS, DBMS, Networking",
  },
  {
    period: "2019 – 2021",
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Science College",
    details: "GPA: 5.00/5.00 · Science Group",
  },
];

const experience = [
  {
    period: "2024 – Present",
    role: "Open Source Contributor",
    org: "GitHub Community",
    details: "Contributing to React and Next.js ecosystem projects",
  },
  {
    period: "2023",
    role: "Web Development Intern",
    org: "Tech Startup (Remote)",
    details: "Built dashboard UI with React and REST API integration",
  },
  {
    period: "2023",
    role: "Programming Club Lead",
    org: "CSE Association",
    details: "Organized hackathons, CP workshops, and coding bootcamps",
  },
];

const certifications = [
  "CS50x – Harvard (edX), 2024",
  "Meta Front-End Developer Certificate, 2023",
  "Google DSA with Python (Coursera), 2023",
  "National Hackathon – Runner-Up, 2024",
];

const funFacts = [
  "I debug with console.log and I'm not ashamed",
  "I use Arch btw",
  "I have more side projects than finished ones",
  "I read git blame more than novels",
  "I prefer dark mode in everything",
  "I still count array indices from 0",
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-16" ref={ref}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Heading */}
          <motion.div variants={fadeUp} className="mb-10">
            <h2 className="section-heading">
              <span className="text-[#94a3b8] font-normal">/</span>
              <span className="text-white">about-me</span>
            </h2>
            <div className="mt-3 flex items-center gap-4">
              <p className="text-[#555] text-sm font-mono">Who am i?</p>
              <div className="h-px flex-1 bg-[#1e1e1e]" />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div variants={fadeUp} className="max-w-2xl mb-16">
            <p className="text-[#e2e8f0] font-mono text-sm leading-7 mb-4">
              Hello, I&apos;m{" "}
              <span className="text-[#a855f7]">NazrulIslam!</span>
            </p>
            <p className="text-[#94a3b8] font-mono text-sm leading-7 mb-4">
              I&apos;m a self-taught CSE student and developer passionate about
              building responsive, modern web applications from scratch. I
              transform ideas into clean, functional digital products.
            </p>
            <p className="text-[#94a3b8] font-mono text-sm leading-7">
              Transforming my creativity and knowledge into websites has been my
              passion. I strive to learn the newest technologies and frameworks,
              and always push to write cleaner, faster, more maintainable code.
            </p>
          </motion.div>

          {/* Education & Experience */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Education */}
            <motion.div variants={fadeUp}>
              <h3 className="flex items-center gap-2 text-white font-bold text-lg mb-6">
                <GraduationCap size={20} className="text-[#a855f7]" />
                <span className="text-[#a855f7]">#</span>education
              </h3>
              <div className="space-y-6">
                {education.map((edu, i) => (
                  <div
                    key={i}
                    className="border-l-2 border-[#a855f7]/30 pl-5 relative"
                  >
                    <div className="absolute -left-[5px] top-1.5 w-2 h-2 bg-[#a855f7] rounded-full" />
                    <span className="text-[#555] text-xs font-mono">
                      {edu.period}
                    </span>
                    <p className="text-white font-semibold text-sm mt-1">
                      {edu.degree}
                    </p>
                    <p className="text-[#a855f7] text-xs font-mono">
                      {edu.institution}
                    </p>
                    <p className="text-[#555] text-xs font-mono mt-1">
                      {edu.details}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div variants={fadeUp}>
              <h3 className="flex items-center gap-2 text-white font-bold text-lg mb-6">
                <Briefcase size={20} className="text-[#a855f7]" />
                <span className="text-[#a855f7]">#</span>experience
              </h3>
              <div className="space-y-6">
                {experience.map((exp, i) => (
                  <div
                    key={i}
                    className="border-l-2 border-[#a855f7]/30 pl-5 relative"
                  >
                    <div className="absolute -left-[5px] top-1.5 w-2 h-2 bg-[#a855f7] rounded-full" />
                    <span className="text-[#555] text-xs font-mono">
                      {exp.period}
                    </span>
                    <p className="text-white font-semibold text-sm mt-1">
                      {exp.role}
                    </p>
                    <p className="text-[#a855f7] text-xs font-mono">
                      {exp.org}
                    </p>
                    <p className="text-[#555] text-xs font-mono mt-1">
                      {exp.details}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Certifications */}
          <motion.div variants={fadeUp} className="mb-16">
            <h3 className="flex items-center gap-2 text-white font-bold text-lg mb-6">
              <Award size={20} className="text-[#a855f7]" />
              <span className="text-[#a855f7]">#</span>certifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className="border border-[#1e1e1e] px-4 py-3 text-[#94a3b8] text-sm font-mono hover:border-[#a855f7]/30 transition-colors"
                >
                  <span className="text-[#a855f7] mr-2">›</span>
                  {cert}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Fun Facts */}
          <motion.div variants={fadeUp}>
            <h3 className="flex items-center gap-2 text-white font-bold text-lg mb-6">
              <Smile size={20} className="text-[#a855f7]" />
              <span className="text-[#a855f7]">#</span>my-fun-facts
            </h3>
            <div className="flex flex-wrap gap-3">
              {funFacts.map((fact, i) => (
                <span
                  key={i}
                  className="border border-[#2a2a2a] px-4 py-2 text-[#94a3b8] text-xs font-mono hover:border-[#a855f7]/40 hover:text-[#a855f7] transition-colors cursor-default"
                >
                  {fact}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
