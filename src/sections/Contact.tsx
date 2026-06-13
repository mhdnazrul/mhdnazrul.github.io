'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Send, Loader2 } from 'lucide-react';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { SectionHeading } from '@/components/ui/SectionHeading';

// --- Official & Realistic SVG Icons ---

const Github = ({ size = 24, className = '' }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
    >
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
);

const Linkedin = ({ size = 24, className = '' }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
    >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);

// New X (Twitter) Logo
const Twitter = ({ size = 24, className = '' }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
    >
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
);

const Facebook = ({ size = 24, className = '' }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
    >
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
);

const Instagram = ({ size = 24, className = '' }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
    >
        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.863.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.757 6.162 6.162 6.162 3.405 0 6.162-2.757 6.162-6.162 0-3.405-2.757-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
    </svg>
);

const WhatsApp = ({ size = 24, className = '' }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
    >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
);

const Discord = ({ size = 24, className = '' }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
    >
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
);

const Codeforces = ({ size = 24, className = '' }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
    >
        <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5V9c0-.828.672-1.5 1.5-1.5zm9-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5v-15c0-.828.672-1.5 1.5-1.5zm-4.5 4.5c.828 0 1.5.672 1.5 1.5v10.5c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5V9c0-.828.672-1.5 1.5-1.5z" />
    </svg>
);

const LeetCode = ({ size = 24, className = '' }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
    >
        <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.834s.513 2.852 1.494 3.833l4.332 4.362a5.33 5.33 0 0 0 3.824 1.579c1.496 0 2.85-.512 3.831-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9-.535-.535-1.386-.553-1.901-.038zM23.311 7.426l-3.328-3.355c-.5-.5-1.332-.511-1.846-.025l-2.73 2.584c-.534.505-.555 1.344-.047 1.874.507.529 1.34.55 1.872.046l2.656-2.513 3.308 3.334c.513.518.497 1.378-.037 1.913-.535.536-1.388.552-1.902.039l-2.748-2.77c-.513-.518-1.353-.5-1.859.038-.507.538-.49 1.393.023 1.911l2.766 2.788c.98.99 2.334 1.503 3.829 1.503s2.85-.514 3.831-1.496c1.026-1.037 1.517-2.453 1.464-3.921-.051-1.465-.638-2.853-1.745-3.946H23.31z" />
    </svg>
);

const AtCoder = ({ size = 24, className = '' }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
    >
        <path d="M12 21L1 3h5.5l5.5 12.5L17.5 3H23L12 21Z" />
    </svg>
);

const CodeChef = ({ size = 24, className = '' }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
    >
        <path d="M20.21 10.322c.621-1.04.591-2.417-.238-3.327-.852-.936-2.222-1.223-3.359-.722a4.482 4.482 0 0 0-4.316-2.203 4.482 4.482 0 0 0-3.692 3.12 3.328 3.328 0 0 0-2.316-.062c-1.127.382-1.895 1.428-1.954 2.646-.061 1.258.625 2.45 1.743 3.037v3.689h12.44v-3.743c1.045-.631 1.638-1.751 1.597-2.935-.02-.53-.173-1.026-.43-1.455zm-1.886 5.86H5.485V21h12.84v-4.818z" />
    </svg>
);

// --- Social Links Array (No 'value' needed anymore) ---
const socialLinks = [
    {
        icon: Github,
        label: 'GitHub',
        value: 'Github',
        href: 'https://github.com/mhdnazrul',
    },
    {
        icon: Linkedin,
        label: 'LinkedIn',
        value: 'LinkedIn',
        href: 'https://linkedin.com/in/nazrulislam7',
    },
    {
        icon: Codeforces,
        label: 'Codeforces',
        value: 'Codeforces',
        href: 'https://codeforces.com/profile/nazrulislam_7',
    },
    {
        icon: LeetCode,
        label: 'LeetCode',
        value: 'LeetCode',
        href: 'https://leetcode.com/u/nazrulislam_7/',
    },
    {
        icon: Facebook,
        label: 'Facebook',
        value: 'Facebook',
        href: 'https://www.facebook.com/mhdnazrulislam.me',
    },
    {
        icon: Twitter,
        label: 'Twitter',
        value: 'Twitter',
        href: 'https://x.com/nazrulislam__7',
    },
    {
        icon: WhatsApp,
        label: 'WhatsApp',
        value: 'WhatsApp',
        href: 'https://wa.me/+8801610541511',
    },
    {
        icon: Discord,
        label: 'Discord',
        value: 'Discord',
        href: 'https://discord.com/nazrulislam_7/',
    },
    {
        icon: Mail,
        label: 'Email',
        value: 'Email',
        href: 'mailto:mhdnazrul511@gmail.com',
    },
];

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState<FormStatus>('idle');
    const [errorMsg, setErrorMsg] = useState('');

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMsg('');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (res.ok && data.success) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                // Reset to idle after 5 seconds
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
                setErrorMsg(
                    data.error || 'Something went wrong. Please try again.',
                );
                setTimeout(() => setStatus('idle'), 5000);
            }
        } catch {
            setStatus('error');
            setErrorMsg(
                'Network error. Please check your connection and try again.',
            );
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <section
            id="contact-me"
            className="py-20 px-6 lg:px-16 max-w-7xl mx-auto"
        >
            <SectionHeading title="contact-me" />
            <div className="max-w-7xl mx-auto mt-16" ref={ref}>
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    {/* --- Updated Heading Design to match image_d07f0e.png --- */}
                    <motion.div variants={fadeUp} className="mb-2">
                        <p className="text-[var(--text-muted)] text-sm font-mono mt-4">
                            Who am i?
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Left */}
                        <motion.div variants={fadeUp}>
                            <p className="text-justify text-[var(--text-secondary)] font-mono text-sm leading-7 mb-4 max-w-md">
                                I&apos;m interested in freelance opportunities.
                                However, if you have other requests or
                                questions, don&apos;t hesitate to contact me.
                            </p>

                            <div className="border border-[var(--border-subtle)] p-4 mb-2">
                                <p className="text-[var(--text-muted)] text-xs font-mono mb-3">
                                    Message me here
                                </p>
                                <div className="space-y-2">
                                    {socialLinks.map(
                                        ({
                                            icon: Icon,
                                            href,
                                            value,
                                            label,
                                        }) => (
                                            <a
                                                key={label}
                                                href={href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={label}
                                                className="flex items-center gap-3 text-[var(--text-secondary)] text-sm font-mono hover:text-[#C778DD] transition-colors group"
                                            >
                                                <Icon
                                                    size={15}
                                                    className="text-[#C778DD] group-hover:scale-110 transition-transform"
                                                />
                                                {value}
                                            </a>
                                        ),
                                    )}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-[var(--text-primary)] font-bold text-base mb-4">
                                    <span className="text-[#C778DD]">#</span>
                                    all-media
                                </h3>
                                <div className="flex items-center gap-4">
                                    {socialLinks.map(
                                        ({ icon: Icon, href, label }) => (
                                            <a
                                                key={label}
                                                href={href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={label}
                                                className="text-[var(--text-muted)] hover:text-[#C778DD] transition-colors hover:-translate-y-0.5"
                                            >
                                                <Icon size={20} className="" />
                                            </a>
                                        ),
                                    )}
                                </div>
                            </div>
                        </motion.div>

                        {/* Right: Form */}
                        <motion.div variants={fadeUp}>
                            <form
                                onSubmit={handleSubmit}
                                className="border border-[var(--border-subtle)] bg-[var(--bg-card)] p-6 space-y-5"
                                aria-label="Contact form"
                            >
                                <h3 className="text-[var(--text-primary)] font-bold text-sm mb-4">
                                    Send a message
                                </h3>

                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-[var(--text-muted)] text-xs font-mono mb-1.5"
                                    >
                                        Name
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        minLength={2}
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your name"
                                        disabled={status === 'loading'}
                                        className="w-full bg-[var(--bg-input)] border border-[var(--border-medium)] px-4 py-3 text-[var(--text-primary)] text-sm font-mono placeholder-[var(--text-muted)] focus:outline-none focus:border-[#C778DD] transition-colors duration-200 disabled:opacity-50"
                                        aria-required="true"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-[var(--text-muted)] text-xs font-mono mb-1.5"
                                    >
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="your@email.com"
                                        disabled={status === 'loading'}
                                        className="w-full bg-[var(--bg-input)] border border-[var(--border-medium)] px-4 py-3 text-[var(--text-primary)] text-sm font-mono placeholder-[var(--text-muted)] focus:outline-none focus:border-[#C778DD] transition-colors duration-200 disabled:opacity-50"
                                        aria-required="true"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-[var(--text-muted)] text-xs font-mono mb-1.5"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        minLength={10}
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Your message..."
                                        disabled={status === 'loading'}
                                        className="w-full bg-[var(--bg-input)] border border-[var(--border-medium)] px-4 py-3 text-[var(--text-primary)] text-sm font-mono placeholder-[var(--text-muted)] focus:outline-none focus:border-[#C778DD] transition-colors duration-200 disabled:opacity-50 resize-none"
                                        aria-required="true"
                                    />
                                </div>

                                {/* Success message */}
                                {status === 'success' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="px-4 py-3 bg-[#22c55e]/10 border border-[#22c55e]/30 text-[#22c55e] text-xs font-mono"
                                    >
                                        ✓ Message sent successfully! I&apos;ll
                                        get back to you soon.
                                    </motion.div>
                                )}

                                {/* Error message */}
                                {status === 'error' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="px-4 py-3 bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono"
                                    >
                                        ✗ {errorMsg}
                                    </motion.div>
                                )}

                                <motion.button
                                    type="submit"
                                    disabled={
                                        status === 'loading' ||
                                        status === 'success'
                                    }
                                    whileHover={
                                        status === 'idle' ? { scale: 1.02 } : {}
                                    }
                                    whileTap={
                                        status === 'idle' ? { scale: 0.98 } : {}
                                    }
                                    className="w-full flex items-center justify-center gap-2 py-3 bg-[#C778DD] text-white font-mono text-sm font-semibold hover:bg-[#b560cb] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                                    aria-label="Send message"
                                >
                                    {status === 'loading' ? (
                                        <>
                                            <Loader2
                                                size={14}
                                                className="animate-spin"
                                            />
                                            Sending...
                                        </>
                                    ) : status === 'success' ? (
                                        'Message Sent! 🎉'
                                    ) : (
                                        <>
                                            Send Message
                                            <Send size={14} />
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
