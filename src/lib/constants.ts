import cssLogo from "@/assets/logos/css.svg";
import gitLogo from "@/assets/logos/git.svg";
import htmlLogo from "@/assets/logos/html.svg";
import jsLogo from "@/assets/logos/js.svg";
import nextjsLogo from "@/assets/logos/nextjs.svg";
import prismaLogo from "@/assets/logos/prisma.svg";
import reactLogo from "@/assets/logos/react.svg";
import tailwindLogo from "@/assets/logos/tailwind.svg";
import tsLogo from "@/assets/logos/ts.svg";
import phpLogo from "@/assets/logos/php.svg";
import laravelLogo from "@/assets/logos/laravel.svg";
import playwrightLogo from "@/assets/logos/playwright.svg";
import vitestLogo from "@/assets/logos/vitest.svg";
import vitestDarkModeLogo from "@/assets/logos/vitest-dark-mode.svg";
import todoImg from "@/assets/project-thumbnails/todo-app.png";
import todoImg1 from "@/assets/project-carousels/todo-app/1.png";
import todoImg2 from "@/assets/project-carousels/todo-app/2.png";
import todoImg3 from "@/assets/project-carousels/todo-app/3.png";
import todoImg4 from "@/assets/project-carousels/todo-app/4.png";
import todoImg5 from "@/assets/project-carousels/todo-app/5.png";
import steduleImg from "@/assets/project-thumbnails/stedule.png";
import steduleImg1 from "@/assets/project-carousels/stedule/1.png";
import steduleImg2 from "@/assets/project-carousels/stedule/2.png";
import steduleImg3 from "@/assets/project-carousels/stedule/3.png";
import steduleImg4 from "@/assets/project-carousels/stedule/4.png";
import steduleImg5 from "@/assets/project-carousels/stedule/5.png";
import steduleImg6 from "@/assets/project-carousels/stedule/6.png";
import steduleImg7 from "@/assets/project-carousels/stedule/7.png";
import portfolioImg from "@/assets/project-thumbnails/portfolio.png";
import portfolioImg1 from "@/assets/project-carousels/portfolio/1.png";
import portfolioImg2 from "@/assets/project-carousels/portfolio/2.png";
import portfolioImg3 from "@/assets/project-carousels/portfolio/3.png";
import portfolioImg4 from "@/assets/project-carousels/portfolio/4.png";
import portfolioImg5 from "@/assets/project-carousels/portfolio/5.png";
import portfolioImg6 from "@/assets/project-carousels/portfolio/6.png";
import researchLaboratoriesImg from "@/assets/project-thumbnails/research-laboratories.png";
import researchLaboratoriesImg1 from "@/assets/project-carousels/research-laboratories/1.png";
import researchLaboratoriesImg2 from "@/assets/project-carousels/research-laboratories/2.png";
import researchLaboratoriesImg3 from "@/assets/project-carousels/research-laboratories/3.png";
import researchLaboratoriesImg4 from "@/assets/project-carousels/research-laboratories/4.png";
import researchLaboratoriesImg5 from "@/assets/project-carousels/research-laboratories/5.png";
import researchLaboratoriesImg6 from "@/assets/project-carousels/research-laboratories/6.png";
import researchLaboratoriesImg7 from "@/assets/project-carousels/research-laboratories/7.png";
import researchLaboratoriesImg8 from "@/assets/project-carousels/research-laboratories/8.png";
import researchLaboratoriesImg9 from "@/assets/project-carousels/research-laboratories/9.png";
import researchLaboratoriesImg10 from "@/assets/project-carousels/research-laboratories/10.png";
import researchLaboratoriesImg11 from "@/assets/project-carousels/research-laboratories/11.png";
import researchLaboratoriesImg12 from "@/assets/project-carousels/research-laboratories/12.png";
import researchLaboratoriesImg13 from "@/assets/project-carousels/research-laboratories/13.png";
import researchLaboratoriesImg14 from "@/assets/project-carousels/research-laboratories/14.png";
import researchLaboratoriesImg15 from "@/assets/project-carousels/research-laboratories/15.png";
import researchLaboratoriesImg16 from "@/assets/project-carousels/research-laboratories/16.png";
import researchLaboratoriesImg17 from "@/assets/project-carousels/research-laboratories/17.png";
import researchLaboratoriesImg18 from "@/assets/project-carousels/research-laboratories/18.png";
import researchLaboratoriesImg19 from "@/assets/project-carousels/research-laboratories/19.png";
import researchLaboratoriesImg20 from "@/assets/project-carousels/research-laboratories/20.png";
import { Project, Technology } from "@/types";

export const TECHNOLOGIES: Technology[] = [
  {
    logo: htmlLogo,
    name: "HTML",
    description:
      "A markup language used to define content and structure of a web page.",
  },
  {
    logo: cssLogo,
    name: "CSS",
    description: "A language used to style websites and make them beautiful.",
  },
  {
    logo: jsLogo,
    name: "JavaScript",
    description:
      "A scripting language used to add interactivity to a website improving the user experience.",
  },
  {
    logo: tsLogo,
    name: "TypeScript",
    description:
      "A subset language of JavaScript that adds type safety to the language which improves developer experience.",
  },
  {
    logo: tailwindLogo,
    name: "TailwindCSS",
    description:
      "A CSS utility-first framework for building websites without ever leaving HTML.",
  },
  {
    logo: reactLogo,
    name: "React.js",
    description:
      "A JavaScript library used to create complex user interfaces by combining small components.",
  },
  {
    logo: nextjsLogo,
    name: "Next.js",
    description:
      "A powerful React framework that adds SEO and SSR to websites made with React.js.",
  },
  {
    logo: prismaLogo,
    name: "Prisma ORM",
    description:
      "A high-level tool used to communicate with databases using JavaScript/TypeScript with a great developer experience in mind.",
  },
  {
    logo: phpLogo,
    name: "PHP",
    description:
      "A high-level scripting language used to create server-side applications.",
  },
  {
    logo: laravelLogo,
    name: "Laravel",
    description:
      "A PHP framework with elegant and expressive syntax that facilitates backend development.",
  },
  {
    logo: gitLogo,
    name: "Git",
    description:
      "A version control system used to track the progress of a project making it easy to collaborate between teams.",
  },
  {
    logo: playwrightLogo,
    name: "Playwright",
    description:
      "An end-to-end (E2E) testing framework with a simple and powerful API to write complex application tests.",
  },
  {
    logo: vitestLogo,
    darkModeLogo: vitestDarkModeLogo,
    name: "Vitest",
    description:
      "A blazingly fast testing framework that makes it easy to write unit and integration tests with a straightforward API.",
  },
];

export const PROJECTS: Project[] = [
  {
    title: "portfolio",
    gitLink: "https://github.com/AymeneBahmed/portfolio",
    preview: "https://aymene-bahmed.vercel.app",
    description:
      "My portfolio website showcasing my skills and projects with a beautiful, accessible, and modern UI.",
    img: portfolioImg,
    carousel: [
      portfolioImg1,
      portfolioImg2,
      portfolioImg3,
      portfolioImg4,
      portfolioImg5,
      portfolioImg6,
    ],
    technologies: ["HTML", "CSS", "TypeScript", "TailwindCSS", "Next.js"],
  },
  {
    title: "research laboratories",
    gitLink: "https://github.com/AymeneBahmed/research-laboratories",
    preview: "https://research-laboratories.42web.io/",
    description:
      "Computer Science Bachelor's capstone project which is a web app that helps the university to manage laboratories through a clean, modern interface.",
    img: researchLaboratoriesImg,
    carousel: [
      researchLaboratoriesImg1,
      researchLaboratoriesImg2,
      researchLaboratoriesImg3,
      researchLaboratoriesImg4,
      researchLaboratoriesImg5,
      researchLaboratoriesImg6,
      researchLaboratoriesImg7,
      researchLaboratoriesImg8,
      researchLaboratoriesImg9,
      researchLaboratoriesImg10,
      researchLaboratoriesImg11,
      researchLaboratoriesImg12,
      researchLaboratoriesImg13,
      researchLaboratoriesImg14,
      researchLaboratoriesImg15,
      researchLaboratoriesImg16,
      researchLaboratoriesImg17,
      researchLaboratoriesImg18,
      researchLaboratoriesImg19,
      researchLaboratoriesImg20,
    ],
    technologies: [
      "HTML",
      "CSS",
      "TypeScript",
      "TailwindCSS",
      "React.js",
      "Laravel",
    ],
  },
  {
    title: "stedule",
    gitLink: "https://github.com/AymeneBahmed/stedule",
    preview: "https://stedule.vercel.app/",
    description:
      "A tasking app made with login functionality that supports both users with and without accounts using IndexedDB and Dexie.js.",
    img: steduleImg,
    carousel: [
      steduleImg1,
      steduleImg2,
      steduleImg3,
      steduleImg4,
      steduleImg5,
      steduleImg6,
      steduleImg7,
    ],
    technologies: [
      "HTML",
      "CSS",
      "TypeScript",
      "TailwindCSS",
      "Next.js",
      "Prisma ORM",
    ],
  },
  {
    title: "todo app",
    gitLink: "https://github.com/AymeneBahmed/next-todo",
    preview: "https://next-todo-app-five-lac.vercel.app/",
    description:
      "A simple todo app made with login functionality that stores your todos in a postgreSQL database.",
    img: todoImg,
    carousel: [todoImg1, todoImg2, todoImg3, todoImg4, todoImg5],
    technologies: [
      "HTML",
      "CSS",
      "TypeScript",
      "TailwindCSS",
      "Next.js",
      "Prisma ORM",
    ],
  },
];

export const COLOR_THEMES = [
  // --- Light Themes (Sorted by OKLCH Hue) ---
  "red",
  "orange",
  "amber",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",

  // --- Dark Themes (Sorted by OKLCH Hue) ---
  "dark-tomato",
  "dark-orange",
  "dark-caffeine",
  "dark-yellow",
  "dark-neon-green",
  "dark-green",
  "dark-teal",
  "dark-cyan",
  "dark-sky",
  "dark-blue",
  "dark-indigo",
  "dark-purple",
  "dark-fuchsia",
];
