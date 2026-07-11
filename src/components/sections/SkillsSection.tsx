"use client";

import nextjsLogo from "@/assets/logos/nextjs.svg";
import TechnologyCard from "../TechnologyCard";
import { cn } from "@/lib/utils";
import { TECHNOLOGIES } from "@/lib/constants";
import { motion, Variants } from "framer-motion";
import { InteractiveGrid } from "../InteractiveGrid";

export default function SkillsSection() {
  // Animation variants for the grid container to orchestrate the stagger
  const containerVariants: Variants = {
    hidden: {},
    animate: {
      transition: {
        staggerChildren: 0.15,
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
      className="relative flex min-h-dvh flex-col items-center justify-evenly gap-24 py-16"
      id="skills"
    >
      <InteractiveGrid />
      <motion.h1
        className="text-primary text-6xl font-bold tracking-wide"
        style={{ textShadow: "0 0 5px" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7 }}
      >
        Skills
      </motion.h1>

      <motion.div
        className="grid w-[90%] grid-cols-1 justify-items-center gap-x-10 gap-y-20 sm:w-[90%] sm:grid-cols-2 md:grid-cols-3"
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
                  <TechnologyCard.Image
                    src={technology.logo}
                    alt={technology.name}
                    className={cn(
                      "size-20",
                      technology.name === "PHP" && "scale-125",
                      technology.name === "Prisma ORM" && "brightness-[3]",
                      technology.name === "Vitest" && "h-28 scale-175",
                    )}
                  />
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
