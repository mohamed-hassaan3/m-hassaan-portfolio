import { Project, Skill } from "@/types/data";
import {
  //   Database,
  //   Container,
  GitBranch,
  Figma,
  //   GitCommit,
  Github,
  Rocket,
  //   LucideIcon
} from "lucide-react";

import {
  vision,
  animationPortfolio,
  devPlatform,
  email,
  future,
  jacky,
  kibillis,
  movieNight,
  nyTimes,
  oia,
} from "../../public/images";

export const skills: Skill[] = [
  {
    id: "javascript",
    name: "JavaScript",
    icon: "SiJavascript", // Use react-icons/si - SiJavascript
    color: "#F7DF1E", // JavaScript yellow
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: "SiTypescript", // Use react-icons/si - SiTypescript
    color: "#3178C6", // TypeScript blue
  },
  {
    id: "react",
    name: "React",
    icon: "SiReact", // Use react-icons/si - SiReact
    color: "#61DAFB", // React cyan
  },
  {
    id: "nextjs",
    name: "Next.js",
    icon: "SiNextdotjs", // Use react-icons/si - SiNextdotjs
    color: "#000000", // Next.js black
  },
  {
    id: "prisma",
    name: "Prisma",
    icon: "SiPrisma", // Use react-icons/si - SiPrisma
    color: "#2D3748", // Prisma dark blue
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    icon: "SiTailwindcss", // Use react-icons/si - SiTailwindcss
    color: "#06B6D4", // Tailwind cyan
  },
  {
    id: "css",
    name: "CSS",
    icon: "SiCss3", // Use react-icons/si - SiCss3
    color: "#1572B6", // CSS3 blue
  },
  {
    id: "html",
    name: "HTML",
    icon: "SiHtml5", // Use react-icons/si - SiHtml5
    color: "#E34F26", // HTML5 orange-red
  },
  {
    id: "nodejs",
    name: "Node.js",
    icon: "SiNodedotjs", // Use react-icons/si - SiNodedotjs
    color: "#339933", // Node.js green
  },
  {
    id: "express",
    name: "Express.js",
    icon: "SiExpress", // Use react-icons/si - SiExpress
    color: "#000000", // Express black
  },
  {
    id: "mongodb",
    name: "MongoDB",
    icon: "SiMongodb", // Use react-icons/si - SiMongodb
    color: "#47A248", // MongoDB green
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    icon: "SiPostgresql", // Use react-icons/si - SiPostgresql
    color: "#336791", // PostgreSQL blue
  },
  {
    id: "mysql",
    name: "MySQL",
    icon: "SiMysql", // Use react-icons/si - SiMysql
    color: "#4479A1", // MySQL blue
  },
  {
    id: "redis",
    name: "Redis",
    icon: "SiRedis", // Use react-icons/si - SiRedis
    color: "#DC382D", // Redis red
  },
  {
    id: "docker",
    name: "Docker",
    icon: "SiDocker", // Use react-icons/si - SiDocker
    color: "#2496ED", // Docker blue
  },
  {
    id: "kubernetes",
    name: "Kubernetes",
    icon: "SiKubernetes", // Use react-icons/si - SiKubernetes
    color: "#326CE5", // Kubernetes blue
  },
  {
    id: "aws",
    name: "AWS",
    icon: "SiAmazonaws", // Use react-icons/si - SiAmazonaws
    color: "#FF9900", // AWS orange
  },
  {
    id: "vercel",
    name: "Vercel",
    icon: "SiVercel", // Use react-icons/si - SiVercel
    color: "#000000", // Vercel black
  },
  {
    id: "netlify",
    name: "Netlify",
    icon: "SiNetlify", // Use react-icons/si - SiNetlify
    color: "#00C7B7", // Netlify teal
  },
  {
    id: "firebase",
    name: "Firebase",
    icon: "SiFirebase", // Use react-icons/si - SiFirebase
    color: "#FFCA28", // Firebase yellow
  },
  {
    id: "supabase",
    name: "Supabase",
    icon: "SiSupabase", // Use react-icons/si - SiSupabase
    color: "#3ECF8E", // Supabase green
  },
  {
    id: "graphql",
    name: "GraphQL",
    icon: "SiGraphql", // Use react-icons/si - SiGraphql
    color: "#E10098", // GraphQL pink
  },
  {
    id: "apollo",
    name: "Apollo GraphQL",
    icon: "SiApollographql", // Use react-icons/si - SiApollographql
    color: "#311C87", // Apollo purple
  },
  {
    id: "strapi",
    name: "Strapi CMS",
    icon: "SiStrapi", // Use react-icons/si - SiStrapi
    color: "#2F2E8B", // Strapi purple
  },
  {
    id: "contentful",
    name: "Contentful",
    icon: "SiContentful", // Use react-icons/si - SiContentful
    color: "#2478CC", // Contentful blue
  },
  {
    id: "sanity",
    name: "Sanity CMS",
    icon: "SiSanity", // Use react-icons/si - SiSanity
    color: "#F03E2F", // Sanity red
  },
  {
    id: "wordpress",
    name: "WordPress",
    icon: "SiWordpress", // Use react-icons/si - SiWordpress
    color: "#21759B", // WordPress blue
  },
  {
    id: "cicd",
    name: "CI/CD",
    icon: GitBranch, // Keep Lucide for generic CI/CD
    color: "#10B981", // Generic green
  },
  {
    id: "github-actions",
    name: "GitHub Actions",
    icon: "SiGithubactions", // Use react-icons/si - SiGithubactions
    color: "#2088FF", // GitHub Actions blue
  },
  {
    id: "jenkins",
    name: "Jenkins",
    icon: "SiJenkins", // Use react-icons/si - SiJenkins
    color: "#D24939", // Jenkins red
  },
  {
    id: "figma",
    name: "Figma",
    icon: Figma, // Lucide has the real Figma logo
    color: "#F24E1E", // Figma orange-red
  },
  {
    id: "adobe-xd",
    name: "Adobe XD",
    icon: "SiAdobexd", // Use react-icons/si - SiAdobexd
    color: "#FF61F6", // Adobe XD pink
  },
  {
    id: "sketch",
    name: "Sketch",
    icon: "SiSketch", // Use react-icons/si - SiSketch
    color: "#F7B500", // Sketch yellow
  },
  {
    id: "jest",
    name: "Jest",
    icon: "SiJest", // Use react-icons/si - SiJest
    color: "#C21325", // Jest red
  },
  {
    id: "cypress",
    name: "Cypress",
    icon: "SiCypress", // Use react-icons/si - SiCypress
    color: "#17202C", // Cypress dark
  },
  {
    id: "playwright",
    name: "Playwright",
    icon: "SiPlaywright", // Use react-icons/si - SiPlaywright
    color: "#2EAD33", // Playwright green
  },
  {
    id: "git",
    name: "Git",
    icon: "SiGit", // Use react-icons/si - SiGit
    color: "#F05032", // Git orange-red
  },
  {
    id: "github",
    name: "GitHub",
    icon: Github, // Lucide has the real GitHub logo
    color: "#181717", // GitHub black
  },
  {
    id: "gitlab",
    name: "GitLab",
    icon: "SiGitlab", // Use react-icons/si - SiGitlab
    color: "#FCA326", // GitLab orange
  },
  {
    id: "bitbucket",
    name: "Bitbucket",
    icon: "SiBitbucket", // Use react-icons/si - SiBitbucket
    color: "#0052CC", // Bitbucket blue
  },
  {
    id: "sass",
    name: "SASS",
    icon: "SiSass", // Use react-icons/si - SiSass
    color: "#CC6699", // SASS pink
  },
  {
    id: "less",
    name: "Less",
    icon: "SiLess", // Use react-icons/si - SiLess
    color: "#1D365D", // Less blue
  },
  {
    id: "styled-components",
    name: "Styled Components",
    icon: "SiStyledcomponents", // Use react-icons/si - SiStyledcomponents
    color: "#DB7093", // Styled Components pink
  },
  {
    id: "materialui",
    name: "Material UI",
    icon: "SiMui", // Use react-icons/si - SiMui
    color: "#007FFF", // Material UI blue
  },
  {
    id: "antd",
    name: "Ant Design",
    icon: "SiAntdesign", // Use react-icons/si - SiAntdesign
    color: "#0170FE", // Ant Design blue
  },
  {
    id: "bootstrap",
    name: "Bootstrap",
    icon: "SiBootstrap", // Use react-icons/si - SiBootstrap
    color: "#7952B3", // Bootstrap purple
  },
  {
    id: "shadcn",
    name: "shadcn/ui",
    icon: "CustomShadcnIcon", // You'll need a custom SVG for this
    color: "#000000", // shadcn black
  },
  {
    id: "webpack",
    name: "Webpack",
    icon: "SiWebpack", // Use react-icons/si - SiWebpack
    color: "#8DD6F9", // Webpack blue
  },
  {
    id: "vite",
    name: "Vite",
    icon: "SiVite", // Use react-icons/si - SiVite
    color: "#646CFF", // Vite purple
  },
  {
    id: "rollup",
    name: "Rollup",
    icon: "SiRollup", // Use react-icons/si - SiRollup
    color: "#EC4A3F", // Rollup red
  },
  {
    id: "babel",
    name: "Babel",
    icon: "SiBabel", // Use react-icons/si - SiBabel
    color: "#F9DC3E", // Babel yellow
  },
  {
    id: "eslint",
    name: "ESLint",
    icon: "SiEslint", // Use react-icons/si - SiEslint
    color: "#4B32C3", // ESLint purple
  },
  {
    id: "prettier",
    name: "Prettier",
    icon: "SiPrettier", // Use react-icons/si - SiPrettier
    color: "#F7B93E", // Prettier yellow
  },
  {
    id: "python",
    name: "Python",
    icon: "SiPython", // Use react-icons/si - SiPython
    color: "#3776AB", // Python blue
  },
  {
    id: "java",
    name: "Java",
    icon: "SiOpenjdk", // Use react-icons/si - SiOpenjdk (for Java)
    color: "#ED8B00", // Java orange
  },
  {
    id: "csharp",
    name: "C#",
    icon: "SiCsharp", // Use react-icons/si - SiCsharp
    color: "#239120", // C# green
  },
  {
    id: "php",
    name: "PHP",
    icon: "SiPhp", // Use react-icons/si - SiPhp
    color: "#777BB4", // PHP purple
  },
  {
    id: "laravel",
    name: "Laravel",
    icon: "SiLaravel", // Use react-icons/si - SiLaravel
    color: "#FF2D20", // Laravel red
  },
  {
    id: "django",
    name: "Django",
    icon: "SiDjango", // Use react-icons/si - SiDjango
    color: "#092E20", // Django green
  },
  {
    id: "flask",
    name: "Flask",
    icon: "SiFlask", // Use react-icons/si - SiFlask
    color: "#000000", // Flask black
  },
  {
    id: "spring",
    name: "Spring",
    icon: "SiSpring", // Use react-icons/si - SiSpring
    color: "#6DB33F", // Spring green
  },
  {
    id: "dotnet",
    name: ".NET",
    icon: "SiDotnet", // Use react-icons/si - SiDotnet
    color: "#512BD4", // .NET purple
  },
  // New additions for CMS, API, OOP, PostgreSQL
  {
    id: "cms",
    name: "CMS",
    icon: "SiContentful", // Generic CMS - using Contentful icon
    color: "#2478CC", // CMS blue
  },
  {
    id: "api",
    name: "REST API",
    icon: "SiPostman", // Use Postman icon for API
    color: "#FF6C37", // Postman orange
  },
  {
    id: "oop",
    name: "OOP",
    icon: "SiCodereview", // Generic OOP - using code review icon
    color: "#4A90E2", // Generic blue for OOP concepts
  },
  {
    id: "deployment",
    name: "Deployment",
    icon: Rocket, // Keep Lucide for generic deployment
    color: "#8B5CF6", // Generic purple
  },
];

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    name: "E-commerce Platform",
    description:
      "A full-stack e-commerce platform with user authentication, product management, shopping cart, and payment integration. Features admin dashboard, order tracking, and responsive design.",
    src: devPlatform,
    links: {
      demo: "https://ecommerce-demo.vercel.app",
      github: "https://github.com/username/ecommerce-platform",
    },
    tech: [
      "typescript",
      "nextjs",
      "react",
      "prisma",
      "tailwind",
      "docker",
      "deployment",
    ],
  },
  {
    id: "task-management-app",
    name: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop interface, and team collaboration features. Includes task assignments, due dates, and progress tracking.",
    src: movieNight,
    links: {
      demo: "https://task-app-demo.vercel.app",
      github: "https://github.com/username/task-manager",
    },
    tech: ["react", "nodejs", "mongodb", "socketio", "tailwind", "jest"],
  },
  {
    id: "health-fitness-tracker",
    name: "Health & Fitness Tracker",
    description:
      "Comprehensive fitness application with workout logging, nutrition tracking, and progress analytics. Integrates with wearable devices and provides personalized recommendations.",
    src: jacky,
    links: {
      demo: "https://fitness-tracker-demo.vercel.app",
      github: "https://github.com/username/fitness-tracker",
    },
    tech: ["typescript", "react", "graphql", "postgresql", "chartjs", "aws"],
  },
  {
    id: "social-media-dashboard",
    name: "Social Media Dashboard",
    description:
      "Analytics dashboard for social media managers with data visualization, post scheduling, and engagement metrics. Supports multiple platforms and provides actionable insights.",
    src: oia,
    links: {
      demo: "https://social-dashboard-demo.vercel.app",
      github: "https://github.com/username/social-dashboard",
    },
    tech: ["nextjs", "typescript", "d3js", "tailwind", "firebase", "oauth"],
  },
  {
    id: "ai-image-generator",
    name: "AI Image Generator",
    description:
      "Web application that generates custom images using AI models. Users can input text prompts, select styles, and download high-resolution generated artwork.",
    src: vision,
    links: {
      demo: "https://ai-image-generator.vercel.app",
      github: "https://github.com/username/ai-image-generator",
    },
    tech: ["python", "react", "fastapi", "openai", "docker", "cloudinary"],
  },
  {
    id: "weather-forecast-app",
    name: "Advanced Weather Forecast",
    description:
      "Weather application with 7-day forecasts, severe weather alerts, and interactive maps. Features location-based services and historical weather data comparison.",
    src: nyTimes,
    links: {
      demo: "https://weather-app-demo.vercel.app",
      github: "https://github.com/username/weather-app",
    },
    tech: ["javascript", "react", "redux", "mapbox", "weatherapi", "pwa"],
  },
  {
    id: "recipe-finder",
    name: "Smart Recipe Finder",
    description:
      "Recipe discovery platform with AI-powered search, dietary filters, and meal planning tools. Includes step-by-step cooking instructions and video tutorials.",
    src: email,
    links: {
      demo: "https://recipe-finder-demo.vercel.app",
      github: "https://github.com/username/recipe-finder",
    },
    tech: ["vue", "nuxtjs", "python", "spoonacular-api", "mongodb", "jest"],
  },
  {
    id: "finance-dashboard",
    name: "Personal Finance Dashboard",
    description:
      "Comprehensive financial tracking tool with expense categorization, budgeting features, and investment portfolio tracking. Supports bank API integrations and CSV imports.",
    src: animationPortfolio,
    links: {
      demo: "https://finance-dashboard.vercel.app",
      github: "https://github.com/username/finance-dashboard",
    },
    tech: [
      "typescript",
      "angular",
      "nestjs",
      "postgresql",
      "plaid-api",
      "cypress",
    ],
  },
  {
    id: "language-learning-app",
    name: "Interactive Language Learning",
    description:
      "Gamified language learning platform with speech recognition, flashcards, and conversational practice. Tracks progress and adapts to user learning patterns.",
    src: future,
    links: {
      demo: "https://language-learning.vercel.app",
      github: "https://github.com/username/language-app",
    },
    tech: ["flutter", "dart", "firebase", "google-speech-api", "bloc", "ci/cd"],
  },
  {
    id: "event-planning-platform",
    name: "Event Planning Platform",
    description:
      "End-to-end event management solution with ticket sales, attendee management, and venue coordination tools. Features real-time updates and interactive floor plans.",
    src: kibillis,
    links: {
      demo: "https://event-planning-demo.vercel.app",
      github: "https://github.com/username/event-platform",
    },
    tech: ["ruby", "rails", "react", "postgresql", "stripe", "redis", "rspec"],
  },
];


