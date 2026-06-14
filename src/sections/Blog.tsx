import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { BlogCard } from '@/components/ui/BlogCard';
import { blogPosts } from '@/lib/data/blog';

export default function Blog() {
    const sortedBlogs = [...blogPosts]
        .sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }))
        .slice(0, 6);

    return (
        <section id="blogs" className="py-20 px-6 lg:px-16 max-w-7xl mx-auto">
            <SectionHeading title="blogs" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {sortedBlogs.map((post) => (
                    <BlogCard key={post.id} post={post} />
                ))}
            </div>

            <div className="flex justify-center">
                <Link href="/blogs" className="btn-outline">
                    View all blogs ~~&gt;
                </Link>
            </div>
        </section>
    );
}
