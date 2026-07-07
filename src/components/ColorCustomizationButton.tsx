"use client";

import { ShuffleIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useState, useEffect } from "react";

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
  const [theme, setTheme] = useState<string>("");
  const [isShuffling, setIsShuffling] = useState<boolean>(false);

  useEffect(() => {
    const htmlElement = document.documentElement;
    htmlElement.className = theme;
  }, [theme]);

  useEffect(() => {
    if (!isShuffling) return;

    const interval = setInterval(() => {
      const randomTheme =
        COLOR_THEMES[Math.floor(Math.random() * COLOR_THEMES.length)];
      setTheme(randomTheme);
    }, 2000);

    return () => clearInterval(interval);
  }, [isShuffling]);

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
          />
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <div className="text-sm">Colors</div>
        <hr />
        <div className="mt-2 flex flex-wrap gap-1">
          {COLOR_THEMES.map((themeName) => (
            <Button
              key={themeName}
              size="icon"
              className={`border-secondary ${themeName} relative size-10 cursor-pointer rounded-full border-2`}
              onClick={() => handleThemeSelect(themeName)}
              aria-label={themeName}
            />
          ))}
          <Button
            size="icon"
            className="border-secondary hover:bg-muted bg-muted relative flex size-10 cursor-pointer items-center justify-center rounded-full border-2 text-white"
            onClick={() => setIsShuffling((prev) => !prev)} // Toggles shuffling on/off cleanly
            aria-label="Mix"
          >
            <ShuffleIcon className="stroke-muted-foreground" size={20} />
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
