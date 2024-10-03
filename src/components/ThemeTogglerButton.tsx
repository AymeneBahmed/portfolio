"use client";

import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { MoonStar, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";

interface ThemeTogglerButtonProps {
  className?: string;
}

function ThemeTogglerButton({ className }: ThemeTogglerButtonProps) {
  const { theme, setTheme } = useTheme();

  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <Button className={cn(className)} onClick={toggleTheme} size="icon">
      {theme === "dark" ? <MoonStar /> : <Sun />}
    </Button>
  );
}

export default dynamic(() => Promise.resolve(ThemeTogglerButton), {
  ssr: false,
});
