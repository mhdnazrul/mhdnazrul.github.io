'use client';

interface SectionHeadingProps {
  title: string;
}

export function SectionHeading({ title }: SectionHeadingProps) {
  return (
    <div className="flex items-center gap-4 mb-12">
      <h2 className="text-2xl md:text-3xl font-mono font-bold text-white whitespace-nowrap">
        <span className="text-[#C778DD]">#</span>{title}
      </h2>
      <div className="flex-1 h-px bg-[#C778DD]" />
    </div>
  );
}
