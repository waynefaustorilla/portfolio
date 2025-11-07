import type {
  Project,
  CoreValue,
  Statistic,
  QuickFact,
  StatusIndicator,
  Hobby
} from "../types";

export const personalInfo = {
  name: "Orlie Wayne A. Faustorilla",
  title: "Full-Stack Developer & UI/UX Designer",
  description: "specialized in modern web technologies, cloud infrastructure, and scalable applications across the full technology stack",
  email: "orliewayne.faustorilla@gmail.com",
  phone: "0991 788 9724",
  location: "Dumaguete City, Philippines",
  github: "github.com/orliefaustorilla",
  linkedin: "linkedin.com/in/orliefaustorilla"
};

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with Laravel backend and React frontend via Inertia.js",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop&crop=center",
    tags: ["React", "Laravel", "PHP", "MySQL", "Inertia.js", "TailwindCSS", "ShadCN", "Apache"],
    github: "https://github.com",
    live: "https://demo.com"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management tool with real-time updates and team collaboration features",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=200&fit=crop&crop=center",
    tags: ["React", "Laravel", "PHP", "MySQL", "Inertia.js", "Material UI", "TailwindCSS", "Apache"],
    github: "https://github.com",
    live: "https://demo.com"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A responsive weather dashboard with location-based forecasts",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=200&fit=crop&crop=center",
    tags: ["React", "TypeScript", "TailwindCSS", "ShadCN", "Zustand", "TanStack Query"],
    github: "https://github.com",
    live: "https://demo.com"
  },
  {
    id: 4,
    title: "Interactive World Clock",
    description: "Configurable world clock with multiple time zones, formats, and customizable display options",
    image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=400&h=200&fit=crop&crop=center",
    tags: ["React", "TypeScript", "TailwindCSS", "ShadCN", "Zustand"],
    github: "https://github.com",
    live: "https://demo.com",
    icon: "🕐"
  },
  {
    id: 5,
    title: "Web Pokedex",
    description: "Interactive Pokemon encyclopedia with search, filtering, and detailed Pokemon information",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    tags: ["React", "TypeScript", "TailwindCSS", "ShadCN", "Zustand", "TanStack Query"],
    github: "https://github.com",
    live: "https://demo.com",
    icon: "⚡"
  },
  {
    id: 6,
    title: "Number Guessing Game",
    description: "Interactive number guessing game with difficulty levels, hints, and score tracking",
    image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=200&fit=crop&crop=center",
    tags: ["React", "TypeScript", "TailwindCSS", "ShadCN"],
    github: "https://github.com",
    live: "https://demo.com",
    icon: "🎯"
  }
];

export const coreValues: CoreValue[] = [
  { name: "Problem Solving", icon: "🔍" },
  { name: "Team Leadership", icon: "👥" },
  { name: "Agile Development", icon: "⚡" },
  { name: "Continuous Learning", icon: "📚" },
  { name: "Innovation", icon: "💡" },
  { name: "Quality First", icon: "✨" }
];

export const statistics: Statistic[] = [
  { value: "5+", label: "Years Experience", color: "blue" },
  { value: "50+", label: "Projects Completed", color: "purple" },
  { value: "30+", label: "Happy Clients", color: "green" },
  { value: "∞", label: "Coffee Consumed", color: "orange" }
];

export const quickFacts: QuickFact[] = [
  { emoji: "📍", text: "Based in Your City", color: "blue" },
  { emoji: "💼", text: "Available for Projects", color: "green" },
  { emoji: "🎯", text: "Focused on Quality", color: "purple" },
  { emoji: "🚀", text: "Always Learning", color: "orange" }
];

export const statusIndicators: StatusIndicator[] = [
  { color: "green", text: "Available for new projects" },
  { color: "blue", text: "Remote & On-site collaboration" },
  { color: "purple", text: "Fast response time" }
];

export const navigationItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "hobbies", label: "Hobbies" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" }
];

export const specializationData = [
  { iconName: "Globe", title: "Full-Stack Development", desc: "End-to-end solutions", color: "blue" },
  { iconName: "Palette", title: "UI/UX Design", desc: "User-centered design", color: "purple" }
];

export const whatIDoData = [
  { iconName: "Code", title: "Frontend Development", desc: "HTML, CSS, TypeScript, React, Vue, TailwindCSS, ShadCN", color: "blue" },
  { iconName: "Server", title: "Backend Development", desc: "Node.js, PHP, Python, Laravel, Flask, Express.js, Nest.js", color: "green" },
  { iconName: "Database", title: "Database & APIs", desc: "MySQL, MongoDB, PostgreSQL, Rest API Development", color: "purple" },
  { iconName: "Globe", title: "Cloud & DevOps", desc: "Azure, Docker, Kubernetes, CI/CD Pipelines, PowerShell", color: "orange" }
];

export const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML/CSS", level: 95, iconName: "Code" },
      { name: "TypeScript/JavaScript", level: 90, iconName: "Code" },
      { name: "React", level: 90, iconName: "Code" },
      { name: "Vue", level: 85, iconName: "Code" },
      { name: "TailwindCSS", level: 90, iconName: "Palette" },
      { name: "ShadCN", level: 80, iconName: "Palette" },
      { name: "jQuery", level: 85, iconName: "Code" }
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 85, iconName: "Server" },
      { name: "Express.js", level: 85, iconName: "Server" },
      { name: "Nest.js", level: 80, iconName: "Server" },
      { name: "PHP", level: 85, iconName: "Server" },
      { name: "Laravel", level: 80, iconName: "Server" },
      { name: "Python", level: 85, iconName: "Server" },
      { name: "Flask", level: 80, iconName: "Server" },
      { name: "Rest API", level: 90, iconName: "Globe" }
    ]
  },
  {
    category: "Database",
    skills: [
      { name: "MySQL", level: 85, iconName: "Database" },
      { name: "MongoDB", level: 80, iconName: "Database" },
      { name: "PostgreSQL", level: 85, iconName: "Database" }
    ]
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "Docker", level: 80, iconName: "Server" },
      { name: "Kubernetes", level: 75, iconName: "Server" },
      { name: "Microsoft Azure", level: 85, iconName: "Globe" },
      { name: "Azure Web Apps", level: 80, iconName: "Globe" },
      { name: "Azure Static Apps", level: 80, iconName: "Globe" },
      { name: "Azure Pipelines", level: 75, iconName: "Globe" },
      { name: "PowerShell", level: 80, iconName: "Server" }
    ]
  }
];

export const hobbies: Hobby[] = [
  {
    name: "Gym & Bodybuilding",
    description: "Committed to strength training and personal fitness, building discipline and mental resilience through consistent workout routines.",
    icon: "💪",
    color: "from-red-500 to-red-600"
  },
  {
    name: "Photography",
    description: "Capturing moments and exploring creative composition, developing an eye for detail and visual storytelling.",
    icon: "📸",
    color: "from-pink-400 to-rose-500"
  },
  {
    name: "Guitar",
    description: "Playing acoustic and electric guitar, exploring different genres and techniques to express creativity through music.",
    icon: "🎸",
    color: "from-pink-500 to-rose-600"
  },
  {
    name: "Songwriting",
    description: "Creating original compositions and lyrics, blending technical skill with emotional expression and storytelling.",
    icon: "🎵",
    color: "from-green-500 to-green-600"
  }
];