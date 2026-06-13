import Image from "next/image";

type DotsPatternProps = {
  size?: number;
  className?: string;
};

/** 5×5 decorative dot grid from Figma Dots component */
export function DotsPattern({ size = 84, className = "" }: DotsPatternProps) {
  return (
    <div
      className={`flex flex-col justify-between pointer-events-none select-none ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {Array.from({ length: 5 }).map((_, row) => (
        <div key={row} className="flex justify-between w-full">
          {Array.from({ length: 5 }).map((__, col) => (
            <Image
              key={col}
              src="/dot.png"
              alt=""
              width={4}
              height={4}
              className="shrink-0"
            />
          ))}
        </div>
      ))}
    </div>
  );
}
