'use client';

import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import {
    fadeUp,
    staggerContainer,
    fadeInUp,
    fadeInUpDelayed,
} from '@/lib/animations';
import { scrollToSection } from '@/lib/utils';
import { profile } from '@/lib/data/profile';

export default Hero;

function Hero() {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center relative overflow-hidden pt-24 pb-12 bg-[var(--background)]"
        >
            <div className="px-6 lg:px-16 max-w-7xl mx-auto lg:px-0 w-full">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-4">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        className="w-full lg:w-[60%] z-10"
                    >
                        <motion.h1
                            variants={fadeUp}
                            className="text-[28px] md:text-4xl lg:text-5xl font-semibold leading-tight mb-8 font-mono text-[var(--text-primary)] min-h-[90px] md:min-h-[100px]"
                        >
                            Nazrul is a <br />
                            <span className="whitespace-nowrap">
                                <TypeAnimation
                                    sequence={[...profile.heroTaglines]}
                                    wrapper="span"
                                    speed={50}
                                    deletionSpeed={65}
                                    repeat={Infinity}
                                    cursor={true}
                                    className="text-[var(--primary)]"
                                />
                            </span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            variants={fadeUp}
                            className="text-[var(--text-secondary)] text-justify leading-relaxed mb-8 max-w-lg font-mono"
                        >
                            {profile.heroSubtitle}
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            variants={fadeUp}
                            className="flex flex-wrap gap-4 mt-8"
                        >
                            <button
                                onClick={() => scrollToSection('#contact-me')}
                                className="flex items-center gap-2 px-6 py-2 border border-[var(--primary)] text-[var(--text-primary)] font-mono text-sm hover:bg-[var(--primary)]/10 transition-colors duration-200"
                                aria-label="Contact me"
                            >
                                Contact me!!
                            </button>

                            <a
                                href={profile.resumeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Download Resume"
                                className="flex items-center gap-2 px-6 py-2 border border-[var(--border-subtle)] text-[var(--text-secondary)] font-mono text-sm hover:border-[var(--text-primary)] hover:text-[var(--text-primary)] transition-colors duration-200"
                            >
                                Resume
                                <Download size={16} />
                            </a>
                        </motion.div>
                    </motion.div>

                    {/*  Right Content: Image & Graphics*/}
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                        className="relative w-full lg:w-[40%] flex flex-col items-center lg:items-end mt-10 lg:mt-0"
                    >
                        <div className="relative flex flex-col items-center">
                            {/* Left Geometric Graphic Outline */}
                            <div className="absolute top-10 -left-6 md:-left-8 z-100 opacity-80">
                                <svg
                                    width="120"
                                    height="120"
                                    viewBox="0 0 155 155"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect
                                        x="0.5"
                                        y="77.5"
                                        width="77"
                                        height="77"
                                        stroke="var(--primary)"
                                    />
                                    <rect
                                        x="77.5"
                                        y="0.5"
                                        width="77"
                                        height="77"
                                        stroke="var(--primary)"
                                    />
                                    <rect
                                        x="38.5"
                                        y="38.5"
                                        width="77"
                                        height="77"
                                        stroke="var(--primary)"
                                    />
                                </svg>
                            </div>

                            {/* Right Dot Grid Pattern */}
                            <div className="absolute bottom-16 -right-4 md:-right-8 z-100 opacity-80">
                                <svg
                                    width="84"
                                    height="84"
                                    viewBox="0 0 84 84"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    {[...Array(5)].map((_, i) =>
                                        [...Array(5)].map((_, j) => (
                                            <circle
                                                key={`${i}-${j}`}
                                                cx={10 + j * 16}
                                                cy={10 + i * 16}
                                                r="2"
                                                fill="var(--text-secondary)"
                                            />
                                        )),
                                    )}
                                </svg>
                            </div>

                            {/* Profile Image */}
                            <div className="relative z-10 w-[280px] h-[320px] md:w-[320px] md:h-[380px]">
                                <Image
                                    src="/profile.png"
                                    alt="Nazrul Islam"
                                    fill
                                    className="object-contain object-bottom grayscale hover:grayscale-0 transition-all duration-500"
                                    priority
                                />
                            </div>

                            {/* Status Box */}
                            <div className="relative z-20 w-[280px] md:w-[320px] -mt-[1px] bg-[var(--background)] border border-[var(--border-subtle)] p-2 flex items-center gap-3">
                                <div className="w-4 h-4 bg-[var(--primary)] shrink-0 " />
                                <p className="text-[var(--text-secondary)] font-mono text-sm">
                                    Currently working on{' '}
                                    <span className="text-[var(--text-primary)] font-bold">
                                        {profile.currentWork || 'Portfolio'}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Quote section */}
                <motion.div
                    variants={fadeInUpDelayed}
                    initial="hidden"
                    animate="visible"
                    className="mt-24 mx-auto border border-[var(--border-subtle)] p-6 max-w-x relative flex flex-col items-center"
                >
                    <div className="absolute -top-3 left-4 bg-[var(--background)] px-2 text-[var(--text-secondary)]">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10 8H6C6 5.79 7.79 4 10 4V2C6.69 2 4 4.69 4 8V12H10V8ZM20 8H16C16 5.79 17.79 4 20 4V2C16.69 2 14 4.69 14 8V12H20V8Z"
                                fill="currentColor"
                            />
                        </svg>
                    </div>
                    <p className="text-[var(--text-primary)] text-justify font-mono text-lg text-center font-medium">
                        {profile.quote.text}
                    </p>
                    <div className="absolute -bottom-3 right-4 bg-[var(--background)] px-2 text-[var(--text-secondary)]">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="rotate-180"
                        >
                            <path
                                d="M10 8H6C6 5.79 7.79 4 10 4V2C6.69 2 4 4.69 4 8V12H10V8ZM20 8H16C16 5.79 17.79 4 20 4V2C16.69 2 14 4.69 14 8V12H20V8Z"
                                fill="currentColor"
                            />
                        </svg>
                    </div>
                    <div className="self-end mt-4 border-t border-[var(--border-subtle)] pt-2">
                        <p className="text-[var(--text-secondary)] font-mono text-sm">
                            {profile.quote.attribution}
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
