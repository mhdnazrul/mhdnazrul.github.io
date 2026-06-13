'use client';

import { SectionHeading } from '@/components/ui/SectionHeading';

interface ProjectTag {
  name: string;
  color: 'orange' | 'red' | 'green' | 'yellow';
}

interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  techs: string[];
  buttons: Array<{ label: string; href: string }>;
  category: 'complete-apps' | 'small-projects';
}

const projects: Project[] = [
  {
    id: 'chert-nodes',
    title: 'ChertNodes',
    description: 'Minecraft servers hosting',
    techs: ['HTML', 'SCSS', 'Python', 'Flask'],
    tags: ['Minecraft', 'Devops', 'Saas'],
    buttons: [
      { label: 'Live', href: '#' },
      { label: 'Cached', href: '#' },
    ],
    category: 'complete-apps',
  },
  {
    id: 'kahoot-answers',
    title: 'Kahoot Answers Viewer',
    description: 'Get answers to your kahoot quiz',
    techs: ['CSS', 'Express', 'Node.js'],
    tags: [],
    buttons: [{ label: 'Live', href: '#' }],
    category: 'complete-apps',
  },
  {
    id: 'protectx',
    title: 'ProtectX',
    description: 'Discord anti-crash bot',
    techs: ['React', 'Express', 'Discord.js', 'Node.js'],
    tags: [],
    buttons: [{ label: 'Cached', href: '#' }],
    category: 'complete-apps',
  },
  {
    id: 'kotik-bot',
    title: 'Kotik Bot',
    description: 'Multi-functional discord bot',
    techs: ['HTML', 'CSS', 'JS'],
    tags: [],
    buttons: [{ label: 'Live', href: '#' }],
    category: 'complete-apps',
  },
  {
    id: 'portfolio',
    title: 'Portfolio',
    description: "You're using it rn",
    techs: ['Vue', 'TS', 'Less'],
    tags: [],
    buttons: [{ label: 'Github', href: '#' }],
    category: 'complete-apps',
  },
  {
    id: 'bot-boilerplate',
    title: 'Bot boilerplate',
    description: 'Start creating scalable discord.js bot with typescript',
    techs: ['Discord.js', 'TS', 'JS'],
    tags: [],
    buttons: [{ label: 'Github', href: '#' }],
    category: 'small-projects',
  },
  {
    id: 'my-blog',
    title: 'My blog',
    description: 'Front-end of my future blog website written in vue',
    techs: ['VUE', 'CSS', 'JS'],
    tags: [],
    buttons: [{ label: 'Github', href: '#' }],
    category: 'small-projects',
  },
  {
    id: 'chess-pro',
    title: 'Chess pro',
    description: 'Figma landing page about service for viewing chess',
    techs: ['Figma'],
    tags: [],
    buttons: [{ label: 'Figma', href: '#' }],
    category: 'small-projects',
  },
  {
    id: 'crash-protect',
    title: 'Crash protect website',
    description: 'Figma landing page for website about anti-raid, anti-crash discord bot',
    techs: ['Figma'],
    tags: [],
    buttons: [{ label: 'Figma', href: '#' }],
    category: 'small-projects',
  },
  {
    id: 'css-experiments',
    title: 'CSS experiments',
    description: 'Collection of my different little projects in css',
    techs: ['HTML', 'CSS'],
    tags: [],
    buttons: [{ label: 'Live', href: '#' }],
    category: 'small-projects',
  },
  {
    id: 'web-dev-nvim',
    title: 'Web Dev nvim config',
    description: 'Config for neovim perfect for web developer',
    techs: ['Lua', 'NeoVim'],
    tags: [],
    buttons: [{ label: 'Github', href: '#' }],
    category: 'small-projects',
  },
  {
    id: 'ooku',
    title: 'Ooku',
    description: 'Simple link shortener with auth',
    techs: ['Python', 'Quart', 'HTML'],
    tags: [],
    buttons: [{ label: 'Live', href: '#' }],
    category: 'small-projects',
  },
  {
    id: 'school-website',
    title: 'School website',
    description: 'Figma template website for my school',
    techs: ['Figma'],
    tags: [],
    buttons: [{ label: 'Figma', href: '#' }],
    category: 'small-projects',
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border border-[#ABB2BF] bg-[#282c33] overflow-hidden hover:border-[#C778DD] transition-colors">
      {/* Image or placeholder */}
      {project.image ? (
        <div className="h-40 bg-gray-700 overflow-hidden">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        </div>
      ) : (
        <div className="h-40 bg-[#3a3f47] flex items-center justify-center text-[#ABB2BF] text-sm">
          [Project Image]
        </div>
      )}

      <div className="p-6">
        {/* Tech stack tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techs.map((tech) => (
            <span key={tech} className="text-[11px] font-mono text-[#ABB2BF] border border-[#ABB2BF] px-2 py-1">
              {tech}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-lg font-mono font-bold text-white mb-2">{project.title}</h3>

        {/* Description */}
        <p className="text-[#ABB2BF] font-mono text-sm mb-6">{project.description}</p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3">
          {project.buttons.map((button) => (
            <a
              key={button.label}
              href={button.href}
              className="border border-[#C778DD] text-[#C778DD] px-4 py-2 font-mono text-sm hover:bg-[#C778DD] hover:text-[#282c33] transition-colors"
            >
              {button.label} {'<->'}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const completeApps = projects.filter((p) => p.category === 'complete-apps');
  const smallProjects = projects.filter((p) => p.category === 'small-projects');

  return (
    <section id="works" className="py-20 px-6 lg:px-16 max-w-7xl mx-auto">
      <div className="mb-16">
        <SectionHeading title="complete-apps" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {completeApps.map((project) => (
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
