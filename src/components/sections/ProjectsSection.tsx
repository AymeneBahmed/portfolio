"use client";

import { PROJECTS, TECHNOLOGIES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { ZoomInIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { ProjectCarousel } from "../ProjectCarousel";

export default function ProjectsSection() {
  const containerVariants: Variants = {
    hidden: {},
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "backOut",
      },
    },
  };

  return (
    <section
      className="bg-muted/20 transparency-reduce:bg-[#03050B] relative flex min-h-dvh flex-col items-center justify-evenly gap-24 overflow-hidden py-8 sm:py-12 lg:min-h-auto"
      id="projects"
    >
      {/* Ambient Aurora Glows - 100% static, zero performance cost */}
      <div className="transparency-reduce:hidden pointer-events-none absolute inset-0 -z-10 select-none">
        {/* Soft Indigo/Primary glow drifting from the top left behind the card */}
        <div className="bg-primary/5 absolute -top-20 -left-20 size-125 rounded-full blur-[130px]" />

        {/* Soft Cyan glow escaping out of the bottom right */}
        <div className="bg-primary/5 absolute -right-20 -bottom-32 size-150 rounded-full blur-[130px]" />
      </div>

      <motion.h1
        className="text-primary text-6xl font-bold tracking-wide dark:text-shadow-[0_0_5px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7 }}
      >
        Projects
      </motion.h1>

      <motion.div
        className="-mt-10 grid w-[90%] max-w-7xl grid-cols-1 justify-items-center gap-x-10 gap-y-15 sm:grid-cols-2 min-[60.625rem]:grid-cols-3 min-[120.5rem]:grid-cols-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="animate"
        viewport={{ once: true, amount: 0.1 }}
      >
        {PROJECTS.map((project) => (
          <motion.div
            key={project.preview}
            className="max-w-94 p-0.75"
            variants={cardVariants}
          >
            {/* Project Card Container */}
            <div className="bg-background border-primary dark:shadow-primary shadow-primary relative z-1 h-full overflow-hidden border-2 shadow-[-8px_8px_0px] dark:shadow-[0_0_8px]">
              {/* The Tint Layer: Replicates the semi-transparent look over the solid base */}
              <div className="bg-muted/20 absolute inset-0 -z-10" />

              <div className="relative h-52">
                <Image
                  src={project.img}
                  alt={project.title}
                  className="size-full object-cover"
                  loading="eager"
                />

                <Dialog>
                  <DialogTrigger asChild>
                    {/* Overlay */}
                    <button
                      className="absolute inset-0 grid size-full cursor-pointer place-content-center bg-white/70 opacity-0 transition-opacity hover:opacity-100 dark:bg-black/50"
                      aria-label={`Zoom in on ${project.title} image`}
                    >
                      <div className="border-primary text-primary rounded-full border-2 p-2">
                        <ZoomInIcon size={25} />
                      </div>
                    </button>
                  </DialogTrigger>

                  <DialogContent className="max-w-5xl overflow-hidden [&>button]:text-white">
                    <DialogHeader>
                      <DialogTitle className="capitalize">
                        {project.title}
                      </DialogTitle>
                      <DialogDescription>
                        {project.description}
                      </DialogDescription>
                    </DialogHeader>

                    <ProjectCarousel project={project} />
                  </DialogContent>
                </Dialog>
              </div>

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
                          aria-label={`Preview ${project.title}`}
                        >
                          <FiExternalLink size={22} />
                        </Link>
                        {project.gitLink && (
                          <Link
                            href={project.gitLink}
                            target="_blank"
                            title="Github repo"
                            aria-label={`Go to ${project.title} GitHub`}
                          >
                            <FaGithub size={22} />
                          </Link>
                        )}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="flex gap-1 dark:mt-1">
                      {project.technologies.map((technoName, i) => (
                        <div className="relative" key={i}>
                          {technoName === "Next.js" ? (
                            <>
                              <div className="absolute top-0 left-0 size-full scale-90 rounded-full bg-white"></div>
                              <Image
                                src={
                                  TECHNOLOGIES.filter(
                                    (techno) => techno.name === "Next.js",
                                  )[0].logo
                                }
                                alt={technoName}
                                className="relative size-5"
                              />
                            </>
                          ) : (
                            <Image
                              key={i}
                              src={
                                TECHNOLOGIES.find(
                                  (techno) => techno.name === technoName,
                                )!.logo
                              }
                              alt={technoName}
                              className={cn(
                                "size-5",
                                technoName === "Prisma ORM" && "brightness-[3]",
                              )}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground mt-4">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
