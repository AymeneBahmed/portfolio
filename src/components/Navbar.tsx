"use client";

import Link from "next/link";
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
    <nav className="border-primary bg-muted/40 shadow-primary fixed z-20 h-18 w-full border-b shadow-[0_0_15px_0px] backdrop-blur-lg max-[24.75rem]:h-25">
      <div className="max-w-8xl mx-auto flex h-full items-center px-8">
        <div className="flex flex-1 justify-start min-[62.5rem]:hidden">
          <button
            className="space-y-1.5"
            onClick={() => setShouldShowVerticalNavbar(true)}
            aria-label="Open vertical navbar"
          >
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-primary h-0.75 w-8 rounded-full"></div>
            ))}
          </button>
        </div>

        <div className="flex flex-1 justify-center min-[62.5rem]:justify-start">
          <div className="text-primary left-8 text-center text-[clamp(1.5rem,2vw,1.775rem)] font-bold text-nowrap underline underline-offset-8 max-[24.75rem]:text-wrap">
            Aymene Bahmed
          </div>
        </div>

        <div className="flex w-[30%] cursor-pointer flex-nowrap justify-between max-[62.5rem]:hidden">
          {navLinks.map((link) => (
            <NavLink
              key={link}
              href={`#${link.length > 1 ? link.split(" ").join("-") : link}`}
              text={link}
            />
          ))}
        </div>

        <div className="flex flex-1 justify-end">
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
        "fixed top-0 left-0 z-9999 grid size-full place-content-center bg-black/50 opacity-0 backdrop-blur-sm transition-all duration-500 min-[51.875rem]:hidden",
        !shouldShowVerticalNavbar && "pointer-events-none",
        shouldShowVerticalNavbar && "opacity-100",
      )}
    >
      <button
        className="hover:text-primary absolute top-4 right-4 transition-colors duration-300"
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
  href: React.ComponentProps<typeof Link>["href"];
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
      <div className="bg-primary absolute -bottom-0.75 left-0 h-0.5 w-0 rounded-full transition-[width] group-hover:w-full"></div>
      {text}
    </Link>
  );
}
