"use client";

import nextjsLogo from "@/assets/logos/nextjs.svg";
import TechnologyCard from "../TechnologyCard";
import { cn } from "@/lib/utils";
import { technologies } from "@/lib/constants";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".skills-heading", {
        opacity: 0,
        duration: 0.7,
        scrollTrigger: {
          trigger: ".skill-cards-container",
          start: "top 90%",
        },
      });

      gsap.from(".skill-card-wrapper", {
        stagger: 0.3,
        opacity: 0,
        y: 150,
        duration: 0.5,
        ease: "back.out",
        scrollTrigger: {
          trigger: ".skill-cards-container",
          start: "top 80%",
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      className="relative flex min-h-dvh flex-col items-center justify-evenly gap-24 py-16"
      id="skills"
      ref={sectionRef}
    >
      <div
        className="absolute inset-0 -z-10 opacity-[0.15]"
        style={{
          backgroundImage: `
          radial-gradient(circle at 10px 10px, currentColor 1px, transparent 0),
          radial-gradient(circle at 30px 30px, currentColor 1px, transparent 0)
        `,
          backgroundSize: "40px 40px",
          backgroundPosition: "0 0, 20px 20px",
        }}
      />

      <h1
        className="skills-heading text-primary text-6xl font-bold tracking-wide"
        style={{ textShadow: "0 0 5px" }}
      >
        Skills
      </h1>

      <div className="skill-cards-container grid w-[90%] grid-cols-1 justify-items-center gap-x-10 gap-y-20 sm:w-[90%] sm:grid-cols-2 md:grid-cols-3">
        {technologies.map((technology) => (
          <div className="skill-card-wrapper max-w-94" key={technology.name}>
            <TechnologyCard className="h-full w-full text-pretty">
              <TechnologyCard.Figure className="space-y-3">
                {/* This condition was added because the "N" in is transparent in the original svg */}
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
          </div>
        ))}
      </div>
    </section>
  );
}
