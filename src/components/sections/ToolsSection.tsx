"use client";

import nextjsLogo from "@/assets/logos/nextjs.svg";
import TechnologyCard from "../TechnologyCard";
import { cn } from "@/lib/utils";
import { TECHNOLOGIES } from "@/lib/constants";
import { motion, stagger, Variants } from "motion/react";
import { InteractiveGrid } from "../InteractiveGrid";
import { DotGridPattern } from "../DotGridPattern";

export default function ToolsSection() {
  const containerVariants: Variants = {
    hidden: {},
    animate: {
      transition: {
        delayChildren: stagger(0.15),
      },
    },
  };
  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 150,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "backOut",
      },
    },
  };

  return (
    <section
      className="relative flex min-h-dvh flex-col items-center justify-evenly gap-20 py-8 sm:py-12 lg:min-h-auto"
      id="tools"
    >
      <DotGridPattern />

      {/* Hide for small screens as an optimization */}
      <div className="absolute inset-0 -z-10 hidden motion-safe:not-forced-colors:sm:block motion-safe:not-forced-colors:pointer-fine:block">
        <InteractiveGrid />
      </div>

      <motion.h1
        className="text-primary text-6xl font-bold tracking-wide dark:text-shadow-[0_0_5px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7 }}
      >
        Tools
      </motion.h1>

      {/* Optmize for mobile */}
      <motion.div
        className="-mt-10 mb-5 grid w-full grid-cols-[repeat(auto-fit,minmax(130px,1fr))] gap-7 px-5 sm:hidden"
        initial="hidden"
        whileInView="animate"
        variants={containerVariants}
        viewport={{ once: true, amount: 0.1 }}
      >
        {TECHNOLOGIES.map((technology) => {
          console.log();

          return (
            <motion.div
              key={technology.name}
              className={cn(
                "relative border-2 bg-white py-5 shadow-[-8px_8px_0px] dark:bg-slate-950 dark:shadow-[0_0_10px]",
                technology.name === "HTML" &&
                  "border-[#E44F25] shadow-[#E44F25]",
                technology.name === "CSS" &&
                  "border-[#1572B6] shadow-[#1572B6]",
                technology.name === "JavaScript" &&
                  "border-[#F7DF1E] shadow-[#F7DF1E]",
                technology.name === "TypeScript" &&
                  "border-[#3178C6] shadow-[#3178C6]",
                technology.name === "TailwindCSS" &&
                  "border-[#00FFFF] shadow-[#00FFFF]",
                technology.name === "React.js" &&
                  "border-[#00D8FF] shadow-[#00D8FF]",
                technology.name === "Next.js" &&
                  "border-black shadow-black dark:border-white dark:shadow-white",
                technology.name === "Prisma ORM" &&
                  "border-[#39A6E5] shadow-[#39A6E5]",
                technology.name === "PHP" &&
                  "border-[#6280B6] shadow-[#6280B6]",
                technology.name === "Laravel" &&
                  "border-[#FF2D20] shadow-[#FF2D20]",
                technology.name === "Git" &&
                  "border-[#EE513A] shadow-[#EE513A]",
                technology.name === "Playwright" &&
                  "border-[#1E8C22] shadow-[#1E8C22]",
                technology.name === "Vitest" &&
                  "border-[#13EAA0] shadow-[#13EAA0]",
              )}
              variants={cardVariants}
            >
              <TechnologyCard.Figure className="relative gap-2">
                {technology.name === "Next.js" ? (
                  <div className="relative">
                    <div className="absolute top-0 left-0 size-full scale-90 rounded-full bg-white"></div>
                    <TechnologyCard.Image
                      src={nextjsLogo}
                      alt="next js"
                      className="relative size-13"
                    />
                  </div>
                ) : (
                  <>
                    {/* If dark mode logo exists, show it ONLY in dark mode */}
                    {technology.darkModeLogo && (
                      <TechnologyCard.Image
                        src={technology.darkModeLogo}
                        alt={technology.name}
                        className={cn(
                          "hidden size-13 dark:block",
                          technology.name === "Prisma ORM" && "brightness-[3]",
                          technology.name === "Vitest" && "scale-150",
                        )}
                      />
                    )}

                    {/* Show normal logo ALWAYS, unless dark mode logo exists AND dark mode is active */}
                    <TechnologyCard.Image
                      src={technology.logo}
                      alt={technology.name}
                      className={cn(
                        "size-13",
                        technology.darkModeLogo && "dark:hidden",
                        technology.name === "Prisma ORM" && "brightness-[3]",
                        technology.name === "Vitest" && "scale-150",
                      )}
                    />
                  </>
                )}

                <TechnologyCard.Caption className="px-2 text-center text-[1rem] wrap-break-word hyphens-manual">
                  {technology.name === "TailwindCSS" ? (
                    <>Tailwind&shy;CSS</>
                  ) : (
                    technology.name
                  )}
                </TechnologyCard.Caption>
              </TechnologyCard.Figure>
            </motion.div>
          );
        })}
      </motion.div>

      {/* For mid-to-large screens */}
      <motion.div
        className="-mt-10 hidden w-[90%] max-w-7xl grid-cols-1 justify-items-center gap-x-10 gap-y-15 sm:grid sm:grid-cols-2 min-[60.625rem]:grid-cols-3 min-[120.5rem]:grid-cols-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="animate"
        viewport={{ once: true, amount: 0.1 }}
      >
        {TECHNOLOGIES.map((technology) => (
          <motion.div
            className="h-full w-full max-w-94"
            key={technology.name}
            variants={cardVariants}
          >
            <TechnologyCard className="h-full w-full text-pretty">
              <TechnologyCard.Figure className="space-y-3">
                {technology.name === "Next.js" ? (
                  <div className="relative">
                    <div className="absolute top-0 left-0 size-full scale-90 rounded-full bg-white"></div>
                    <TechnologyCard.Image
                      src={nextjsLogo}
                      alt="next js"
                      className="relative size-20"
                    />
                  </div>
                ) : (
                  <>
                    {technology.darkModeLogo && (
                      <TechnologyCard.Image
                        src={technology.darkModeLogo}
                        alt={technology.name}
                        className={cn(
                          "hidden size-20 dark:block",
                          technology.name === "PHP" && "scale-125",
                          technology.name === "Prisma ORM" && "brightness-[3]",
                          technology.name === "Vitest" && "h-28 scale-175",
                        )}
                      />
                    )}
                    <TechnologyCard.Image
                      src={technology.logo}
                      alt={technology.name}
                      className={cn(
                        "size-20",
                        technology.darkModeLogo && "dark:hidden",
                        technology.name === "PHP" && "scale-125",
                        technology.name === "Prisma ORM" && "brightness-[3]",
                        technology.name === "Vitest" && "h-28 scale-175",
                      )}
                    />
                  </>
                )}

                <TechnologyCard.Caption>
                  {technology.name}
                </TechnologyCard.Caption>
              </TechnologyCard.Figure>

              <TechnologyCard.Description className="mt-5">
                {technology.description}
              </TechnologyCard.Description>
            </TechnologyCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
