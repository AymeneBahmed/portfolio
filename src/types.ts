import { StaticImport } from "next/dist/shared/lib/get-img-props";

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
  logo: StaticImport | string;
  name: TechnologyName;
  description: string;
}

export interface Project {
  title: string;
  gitLink: string | null;
  preview: string;
  img: StaticImport | string;
  description: string;
  technologies: Exclude<TechnologyName, "Git">[];
}
