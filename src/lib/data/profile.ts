// Central profile configuration — update this file to change personal info
export const profile = {
    name: 'Nazrul Islam',
    title: 'web developer & software engineer',
    bio: 'A CSE student passionate about crafting responsive, performant web applications where technology meets creativity.',
    email: 'mhdnazrul511@gmail.com',
    github: 'https://github.com/mhdnazrul',
    linkedin: 'https://linkedin.com/in/nazrulislam7',
    twitter: 'https://twitter.com/nazrulislam__7',

    // ────────────────────────────────────────────────────────────────
    // RESUME LINK — Update this when you upload your CV to Google Drive
    // How to get a direct download link from Google Drive:
    //   1. Upload the file to Google Drive
    //   2. Right-click → "Get link" → set to "Anyone with the link"
    //   3. Copy the file ID from the URL:  .../d/FILE_ID/view
    //   4. Replace YOUR_GOOGLE_DRIVE_FILE_ID below with that ID
    // Format: https://drive.google.com/uc?export=download&id=YOUR_FILE_ID
    // ────────────────────────────────────────────────────────────────
    resumeUrl:
        'https://drive.google.com/uc?export=download&id=126yAH2ejg9TRj2gCyfUeLGTWFl_jZ97U',

    // Or use a local file: "/resume.pdf" (place resume.pdf in public/ folder)
    currentWork: 'Portfolio',

    // Hero content
    heroTaglines: [
        'Full-Stack Developer',
        2000,
        'UI/UX Designer',
        2000,
        'Competitive Programmer',
        2000,
        'IoT Enthusiast',
        2000,
    ] as const,
    heroSubtitle:
        'I engineer comprehensive digital experiences by turning intricate logic into beautifully responsive web applications. Leveraging a strong foundation in data structures and modern web frameworks, I build robust system architectures that ensure both flawless backend performance and an engaging frontend user journey.',
    quote: {
        text: 'Today, in the ecstasy of the joy of creation— My face laughs, my eyes laugh, my boiling blood laughs, Today, in the ecstasy of the joy of creation.',
        attribution:
            'Poem: "Srishti Sukher Ullase" || Book: "Dolonchapa" || Author: Kazi Nazrul Islam',
    },

    // Centralized social links for use across Navbar, Footer, Sidebar, Contact
    socials: [
        {
            id: 'github',
            label: 'GitHub',
            value: 'Github',
            href: 'https://github.com/mhdnazrul',
        },
        {
            id: 'linkedin',
            label: 'LinkedIn',
            value: 'LinkedIn',
            href: 'https://linkedin.com/in/nazrulislam7',
        },
        {
            id: 'codeforces',
            label: 'Codeforces',
            value: 'Codeforces',
            href: 'https://codeforces.com/profile/nazrulislam_7',
        },
        {
            id: 'leetcode',
            label: 'LeetCode',
            value: 'LeetCode',
            href: 'https://leetcode.com/u/nazrulislam_7/',
        },
        {
            id: 'facebook',
            label: 'Facebook',
            value: 'Facebook',
            href: 'https://www.facebook.com/mhdnazrulislam.me',
        },
        {
            id: 'twitter',
            label: 'Twitter',
            value: 'Twitter',
            href: 'https://twitter.com/nazrulislam_07',
        },
        {
            id: 'whatsapp',
            label: 'WhatsApp',
            value: 'WhatsApp',
            href: 'https://wa.me/+8801610541511',
        },
        {
            id: 'discord',
            label: 'Discord',
            value: 'Discord',
            href: 'https://discord.com/nazrulislam_7',
        },
        {
            id: 'email',
            label: 'Email',
            value: 'Email',
            href: 'mailto:mhdnazrul511@gmail.com',
        },
    ],
    aboutText: [
        "Hello, I'm Nazrul Islam!",
        "I am a 23-year-old passionate full-stack developer, competitive programmer, and tech enthusiast from Cox's Bazar, currently based in Chittagong, Bangladesh. I am in my fourth year, pursuing a B.Sc. in Computer Science and Engineering at Premier University. My journey into the tech world began with a deep curiosity about how things work behind the screen, and over time it has evolved into a relentless drive to build, optimize, and innovate.",
        "Since starting my web development journey in 2023, I have progressed from creating basic front-end interfaces to architecting robust, scalable full-stack applications. Today, I specialize in modern technologies such as Next.js, TypeScript, and the MERN stack. Whether I'm designing an intuitive user interface or structuring a complex database, I focus on delivering seamless, user-friendly, and high-performance digital experiences from the ground up.",
        "Beyond web development, I am a dedicated problem solver. I regularly tackle algorithmic challenges on platforms like Codeforces using C++, which has sharpened my logical thinking skills. I strongly believe in writing clean, self-explanatory code where complex logic is simplified into highly efficient solutions. This problem-solving mindset directly influences my development process, enabling me to build comprehensive platforms like 'cfclash' and 'Shopfinity' with structural integrity.",
        'My passion for technology extends beyond just writing code. I am also a video editor with over 50 videos published on my tech YouTube channel, a graphic designer, and a hardware enthusiast who loves exploring everything from OS virtualization to IoT integrations. I am always eager to learn the latest frameworks, push my boundaries, and transform creative visions into digital realities.',
    ],
    funFacts: [
        'I write my best code in complete dark mode.',
        'I love bridging the gap between software and hardware (IoT).',
        'I spent more time configuring Arch Linux than actually using it.',
        'Coffee is my primary source of energy',
        "I spend 10% of the time coding and 90% wondering why it's not working.",
        "I am from Cox's Bazar, home to the world's longest sea beach.",
        "I don't fix bugs; I just create new features by accident.",
        'My best algorithms are usually written at 2 AM.',
    ],
};
