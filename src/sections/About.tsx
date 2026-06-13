'use client';

import { useState } from 'react';
import Image from 'next/image';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { DotGrid } from '@/components/ui/DotGrid';

const aboutText = [
    "Hello, I'm Nazrul Islam!",
    "I am a 23-year-old passionate full-stack developer, competitive programmer, and tech enthusiast from Cox's Bazar, currently based in Chittagong, Bangladesh. I am in my fourth year, pursuing a B.Sc. in Computer Science and Engineering at Premier University. My journey into the tech world began with a deep curiosity about how things work behind the screen, and over time it has evolved into a relentless drive to build, optimize, and innovate.",

    "Since starting my web development journey in 2023, I have progressed from creating basic front-end interfaces to architecting robust, scalable full-stack applications. Today, I specialize in modern technologies such as Next.js, TypeScript, and the MERN stack. Whether I'm designing an intuitive user interface or structuring a complex database, I focus on delivering seamless, user-friendly, and high-performance digital experiences from the ground up.",

    "Beyond web development, I am a dedicated problem solver. I regularly tackle algorithmic challenges on platforms like Codeforces using C++, which has sharpened my logical thinking skills. I strongly believe in writing clean, self-explanatory code where complex logic is simplified into highly efficient solutions. This problem-solving mindset directly influences my development process, enabling me to build comprehensive platforms like 'cfclash' and 'Shopfinity' with structural integrity.",

    'My passion for technology extends beyond just writing code. I am also a video editor with over 50 videos published on my tech YouTube channel, a graphic designer, and a hardware enthusiast who loves exploring everything from OS virtualization to IoT integrations. I am always eager to learn the latest frameworks, push my boundaries, and transform creative visions into digital realities.',
];

const funFacts = [
    'I write my best code in complete dark mode.',
    'I love bridging the gap between software and hardware (IoT).',
    'I spent more time configuring Arch Linux than actually using it.',
    'Coffee is my primary source of energy',
    "I spend 10% of the time coding and 90% wondering why it's not working.",
    "I am from Cox's Bazar, home to the world's longest sea beach.",
    "I don't fix bugs; I just create new features by accident.",
    'My best algorithms are usually written at 2 AM.',
];

export default function About() {
    // State to track if the text is expanded
    const [isExpanded, setIsExpanded] = useState(false);

    // Filter text based on the expanded state
    // Show first 2 items (Heading + 1st Paragraph) if not expanded, show all if expanded
    const visibleText = isExpanded ? aboutText : aboutText.slice(0, 2);

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
                                    className={`text-justify text-[#ABB2BF] font-mono leading-relaxed ${
                                        idx === 0
                                            ? 'text-lg font-bold text-white'
                                            : 'text-sm'
                                    }`}
                                >
                                    {text}
                                </p>
                            ))}
                        </div>
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="border border-[#C778DD] text-[#C778DD] px-6 py-2 hover:bg-[#C778DD] hover:text-[#282c33] transition-all font-mono text-sm"
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
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-300 border-b-4 border-[#C778DD]"
                            />
                        </div>
                    </div>
                </div>

                {/* Fun Facts Section */}
                <div className="mt-20">
                    <h3 className="text-[#C778DD] font-mono text-lg mb-8 flex items-center gap-2">
                        <span>#</span>my-fun-facts
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {funFacts.map((fact, idx) => (
                            <div
                                key={idx}
                                className="border border-[#ABB2BF] px-4 py-3 text-[#ABB2BF] font-mono text-xs hover:border-[#C778DD] hover:-translate-y-1 transition-all duration-300"
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
