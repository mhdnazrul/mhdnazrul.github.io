'use client';

import Image from 'next/image';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { DotGrid } from '@/components/ui/DotGrid';

const aboutText = [
  "Hello, i'm Nazrul!",
  "I'm a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.",
  "Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks."
];

const funFacts = [
  "I like winter more than summer",
  "I often bike with my friends",
  "I like pizza and pasta",
  "I was in Egypt, Poland and Turkey",
  "My favorite movie is The Green Mile",
  "I am still in school",
  "I don't have any siblings"
];

export default function About() {
  return (
    <section id="about-me" className="py-20 px-6 lg:px-16 max-w-7xl mx-auto">
      <SectionHeading title="about-me" />
      
      <div className="max-w-7xl mx-auto mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text Content */}
          <div>
            <div className="space-y-4 mb-8">
              {aboutText.map((text, idx) => (
                <p
                  key={idx}
                  className="text-[#ABB2BF] font-mono text-sm leading-relaxed"
                >
                  {text}
                </p>
              ))}
            </div>
            <button className="border border-[#C778DD] text-[#C778DD] px-6 py-2 hover:bg-[#C778DD] hover:text-[#282c33] transition-all font-mono text-sm">
              Read more -&gt;
            </button>
          </div>

          {/* Right: Profile Image with Decorative Elements */}
          <div className="relative h-96 flex items-center justify-center">
            {/* Dot Grid - Top Left */}
            <div className="absolute top-0 left-0 z-0">
              <DotGrid size={16} spacing={25} opacity={0.4} />
            </div>

            {/* Dot Grid - Bottom Right */}
            <div className="absolute bottom-0 right-0 z-0">
              <DotGrid size={16} spacing={25} opacity={0.4} />
            </div>

            {/* Profile Image */}
            <div className="relative z-10 w-48 h-64">
              <Image
                src="/profile.png"
                alt="Nazrul Islam"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>
        </div>

        {/* Fun Facts Section */}
        <div className="mt-20">
          <h3 className="text-[#C778DD] font-mono text-lg mb-8">
            #my-fun-facts
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {funFacts.map((fact, idx) => (
              <div
                key={idx}
                className="border border-[#ABB2BF] px-4 py-3 text-[#ABB2BF] font-mono text-xs hover:border-[#C778DD] transition-colors"
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
