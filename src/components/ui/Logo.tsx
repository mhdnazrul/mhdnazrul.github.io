import Image from 'next/image';

type LogoMarkProps = {
    size?: number;
    className?: string;
};

/** 16×16 header logo from Figma */
export function LogoMark({ size = 16, className = '' }: LogoMarkProps) {
    return (
        <Image
            src="/logo.svg"
            alt=""
            width={size}
            height={size}
            className={`shrink-0 ${className}`}
            aria-hidden="true"
            priority
        />
    );
}

type LogoOutlineProps = {
    size?: number;
    className?: string;
};

/** Large decorative outline logo behind hero image */
export function LogoOutline({ size = 155, className = '' }: LogoOutlineProps) {
    return (
        <div
            className={`relative pointer-events-none select-none ${className}`}
            style={{ width: size, height: size }}
            aria-hidden="true"
        >
            <div className="absolute bottom-0 left-0 w-1/2 h-3/4">
                <Image
                    src="/logo-union-1.svg"
                    alt=""
                    fill
                    className="object-contain"
                    sizes={`${size}px`}
                />
            </div>
            <div className="absolute top-0 right-0 w-1/2 h-3/4">
                <Image
                    src="/logo-union-2.svg"
                    alt=""
                    fill
                    className="object-contain"
                    sizes={`${size}px`}
                />
            </div>
        </div>
    );
}
