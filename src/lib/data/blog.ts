export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    tags: string[];
    href: string;
}

export const blogPosts: BlogPost[] = [
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
