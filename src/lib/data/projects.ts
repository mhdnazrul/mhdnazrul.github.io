export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  category: "featured" | "other";
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with product management, cart system, and payment integration.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
    liveUrl: "https://github.com",
    githubUrl: "https://github.com",
    category: "featured",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team features.",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    liveUrl: "https://github.com",
    githubUrl: "https://github.com",
    category: "featured",
  },
  {
    id: 3,
    title: "DSA Visualizer",
    description: "Interactive visualizations for sorting algorithms and data structures to aid learning.",
    tags: ["React", "TypeScript", "CSS Animations"],
    liveUrl: "https://github.com",
    githubUrl: "https://github.com",
    category: "featured",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "Real-time weather information with charts and forecasting using OpenWeatherMap API.",
    tags: ["Vue.js", "Python", "FastAPI", "REST"],
    githubUrl: "https://github.com",
    category: "other",
  },
  {
    id: 5,
    title: "URL Shortener",
    description: "Simple link shortener with analytics and custom alias support.",
    tags: ["Python", "Flask", "SQLite", "HTML/CSS"],
    liveUrl: "https://github.com",
    githubUrl: "https://github.com",
    category: "other",
  },
  {
    id: 6,
    title: "Developer Portfolio",
    description: "This very portfolio — built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    githubUrl: "https://github.com",
    category: "other",
  },
];
