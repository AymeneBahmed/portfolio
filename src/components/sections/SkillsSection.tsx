import htmlLogo from "@/assets/logos/html.svg";
import cssLogo from "@/assets/logos/css.svg";
import jsLogo from "@/assets/logos/js.svg";
import tsLogo from "@/assets/logos/ts.svg";
import tailwindLogo from "@/assets/logos/tailwind.svg";
import reactLogo from "@/assets/logos/react.svg";
import nextjsLogo from "@/assets/logos/nextjs.svg";
import prismaLogo from "@/assets/logos/prisma.svg";
import gitLogo from "@/assets/logos/git.svg";
import TechnologyCard from "../TechnologyCard";
import { cn } from "@/lib/utils";

export default function SkillsSection() {
  const technologies = [
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
  ] as const;

  return (
    <section
      className="relative flex min-h-dvh flex-col items-center justify-evenly gap-24 py-16"
      id="skills"
    >
      <h1
        className="text-6xl font-bold tracking-wide text-primary"
        style={{ textShadow: "0 0 5px" }}
      >
        Skills
      </h1>

      <div className="grid w-[90%] grid-cols-1 justify-items-center gap-x-10 gap-y-20 sm:w-[90%] sm:grid-cols-2 md:grid-cols-3">
        {technologies.map((technology) => (
          <TechnologyCard
            key={technology.name}
            className="max-w-[23.5rem] text-pretty border-none p-0"
          >
            <TechnologyCard.Figure className="space-y-3">
              {technology.name === "Next.js" ? (
                <div className="relative">
                  <div className="absolute left-0 top-0 size-full scale-90 rounded-full bg-white"></div>
                  <TechnologyCard.Image
                    src={nextjsLogo}
                    alt="next js"
                    className="relative size-[5rem]"
                  />
                </div>
              ) : (
                <TechnologyCard.Image
                  src={technology.logo}
                  alt={technology.name}
                  className={cn(
                    "size-[5rem]",
                    technology.name === "Prisma ORM" && "brightness-[3]",
                  )}
                />
              )}

              <TechnologyCard.Caption>{technology.name}</TechnologyCard.Caption>
            </TechnologyCard.Figure>

            <TechnologyCard.Description>
              {technology.description}
            </TechnologyCard.Description>
          </TechnologyCard>
        ))}
      </div>
    </section>
  );
}
