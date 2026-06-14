import type { Metadata } from 'next';
import { Fira_Code } from 'next/font/google';
import '@/app/globals.css';

const firaCode = Fira_Code({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-fira-code',
});

export const metadata: Metadata = {
    title: 'Nazrul Islam | Portfolio',
    description:
        'CSE student and developer — building modern web applications with React, Next.js, and TypeScript.',
    keywords: [
        'developer',
        'portfolio',
        'CSE',
        'web developer',
        'React',
        'Next.js',
        'TypeScript',
        'Nazrul Islam',
    ],
    authors: [{ name: 'Nazrul Islam' }],
    openGraph: {
        title: 'Nazrul Islam | Portfolio',
        description:
            'CSE student and developer — building modern web applications with React, Next.js, and TypeScript.',
        type: 'website',
        url: 'https://nazrulislam.dev',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Nazrul Islam | Portfolio',
        description:
            'CSE student and developer — building modern web applications.',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${firaCode.variable}`}>
            <body className="bg-[var(--background)] text-[var(--text-primary)] font-mono antialiased">
                {children}
            </body>
        </html>
    );
}
