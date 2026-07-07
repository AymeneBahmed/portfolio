"use client";

import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

export default function ColorCustomizationButton() {
  const colorThemes = [
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

  function changeTheme(themeName: string) {
    const htmlElement = document.documentElement;

    htmlElement.className = "";
    htmlElement.classList.add(themeName);
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
          {colorThemes.map((theme) => (
            <div key={theme}>
              <Button
                size="icon"
                className={`border-secondary ${theme} relative z-10 size-10 cursor-pointer rounded-full border-2`}
                onClick={() => {
                  changeTheme(theme);
                }}
                aria-label={theme}
              />
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
