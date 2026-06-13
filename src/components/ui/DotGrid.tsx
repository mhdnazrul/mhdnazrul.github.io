export function DotGrid({ 
  size = 16, 
  spacing = 25, 
  opacity = 0.4 
}: { 
  size?: number; 
  spacing?: number; 
  opacity?: number;
}) {
  return (
    <svg
      width={size * 4}
      height={size * 4}
      viewBox={`0 0 ${spacing * 4} ${spacing * 4}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity }}
    >
      {[...Array(4)].map((_, i) =>
        [...Array(4)].map((_, j) => (
          <circle
            key={`dot-${i}-${j}`}
            cx={spacing * i}
            cy={spacing * j}
            r="1.5"
            fill="#C778DD"
          />
        ))
      )}
    </svg>
  );
}
