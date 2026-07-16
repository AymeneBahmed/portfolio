"use client";

import Link from "next/link";
import ProfilePicture from "../ProfilePicture";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { motion } from "motion/react";
import {
  ChevronDownIcon,
  DownloadIcon,
  FolderCodeIcon,
  MailIcon,
} from "lucide-react";
import { InteractiveGrid } from "../InteractiveGrid";
import { DotGridPattern } from "../DotGridPattern";

export default function HeroSection() {
  const socials = [
    {
      Icon: MailIcon,
      href: "mailto:aymene.bahmed.dz@gmail.com",
      ariaLabel: "Send email to Aymene Bahmed",
    },
    {
      Icon: FaLinkedin,
      href: "https://www.linkedin.com/in/aymene-abderrahmene-bahmed-87154635a",
      ariaLabel: "Open Aymene Bahmed LinkedIn",
    },
    {
      Icon: FaGithub,
      href: "https://github.com/AymeneBahmed",
      ariaLabel: "Open Aymene Bahmed GitHub",
    },
  ];

  return (
    <section className="relative flex min-h-235 items-center justify-center gap-8 max-[24.75rem]:min-h-250 max-[22.813rem]:min-h-260 lg:min-h-dvh">
      <DotGridPattern />

      {/* Hide for small screens as an optimization */}
      <div className="absolute inset-0 -z-10 hidden sm:block pointer-fine:block">
        <InteractiveGrid />
      </div>

      <div className="max-w-8xl mx-auto flex w-[90%] flex-col-reverse items-center justify-center gap-8 py-12 sm:px-8 md:py-0 lg:w-[70%] lg:flex-row min-[96.875rem]:justify-between">
        {/* Text side (left side of hero section) */}
        <div className="mt-0 md:mt-2">
          <div className="flex w-fit items-center gap-2 rounded-full border border-green-800 bg-green-900/30 px-4 py-1 font-semibold text-green-300">
            <div className="h-2 w-2 animate-pulse rounded-full bg-green-500 font-thin"></div>
            <span>Available for work</span>
          </div>

          <div className="mt-2 w-full md:w-160">
            <h1 className="text-3xl leading-12 font-bold tracking-wide text-pretty sm:text-4xl sm:leading-14 md:text-5xl md:leading-16">
              I am{" "}
              <span className="text-primary">
                {"Aymene Bahmed".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    // This 370px breakpoint is used because characters wrap on their own when the screen is small for the second name to fit
                    // The animation in screens <370px will be just "opacity" instead of "y"
                    className={cn(
                      char !== " " && "min-[23.125rem]:inline-block",
                    )}
                    initial={{
                      y: ((i * 127) % 360) - 180,
                      opacity: 0,
                    }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05, duration: 0.7 }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            </h1>

            <div className="mb-3">
              <span className="text-primary text-xl font-semibold underline underline-offset-[6px] sm:text-2xl">
                Full-Stack Web Developer
              </span>
            </div>

            <div className="text-muted-foreground text-base text-wrap sm:text-lg">
              I am a software engineer, specializing in building accessible web
              applications using various technologies including TypeScript,
              React, Next.js, and Node.js.
            </div>
          </div>

          {/* Get In Touch & Socials section */}
          <div className="mt-6 flex flex-wrap gap-3 max-[23.125rem]:mb-6 max-[23.125rem]:justify-center sm:flex-row sm:items-center sm:gap-4">
            <motion.span
              className="text-lg tracking-wide underline decoration-dashed underline-offset-[6px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Get in touch:{" "}
            </motion.span>

            <div className="flex gap-5">
              {socials.map(({ Icon, href, ariaLabel }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={ariaLabel}
                  className="hover:bg-primary group rounded-full border border-white p-1.5 transition-colors hover:border-black"
                  initial={{ y: 150, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: i * 0.15,
                    duration: 0.7,
                    ease: "easeOut",
                  }}
                >
                  <Icon
                    className={cn(
                      "size-5 transition-colors",
                      socials[0].Icon === Icon
                        ? "group-hover:stroke-primary-foreground"
                        : "group-hover:fill-primary-foreground",
                    )}
                  />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-4">
            <Button className="shadow-primary gap-2 shadow-[0_0_10px]" asChild>
              <a href="/Aymene_Bahmed_Resume.pdf" target="_blank">
                <DownloadIcon size={20} />
                <span>Download Resume</span>
              </a>
            </Button>

            <Button className="gap-2" variant="secondary" asChild>
              <a href="#projects">
                <FolderCodeIcon size={20} />
                <span>View projects</span>
              </a>
            </Button>
          </div>
        </div>

        {/* Profile Picture Container */}
        <motion.div
          initial={{ x: 1000, rotate: -360, scale: 0, opacity: 0 }}
          animate={{ x: 0, rotate: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 1.7, ease: "backOut" }}
          whileTap={{
            scale: 0.5,
            transition: { duration: 0.2, type: "spring", damping: 5 },
          }}
        >
          <ProfilePicture className="size-80 max-[23.438rem]:size-[80vw] lg:size-[clamp(19.375rem,24vw,28rem)]" />
        </motion.div>
      </div>

      {/* Floating Scroll Down Button */}
      <motion.div
        className="absolute bottom-10"
        initial={{ y: 0, opacity: 0.9 }}
        animate={{ y: 15, opacity: 1 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <Button
          size="icon"
          variant="secondary"
          className="cursor-pointer rounded-full"
          asChild
        >
          <Link
            href="#about-me"
            aria-label="See more information about Aymene Bahmed"
          >
            <ChevronDownIcon />
          </Link>
        </Button>
      </motion.div>
    </section>
  );
}
