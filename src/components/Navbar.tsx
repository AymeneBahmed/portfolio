"use client";

import { cn } from "@/lib/utils";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import CustomizationButton from "./ColorCustomizationButton";

const navLinks = ["about me", "tools", "projects"];

export default function Navbar() {
  const [shouldShowVerticalNavbar, setShouldShowVerticalNavbar] =
    useState(false);

  return (
    <nav
      className={cn(
        "border-primary dark:bg-muted/40 dark:shadow-primary fixed z-20 h-25 w-full border-b-2 bg-white/70 backdrop-blur-lg min-[24.75rem]:h-18 dark:shadow-[0_0_15px_0px]",
        "transparency-reduce:bg-white transparency-reduce:backdrop-blur-none transparency-reduce:dark:bg-[#03050B]",
      )}
    >
      <div className="max-w-8xl mx-auto flex h-full items-center px-8 forced-colors:max-w-7xl">
        <div className="flex flex-1 justify-start min-[62.5rem]:hidden min-[51.25rem]:forced-colors:hidden">
          <button
            className="cursor-pointer space-y-1.5"
            onClick={() => setShouldShowVerticalNavbar(true)}
            aria-label="Open vertical navbar"
          >
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="bg-primary h-1 w-8 rounded-full forced-colors:bg-[LinkText]"
              ></div>
            ))}
          </button>
        </div>

        <div className="flex flex-1 justify-center min-[62.5rem]:justify-start forced-colors:justify-end forced-colors:min-[51.25rem]:justify-start">
          <a
            href="#hero"
            className="text-primary left-8 text-center text-[clamp(1.5rem,2vw,1.775rem)] font-bold underline underline-offset-8 min-[24.75rem]:text-nowrap"
          >
            Aymene Bahmed
          </a>
        </div>

        <div
          className={cn(
            "hidden w-[30%] cursor-pointer flex-nowrap justify-between min-[62.5rem]:flex",
            "forced-colors:min-w-92 forced-colors:gap-15 forced-colors:text-[LinkText] min-[51.25rem]:forced-colors:flex",
          )}
        >
          {navLinks.map((link) => (
            <NavLink
              key={link}
              href={`#${link.length > 1 ? link.split(" ").join("-") : link}`}
              text={link}
            />
          ))}
        </div>

        <div className="flex flex-1 justify-end forced-colors:hidden">
          <div className="flex items-center gap-2 min-[62.5rem]:pr-[clamp(1rem,5vw,10rem)]">
            <CustomizationButton />
          </div>
        </div>
      </div>

      <VerticalNavbar
        shouldShowVerticalNavbar={shouldShowVerticalNavbar}
        setShouldShowVerticalNavbar={setShouldShowVerticalNavbar}
      />
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
        "transparency-reduce:bg-white transparency-reduce:dark:bg-black fixed top-0 left-0 z-9999 grid size-full place-content-center bg-white/70 opacity-0 backdrop-blur-sm transition-all duration-500 min-[62.5rem]:hidden dark:bg-black/70",
        !shouldShowVerticalNavbar && "pointer-events-none",
        shouldShowVerticalNavbar && "opacity-100",
      )}
    >
      <button
        className="hover:text-primary absolute top-4 right-4 cursor-pointer transition-colors duration-300"
        onClick={() => setShouldShowVerticalNavbar(false)}
        aria-label="Close vertical navbar"
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
  href: React.ComponentProps<"a">["href"];
  className?: string;
}) {
  return (
    <a
      className={cn(
        "group hover:text-primary relative font-semibold capitalize underline-offset-8 transition-colors duration-300",
        className,
      )}
      href={href}
    >
      <div className="bg-primary absolute -bottom-0.75 left-0 h-0.5 w-0 rounded-full transition-[width] group-hover:w-full forced-colors:bg-[LinkText]"></div>
      {text}
    </a>
  );
}
