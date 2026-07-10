import { StaticImageData } from "next/image";

export type TechnologyName =
  | "HTML"
  | "CSS"
  | "JavaScript"
  | "TypeScript"
  | "TailwindCSS"
  | "React.js"
  | "Next.js"
  | "Prisma ORM"
  | "PHP"
  | "Laravel"
  | "Git"
  | "Playwright"
  | "Vitest";

export interface Technology {
  logo: StaticImageData | string;
  name: TechnologyName;
  description: string;
}

export interface Project {
  title: string;
  gitLink: string | null;
  preview: string;
  img: StaticImageData | string;
  carousel: StaticImageData[];
  description: string;
  technologies: Exclude<TechnologyName, "Git">[];
}
