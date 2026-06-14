'use client';

import { motion } from 'framer-motion';

import { profile } from '@/lib/data/profile';
import { SOCIAL_ICON_MAP } from '@/components/ui/icons';

export default function SocialSidebar() {
    return (
        <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            // Fixed at top-0 and height auto to allow perfect hanging structure
            className="fixed top-0 left-[17px] z-40 hidden flex-col items-center gap-4 bg-transparent lg:flex"
            aria-label="Social media links"
        >
            {/* Vertical line hanging from the TOP — 191px per Figma */}
            <div className="h-[191px] w-px bg-gray mb-2" aria-hidden="true" />

            {/* Social icons hanging underneath the line */}
            <div className="flex flex-col items-center gap-4">
                {profile.socials.map(({ id, label, href }) => {
                    const Icon = SOCIAL_ICON_MAP[id];
                    return Icon ? (
                        <a
                            key={id}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            className="text-gray transition-colors duration-200 hover:text-primary hover:translate-y-1"
                        >
                            <Icon size={24} />
                        </a>
                    ) : null;
                })}
            </div>
        </motion.aside>
    );
}
