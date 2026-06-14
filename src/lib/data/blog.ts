export interface BlogPost {
    id: number;
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    tags: string[];
    thumbnail?: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        slug: 'getting-started-with-nextjs',
        title: 'Getting Started with Next.js App Router',
        excerpt:
            'A deep dive into the new Next.js App Router, server components, and how they change the way we build React applications.',
        date: '2024-12-01',
        readTime: '5 min read',
        tags: ['Next.js', 'React', 'Web Dev'],
    },
    {
        id: 2,
        slug: 'typescript-tips-tricks',
        title: 'TypeScript Tips Every Developer Should Know',
        excerpt:
            'Explore advanced TypeScript patterns — from utility types to discriminated unions — that will make your code safer and more expressive.',
        date: '2024-11-15',
        readTime: '7 min read',
        tags: ['TypeScript', 'JavaScript'],
    },
    {
        id: 3,
        slug: 'mastering-tailwind-css',
        title: 'Mastering Tailwind CSS in Production',
        excerpt:
            'Learn how to structure large Tailwind CSS codebases, use design tokens, and build a consistent design system.',
        date: '2024-10-28',
        readTime: '6 min read',
        tags: ['CSS', 'Tailwind', 'Design'],
    },
    {
        id: 4,
        slug: 'data-structures-for-developers',
        title: 'Essential Data Structures for CSE Students',
        excerpt:
            'A practical guide to arrays, linked lists, trees, and graphs with real-world examples and implementation tips.',
        date: '2024-10-10',
        readTime: '10 min read',
        tags: ['DSA', 'Computer Science', 'Algorithms'],
    },
    {
        id: 5,
        slug: 'framer-motion-animations',
        title: 'Beautiful Page Animations with Framer Motion',
        excerpt:
            'Create smooth, GPU-accelerated animations in React using Framer Motion — from simple fades to complex orchestrated sequences.',
        date: '2024-09-20',
        readTime: '8 min read',
        tags: ['Animation', 'React', 'UX'],
    },
    {
        id: 6,
        slug: 'linux-for-developers',
        title: 'Linux Workflow for Developers',
        excerpt:
            'Set up a powerful Linux development environment with the best tools, terminal configurations, and productivity shortcuts.',
        date: '2024-09-05',
        readTime: '9 min read',
        tags: ['Linux', 'DevOps', 'Tools'],
    },
];
