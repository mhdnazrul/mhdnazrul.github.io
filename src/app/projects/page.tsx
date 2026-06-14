import { ProjectCard } from '@/components/ui/ProjectCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { projects } from '@/lib/data/projects';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Projects | Nazrul Islam',
    description: 'All complete and small projects by Nazrul Islam.',
};

export default function ProjectsArchive() {
    const completeProjects = [...projects]
        .filter((p) => p.category === 'complete-projects')
        .sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));

    const smallProjects = [...projects]
        .filter((p) => p.category === 'small-projects')
        .sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));

    return (
        <main className="min-h-screen py-24 px-6 lg:px-16 max-w-7xl mx-auto">
            <div className="mb-12">
                <Link href="/#works" className="text-[var(--primary)] font-mono hover:underline mb-8 inline-block">
                    &lt;- Back to Home
                </Link>
                <h1 className="text-3xl md:text-4xl font-bold font-mono text-[var(--text-primary)] mb-4">
                    All Projects
                </h1>
                <p className="text-[var(--text-secondary)] font-mono max-w-2xl">
                    A complete archive of all my featured applications, tools, and experiments.
                </p>
            </div>

            <div className="mb-16">
                <SectionHeading title="complete-projects" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {completeProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} variant="full" />
                    ))}
                </div>
            </div>

            <div>
                <SectionHeading title="small-projects" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {smallProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} variant="full" />
                    ))}
                </div>
            </div>
        </main>
    );
}
