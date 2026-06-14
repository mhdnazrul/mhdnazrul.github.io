import { SectionHeading } from '@/components/ui/SectionHeading';
import { blogPosts, BlogPost } from '@/lib/data/blog';

function BlogCard({ post }: { post: BlogPost }) {
    return (
        <article className="border border-[var(--border-subtle)] bg-[var(--background)] p-6 hover:border-[var(--primary)] transition-colors">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                    <span
                        key={tag}
                        className="text-[11px] font-mono text-[var(--text-secondary)] border border-[var(--border-subtle)] px-2 py-1"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* Title */}
            <h3 className="text-lg font-mono font-bold text-[var(--text-primary)] mb-3">
                {post.title}
            </h3>

            {/* Excerpt */}
            <p className="text-[var(--text-secondary)] font-mono text-sm mb-6">
                {post.excerpt}
            </p>

            {/* Read Button */}
            <a
                href={post.href}
                className="text-[var(--primary)] font-mono text-sm hover:text-[var(--text-primary)] transition-colors"
            >
                Read -&gt;
            </a>
        </article>
    );
}

export default function Blog() {
    return (
        <section id="blogs" className="py-20 px-6 lg:px-16 max-w-7xl mx-auto">
            <SectionHeading title="blogs" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                ))}
            </div>
        </section>
    );
}
