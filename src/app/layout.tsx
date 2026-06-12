import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nazrul Islam | Developer Portfolio",
  description:
    "CSE student and developer — building modern web applications with React, Next.js, and TypeScript.",
  keywords: [
    "developer",
    "portfolio",
    "CSE",
    "web developer",
    "React",
    "Next.js",
    "TypeScript",
    "Nazrul Islam",
  ],
  authors: [{ name: "Nazrul Islam" }],
  openGraph: {
    title: "Nazrul Islam | Developer Portfolio",
    description:
      "CSE student and developer — building modern web applications with React, Next.js, and TypeScript.",
    type: "website",
    url: "https://nazrulislam.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nazrul Islam | Developer Portfolio",
    description:
      "CSE student and developer — building modern web applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-white font-mono antialiased">
        {children}
      </body>
    </html>
  );
}
