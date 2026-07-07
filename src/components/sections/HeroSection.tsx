"use client";

import Link from "next/link";
import ProfilePicture from "../ProfilePicture";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { motion } from "framer-motion"; // or "motion/react"
import {
  ChevronDownIcon,
  DownloadIcon,
  FolderCodeIcon,
  MailIcon,
} from "lucide-react";

export default function HeroSection() {
  const socials = [
    {
      Icon: MailIcon,
      href: "mailto:aymene.bahmed.dz@gmail.com",
    },
    {
      Icon: FaLinkedin,
      href: "https://www.linkedin.com/in/aymene-abderrahmene-bahmed-87154635a",
    },
    {
      Icon: FaGithub,
      href: "https://github.com/AymeneBahmed",
    },
  ];

  return (
    <section className="relative flex min-h-dvh items-center justify-center gap-8">
      {/* Background grid pattern */}
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

      <div className="mx-auto flex w-[90%] flex-col-reverse items-center justify-center gap-8 py-12 min-[1550px]:justify-between sm:px-8 md:py-0 lg:w-[70%] lg:flex-row">
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
                    className={cn(char !== " " && "inline-block")}
                    initial={{ y: Math.random() * 400 - 200, opacity: 0 }}
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
              I create modern, responsive web applications using React, Next.js,
              and Node.js. Interested in learning how things work in depth.
            </div>
          </div>

          {/* Get In Touch & Socials section */}
          <div className="mt-6 flex gap-3 sm:flex-row sm:items-center sm:gap-4">
            <motion.span
              className="text-lg tracking-wide underline decoration-dashed underline-offset-[6px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Get in touch:{" "}
            </motion.span>

            <div className="flex gap-5">
              {socials.map(({ Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
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
        >
          <ProfilePicture className="size-80 md:size-88 lg:size-[clamp(310px,24vw,28rem)]" />
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
          <Link href="#about-me">
            <ChevronDownIcon />
          </Link>
        </Button>
      </motion.div>
    </section>
  );
}
