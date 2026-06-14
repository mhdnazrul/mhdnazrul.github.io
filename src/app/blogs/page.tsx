import { BlogCard } from '@/components/ui/BlogCard';
import { blogPosts } from '@/lib/data/blog';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blogs | Nazrul Islam',
    description: 'All technical articles and blogs by Nazrul Islam.',
};

export default function BlogsArchive() {
    const sortedBlogs = [...blogPosts]
        .sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));

    return (
        <main className="min-h-screen py-24 px-6 lg:px-16 max-w-7xl mx-auto">
            <div className="mb-12">
                <Link href="/#blogs" className="text-[var(--primary)] font-mono hover:underline mb-8 inline-block">
                    &lt;- Back to Home
                </Link>
                <h1 className="text-3xl md:text-4xl font-bold font-mono text-[var(--text-primary)] mb-4">
                    All Blogs
                </h1>
                <p className="text-[var(--text-secondary)] font-mono max-w-2xl">
                    My thoughts, tutorials, and deep dives into software engineering.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedBlogs.map((post) => (
                    <BlogCard key={post.id} post={post} variant="full" />
                ))}
            </div>
        </main>
    );
}
