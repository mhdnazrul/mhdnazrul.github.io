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
    title: 'Implementing Real-Time Features with WebSockets',
    excerpt: 'Learn how to build real-time applications using WebSocket technology and modern frameworks.',
    tags: ['WebSockets', 'Real-time', 'Backend'],
    href: '#',
  },
  {
    id: '2',
    title: 'Advanced React Patterns and Best Practices',
    excerpt: 'Deep dive into advanced React patterns like render props, custom hooks, and compound components.',
    tags: ['React', 'JavaScript', 'Frontend'],
    href: '#',
  },
  {
    id: '3',
    title: 'Building Scalable Node.js Applications',
    excerpt: 'Strategies for building scalable backend services with Node.js and best practices for production.',
    tags: ['Node.js', 'Backend', 'Scaling'],
    href: '#',
  },
];

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="border border-[#ABB2BF] bg-[#282c33] p-6 hover:border-[#C778DD] transition-colors">
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map((tag) => (
          <span key={tag} className="text-[11px] font-mono text-[#ABB2BF] border border-[#ABB2BF] px-2 py-1">
            {tag}
          </span>
        ))}
      </div>

      {/* Title */}
      <h3 className="text-lg font-mono font-bold text-white mb-3">{post.title}</h3>

      {/* Excerpt */}
      <p className="text-[#ABB2BF] font-mono text-sm mb-6">{post.excerpt}</p>

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
