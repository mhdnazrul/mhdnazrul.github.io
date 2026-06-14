import { SectionHeading } from '@/components/ui/SectionHeading';
import { DotGrid } from '@/components/ui/DotGrid';
import { skillsData } from '@/lib/data/skills';

const OverlappingSquares = () => (
    <div className="absolute inset-0 opacity-20">
        <div className="absolute w-32 h-32 border border-[var(--border-subtle)] top-20 left-10 rotate-45"></div>
        <div className="absolute w-40 h-40 border border-[var(--primary)] top-40 left-0 rotate-12"></div>
        <div className="absolute w-24 h-24 border border-[var(--border-subtle)] bottom-20 right-20 -rotate-12"></div>
    </div>
);

export default function Skills() {
    return (
        <section id="skills" className="py-20 px-6 lg:px-16 max-w-7xl mx-auto">
            <SectionHeading title="skills" />

            <div className="max-w-7xl mx-auto mt-16">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                    {/* Left: Decorative SVGs */}
                    <div className="col-span-1 relative h-80 hidden lg:block">
                        <DotGrid size={24} spacing={40} opacity={0.3} />
                        <OverlappingSquares />
                    </div>

                    {/* Right: Skills Grid */}
                    <div className="col-span-1 lg:col-span-4">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {skillsData.map((skillGroup) => (
                                <div
                                    key={skillGroup.category}
                                    // Box padding removed to make the header border full-width
                                    className="border border-[var(--border-subtle)] bg-transparent hover:border-[var(--primary)] transition-colors"
                                >
                                    {/* Added padding here and a bottom border to match the design */}
                                    <h4 className="text-[var(--text-primary)] font-mono text-sm font-bold p-3 border-b border-[var(--border-subtle)]">
                                        {skillGroup.category}
                                    </h4>
                                    {/* Changed to flex-wrap so items flow horizontally, added padding */}
                                    <ul className="flex flex-wrap gap-x-1 gap-y-1 p-2">
                                        {skillGroup.skills.map((skill) => (
                                            <li
                                                key={skill}
                                                // added individual borders
                                                className="text-[var(--text-secondary)] border border-[var(--border-subtle)] px-1 font-mono text-sm leading-relaxed"
                                            >
                                                {skill}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
