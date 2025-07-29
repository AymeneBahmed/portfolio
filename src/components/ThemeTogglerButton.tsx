"use client";

import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { MoonStar, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";

function ThemeTogglerButton(props: React.ComponentProps<typeof Button>) {
  const { theme, setTheme } = useTheme();

  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <Button
      {...props}
      className={cn(props.className)}
      onClick={toggleTheme}
      size="icon"
    >
      {theme === "dark" ? <MoonStar /> : <Sun />}
    </Button>
  );
}

export default dynamic(() => Promise.resolve(ThemeTogglerButton), {
  ssr: false,
});
