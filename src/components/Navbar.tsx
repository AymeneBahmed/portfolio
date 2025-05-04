"use client";

import Link from "next/link";
import ThemeTogglerButton from "./ThemeTogglerButton";
import { Url } from "next/dist/shared/lib/router/router";
import { cn } from "@/lib/utils";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { useState } from "react";
import dynamic from "next/dynamic";

const navLinks = ["about me", "skills", "projects"];

export default dynamic(() => Promise.resolve(Navbar), { ssr: false });

function Navbar() {
  const [shouldShowVerticalNavbar, setShouldShowVerticalNavbar] =
    useState(false);

  return (
    <nav className="fixed z-[9998] flex h-[4.5rem] w-full items-center justify-center border-b border-primary bg-muted/40 shadow-[0_0_15px_0px] shadow-primary backdrop-blur-lg">
      <button
        className="invisible absolute left-10 space-y-1.5 max-[830px]:visible"
        onClick={() => setShouldShowVerticalNavbar(true)}
      >
        {[...Array(3)].map((_, i) => (
          <div key={i} className="h-1 w-8 rounded-full bg-primary"></div>
        ))}
      </button>

      <VerticalNavbar
        shouldShowVerticalNavbar={shouldShowVerticalNavbar}
        setShouldShowVerticalNavbar={setShouldShowVerticalNavbar}
      />

      <div className="absolute left-8 text-nowrap text-[clamp(1.5rem,2vw,1.875rem)] font-bold text-primary max-[830px]:left-1/2 max-[830px]:-translate-x-1/2">
        {"{"} Aymen Bahmed {"}"}
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

      <ThemeTogglerButton className="absolute right-10" />
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
  return createPortal(
    <div
      className={cn(
        "fixed left-0 top-0 z-[9999] grid size-full place-content-center bg-white/50 opacity-0 backdrop-blur-sm transition-all duration-500 dark:bg-black/50 min-[830px]:hidden",
        !shouldShowVerticalNavbar && "pointer-events-none",
        shouldShowVerticalNavbar && "opacity-100",
      )}
    >
      <button
        className="absolute right-4 top-4 transition-colors duration-300 hover:text-primary"
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
        "group relative font-semibold capitalize underline-offset-8 transition-colors duration-300 hover:text-primary",
        className,
      )}
      href={href}
    >
      <div className="absolute bottom-[-3px] left-0 h-0.5 w-0 rounded-full bg-primary transition-[width] group-hover:w-full"></div>
      {text}
    </Link>
  );
}
