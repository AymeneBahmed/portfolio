"use client";

import { projects, technologies } from "@/lib/constants";
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
      className="bg-muted/20 relative flex min-h-dvh flex-col items-center justify-evenly gap-24 overflow-hidden py-16"
      id="projects"
    >
      {/* Ambient Aurora Glows - 100% static, zero performance cost */}
      <div className="pointer-events-none absolute inset-0 -z-10 select-none">
        {/* Soft Indigo/Primary glow drifting from the top left behind the card */}
        <div className="bg-primary/5 absolute -top-20 -left-20 size-125 rounded-full blur-[130px]" />

        {/* Soft Cyan glow escaping out of the bottom right */}
        <div className="bg-primary/5 absolute -right-20 -bottom-32 size-150 rounded-full blur-[130px]" />
      </div>

      <motion.h1
        className="text-primary text-6xl font-bold tracking-wide"
        style={{ textShadow: "0 0 5px" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7 }}
      >
        Projects
      </motion.h1>

      <motion.div
        className="grid w-[90%] grid-cols-1 justify-items-center gap-x-10 gap-y-20 sm:w-[90%] sm:grid-cols-2 md:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="animate"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.preview}
            className="relative max-w-94 overflow-hidden p-0.75"
            variants={cardVariants}
          >
            {/* Sharp Spinning Border Texture */}
            <div className="animate-gpu-spin absolute top-1/2 left-1/2 -z-1 aspect-square min-h-[170%] min-w-[170%] -translate-x-1/2 -translate-y-1/2 bg-conic-[from_0deg_in_oklab,hsl(180,100%,50%)_0deg_10deg,var(--color-blue-500)_30deg_40deg,var(--color-purple-300)_50deg_60deg,transparent_70deg_180deg,hsl(180,100%,50%)_180deg_190deg,var(--color-blue-500)_210deg_220deg,var(--color-purple-300)_230deg_240deg,transparent_250deg] blur-xl" />

            {/* Project Card Container */}
            <div className="bg-background relative z-1 h-full overflow-hidden border">
              {/* The Tint Layer: Replicates the semi-transparent look over the solid base */}
              <div className="bg-muted/20 absolute inset-0 -z-10" />

              <div className="relative">
                <Image
                  src={project.img}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="w-full object-cover"
                  loading="eager"
                />

                <Dialog>
                  <DialogTrigger asChild>
                    {/* Dark Overlay */}
                    <button
                      className="absolute inset-0 grid size-full cursor-pointer place-content-center bg-black/50 opacity-0 transition-opacity hover:opacity-100"
                      aria-label={`Zoom in on ${project.title} image`}
                    >
                      <div className="border-primary text-primary rounded-full border-2 p-2">
                        <ZoomInIcon size={25} />
                      </div>
                    </button>
                  </DialogTrigger>

                  <DialogContent className="max-w-4xl overflow-hidden [&>button]:text-white">
                    <DialogHeader>
                      <DialogTitle className="capitalize">
                        {project.title}
                      </DialogTitle>
                      <DialogDescription>
                        {project.description}
                      </DialogDescription>
                    </DialogHeader>

                    <div className="flex items-center justify-center">
                      <Image
                        src={project.img}
                        alt={`${project.title} picture`}
                        className="h-auto max-h-[85vh] w-auto rounded-md shadow-2xl"
                      />
                    </div>
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
                    <div className="mt-2 flex gap-1">
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
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
