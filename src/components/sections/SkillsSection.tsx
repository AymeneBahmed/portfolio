import nextjsLogo from "@/assets/logos/nextjs.svg";
import TechnologyCard from "../TechnologyCard";
import { cn } from "@/lib/utils";
import { technologies } from "@/lib/constants";

export default function SkillsSection() {
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
