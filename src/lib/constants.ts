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
import vitestDarkModeLogo from "@/assets/logos/vitest_dark_mode.svg";
import calculatorImg from "@/assets/projects imgs/calculator.png";
import calculatorImg1 from "@/assets/project carousels/calculator/1.png";
import calculatorImg2 from "@/assets/project carousels/calculator/2.png";
import calculatorImg3 from "@/assets/project carousels/calculator/3.png";
import etchASketchImg from "@/assets/projects imgs/etch a sketch.png";
import etchASketchImg1 from "@/assets/project carousels/etch a sketch/1.png";
import etchASketchImg2 from "@/assets/project carousels/etch a sketch/2.png";
import etchASketchImg3 from "@/assets/project carousels/etch a sketch/3.png";
import etchASketchImg4 from "@/assets/project carousels/etch a sketch/4.png";
import formPageImg from "@/assets/projects imgs/form page.png";
import formPageImg1 from "@/assets/project carousels/form page/1.png";
import formPageImg2 from "@/assets/project carousels/form page/2.png";
import formPageImg3 from "@/assets/project carousels/form page/3.png";
import gitTutorialImg from "@/assets/projects imgs/git tutorial.png";
import gitTutorialImg1 from "@/assets/project carousels/git tutorial/1.png";
import gitTutorialImg2 from "@/assets/project carousels/git tutorial/2.png";
import gitTutorialImg3 from "@/assets/project carousels/git tutorial/3.png";
import libraryImg from "@/assets/projects imgs/library.png";
import libraryImg1 from "@/assets/project carousels/library/1.png";
import libraryImg2 from "@/assets/project carousels/library/2.png";
import libraryImg3 from "@/assets/project carousels/library/3.png";
import libraryImg4 from "@/assets/project carousels/library/4.png";
import libraryImg5 from "@/assets/project carousels/library/5.png";
import rockPaperScissorsImg from "@/assets/projects imgs/rock paper scissors.png";
import rockPaperScissorsImg1 from "@/assets/project carousels/rock paper scissors/1.png";
import rockPaperScissorsImg2 from "@/assets/project carousels/rock paper scissors/2.png";
import ticTacToeImg from "@/assets/projects imgs/tic tac toe.png";
import ticTacToeImg1 from "@/assets/project carousels/tic tac toe/1.png";
import ticTacToeImg2 from "@/assets/project carousels/tic tac toe/2.png";
import todoImg from "@/assets/projects imgs/todo.png";
import todoImg1 from "@/assets/project carousels/todo app/1.png";
import todoImg2 from "@/assets/project carousels/todo app/2.png";
import todoImg3 from "@/assets/project carousels/todo app/3.png";
import todoImg4 from "@/assets/project carousels/todo app/4.png";
import todoImg5 from "@/assets/project carousels/todo app/5.png";
import studyScheduleImg from "@/assets/projects imgs/study schedule.png";
import studyScheduleImg1 from "@/assets/project carousels/study schedule/1.png";
import studyScheduleImg2 from "@/assets/project carousels/study schedule/2.png";
import studyScheduleImg3 from "@/assets/project carousels/study schedule/3.png";
import studyScheduleImg4 from "@/assets/project carousels/study schedule/4.png";
import studyScheduleImg5 from "@/assets/project carousels/study schedule/5.png";
import studyScheduleImg6 from "@/assets/project carousels/study schedule/6.png";
import studyScheduleImg7 from "@/assets/project carousels/study schedule/7.png";
import portfolioImg from "@/assets/projects imgs/portfolio.png";
import portfolioImg1 from "@/assets/project carousels/portfolio/1.png";
import portfolioImg2 from "@/assets/project carousels/portfolio/2.png";
import portfolioImg3 from "@/assets/project carousels/portfolio/3.png";
import portfolioImg4 from "@/assets/project carousels/portfolio/4.png";
import portfolioImg5 from "@/assets/project carousels/portfolio/5.png";
import portfolioImg6 from "@/assets/project carousels/portfolio/6.png";
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
    preview: "https://portfolio-iota-five-7oaswokhva.vercel.app/",
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
    title: "study schedule",
    gitLink: "https://github.com/AymeneBahmed/study-schedule",
    preview: "https://study-schedule-tau.vercel.app/",
    description:
      "A tasking app made with login functionality that supports both users with and without accounts using IndexedDB and Dexie.js.",
    img: studyScheduleImg,
    carousel: [
      studyScheduleImg1,
      studyScheduleImg2,
      studyScheduleImg3,
      studyScheduleImg4,
      studyScheduleImg5,
      studyScheduleImg6,
      studyScheduleImg7,
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
    preview: "https://next-todo-fawn-xi.vercel.app/",
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
  {
    title: "etch a sketch",
    gitLink: "https://github.com/AymeneBahmed/etch-a-sketch",
    preview: "https://aymenebahmed.github.io/etch-a-sketch/",
    description:
      "Draw and let your imagination comes to life with this beautiful app!",
    img: etchASketchImg,
    carousel: [
      etchASketchImg1,
      etchASketchImg2,
      etchASketchImg3,
      etchASketchImg4,
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "tic tac toe",
    gitLink: "https://github.com/AymeneBahmed/tic-tac-toe",
    preview: "https://aymenebahmed.github.io/tic-tac-toe/",
    description:
      "A tic tac toe game where you can play against AI or a human player.",
    img: ticTacToeImg,
    carousel: [ticTacToeImg1, ticTacToeImg2],
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "rock paper scissors",
    gitLink: "https://github.com/AymeneBahmed/rock-paper-scissors-game",
    preview: "https://aymenebahmed.github.io/rock-paper-scissors-game/",
    description: "A simple rock paper scissors game.",
    img: rockPaperScissorsImg,
    carousel: [rockPaperScissorsImg1, rockPaperScissorsImg2],
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "calculator",
    gitLink: "https://github.com/AymeneBahmed/calculator",
    preview: "https://aymenebahmed.github.io/calculator/",
    description: "A calculator with basic functionalities.",
    img: calculatorImg,
    carousel: [calculatorImg1, calculatorImg2, calculatorImg3],
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "form page",
    gitLink: "https://github.com/AymeneBahmed/form-page",
    preview: "https://aymenebahmed.github.io/form-page/",
    description: "A beautiful form page with client-side validation.",
    img: formPageImg,
    carousel: [formPageImg1, formPageImg2, formPageImg3],
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "library",
    gitLink: "https://github.com/AymeneBahmed/library",
    preview: "https://aymenebahmed.github.io/library/",
    description: "A library where you can save your favorite books.",
    img: libraryImg,
    carousel: [libraryImg1, libraryImg2, libraryImg3, libraryImg4, libraryImg5],
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "git tutorial",
    gitLink: null,
    preview: "https://aymenebahmed.github.io/GitForSchool/",
    description:
      "A webpage that teaches Git with a beginner-friendly approach.",
    img: gitTutorialImg,
    carousel: [gitTutorialImg1, gitTutorialImg2, gitTutorialImg3],
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export const COLOR_THEMES = [
  "blue",
  "amber",
  "emerald",
  "cyan",
  "fuchsia",
  "green",
  "indigo",
  "purple",
  "caffeine",
  "orange",
  "yellow",
  "red",
  "teal",
  "dark-cyan",
  "dark-sky",
  "dark-purple",
  "dark-neon-green",
  "dark-caffeine",
  "dark-blue",
  "dark-orange",
  "dark-yellow",
  "dark-tomato",
  "dark-fuchsia",
  "dark-indigo",
  "dark-green",
  "dark-teal",
];
