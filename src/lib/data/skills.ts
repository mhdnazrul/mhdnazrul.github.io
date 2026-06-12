export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "Java", "C", "C++"],
  },
  {
    name: "Frontend",
    skills: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express.js", "Flask", "REST APIs", "GraphQL"],
  },
  {
    name: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "SQLite", "Redis"],
  },
  {
    name: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Linux", "Docker", "Figma", "Postman"],
  },
];
