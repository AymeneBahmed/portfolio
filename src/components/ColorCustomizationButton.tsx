"use client";

import { ShuffleIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useTheme as useColor } from "next-themes";
import { COLOR_THEMES } from "@/lib/constants";

export default function ColorCustomizationButton() {
  const { theme, setTheme } = useColor();
  const [isShuffling, setIsShuffling] = useState<boolean>(false);

  const isDark = theme?.startsWith("dark");
  const currentColorScheme = isDark ? "dark" : "light";
  const currentColorSchemeColors = COLOR_THEMES.filter((themeName) =>
    isDark ? themeName.startsWith("dark") : !themeName.startsWith("dark"),
  );

  useEffect(() => {
    if (!theme) {
      return;
    }

    // Remember last-used themes per scheme when theme changes
    if (isDark) {
      localStorage.setItem("last-used-dark-theme", theme);
    } else {
      localStorage.setItem("last-used-light-theme", theme);
    }
  }, [theme, isDark]);

  useEffect(() => {
    const shouldShuffle = localStorage.getItem("shuffle");

    if (shouldShuffle === "true") {
      // Schedule out of the current call stack avoids hydration error (and ESLint error)
      queueMicrotask(() => {
        setIsShuffling(true);
      });
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
        currentColorSchemeColors[
          Math.floor(Math.random() * currentColorSchemeColors.length)
        ];
      setTheme(randomTheme);
    }, 2000);

    return () => clearInterval(interval);
  }, [isShuffling, currentColorSchemeColors, setTheme]);

  function handleSchemeChange(scheme: "light" | "dark") {
    const key =
      scheme === "dark" ? "last-used-dark-theme" : "last-used-light-theme";
    const fallback = COLOR_THEMES.find((t) =>
      scheme === "dark" ? t.startsWith("dark") : !t.startsWith("dark"),
    );

    setTheme(localStorage.getItem(key) ?? fallback ?? COLOR_THEMES[0]);
  }

  function handleColorSelect(colorName: string) {
    setIsShuffling(false);
    setTheme(colorName);
  }

  return (
    <div className="relative size-8">
      <div className="bg-primary pointer-events-none absolute inset-0 z-0 scale-110 rounded-full" />

      <Popover>
        <PopoverTrigger asChild>
          <Button
            size="icon"
            className="border-secondary relative z-10 size-full cursor-pointer rounded-full border-2"
            aria-label="Change website theme"
          >
            <ShuffleIcon
              size={15}
              className={cn(
                "opacity-0 transition-opacity",
                isShuffling && "opacity-100",
              )}
            />
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <div>
            <div className="text-sm">Color schemes</div>
            <hr className="border-border my-2" />
            <div className="flex flex-wrap gap-1.5">
              <Button
                size="icon"
                className={cn(
                  `border-secondary relative size-10 cursor-pointer rounded-full border-2 bg-white transition-opacity hover:bg-white hover:opacity-85`,
                  currentColorScheme === "light" &&
                    "ring-ring ring-2 ring-offset-2",
                )}
                onClick={() => {
                  handleSchemeChange("light");
                }}
                aria-label="Use light color scheme"
              />
              <Button
                size="icon"
                className={cn(
                  `border-secondary relative size-10 cursor-pointer rounded-full border-2 bg-[oklch(0.208_0.04_265.731)] hover:bg-[oklch(0.208_0.04_265.731)] hover:opacity-85`,
                  currentColorScheme === "dark" &&
                    "ring-ring ring-2 ring-offset-2",
                )}
                onClick={() => {
                  handleSchemeChange("dark");
                }}
                aria-label="Use dark color scheme"
              />
            </div>
          </div>
          <div className="mt-4">
            <div className="text-sm">Colors</div>
            <hr className="border-border my-2" />
            <div className="flex flex-wrap gap-1.5">
              {currentColorSchemeColors.map((colorName) => (
                <Button
                  key={colorName}
                  size="icon"
                  className={cn(
                    `border-secondary relative size-10 cursor-pointer rounded-full border-2`,
                    !isShuffling &&
                      theme === colorName &&
                      "ring-ring ring-2 ring-offset-2",
                  )}
                  onClick={() => handleColorSelect(colorName)}
                  data-theme={colorName}
                  aria-label={`Use a ${colorName} theme`}
                />
              ))}
              <Button
                size="icon"
                className={cn(
                  "border-secondary hover:bg-muted bg-muted relative size-10 cursor-pointer rounded-full border-2",
                  isShuffling && "ring-ring ring-2 ring-offset-2",
                )}
                onClick={() => setIsShuffling((prev) => !prev)}
                aria-label="Shuffle themes"
              >
                <ShuffleIcon className="stroke-muted-foreground" size={15} />
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
