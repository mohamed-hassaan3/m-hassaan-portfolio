import {
  DesignProcessProps,
  ExperiencesProps,
  Project,
  Skill,
  SpecialityProps,
} from "@/types/data";
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
  PencilRuler,
  ShieldCheck,
  PencilLine,
  BrainCircuit,
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

import UPWORK from "../../public/images/experience/upwork.webp";
import SELFEMPLOYE from "../../public/images/experience/selfEmployed.webp";
import SELFEMPLOYELEAD from "../../public/images/experience/selfEmployedLead.webp";
import PRD from "../../public/images/experience/prd.webp";

import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiPrisma,
  SiTailwindcss,
  SiCss3,
  SiHtml5,
  SiNodedotjs,
  SiPostgresql,
  SiMysql,
  SiDocker,
  SiAmazon,
  SiVercel,
  SiFirebase,
  SiSupabase,
  SiGraphql,
  SiApollographql,
  SiStrapi,
  SiContentful,
  SiSanity,
  SiGithubactions,
  SiAdobexd,
  SiSketch,
  SiJest,
  SiCypress,
  SiGit,
  SiBitbucket,
  SiSass,
  SiStyledcomponents,
  SiMui,
  SiBootstrap,
  SiWebpack,
  SiVite,
  SiBabel,
  SiEslint,
  SiPrettier,
  SiPython,
  SiPostman,
} from "react-icons/si";

export const skills: Skill[] = [
  {
    id: "javascript",
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
  },
  {
    id: "react",
    name: "React",
    icon: SiReact,
    color: "#61DAFB",
  },
  {
    id: "nextjs",
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#000000",
  },
  {
    id: "prisma",
    name: "Prisma",
    icon: SiPrisma,
    color: "#2D3748",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#06B6D4",
  },
  {
    id: "css",
    name: "CSS",
    icon: SiCss3,
    color: "#1572B6",
  },
  {
    id: "html",
    name: "HTML",
    icon: SiHtml5,
    color: "#E34F26",
  },
  {
    id: "nodejs",
    name: "Node.js",
    icon: SiNodedotjs,
    color: "#339933",
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "#336791",
  },
  {
    id: "mysql",
    name: "MySQL",
    icon: SiMysql,
    color: "#4479A1",
  },
  {
    id: "docker",
    name: "Docker",
    icon: SiDocker,
    color: "#2496ED",
  },
  {
    id: "aws",
    name: "AWS",
    icon: SiAmazon,
    color: "#FF9900",
  },
  {
    id: "vercel",
    name: "Vercel",
    icon: SiVercel,
    color: "#000000",
  },
  {
    id: "firebase",
    name: "Firebase",
    icon: SiFirebase,
    color: "#FFCA28",
  },
  {
    id: "supabase",
    name: "Supabase",
    icon: SiSupabase,
    color: "#3ECF8E",
  },
  {
    id: "graphql",
    name: "GraphQL",
    icon: SiGraphql,
    color: "#E10098",
  },
  {
    id: "apollo",
    name: "Apollo GraphQL",
    icon: SiApollographql,
    color: "#311C87",
  },
  {
    id: "strapi",
    name: "Strapi CMS",
    icon: SiStrapi,
    color: "#2F2E8B",
  },
  {
    id: "contentful",
    name: "Contentful",
    icon: SiContentful,
    color: "#2478CC",
  },
  {
    id: "sanity",
    name: "Sanity CMS",
    icon: SiSanity,
    color: "#F03E2F",
  },
  {
    id: "cicd",
    name: "CI/CD",
    icon: GitBranch,
    color: "#10B981",
  },
  {
    id: "github-actions",
    name: "GitHub Actions",
    icon: SiGithubactions,
    color: "#2088FF",
  },
  {
    id: "figma",
    name: "Figma",
    icon: Figma,
    color: "#F24E1E",
  },
  {
    id: "adobe-xd",
    name: "Adobe XD",
    icon: SiAdobexd,
    color: "#FF61F6",
  },
  {
    id: "sketch",
    name: "Sketch",
    icon: SiSketch,
    color: "#F7B500",
  },
  {
    id: "jest",
    name: "Jest",
    icon: SiJest,
    color: "#C21325",
  },
  {
    id: "cypress",
    name: "Cypress",
    icon: SiCypress,
    color: "#17202C",
  },
  {
    id: "git",
    name: "Git",
    icon: SiGit,
    color: "#F05032",
  },
  {
    id: "github",
    name: "GitHub",
    icon: Github,
    color: "#181717",
  },
  {
    id: "bitbucket",
    name: "Bitbucket",
    icon: SiBitbucket,
    color: "#0052CC",
  },
  {
    id: "sass",
    name: "SASS",
    icon: SiSass,
    color: "#CC6699",
  },
  {
    id: "styled-components",
    name: "Styled Components",
    icon: SiStyledcomponents,
    color: "#DB7093",
  },
  {
    id: "materialui",
    name: "Material UI",
    icon: SiMui,
    color: "#007FFF",
  },
  {
    id: "bootstrap",
    name: "Bootstrap",
    icon: SiBootstrap,
    color: "#7952B3",
  },
  {
    id: "webpack",
    name: "Webpack",
    icon: SiWebpack,
    color: "#8DD6F9",
  },
  {
    id: "vite",
    name: "Vite",
    icon: SiVite,
    color: "#646CFF",
  },
  {
    id: "babel",
    name: "Babel",
    icon: SiBabel,
    color: "#F9DC3E",
  },
  {
    id: "eslint",
    name: "ESLint",
    icon: SiEslint,
    color: "#4B32C3",
  },
  {
    id: "prettier",
    name: "Prettier",
    icon: SiPrettier,
    color: "#F7B93E",
  },
  {
    id: "python",
    name: "Python",
    icon: SiPython,
    color: "#3776AB",
  },
  {
    id: "cms",
    name: "CMS",
    icon: SiContentful,
    color: "#2478CC",
  },
  {
    id: "api",
    name: "REST API",
    icon: SiPostman,
    color: "#FF6C37",
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
    item: 1,
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    icon: PenTool,
    desc: "Designing user-centric, modern interfaces that shapes how the audience interacts with the product.",
    img: design,
    item: 2,
  },
  {
    slug: "deployment",
    title: "Deployment",
    icon: Container,
    desc: "The software development lifecycle that bridges development and user accessibility, ensuring the successful delivery of new software versions or updates.",
    img: deployment,
    item: 3,
  },
];

export const experiences: ExperiencesProps[] = [
  {
    item: 1,
    slug: "frontend-engineer",
    profession: "Frontend Engineer",
    dates: "Mar 2024 - Present",
    logo: UPWORK,
    name: "Upwork - Freelance",
    details: [
      "Integrated REST APIs and Prisma ORM for efficient data flows and full-stack connectivity.",
      "Managed CI/CD pipelines using Webpack, Docker, and GitHub Actions for automated deployment.",
      "Migrated legacy codebases to modern React/Next.js architectures, improving scalability and performance.",
      "Authored internal technical documentation and contributed to onboarding strategies, reducing ramp-up time by 30%.",
      "Translated business requirements into modular and reusable UI components.",
    ],
  },
  {
    item: 2,
    slug: "web-engineer",
    profession: "Web Engineer",
    dates: "May 2024 - Dec 2024",
    logo: SELFEMPLOYE,
    name: "Self Employed",
    details: [
      "Built responsive, SEO-optimized full-stack web apps using Next.js, Prisma, and TypeScript.",
      "Designed robust authentication flows and managed real-time data with Supabase + PostgreSQL.",
      "Integrated Sanity CMS for scalable content delivery and streamlined editorial workflows.",
      "Implemented CI/CD and Git-based version control for rapid iteration and clean deployment cycles.",
    ],
  },
  {
    item: 3,
    slug: "web-developer",
    profession: "Web Developer",
    dates: "May 2023 - Apr 2024",
    logo: PRD,
    name: "PRD oil&gas construction",
    details: [
      "Boosted organic traffic by 20% through structured data markup and on-page SEO improvements.",
      "Leveraged Service Workers and caching strategies to reduce server load and enhance performance.",
      "Elevated test coverage to 90% using automated testing pipelines, improving release reliability.",
      "Participated in peer code reviews and dev QA sessions to enforce code quality and reduce regressions.",
    ],
  },
  {
    item: 4,
    slug: "frontend-developer",
    profession: "Frontend Developer",
    dates: "Sep 2021 - Apr 2023",
    logo: SELFEMPLOYELEAD,
    name: "Upwork - Freelance",
    details: [
      "Developed mobile-responsive interfaces resulting in a 12% lift in conversion.",
      "Debugged critical issues under 24 hours, maintaining SLA uptime across high-traffic applications.",
      "Assisted in codebase modernization and integrated i18n/l10n support for multilingual platforms.",
    ],
  },
];

export const designProcess: DesignProcessProps[] = [
  {
    id: "01",
    title: "Strategize",
    desc: "To create something awesome, one must first talk about the details. Planning is essential.",
    icon: BrainCircuit,
    md: "1/1/2/7",
    xl: "1/1/2/5"
  },
  {
    id: "02",
    title: "Wireframe",
    desc: "After hashing out the details of the website, it's easy to throw the ideas onto pen & paper.",
    icon: PencilLine,
    md: "1/7/2/13",
    xl: "2/1/3/5"
  },
  {
    id: "03",
    title: "Design",
    desc: "The most fun part of all - adding pizzaz to the wirefreames and bring it to life.",
    icon: PencilRuler,
    md: "2/1/3/7",
    xl: "1/5/3/8"
  },
  {
    id: "04",
    title: "Development",
    desc: "The design may be final but it needs to be functional and practical. Development is key.",
    icon: CodeXml,
    md: "2/7/3/13",
    xl: "1/8/2/13"
  },
  {
    id: "05",
    title: "Quality Assurance",
    desc: "Website load times, SEO, file optimization, etc., weigh in to the quality of the site.",
    icon: ShieldCheck,
    md: "3/1/4/13",
    xl: "2/8/3/13"
  },
];
