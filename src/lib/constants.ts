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
import calculatorImg from "@/assets/projects imgs/calculator.png";
import etchASketchImg from "@/assets/projects imgs/etch a sketch.png";
import formPageImg from "@/assets/projects imgs/form page.png";
import gitLearnImg from "@/assets/projects imgs/git learn.png";
import libraryImg from "@/assets/projects imgs/library.png";
import rockPaperScissorsImg from "@/assets/projects imgs/rock paper scissors.png";
import ticTacToeImg from "@/assets/projects imgs/tic tac toe.png";
import todoImg from "@/assets/projects imgs/todo.png";
import tributePageImg from "@/assets/projects imgs/tribute page.png";
import studyScheduleImg from "@/assets/projects imgs/study schedule.png";
import { Project, Technology } from "@/types";

export const projects: Project[] = [
  {
    title: "tribute page",
    gitLink: "https://github.com/AymeneBahmed/Tribute-page",
    preview: "https://aymenebahmed.github.io/Tribute-page/",
    description:
      "A simple page giving a brief about Dr. Norman Borlaug, the man who saved a billion lives!",
    img: tributePageImg,
    technologies: ["HTML", "CSS"],
  },
  {
    title: "rock paper scissors",
    gitLink: "https://github.com/AymeneBahmed/rock-paper-scissors-game",
    preview: "https://aymenebahmed.github.io/rock-paper-scissors-game/",
    description: "A simple rock paper scissors game.",
    img: rockPaperScissorsImg,
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "calculator",
    gitLink: "https://github.com/AymeneBahmed/calculator",
    preview: "https://aymenebahmed.github.io/calculator/",
    description: "A calculator with basic functionalities.",
    img: calculatorImg,
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "form page",
    gitLink: "https://github.com/AymeneBahmed/form-page",
    preview: "https://aymenebahmed.github.io/form-page/",
    description: "A beautiful form page with client-side validation.",
    img: formPageImg,
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "tic tac toe",
    gitLink: "https://github.com/AymeneBahmed/tic-tac-toe",
    preview: "https://aymenebahmed.github.io/tic-tac-toe/",
    description:
      "A tic tac toe game where you can play against AI or a human player.",
    img: ticTacToeImg,
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "library",
    gitLink: "https://github.com/AymeneBahmed/library",
    preview: "https://aymenebahmed.github.io/library/",
    description: "A library where you can save your favorite books.",
    img: libraryImg,
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "etch a sketch",
    gitLink: "https://github.com/AymeneBahmed/etch-a-sketch",
    preview: "https://aymenebahmed.github.io/etch-a-sketch/",
    description:
      "Draw and let your imagination comes to life with this beautiful app!",
    img: etchASketchImg,
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "git tutorial",
    gitLink: null,
    preview: "https://aymenebahmed.github.io/GitForSchool/",
    description:
      "A webpage that teaches Git with a beginner-friendly approach.",
    img: gitLearnImg,
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "todo app",
    gitLink: "https://github.com/AymeneBahmed/next-todo",
    preview: "https://next-todo-fawn-xi.vercel.app/",
    description:
      "A simple todo app made with login functionality that stores your todos in a postgreSQL database.",
    img: todoImg,
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
    title: "study schedule",
    gitLink: "https://github.com/AymeneBahmed/study-schedule",
    preview: "https://study-schedule-tau.vercel.app/",
    description:
      "A tasking app made with login functionality that supports both users with and without accounts using IndexedDB and Dexie.js.",
    img: studyScheduleImg,
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

export const technologies: Technology[] = [
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
];
