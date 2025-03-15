export const personalInfo = {
  name: "Abhilash Reddy Chitiki",
  title: "Software Developer",
  subtitle: "Transforming caffeine into clean code and interactive experiences",
  about: `From sleek UIs to robust backend systems, I design and develop cutting-edge web applications with performance, 
  scalability, and user experience in mind. Passionate about innovation, clean architecture, and the ever-evolving tech landscape.`,
  resumeUrl: "/resume.pdf",
  profileImage: "https://demo-source.imgix.net/snowboard.jpg",
  github: "https://github.com/abhilashreddychitiki",
  linkedin: "https://www.linkedin.com/in/abhilashreddychitiki/",
};

export const skillsData = [
  { name: "React", level: 90, icon: "SiReact", category: "Frontend" },
  { name: "TypeScript", level: 85, icon: "SiTypescript", category: "Language" },
  { name: "Java", level: 80, icon: "FaJava", category: "Language" },
  { name: "Node.js", level: 80, icon: "SiNodedotjs", category: "Backend" },
  { name: "Spring", level: 75, icon: "SiSpring", category: "Backend" },

  { name: "Next.js", level: 85, icon: "SiNextdotjs", category: "Frontend" },
  { name: "PostgreSQL", level: 75, icon: "SiPostgresql", category: "Database" },
  { name: "MongoDB", level: 70, icon: "SiMongodb", category: "Database" },
  { name: "GraphQL", level: 75, icon: "SiGraphql", category: "Backend" },
  { name: "Docker", level: 70, icon: "SiDocker", category: "DevOps" },
  { name: "Terraform", level: 70, icon: "SiTerraform", category: "DevOps" },
  { name: "AWS", level: 65, icon: "FaAws", category: "DevOps" },
  { name: "Tailwind", level: 95, icon: "SiTailwindcss", category: "Frontend" },
  { name: "Python", level: 85, icon: "SiPython", category: "Language" },
  { name: "Vue.js", level: 80, icon: "SiVuedotjs", category: "Frontend" },
  { name: "Azure", level: 70, icon: "SiMicrosoftazure", category: "DevOps" },
  {
    name: "Redshift",
    level: 65,
    icon: "SiAmazonredshift",
    category: "Database",
  },
  {
    name: "BigQuery",
    level: 65,
    icon: "SiGooglebigquery",
    category: "Database",
  },
];

export const experienceData = [
  {
    title: "Full Stack Developer",
    company: "Accenture",
    companyIcon: "SiAccenture",
    duration: "2019 - 2022",
    responsibilities: [
      "Developedinteractive UIs using React, JavaScript, and TypeScript, increasing client satisfaction by 20%",
      "Built andmaintainedback-endservices using Node.js, Java, & Spring improving application performance by 15%.",
      "Migratedapplications from on-premises to Azure andAWScloudplatforms,enhancingscalability and performance.",
    ],
    technologies: ["Java", "React", "TypeScript", "Next.js", "AWS"],
  },
  // {
  //   title: "Full Stack Developer",
  //   company: "Digital Solutions Ltd",
  //   companyIcon: "SiMicrosoft",
  //   duration: "2020 - 2022",
  //   responsibilities: [
  //     "Developed and maintained multiple client projects using React and Node.js",
  //     "Optimized database queries improving application performance by 30%",
  //     "Implemented real-time features using WebSocket",
  //   ],
  //   technologies: ["React", "Node.js", "PostgreSQL", "WebSocket"],
  // },
  {
    title: "Software Engineer",
    company: "EY",
    companyIcon: "",
    duration: "2018 - 2019",
    responsibilities: [
      "Developed and maintained ETLprocesses using Python and SQL to integrate data from various sources into a centralized data warehouse",
      "Developed RESTful APIs using SpringBoot to expose dataservices,supporting real-time data processing and improving data accessibility for downstream applications.",
      "Collaborated with UI/UX team for better user experience",
    ],
    technologies: ["JavaScript", "React", "Node.js", "MongoDB"],
  },
];

export const projectsData = [
  {
    title: "Chess AI",
    description:
      "A modern chess engine combining Monte Carlo Tree Search (MCTS) and Reinforcement Learning with a user-friendly GUI.",
    image:
      "https://images.unsplash.com/photo-1741321743084-df98d916cb91?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://github.com/abhilashreddychitiki/chess-ai",
    technologies: [
      "Python",
      "Tkinter",
      "Monte Carlo Tree Search",
      "Reinforcement Learning",
    ],
  },
  {
    title: "AI-Powered Resume Optimizer",
    description:
      "A web application that uses AI algorithms to optimize resumes based on specific job descriptions, offering tailored suggestions for better job matching.",
    image:
      "https://images.unsplash.com/photo-1698047681432-006d2449c631?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://github.com/abhilashreddychitiki/ai-resume-optimizer",
    technologies: [
      "Python",
      "Flask",
      "Machine Learning",
      "Natural Language Processing",
    ],
  },
  {
    title: "Guacuco Estates Integrated Management Portal",
    description:
      "A web portal designed for the management of a large residential complex, providing features for resident registration, amenity booking, security protocols, and navigation using Google Maps.",
    image:
      "https://images.unsplash.com/photo-1740842788904-96266814b53f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://github.com/abhilashreddychitiki/Guacuco-Estates-Integrated-Management-Portal",
    technologies: ["React", "Node.js", "Laravel", "SQL", "Google Maps API"],
  },
];
