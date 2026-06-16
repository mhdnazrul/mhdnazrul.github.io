export interface ProjectTag {
    name: string;
    color: 'orange' | 'red' | 'green' | 'yellow';
}

export interface Project {
    id: string;
    title: string;
    description: string;
    image?: string;
    tags: string[];
    techs: string[];
    buttons: Array<{ label: string; href: string }>;
    category: 'complete-projects' | 'small-projects';
}

export const projects: Project[] = [
    {
        id: 'CP1',
        title: 'Shopfinity',
        image: '/project_img/shopfinity.png',
        description: 'E-commerce platform for selling products',
        techs: ['C#', 'TypeScript', 'ASP.NET Core', 'postgresql'],
        tags: ['E-commerce', 'React', 'Node.js'],
        buttons: [
            { label: 'Live', href: 'https://shopfinity-pi.vercel.app/' },
            {
                label: 'Github',
                href: 'https://github.com/mhdnazrul/Shopfinity',
            },
        ],
        category: 'complete-projects',
    },
    {
        id: 'CP2',
        title: 'CF Clash',
        image: '/project_img/cfclash.png',
        description:
            'CFClash is a real-time competitive programming battle platform built on top of Codeforces.',
        techs: ['React', 'Node.js', 'MongoDB'],
        tags: [],
        buttons: [
            { label: 'Live', href: 'https://cfclash.vercel.app/' },
            { label: 'Github', href: 'https://github.com/mhdnazrul/cfclash' },
        ],
        category: 'complete-projects',
    },
    {
        id: 'CP3',
        title: 'WinUtil ~ Contributor',
        image: '/project_img/WinUtil.png',
        description:
            'Actively contributed to Windows Utility project, focusing on search optimization, and automation scripts.',
        techs: ['React', 'Express', 'Discord.js', 'Node.js'],
        tags: [],
        buttons: [
            {
                label: 'Main Repo',
                href: 'https://github.com/ChrisTitusTech/winutil',
            },
            {
                label: 'My PR',
                href: 'https://github.com/ChrisTitusTech/winutil/pull/4492',
            },
        ],
        category: 'complete-projects',
    },
    {
        id: 'CP4',
        title: 'PUC-HUB ~ Contributor',
        image: '/project_img/puc-hub.png',
        description:
            "Contributed to the open-source hub for Premier University students. Collaborated with the team to improve academic resource accessibility and enhance the platform's features.",
        techs: ['HTML', 'CSS', 'JS', ''],
        tags: [],
        buttons: [
            { label: 'Live', href: 'https://puc-hub-ten.vercel.app/' },
            { label: 'Github', href: 'https://github.com/mhdnazrul/PUC-HUB' },
        ],
        category: 'complete-projects',
    },
    {
        id: 'CP5',
        title: 'CodeforcesSync',
        image: '/project_img/cfSync.png',
        description:
            'A smart Chrome Extension that automatically synchronizes your accepted Codeforces submissions directly to a GitHub repository, featuring smart API handling and real-time activity logging.',
        techs: ['TypeScript', 'Chrome Extension', 'API'],
        tags: [],
        buttons: [
            {
                label: 'Github',
                href: 'https://github.com/mhdnazrul/CodeforcesSync',
            },
            {
                label: 'Download',
                href: 'https://github.com/mhdnazrul/CodeforcesSync/releases/',
            },
        ],
        category: 'complete-projects',
    },
    {
        id: 'CP6',
        title: 'Hex Strategy Game (AI vs Human)',
        image: '/project_img/11x11game.png',
        description:
            'An interactive 11x11 hexagonal grid strategy board game developed in Python. It features challenging AI vs. Human gameplay mode by implementing complex pathfinding and grid logic.',
        techs: ['Python', 'Pygame'],
        tags: [],
        buttons: [
            {
                label: 'Github',
                href: 'https://github.com/mhdnazrul/11-11-Hex-board-game',
            },
        ],
        category: 'complete-projects',
    },
    {
        id: 's1',
        title: 'IoT Smart Dustbin',
        image: '/project_img/dastbin.png',
        description:
            'An automated smart waste management system using ESP8266 and integrated sensor technology.',
        tags: ['IoT', 'Hardware'],
        techs: ['ESP8266', 'C++', 'Arduino'],
        buttons: [
            {
                label: 'GitHub',
                href: 'https://github.com/mhdnazrul/Smart-Dustbin-Using-IoT-ESP8266-',
            },
        ],
        category: 'small-projects',
    },
    {
        id: 's2',
        title: 'Background Remover',
        image: '/project_img/background_remover.png',
        description:
            'A web-based image processing tool that utilizes computer vision to remove image backgrounds.',
        tags: ['Web-Tool', 'AI'],
        techs: ['Python', 'Flask', 'OpenCV'],
        buttons: [
            {
                label: 'GitHub',
                href: 'https://github.com/mhdnazrul/background-remover-website',
            },
        ],
        category: 'small-projects',
    },
    {
        id: 's3',
        title: 'Codeforces-Solutions',
        image: '/project_img/cf_solution.png',
        description:
            'A personal archive of competitive programming problems solved across Codeforces platforms. Includes searchable tags and rating-based categorization for efficient skill tracking.',
        techs: ['C++', 'Python'],
        tags: [],
        buttons: [
            {
                label: 'Live',
                href: 'https://mhdnazrul.github.io/Codeforces-Solutions/',
            },
            {
                label: 'GitHub',
                href: 'https://github.com/mhdnazrul/Codeforces-Solutions',
            },
        ],
        category: 'small-projects',
    },
    {
        id: 's4',
        title: 'PUC_CSE_CGPA_Calculator (Contributor)',
        description:
            'Contributed to an open-source academic utility tool specifically designed for Premier University CSE students to calculate their CGPA efficiently.',
        image: '/project_img/CGPA_cal.png',
        techs: ['HTML', 'CSS', 'JavaScript'],
        tags: [],
        buttons: [
            {
                label: 'GitHub',
                href: 'https://github.com/mhdnazrul/PUC_CSE_CGPA_Calculator',
            },
            {
                label: 'Live',
                href: 'https://mhdnazrul.github.io/PUC_CSE_CGPA_Calculator/',
            },
        ],
        category: 'small-projects',
    },
    {
        id: 'S5',
        title: 'pizza-pie',
        image: '/project_img/pizza-pie.png',
        description:
            'A visually appealing website project focusing on clean CSS layouts and modern UI design principles, demonstrating responsive web development skills.',
        techs: ['HTML', 'CSS'],
        tags: [],
        buttons: [
            { label: 'Live', href: 'https://mhdnazrul.github.io/pizza-pie/' },
            { label: 'GitHub', href: 'https://github.com/mhdnazrul/pizza-pie' },
        ],
        category: 'small-projects',
    },
    {
        id: 'S6',
        title: 'Solar Tracker',
        image: '/project_img/solar.png',
        description:
            'An integrated IoT solution featuring an automated solar tracking system. These projects showcase embedded system programming, sensor integration, and efficient power management.',
        techs: ['ESP8266', 'Arduino', 'C++', 'IoT'],
        tags: [],
        buttons: [
            {
                label: 'GitHub',
                href: 'https://github.com/mhdnazrul/IoT-Based-Solar_Tracker',
            },
        ],
        category: 'small-projects',
    },
    {
        id: 'S7',
        title: 'Medicine-Alert-IoT-Project',
        image: '/project_img/medicine.png',
        description:
            'An automated medical alert system that ensures timely medication reminders, built to assist patients in healthcare environments using IoT hardware.',
        techs: ['ESP8266', 'Arduino', 'C++', 'IoT'],
        tags: [],
        buttons: [
            {
                label: 'GitHub',
                href: 'https://github.com/mhdnazrul/Medicine-Alert-IoT-Project-using-ESP8266',
            },
        ],
        category: 'small-projects',
    },
    {
        id: 'S8',
        title: 'LeetCode-Solutions',
        image: '/project_img/leetcode.png',
        description:
            '🚀 Auto-synced LeetCode solutions (C++) via LeetSync · GitHub Actions auto-updates README stats & deploys a searchable website to GitHub Pages · Problem-by-problem archive.',
        techs: [
            'C++',
            'GitHub Actions',
            'GitHub Pages',
            'python',
            'HTML',
            'JS',
        ],
        tags: [],
        buttons: [
            {
                label: 'Live',
                href: 'https://mhdnazrul.github.io/LeetCode-Solutions/',
            },
            {
                label: 'GitHub',
                href: 'https://github.com/mhdnazrul/LeetCode-Solutions',
            },
        ],
        category: 'small-projects',
    },
];
