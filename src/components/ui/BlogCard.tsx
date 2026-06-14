import { BlogPost } from '@/lib/data/blog';
import { cn } from '@/lib/utils';

interface BlogCardProps {
    post: BlogPost;
    variant?: 'compact' | 'full';
}

export function BlogCard({ post, variant = 'compact' }: BlogCardProps) {
    const isCompact = variant === 'compact';

    return (
        <article className="flex flex-col border border-[var(--border-subtle)] bg-[var(--background)] p-6 hover:border-[var(--primary)] transition-colors h-full">
            {/* Tags */}
            <div 
                className={cn(
                    "flex flex-wrap gap-2 mb-4 shrink-0",
                    isCompact && "max-h-[3.5rem] overflow-y-auto thin-scrollbar pr-1"
                )}
            >
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
            <h3 
                className={cn(
                    "text-lg font-mono font-bold text-[var(--text-primary)] mb-3 shrink-0",
                    isCompact && "max-h-[3.5rem] overflow-y-auto thin-scrollbar pr-1"
                )}
            >
                {post.title}
            </h3>

            {/* Excerpt */}
            <p 
                className={cn(
                    "text-[var(--text-secondary)] font-mono text-sm mb-6 flex-grow",
                    isCompact && "max-h-[5rem] overflow-y-auto thin-scrollbar pr-1"
                )}
            >
                {post.excerpt}
            </p>

            {/* Read Button */}
            <div className="mt-auto pt-4 border-t border-[var(--border-subtle)] border-dashed">
                <a
                    href={post.href}
                    className="inline-flex items-center text-[var(--primary)] font-mono text-sm hover:text-[var(--text-primary)] transition-colors"
                >
                    Read -&gt;
                </a>
            </div>
        </article>
    );
}
