import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { projects } from '@/lib/data/projects';

export default function Projects() {
    const completeProjects = [...projects]
        .filter((p) => p.category === 'complete-projects')
        .sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }))
        .slice(0, 6);

    const smallProjects = [...projects]
        .filter((p) => p.category === 'small-projects')
        .sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }))
        .slice(0, 6);

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

            <div className="mb-12">
                <SectionHeading title="small-projects" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {smallProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>

            <div className="flex justify-center">
                <Link href="/projects" className="btn-outline">
                    View all projects ~~&gt;
                </Link>
            </div>
        </section>
    );
}
