export interface SkillGroup {
    category: string;
    skills: string[];
}

export const skillsData: SkillGroup[] = [
    {
        category: 'Languages',
        skills: [
            'C++',
            'C',
            'C#',
            'Java',
            'PHP',
            'Kotlin',
            'TypeScript',
            'Python',
            'JavaScript',
        ],
    },
    {
        category: 'Frameworks',
        skills: ['React', 'Next.js', 'Vue', 'Express.js', 'Tailwind CSS'],
    },
    {
        category: 'Databases',
        skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Supabase'],
    },
    {
        category: 'Tools',
        skills: ['VSCode', 'Git', 'Figma', 'Postman', 'Linux'],
    },
    {
        category: 'DevOps & Cloud',
        skills: ['Vercel', 'Netlify', 'GitHub Actions'],
    },
    {
        category: 'Backend/Others',
        skills: ['Node.js', ' REST API', 'JWT', 'OAuth'],
    },
    {
        category: 'IoT & Hardware',
        skills: ['Arduino', 'ESP32', 'ESP8266'],
    },
    {
        category: 'Design/Other',
        skills: ['HTML', 'CSS', 'Tailwind CSS', 'UI/UX Design'],
    },
];
