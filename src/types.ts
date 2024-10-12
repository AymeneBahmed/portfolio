export type TechnologyName =
  | "HTML"
  | "CSS"
  | "JavaScript"
  | "TypeScript"
  | "TailwindCSS"
  | "React.js"
  | "Next.js"
  | "Prisma ORM"
  | "Git";

export interface Project {
  gitLink: string | null;
  preview: string;
  technologies: Exclude<TechnologyName, "Git">[];
}
