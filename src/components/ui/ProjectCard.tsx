import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from '@/components/ui/icons';
import { Project } from '@/lib/data/projects';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
    project: Project;
    variant?: 'compact' | 'full';
}

export function ProjectCard({ project, variant = 'compact' }: ProjectCardProps) {
    const isCompact = variant === 'compact';

    return (
        <div className="flex flex-col border border-[var(--border-subtle)] bg-[var(--background)] overflow-hidden hover:border-[var(--primary)] transition-colors h-full">
            {/* Image or placeholder */}
            {project.image ? (
                <div className="relative h-40 shrink-0 bg-[var(--bg-input)] overflow-hidden border-b border-[var(--border-subtle)]">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                    />
                </div>
            ) : (
                <div className="h-40 shrink-0 bg-[var(--bg-input)] flex items-center justify-center text-[var(--text-secondary)] text-sm border-b border-[var(--border-subtle)]">
                    [Project Image]
                </div>
            )}

            <div className="p-6 flex flex-col flex-grow">
                {/* Tech stack tags */}
                <div 
                    className={cn(
                        "flex flex-wrap gap-2 mb-4 shrink-0",
                        isCompact && "max-h-[3.5rem] overflow-y-auto thin-scrollbar pr-1"
                    )}
                >
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
                <h3 
                    className={cn(
                        "text-lg font-mono font-bold text-[var(--text-primary)] mb-2 shrink-0",
                        isCompact && "max-h-[3.5rem] overflow-y-auto thin-scrollbar pr-1"
                    )}
                >
                    {project.title}
                </h3>

                {/* Description */}
                <p 
                    className={cn(
                        "text-[var(--text-secondary)] font-mono text-sm mb-6 flex-grow",
                        isCompact && "max-h-[5rem] overflow-y-auto thin-scrollbar pr-1"
                    )}
                >
                    {project.description}
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3 mt-auto pt-4 border-t border-[var(--border-subtle)] border-dashed">
                    {project.buttons.map((button) => {
                        const isGithub = button.label.toLowerCase() === 'github';
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
