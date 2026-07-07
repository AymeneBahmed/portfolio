"use client";

import { projects, technologies } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

gsap.registerPlugin(useGSAP);

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".projects-heading", {
        opacity: 0,
        duration: 0.7,
        scrollTrigger: {
          trigger: ".project-cards-container",
          start: "top 90%",
        },
      });

      gsap.from(".project-card-wrapper", {
        stagger: 0.3,
        opacity: 0,
        scale: 0,
        duration: 0.5,
        ease: "back.out",
        scrollTrigger: {
          trigger: ".project-cards-container",
          start: "top 80%",
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      className="bg-muted/40 relative flex min-h-dvh flex-col items-center justify-evenly gap-24 py-16"
      id="projects"
      ref={sectionRef}
    >
      <h1
        className="projects-heading text-primary text-6xl font-bold tracking-wide"
        style={{ textShadow: "0 0 5px" }}
      >
        Projects
      </h1>

      <div className="project-cards-container grid w-[90%] grid-cols-1 justify-items-center gap-x-10 gap-y-20 sm:w-[90%] sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.preview}
            className="project-card-wrapper max-w-94 overflow-hidden p-[3px]"
          >
            {/* Sharp Spinning Border Texture */}
            <div className="animate-gpu-spin absolute top-1/2 left-1/2 -z-1 aspect-square min-h-[170%] min-w-[170%] -translate-x-1/2 -translate-y-1/2 bg-conic-[from_0deg_in_oklab,hsl(180,100%,50%)_0deg_10deg,var(--color-blue-500)_30deg_40deg,var(--color-purple-300)_50deg_60deg,transparent_70deg_180deg,hsl(180,100%,50%)_180deg_190deg,var(--color-blue-500)_210deg_220deg,var(--color-purple-300)_230deg_240deg,transparent_250deg] blur-xl" />

            <div className="bg-muted relative z-1 h-full overflow-hidden border">
              <Image src={project.img} alt={project.title} />
              <div className="p-3">
                <div>
                  <div>
                    <div className="flex justify-between">
                      <h2 className="text-xl font-semibold capitalize">
                        {project.title}
                      </h2>
                      <div className="text-primary flex gap-2 *:transition-transform *:hover:scale-125">
                        <Link
                          href={project.preview}
                          target="_blank"
                          title="Preview"
                        >
                          <FiExternalLink size={22} />
                        </Link>
                        {project.gitLink && (
                          <Link
                            href={project.gitLink}
                            target="_blank"
                            title="Github repo"
                          >
                            <FaGithub size={22} />
                          </Link>
                        )}
                      </div>
                    </div>
                    {/* Technologies */}
                    <div className="flex gap-1">
                      {project.technologies.map((technoName, i) =>
                        technoName === "Next.js" ? (
                          <div className="relative" key={i}>
                            <div className="absolute top-0 left-0 size-full scale-90 rounded-full bg-white"></div>
                            <Image
                              src={
                                technologies.filter(
                                  (techno) => techno.name === "Next.js",
                                )[0].logo
                              }
                              alt={technoName}
                              className="relative size-5"
                            />
                          </div>
                        ) : (
                          <Image
                            key={i}
                            src={
                              technologies.filter(
                                (techno) => techno.name === technoName,
                              )[0].logo
                            }
                            alt={technoName}
                            className={cn(
                              "size-5",
                              technoName === "Prisma ORM" && "brightness-[3]",
                            )}
                          />
                        ),
                      )}
                    </div>
                  </div>
                  <p className="text-muted-foreground mt-4">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
