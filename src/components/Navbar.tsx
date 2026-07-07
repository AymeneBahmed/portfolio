"use client";

import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";
import { cn } from "@/lib/utils";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { FaGithub } from "react-icons/fa6";

const navLinks = ["about me", "skills", "projects"];

export default function Navbar() {
  const [shouldShowVerticalNavbar, setShouldShowVerticalNavbar] =
    useState(false);

  return (
    <nav className="border-primary bg-muted/40 shadow-primary fixed z-20 flex h-18 w-full items-center justify-center border-b shadow-[0_0_15px_0px] backdrop-blur-lg">
      <button
        className="invisible absolute left-10 space-y-1.5 max-[830px]:visible"
        onClick={() => setShouldShowVerticalNavbar(true)}
      >
        {[...Array(3)].map((_, i) => (
          <div key={i} className="bg-primary h-1 w-8 rounded-full"></div>
        ))}
      </button>

      <VerticalNavbar
        shouldShowVerticalNavbar={shouldShowVerticalNavbar}
        setShouldShowVerticalNavbar={setShouldShowVerticalNavbar}
      />

      <div className="text-primary absolute left-8 text-[clamp(1.5rem,2vw,1.775rem)] font-bold text-nowrap underline underline-offset-8 max-[830px]:left-1/2 max-[830px]:-translate-x-1/2">
        Aymene Bahmed
      </div>

      <div className="flex w-[30%] cursor-pointer flex-nowrap justify-between max-[830px]:hidden">
        {navLinks.map((link) => (
          <NavLink
            key={link}
            href={`#${link.length > 1 ? link.split(" ").join("-") : link}`}
            text={link}
          />
        ))}
      </div>

      <div className="absolute right-10 flex items-center gap-2">
        <Button
          size="icon"
          variant="ghost"
          className="flex rounded-full"
          asChild
        >
          <a href="https://github.com/AymeneBahmed" target="_blank">
            <FaGithub size={25} />
          </a>
        </Button>
      </div>
    </nav>
  );
}

function VerticalNavbar({
  shouldShowVerticalNavbar,
  setShouldShowVerticalNavbar,
}: {
  shouldShowVerticalNavbar: boolean;
  setShouldShowVerticalNavbar: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // prevent document is undefined error
  if (!isMounted) {
    return null;
  }

  return createPortal(
    <div
      className={cn(
        "fixed top-0 left-0 z-9999 grid size-full place-content-center bg-white/50 opacity-0 backdrop-blur-sm transition-all duration-500 min-[830px]:hidden dark:bg-black/50",
        !shouldShowVerticalNavbar && "pointer-events-none",
        shouldShowVerticalNavbar && "opacity-100",
      )}
    >
      <button
        className="hover:text-primary absolute top-4 right-4 transition-colors duration-300"
        onClick={() => setShouldShowVerticalNavbar(false)}
      >
        <X size={50} />
      </button>

      <div className="space-y-8 text-center">
        {navLinks.map((link) => (
          <button
            key={link}
            className="block w-fit text-4xl"
            onClick={() => setShouldShowVerticalNavbar(false)}
          >
            <NavLink
              href={`#${link.length > 1 ? link.split(" ").join("-") : link}`}
              text={link}
            />
          </button>
        ))}
      </div>
    </div>,
    document.body,
  );
}

function NavLink({
  text,
  href,
  className,
}: {
  text: string;
  href: Url;
  className?: string;
}) {
  return (
    <Link
      className={cn(
        "group hover:text-primary relative font-semibold capitalize underline-offset-8 transition-colors duration-300",
        className,
      )}
      href={href}
    >
      <div className="bg-primary absolute bottom-[-3px] left-0 h-0.5 w-0 rounded-full transition-[width] group-hover:w-full"></div>
      {text}
    </Link>
  );
}
