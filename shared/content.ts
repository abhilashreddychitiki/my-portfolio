export const personalInfo = {
  name: "John Doe",
  title: "Creative Developer",
  subtitle: "Building beautiful, interactive experiences for the web",
  about: `I'm a passionate full-stack developer with a love for creating
  beautiful and functional web applications. With expertise in modern
  web technologies, I bring ideas to life through clean code and
  thoughtful design.`,
  resumeUrl: "/resume.pdf",
  profileImage: "https://images.unsplash.com/photo-1573496527892-904f897eb744",
  github: "https://github.com/johndoe",
  linkedin: "https://linkedin.com/in/johndoe"
};

export const skillsData = [
  { name: "React", level: 90, icon: "SiReact", category: "Frontend" },
  { name: "TypeScript", level: 85, icon: "SiTypescript", category: "Language" },
  { name: "Node.js", level: 80, icon: "SiNodedotjs", category: "Backend" },
  { name: "Next.js", level: 85, icon: "SiNextdotjs", category: "Frontend" },
  { name: "PostgreSQL", level: 75, icon: "SiPostgresql", category: "Database" },
  { name: "MongoDB", level: 70, icon: "SiMongodb", category: "Database" },
  { name: "GraphQL", level: 75, icon: "SiGraphql", category: "Backend" },
  { name: "Docker", level: 70, icon: "SiDocker", category: "DevOps" },
  { name: "AWS", level: 65, icon: "SiAmazonaws", category: "DevOps" },
  { name: "Tailwind", level: 95, icon: "SiTailwindcss", category: "Frontend" },
  // Example of adding Python skill
  { name: "Python", level: 85, icon: "SiPython", category: "Language" },
  // Example of adding Vue.js skill
  { name: "Vue.js", level: 80, icon: "SiVuedotjs", category: "Frontend" }
];

export const experienceData = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    companyIcon: "SiGoogle",
    duration: "2022 - Present",
    responsibilities: [
      "Led the development of a high-performance React application serving 1M+ users",
      "Implemented modern CI/CD practices reducing deployment time by 40%",
      "Mentored junior developers and conducted code reviews"
    ],
    technologies: ["React", "TypeScript", "Next.js", "AWS"]
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd",
    companyIcon: "SiMicrosoft",
    duration: "2020 - 2022",
    responsibilities: [
      "Developed and maintained multiple client projects using React and Node.js",
      "Optimized database queries improving application performance by 30%",
      "Implemented real-time features using WebSocket"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "WebSocket"]
  },
  {
    title: "Software Engineer",
    company: "StartUp Hub",
    companyIcon: "SiAmazon",
    duration: "2018 - 2020",
    responsibilities: [
      "Built RESTful APIs using Node.js and Express",
      "Developed responsive web applications using React",
      "Collaborated with UI/UX team for better user experience"
    ],
    technologies: ["JavaScript", "React", "Node.js", "MongoDB"]
  }
];

export const projectsData = [
  {
    title: "Project Management Dashboard",
    description: "A comprehensive project management solution with real-time updates",
    image: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8",
    link: "#",
    technologies: ["React", "Node.js", "PostgreSQL"]
  },
  {
    title: "E-commerce Platform",
    description: "Modern e-commerce solution with advanced filtering and search",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    link: "#",
    technologies: ["Next.js", "Stripe", "Tailwind"]
  },
  {
    title: "Social Media Analytics",
    description: "Analytics dashboard for social media performance tracking",
    image: "https://images.unsplash.com/photo-1739514984003-330f7c1d2007",
    link: "#",
    technologies: ["React", "D3.js", "Firebase"]
  },
  {
    title: "Fitness Tracking App",
    description: "Mobile-first fitness tracking application with workout plans",
    image: "https://images.unsplash.com/photo-1510759395231-72b17d622279",
    link: "#",
    technologies: ["React Native", "GraphQL", "MongoDB"]
  }
];