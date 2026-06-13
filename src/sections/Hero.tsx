"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { profile } from "@/lib/data/profile";

export default Hero;

function Hero() {
  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden pt-24 pb-12 bg-[#282c33]"
    >
      {/* 
        পরিবর্তন ১: max-w-7xl এর বদলে max-w-7xl এবং lg:px-0 ব্যবহার করা হয়েছে, 
        যাতে এটি নেভবারের "EN" বাটনের একদম সমান লাইনে থাকে।
      */}
      <div className="py-20 px-6 lg:px-16 max-w-7xl mx-auto lg:px-0 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-4">

          {/* Left Content: Text - বাম দিকে জায়গা বাড়ানো হয়েছে (lg:w-[60%]) */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="w-full lg:w-[60%] z-10"
          >
            {/* 
              পরিবর্তন ২: ফন্ট সাইজ একটু রেস্পন্সিভ করা হয়েছে এবং 
              whitespace-nowrap দেওয়া হয়েছে যেন টেক্সট দুই লাইন না হয়। 
            */}
            <motion.h1
              variants={fadeUp}
              className="text-[28px] md:text-4xl lg:text-5xl font-semibold leading-tight mb-8 font-mono text-white min-h-[90px] md:min-h-[100px]"
            >
              Nazrul is a <br />
              <span className="whitespace-nowrap">
                <TypeAnimation
                  sequence={[
                    "Full-Stack Developer", 2000,
                    "UI/UX Designer", 2000,
                    "Problem Solver", 2000,
                    "IoT Enthusiast", 2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  deletingSpeed={65}
                  repeat={Infinity}
                  cursor={true}
                  className="text-[#c778dd]"
                />
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              className="text-[#ABB2BF] text-base leading-relaxed mb-8 max-w-lg font-mono"
            >
              He crafts responsive websites where technologies meet creativity
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-4 mt-8"
            >
              <button
                onClick={() => scrollToSection("#contact")}
                className="flex items-center gap-2 px-6 py-2 border border-[#c778dd] text-white font-mono text-sm hover:bg-[#c778dd]/10 transition-colors duration-200"
                aria-label="Contact me"
              >
                Contact me!!
              </button>

              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Resume"
                className="flex items-center gap-2 px-6 py-2 border border-[#ABB2BF] text-[#ABB2BF] font-mono text-sm hover:border-white hover:text-white transition-colors duration-200"
              >
                Resume
                <Download size={16} />
              </a>
            </motion.div>
          </motion.div>

          {/* 
            Right Content: Image & Graphics 
            পরিবর্তন ৩: ইমেজ সেকশনকে lg:w-[40%] দিয়ে lg:items-end এর মাধ্যমে ডান দিকে চাপানো হয়েছে।
          */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative w-full lg:w-[40%] flex flex-col items-center lg:items-end mt-10 lg:mt-0"
          >
            <div className="relative flex flex-col items-center">
              {/* Left Geometric Graphic Outline */}
              <div className="absolute top-10 -left-6 md:-left-8 z-0 opacity-80">
                <svg width="120" height="120" viewBox="0 0 155 155" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="77.5" width="77" height="77" stroke="#C778DD" />
                  <rect x="77.5" y="0.5" width="77" height="77" stroke="#C778DD" />
                  <rect x="38.5" y="38.5" width="77" height="77" stroke="#C778DD" />
                </svg>
              </div>

              {/* Right Dot Grid Pattern */}
              <div className="absolute bottom-16 -right-4 md:-right-8 z-0 opacity-80">
                <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {[...Array(5)].map((_, i) =>
                    [...Array(5)].map((_, j) => (
                      <circle key={`${i}-${j}`} cx={10 + j * 16} cy={10 + i * 16} r="2" fill="#ABB2BF" />
                    ))
                  )}
                </svg>
              </div>

              {/* Profile Image */}
              <div className="relative z-10 w-[280px] h-[320px] md:w-[320px] md:h-[380px]">
                <Image
                  src="/nazrulislam_profile.png"
                  alt="Nazrul Islam"
                  fill
                  className="object-contain object-bottom grayscale hover:grayscale-0 transition-all duration-500"
                  priority
                />
              </div>

              {/* Status Box */}
              <div className="relative z-20 w-[280px] md:w-[320px] -mt-[1px] bg-[#282c33] border border-[#ABB2BF] p-2 flex items-center gap-3">
                <div className="w-4 h-4 bg-[#c778dd] shrink-0" />
                <p className="text-[#ABB2BF] font-mono text-sm">
                  Currently working on{" "}
                  <span className="text-white font-bold">{profile.currentWork || "Portfolio"}</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quote section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-24 mx-auto border border-[#ABB2BF] p-6 max-w-x relative flex flex-col items-center"
        >
          <div className="absolute -top-3 left-4 bg-[#282c33] px-2 text-[#ABB2BF]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 8H6C6 5.79 7.79 4 10 4V2C6.69 2 4 4.69 4 8V12H10V8ZM20 8H16C16 5.79 17.79 4 20 4V2C16.69 2 14 4.69 14 8V12H20V8Z" fill="#ABB2BF" />
            </svg>
          </div>
          <p className="text-white font-mono text-lg text-center font-medium">
            With great power comes great electricity bill
          </p>
          <div className="absolute -bottom-3 right-4 bg-[#282c33] px-2 text-[#ABB2BF]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180">
              <path d="M10 8H6C6 5.79 7.79 4 10 4V2C6.69 2 4 4.69 4 8V12H10V8ZM20 8H16C16 5.79 17.79 4 20 4V2C16.69 2 14 4.69 14 8V12H20V8Z" fill="#ABB2BF" />
            </svg>
          </div>
          <div className="self-end mt-4 border-t border-[#ABB2BF] pt-2">
            <p className="text-[#ABB2BF] font-mono text-sm">
              — Dr. Who
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
