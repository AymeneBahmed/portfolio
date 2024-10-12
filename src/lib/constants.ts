import cssLogo from "@/assets/logos/css.svg";
import gitLogo from "@/assets/logos/git.svg";
import htmlLogo from "@/assets/logos/html.svg";
import jsLogo from "@/assets/logos/js.svg";
import nextjsLogo from "@/assets/logos/nextjs.svg";
import prismaLogo from "@/assets/logos/prisma.svg";
import reactLogo from "@/assets/logos/react.svg";
import tailwindLogo from "@/assets/logos/tailwind.svg";
import tsLogo from "@/assets/logos/ts.svg";
import calculatorImg from "@/assets/projects imgs/calculator.png";
import etchASketchImg from "@/assets/projects imgs/etch a sketch.png";
import formPageImg from "@/assets/projects imgs/form page.png";
import gitLearnImg from "@/assets/projects imgs/git learn.png";
import libraryImg from "@/assets/projects imgs/library.png";
import rockPaperScissorsImg from "@/assets/projects imgs/rock paper scissors.png";
import ticTacToeImg from "@/assets/projects imgs/tic tac toe.png";
import todoImg from "@/assets/projects imgs/todo.png";
import tributePageImg from "@/assets/projects imgs/tribute page.png";
import { Project, Technology } from "@/types";

export const projects: Project[] = [
  {
    gitLink: "https://github.com/CoolNewsGuy/Tribute-page",
    preview: "https://coolnewsguy.github.io/Tribute-page/",
    img: tributePageImg,
    technologies: ["HTML", "CSS"],
  },
  {
    gitLink: "https://github.com/CoolNewsGuy/rock-paper-scissors-game",
    preview: "https://coolnewsguy.github.io/rock-paper-scissors-game/",
    img: rockPaperScissorsImg,
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    gitLink: "https://github.com/CoolNewsGuy/calculator",
    preview: "https://coolnewsguy.github.io/calculator/",
    img: calculatorImg,
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    gitLink: "https://github.com/CoolNewsGuy/form-page",
    preview: "https://coolnewsguy.github.io/form-page/",
    img: formPageImg,
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    gitLink: "https://github.com/CoolNewsGuy/tic-tac-toe",
    preview: "https://coolnewsguy.github.io/tic-tac-toe/",
    img: ticTacToeImg,
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    gitLink: "https://github.com/CoolNewsGuy/library",
    preview: "https://coolnewsguy.github.io/library/",
    img: libraryImg,
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    gitLink: "https://github.com/CoolNewsGuy/etch-a-sketch",
    preview: "https://coolnewsguy.github.io/etch-a-sketch/",
    img: etchASketchImg,
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    gitLink: null,
    preview: "https://coolnewsguy.github.io/GitForSchool/",
    img: gitLearnImg,
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    gitLink: "https://github.com/CoolNewsGuy/next-todo",
    preview: "https://next-todo-fawn-xi.vercel.app/",
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
    logo: gitLogo,
    name: "Git",
    description:
      "A version control system used to track the progress of a project making it easy to collaborate between teams.",
  },
];
