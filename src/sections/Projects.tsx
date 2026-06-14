import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from '@/components/ui/icons';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { projects, Project } from '@/lib/data/projects';

function ProjectCard({ project }: { project: Project }) {
    return (
        <div className="border border-[var(--border-subtle)] bg-[var(--background)] overflow-hidden hover:border-[var(--primary)] transition-colors">
            {/* Image or placeholder */}
            {project.image ? (
                <div className="relative h-40 bg-[var(--bg-input)] overflow-hidden">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                    />
                </div>
            ) : (
                <div className="h-40 bg-[var(--bg-input)] flex items-center justify-center text-[var(--text-secondary)] text-sm">
                    [Project Image]
                </div>
            )}

            <div className="p-6">
                {/* Tech stack tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.techs.map((tech) => (
                        <span
                            key={tech}
                            className="text-[11px] font-mono text-[var(--text-secondary)] border border-[var(--border-subtle)] px-2 py-1"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Title */}
                <h3 className="text-lg font-mono font-bold text-[var(--text-primary)] mb-2">
                    {project.title}
                </h3>

                {/* Description */}
                <p className="text-[var(--text-secondary)] font-mono text-sm mb-6">
                    {project.description}
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3">
                    {project.buttons.map((button) => {
                        const isGithub =
                            button.label.toLowerCase() === 'github';
                        const isLive = button.label.toLowerCase() === 'live';
                        const displayText = isGithub ? 'Repo' : button.label;

                        return (
                            <a
                                key={button.label}
                                href={button.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 border border-[var(--primary)] text-[var(--primary)] px-4 py-2 font-mono text-sm hover:bg-[var(--primary)] hover:text-[var(--background)] transition-colors duration-200"
                            >
                                {displayText}
                                {isLive && <ExternalLink size={16} />}
                                {isGithub && <GithubIcon size={16} />}
                            </a>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default function Projects() {
    const completeProjects = projects.filter(
        (p) => p.category === 'complete-projects',
    );
    const smallProjects = projects.filter(
        (p) => p.category === 'small-projects',
    );

    return (
        <section id="works" className="py-20 px-6 lg:px-16 max-w-7xl mx-auto">
            <div className="mb-16">
                <SectionHeading title="complete-projects" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {completeProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>

            <div>
                <SectionHeading title="small-projects" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {smallProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
