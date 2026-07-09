"use client";

import { ShuffleIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

const COLOR_THEMES = [
  "cyan",
  "sky",
  "purple",
  "neon-green",
  "caffeine",
  "blue",
  "orange",
  "yellow",
  "tomato",
  "fuchsia",
  "indigo",
  "green",
  "teal",
];

export default function ColorCustomizationButton() {
  const { theme, setTheme } = useTheme();
  const [isShuffling, setIsShuffling] = useState<boolean>(false);

  useEffect(() => {
    const shouldShuffle = localStorage.getItem("shuffle");

    if (shouldShuffle === "true") {
      setIsShuffling(true);
    }
  }, []);

  useEffect(() => {
    if (!isShuffling) {
      localStorage.removeItem("shuffle");
      return;
    }

    localStorage.setItem("shuffle", "true");

    const interval = setInterval(() => {
      const randomTheme =
        COLOR_THEMES[Math.floor(Math.random() * COLOR_THEMES.length)];
      setTheme(randomTheme);
    }, 2000);

    return () => clearInterval(interval);
  }, [isShuffling, setTheme]);

  function handleThemeSelect(themeName: string) {
    setIsShuffling(false);
    setTheme(themeName);
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="relative size-8">
          <div className="bg-primary absolute inset-0 z-0 scale-110 rounded-full" />
          <Button
            size="icon"
            className="border-secondary relative z-10 size-full cursor-pointer rounded-full border-2"
            aria-label="change color"
          >
            <ShuffleIcon
              size={15}
              className={cn(
                "opacity-0 transition-opacity",
                isShuffling && "opacity-100",
              )}
            />
          </Button>
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <div className="text-sm">Colors</div>
        <hr className="border-border my-2" />
        <div className="flex flex-wrap gap-1.5">
          {COLOR_THEMES.map((themeName) => (
            <Button
              key={themeName}
              size="icon"
              className={cn(
                `border-secondary ${themeName} relative size-10 cursor-pointer rounded-full border-2`,
                !isShuffling &&
                  theme === themeName &&
                  "ring-ring ring-2 ring-offset-2",
              )}
              onClick={() => handleThemeSelect(themeName)}
              aria-label={themeName}
            />
          ))}
          <Button
            size="icon"
            className={cn(
              "border-secondary hover:bg-muted bg-muted relative size-10 cursor-pointer rounded-full border-2",
              isShuffling && "ring-ring ring-2 ring-offset-2",
            )}
            onClick={() => setIsShuffling((prev) => !prev)}
            aria-label="Mix"
          >
            <ShuffleIcon className="stroke-muted-foreground" size={15} />
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
