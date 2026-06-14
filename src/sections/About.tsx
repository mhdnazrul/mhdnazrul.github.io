'use client';

import { useState } from 'react';
import Image from 'next/image';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { DotGrid } from '@/components/ui/DotGrid';

import { profile } from '@/lib/data/profile';

export default function About() {
    // State to track if the text is expanded
    const [isExpanded, setIsExpanded] = useState(false);

    // Filter text based on the expanded state
    // Show first 2 items (Heading + 1st Paragraph) if not expanded, show all if expanded
    const visibleText = isExpanded
        ? profile.aboutText
        : profile.aboutText.slice(0, 2);

    return (
        <section
            id="about-me"
            className="py-20 px-6 lg:px-16 max-w-7xl mx-auto"
        >
            <SectionHeading title="about-me" />

            <div className="max-w-7xl mx-auto mt-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left: Text Content */}
                    <div>
                        <div className="space-y-4 mb-8">
                            {visibleText.map((text, idx) => (
                                <p
                                    key={idx}
                                    className={`text-justify text-[var(--text-secondary)] font-mono leading-relaxed ${
                                        idx === 0
                                            ? 'text-lg font-bold text-[var(--text-primary)]'
                                            : 'text-sm'
                                    }`}
                                >
                                    {text}
                                </p>
                            ))}
                        </div>
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="border border-[var(--primary)] text-[var(--primary)] px-6 py-2 hover:bg-[var(--primary)] hover:text-white transition-all font-mono text-sm"
                        >
                            {isExpanded ? 'Show less <-' : 'Read more ->'}
                        </button>
                    </div>

                    {/* Right: Profile Image with Decorative Elements */}
                    <div className="relative h-96 flex items-center justify-center lg:mt-0 mt-8">
                        {/* Dot Grid - Top Left */}
                        <div className="absolute top-0 left-0 z-0 hidden md:block">
                            <DotGrid size={16} spacing={25} opacity={0.4} />
                        </div>

                        {/* Dot Grid - Bottom Right */}
                        <div className="absolute bottom-0 right-0 z-0 hidden md:block">
                            <DotGrid size={16} spacing={25} opacity={0.4} />
                        </div>

                        {/* Profile Image */}
                        <div className="relative z-10 w-48 h-64 md:w-56 md:h-72">
                            <Image
                                src="/nazrulislam_about_img.png"
                                alt="Nazrul Islam"
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-300 border-b-4 border-[var(--primary)]"
                            />
                        </div>
                    </div>
                </div>

                {/* Fun Facts Section */}
                <div className="mt-20">
                    <h3 className="text-[var(--primary)] font-mono text-lg mb-8 flex items-center gap-2">
                        <span>#</span>my-fun-facts
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {profile.funFacts.map((fact, idx) => (
                            <div
                                key={idx}
                                className="border border-[var(--border-subtle)] px-4 py-3 text-[var(--text-secondary)] font-mono text-xs hover:border-[var(--primary)] hover:-translate-y-1 transition-all duration-300"
                            >
                                {fact}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
