import { Project, Skill, SpecialityProps } from "@/types/data";
import {
  //   Database,
  //   Container,
  GitBranch,
  Figma,
  //   GitCommit,
  Github,
  Rocket,
  CodeXml,
  PenTool,
  Container,
  //   LucideIcon
} from "lucide-react";

import {
  vision,
  animationPortfolio,
  devPlatform,
  email,
  future,
  jacky,
  movieNight,
  nyTimes,
  oia,
  taskApp,
  map,
  todoList,
} from "../../public/images/projects";
import { development, deployment, design } from "../../public/images/accordion";

export const skills: Skill[] = [
  {
    id: "javascript",
    name: "JavaScript",
    icon: "SiJavascript",
    color: "#F7DF1E",
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: "SiTypescript",
    color: "#3178C6",
  },
  {
    id: "react",
    name: "React",
    icon: "SiReact",
    color: "#61DAFB",
  },
  {
    id: "nextjs",
    name: "Next.js",
    icon: "SiNextdotjs",
    color: "#000000",
  },
  {
    id: "prisma",
    name: "Prisma",
    icon: "SiPrisma",
    color: "#2D3748",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    icon: "SiTailwindcss",
    color: "#06B6D4",
  },
  {
    id: "css",
    name: "CSS",
    icon: "SiCss3",
    color: "#1572B6",
  },
  {
    id: "html",
    name: "HTML",
    icon: "SiHtml5",
    color: "#E34F26",
  },
  {
    id: "nodejs",
    name: "Node.js",
    icon: "SiNodedotjs",
    color: "#339933",
  },
  {
    id: "express",
    name: "Express.js",
    icon: "SiExpress",
    color: "#000000",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    icon: "SiMongodb",
    color: "#47A248",
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    icon: "SiPostgresql",
    color: "#336791",
  },
  {
    id: "mysql",
    name: "MySQL",
    icon: "SiMysql",
    color: "#4479A1",
  },
  {
    id: "redis",
    name: "Redis",
    icon: "SiRedis",
    color: "#DC382D",
  },
  {
    id: "docker",
    name: "Docker",
    icon: "SiDocker",
    color: "#2496ED",
  },
  {
    id: "kubernetes",
    name: "Kubernetes",
    icon: "SiKubernetes",
    color: "#326CE5",
  },
  {
    id: "aws",
    name: "AWS",
    icon: "SiAmazonaws",
    color: "#FF9900",
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
    icon: "SiDotnet",
    color: "#512BD4",
  },
  // New additions for CMS, API, OOP, PostgreSQL
  {
    id: "cms",
    name: "CMS",
    icon: "SiContentful",
    color: "#2478CC",
  },
  {
    id: "api",
    name: "REST API",
    icon: "SiPostman",
    color: "#FF6C37",
  },
  {
    id: "oop",
    name: "OOP",
    icon: "SiCodereview",
    color: "#4A90E2",
  },
  {
    id: "deployment",
    name: "Deployment",
    icon: Rocket,
    color: "#8B5CF6",
  },
];

export const projects: Project[] = [
  {
    slug: "dev-hub",
    name: "DevHub",
    description:
      "Social Pulse is a modern full-stack social media application built with Next.js and TypeScript, featuring Google and GitHub authentication via NextAuth. Users can create posts, like, and comment, with real-time functionality powered by Supabase. The UI is clean and responsive using Tailwind CSS and shadcn/ui, while media is handled efficiently through Cloudinary. Prisma ORM manages the relational data, and the entire app is deployed on Vercel for seamless performance and scalability.",
    src: devPlatform,
    links: {
      demo: "https://dev-platform-beta.vercel.app/",
      github: "https://github.com/mohamed-hassaan3/dev-platform",
    },
    tech: [
      "nextjs",
      "typescript",
      "tailwind",
      "shadecn UI",
      "Prisma ORM",
      "deployment",
      "PostgreSQL",
      "Supabase",
      "NextAuth.js (Google & GitHub)",
    ],
    category: "Next.js",
  },
  {
    slug: "movie-night",
    name: "Movie Night",
    description:
      "A responsive movie database app built with Next.js, using React, Redux Toolkit, and Axios. It allows users to search and filter movies, TV shows, and actors. The app features dynamic server-side updates for real-time content and smooth state management, ensuring an optimized browsing experience across all devices, I configured the API for seamless data integration and made additional optimizations for production, ensuring fast load times and smooth performance across devices.",
    src: movieNight,
    links: {
      demo: "https://movie-night-rtk-next.vercel.app/",
      github: "https://github.com/mohamed-hassaan3/movie-night-RTK-NEXT",
    },
    tech: [
      "Nextjs",
      "TailwindCSS",
      "TypeScript",
      "Redux Toolkit",
      "React Youtube",
      "Deployment",
      "Skeleton",
    ],
    category: "Next.js",
  },
  {
    slug: "jacky-e-commerce",
    name: "Jacky E-Commerce",
    description:
      "Developed a dynamic e-commerce platform using React and Redux, featuring real-time stock management, coupon discount calculations, shipping charge estimations, and a smooth user interface. Implemented React Skeleton for seamless loading, Redux Thunk for asynchronous operations, Axios for API integration, and React Toastify for user notifications. The project also utilizes React Persist for maintaining state across sessions. This comprehensive solution showcases advanced front-end development skills, delivering an engaging and responsive online shopping experience.",
    src: jacky,
    links: {
      demo: "https://jacky-by-hassaan.netlify.app/",
      github: "https://github.com/mohamed-hassaan3/commerce-jacky",
    },
    tech: [
      "Reactjs",
      "Redux Toolkit",
      "Middleware",
      "Axios",
      "Bootstrap",
      "React Slick",
      "React Toastify",
    ],
    category: "reactjs",
  },
  {
    slug: "3d-portfolio",
    name: "3D Portfolio",
    description:
      "I developed a 3D portfolio website using React, and Three.js for animations. The site features interactive 3D models and animations, offering a unique and engaging user experience. My focus was on creating a responsive, dynamic interface that showcases my projects while maintaining smooth performance across devices.",
    src: animationPortfolio,
    links: {
      demo: "https://portfolio-mohamed3.vercel.app/",
      github: "https://github.com/mohamed-hassaan3/3D_portfolio",
    },
    tech: ["React", "d3js", "tailwindCSS", "Three.js"],
    category: "reactjs",
  },
  {
    slug: "oia-properties(Landing Page)",
    name: "Oia Properties (Landing Page)",
    description:
      "Designing a presentation involves crafting a series of interactive slides using React components, incorporating Tailwind CSS for modern styling, and implementing GSAP animations to seamlessly enhance transitions and engage users with dynamic visual elements, ultimately creating an immersive and visually appealing experience.",
    src: oia,
    links: {
      demo: "https://github.com/mohamed-hassaan3/oia-properties",
      github: "https://oia-properties.netlify.app/",
    },
    tech: ["React", "TailwindCSS", "GSAP", "Responsive", "Animation"],
    category: "React.js",
  },
  {
    slug: "ny-times",
    name: "NY Times",
    description:
      "In this project, we have developed a powerful Task Manager application using a cutting-edge tech stack that includes React, Redux Thunk, and Redux Toolkit. This application seamlessly retrieves and updates data from an external API, making it an ideal choice for managing tasks, projects, or any other data-driven workflow, Leveraging Redux Thunk for asynchronous actions, the application efficiently retrieves data from an external API. Redux Toolkit simplifies state management, allowing us to seamlessly integrate this data into the application's store.",
    src: nyTimes,
    links: {
      demo: "https://newyork-times-by-mhassaan.netlify.app/",
      github: "https://github.com/mohamed-hassaan3/ny-times-api",
    },
    tech: ["javascript", "Reactjs", "Redux", "Axios", "API", "Deployment"],
    category: "React.js",
  },
  {
    slug: "task-management",
    name: "Task Management",
    description:
      "Task Management is an App using React, Hooks, and validation form and finally, you are able to store any updates in your App Once you sign-in you will get all your tasks in the same, then you have a simple sign-in & sign-up for the user and your app will be safe if you are not signed correctly.in the App, you will get the correct password '123456' simply if you have data in the backend store",
    src: taskApp,
    links: {
      demo: "https://task-management-by-m-hassaan.netlify.app/",
      github: "https://github.com/mohamed-hassaan3/management-tasks",
    },
    tech: ["Reactjs", "CSS", "Storage Data", "manually Validation"],
    category: "React.js",
  },
  {
    slug: "map",
    name: "Map",
    description:
      "I create Web App and data visualizations, with my most recent work being the development of a custom map UI built on GL JS for a UAE country. I work Primarily in JAVASCRIPT. Mapbox GL JS maps are dynamically rendered by combining vector tiles with style rules in the browser rather than on a server, which makes it possible to change the map's style and displayed data in response to user interaction.",
    src: map,
    links: {
      demo: "https://map-box-by-mhassaan.netlify.app/",
      github: "https://github.com/mohamed-hassaan3/map-box",
    },
    tech: ["HTML", "CSS", "typescript", "API", "Map Box API"],
    category: "JavaScript",
  },
  {
    slug: "todo-list",
    name: "ToDo List",
    description:
      "JavaScript Todo List helps you create a list of things you want to do throughout the day. Suppose you want to do something throughout the day that you can list here. Whenever you complete that task then you can delete it. I have taken select-dropdown to filter between the completed and uncompleted todo items help to create this Todo List as well.",
    src: todoList,
    links: {
      demo: "https://todo-list-by-mhassaan.netlify.app/",
      github: "https://github.com/mohamed-hassaan3/Todo-List",
    },
    tech: ["HTML5", "CSS3", "JavaScript"],
    category: "JavaScript",
  },
  {
    slug: "imac-email-template",
    name: "iMac Email Template",
    description:
      "Extensible HyperText Markup Language (XHTML) is part of the family of XML markup languages. It mirrors or extends versions of the widely used HyperText Markup Language (HTML), the language in which Web pages are formulated. While HTML, prior to HTML5, was defined as an application of Standard Generalized Markup Language (SGML), a flexible markup language framework, XHTML is an application of XML, a more restrictive subset of SGML. XHTML documents are well-formed and may therefore be parsed using standard XML parsers, unlike HTML, which requires a lenient HTML-specific parser.",
    src: email,
    links: {
      demo: "https://muhammad_hassaan_1-email-imac.mdbgo.io/",
      github: "https://github.com/mohamed-hassaan3/Email-iMac",
    },
    tech: ["HTML4", "XML", "SGML", "CSS"],
    category: "UI UX",
  },
  {
    slug: "vision-school",
    name: "VISION SCHOOL",
    description:
      "This task with designing and creating the landing page for a new school, cloud platform and responsive web design which aim to adjust the presentation on mobile devices. For this project I provided. I got a document which contains the positioning of the elements and compiling SASS to CSS on a page without specifying any other design information. I will help them by making informed design decisions about color and typography using the skills I have learned. will then implement the design.",
    src: vision,
    links: {
      demo: "https://vision-by-mhassaan.netlify.app/",
      github: "https://github.com/mohamed-hassaan3/Vision",
    },
    tech: ["HTML", "CSS", "SASS", "UI UX"],
    category: "UI UX",
  },
  {
    slug: "future-vehicles",
    name: "Future Vehicles",
    description:
      "This project deals with E-health web application framework, cloud platform and responsive web design which aim to adjust the presentation on mobile devices. This work presents the whole development process of the self-care management web-app framework which provides instructive supports for future other Future-Vehicles field application. A prototype is developed by using CSS3, Java script and HTML5, DOM technologies.",
    src: future,
    links: {
      demo: "https://future-vehicle-by-mhassaan.netlify.app/",
      github: "https://github.com/mohamed-hassaan3/Future-Vehicle",
    },
    tech: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "NPM"],
    category: "UI UX",
  },
];

export const speciality: SpecialityProps[] = [
  {
    slug: "development",
    title: "Development",
    icon: CodeXml,
    desc: "Building responsive websites. Providing the users an enriching experience that responds to any device and screen size.",
    img: development,
    item: 1
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    icon: PenTool,
    desc: "Designing user-centric, modern interfaces that shapes how the audience interacts with the product.",
    img: design,
    item: 2
  },
  {
    slug: "deployment",
    title: "Deployment",
    icon: Container,
    desc: "The software development lifecycle that bridges development and user accessibility, ensuring the successful delivery of new software versions or updates.",
    img: deployment,
    item: 3
  },
];
