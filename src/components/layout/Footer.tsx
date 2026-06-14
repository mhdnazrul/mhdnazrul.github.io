'use client';

import { LogoMark } from '@/components/ui/Logo';
import Link from 'next/link';

import { profile } from '@/lib/data/profile';
import { SOCIAL_ICON_MAP } from '@/components/ui/icons';

export default function Footer() {
    return (
        <footer className="w-full bg-[var(--background)] ">
            <div className="max-w-7xl p-6 lg:px-16 mx-auto">
                <div className="h-[1px] bg-[var(--border-subtle)] mb-12"></div>

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-12">
                    {/* Left: Logo, Name, Email, Bio */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <LogoMark />
                            <span className="text-[var(--text-primary)] font-mono text-lg">
                                {profile.name}
                            </span>
                        </div>

                        <p className="text-[var(--text-secondary)] font-mono text-sm mb-4">
                            Full-Stack Developer & Problem Solver.
                        </p>
                        <a
                            href={`mailto:${profile.email}`}
                            className="text-[var(--text-secondary)] font-mono text-sm hover:text-[var(--primary)] transition-colors"
                        >
                            {profile.email}
                        </a>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-[var(--text-primary)] font-mono font-bold text-base mb-4">
                            Links
                        </h3>
                        <div className="flex flex-col gap-2">
                            <Link
                                href="/"
                                className="text-[var(--text-secondary)] font-mono text-sm hover:text-[var(--primary)] transition-colors"
                            >
                                Home
                            </Link>
                            <Link
                                href="#works"
                                className="text-[var(--text-secondary)] font-mono text-sm hover:text-[var(--primary)] transition-colors"
                            >
                                Works
                            </Link>
                            <Link
                                href="#about-me"
                                className="text-[var(--text-secondary)] font-mono text-sm hover:text-[var(--primary)] transition-colors"
                            >
                                About
                            </Link>
                            <Link
                                href="#contact"
                                className="text-[var(--text-secondary)] font-mono text-sm hover:text-[var(--primary)] transition-colors"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>

                    {/* Socials */}
                    <div>
                        <h3 className="text-[var(--text-primary)] font-mono font-bold text-base mb-4">
                            Social
                        </h3>
                        {/* flex-wrap add kora hoyeche jate onek link thakleo design na vange */}
                        <div className="flex items-center gap-4 flex-wrap">
                            {profile.socials.map(({ id, label, href }) => {
                                const Icon = SOCIAL_ICON_MAP[id];
                                return Icon ? (
                                    <a
                                        key={id}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
                                        aria-label={label}
                                    >
                                        <Icon size={20} />
                                    </a>
                                ) : null;
                            })}
                        </div>
                    </div>
                </div>

                {/* Bottom Line */}
                <div className="h-[1px] bg-[var(--border-subtle)] w-full mb-6"></div>

                {/* Bottom: Copyright */}
                <div className="text-center">
                    <p className="text-[var(--text-secondary)] font-mono text-xs">
                        © Copyright 2026. Made by{' '}
                        <span className="text-[var(--primary)]">{profile.name}</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
