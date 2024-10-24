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

      gsap.from(".project-card", {
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
      className="relative flex min-h-dvh flex-col items-center justify-evenly gap-24 bg-muted/40 py-16"
      id="projects"
      ref={sectionRef}
    >
      <h1
        className="projects-heading text-6xl font-bold tracking-wide text-primary"
        style={{ textShadow: "0 0 5px" }}
      >
        Projects
      </h1>

      <div className="project-cards-container grid w-[90%] grid-cols-1 justify-items-center gap-x-10 gap-y-20 sm:w-[90%] sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.preview}
            className="project-card max-w-[23.5rem] overflow-hidden rounded-md border"
          >
            <Image src={project.img} alt={project.title} />

            <div className="p-3">
              <div>
                <div>
                  <div className="flex justify-between">
                    <h2 className="text-xl font-semibold capitalize">
                      {project.title}
                    </h2>

                    <div className="flex gap-2 text-primary *:transition-transform hover:*:scale-125">
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
                          <div className="absolute left-0 top-0 size-full scale-90 rounded-full bg-white"></div>

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

                <p className="mt-4 text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
