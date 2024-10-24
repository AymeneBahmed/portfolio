"use client";

import Link from "next/link";
import ProfilePicture from "../ProfilePicture";
import { FaFacebookF, FaGithub, FaInstagram } from "react-icons/fa6";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP);

export default function HeroSection() {
  const socials = [
    {
      Icon: FaFacebookF,
      href: "https://www.facebook.com/dahmani.anes",
    },
    {
      Icon: FaInstagram,
      href: "https://www.instagram.com/randomguyfromthisworld",
    },
    {
      Icon: FaGithub,
      href: "https://github.com/CoolNewsGuy",
    },
  ];
  const profilePictureContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(profilePictureContainerRef.current, {
        x: -1000,
        rotate: -360,
        scale: 0,
        duration: 1.7,
        ease: "back.out",
      });
      gsap.from(".name-char", {
        stagger: 0.1,
        y: () => Math.random() * 400 - 200,
        opacity: 0,
        duration: 0.7,
      });
      gsap.from(".get-in-touch-text", {
        opacity: 0,
        duration: 1,
      });
      gsap.from(".social-link-btn", {
        stagger: 0.2,
        y: 150,
        opacity: 0,
        duration: 0.7,
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="flex min-h-dvh flex-col items-center justify-center gap-8"
    >
      <div ref={profilePictureContainerRef}>
        <ProfilePicture />
      </div>

      <div className="w-[40rem]">
        <h1 className="text-pretty text-center text-5xl font-bold leading-[4rem] tracking-wide">
          I am{" "}
          <span className="text-primary">
            {"{"}{" "}
            {"Aymen Bahmed".split("").map((char, i) => (
              <span
                key={i}
                className={cn("name-char", char !== " " && "inline-block")}
              >
                {char}
              </span>
            ))}{" "}
            {"}"}
          </span>
          <br />A passionate{" "}
          <span className="text-primary">web developer!</span>
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <span className="get-in-touch-text text-xl tracking-wide underline decoration-dashed underline-offset-[6px]">
          Get in touch:{" "}
        </span>

        <div className="flex gap-5">
          {socials.map(({ Icon, href }, i) => (
            <Link
              key={i}
              href={href}
              target="_blank"
              className="social-link-btn rounded-full border border-black p-1.5 transition-colors hover:border-black hover:bg-black *:hover:fill-white dark:border-white dark:hover:border-black dark:hover:bg-white *:hover:dark:fill-black"
            >
              <Icon className="size-5 transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
