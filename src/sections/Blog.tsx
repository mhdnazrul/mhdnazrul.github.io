'use client';

import { SectionHeading } from '@/components/ui/SectionHeading';

interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    tags: string[];
    href: string;
}

const blogPosts: BlogPost[] = [
    {
        id: '1',
        title: 'Competitive Programming: From C++ Logic to Real-World Code',
        excerpt:
            'How mastering algorithmic thinking helps in building better software architecture and solving complex backend challenges.',
        tags: ['C++', 'Algorithms', 'Logic'],
        href: '#',
    },
    {
        id: '2',
        title: 'The Power of Next.js for Scalable Full-Stack Apps',
        excerpt:
            'Deep dive into why I chose Next.js and TypeScript for building complex platforms like CF Clash and Shopfinity.',
        tags: ['Next.js', 'Full-stack', 'TypeScript'],
        href: '#',
    },
    {
        id: '3',
        title: 'IoT & Hardware: Building Smarter Solutions with ESP8266',
        excerpt:
            'My journey of bridging software with hardware, from automated dustbins to solar tracking systems.',
        tags: ['IoT', 'Hardware', 'ESP8266'],
        href: '#',
    },
    {
        id: '4',
        title: 'Windows Productivity: Optimizing Workflow with PowerShell',
        excerpt:
            'How I use Winget, PowerShell, and system maintenance tools to keep my Dell Latitude 7400 running at peak performance.',
        tags: ['Windows', 'DevOps', 'Productivity'],
        href: '#',
    },
];

function BlogCard({ post }: { post: BlogPost }) {
    return (
        <article className="border border-[#ABB2BF] bg-[#282c33] p-6 hover:border-[#C778DD] transition-colors">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                    <span
                        key={tag}
                        className="text-[11px] font-mono text-[#ABB2BF] border border-[#ABB2BF] px-2 py-1"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* Title */}
            <h3 className="text-lg font-mono font-bold text-white mb-3">
                {post.title}
            </h3>

            {/* Excerpt */}
            <p className="text-[#ABB2BF] font-mono text-sm mb-6">
                {post.excerpt}
            </p>

            {/* Read Button */}
            <a
                href={post.href}
                className="text-[#C778DD] font-mono text-sm hover:text-white transition-colors"
            >
                Read -&gt;
            </a>
        </article>
    );
}

export default function Blog() {
    return (
        <section id="blog" className="py-20 px-6 lg:px-16 max-w-7xl mx-auto">
            <SectionHeading title="blog" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                ))}
            </div>
        </section>
    );
}
