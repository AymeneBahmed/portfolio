"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Project } from "@/types";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ProjectCarouselProps {
  project: Project;
}

export function ProjectCarousel({ project }: ProjectCarouselProps) {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    const onSelect = () => {
      setCurrentImg(carouselApi.selectedScrollSnap());
    };

    carouselApi.on("select", onSelect);

    return () => {
      carouselApi.off("select", onSelect);
    };
  }, [carouselApi]);

  return (
    <Carousel
      setApi={setCarouselApi}
      opts={{
        breakpoints: {
          "(prefers-reduced-motion: reduce)": { duration: 0 },
        },
      }}
      className="relative select-none"
    >
      <CarouselContent>
        {project.carousel.map((image, i) => (
          <CarouselItem key={i}>
            <Image
              src={image}
              alt={`${project.title} picture ${i + 1}`}
              className="object-contain"
              priority={i === 0}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        className={cn(
          "border-primary text-primary absolute left-5 cursor-pointer rounded-none",
          "forced-colors:border-[ButtonBorder] forced-colors:text-[ButtonText] forced-colors:hover:bg-[LinkText] forced-colors:hover:text-[Canvas]",
        )}
      />
      <CarouselNext
        className={cn(
          "border-primary text-primary absolute right-5 cursor-pointer rounded-none",
          "forced-colors:border-[ButtonBorder] forced-colors:text-[ButtonText] forced-colors:hover:bg-[LinkText] forced-colors:hover:text-[Canvas]",
        )}
      />

      {/* carousel indicator */}
      <div className="bg-secondary absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-2 p-2">
        {Array.from({ length: project.carousel.length }).map((_, i) => (
          <button
            key={i}
            className={cn(
              "bg-muted-foreground size-2 not-forced-colors:transition-colors forced-colors:bg-[ButtonText]",
              currentImg === i && "bg-primary forced-colors:bg-[LinkText]",
            )}
            onClick={() => {
              setCurrentImg(i);
              carouselApi?.scrollTo(i);
            }}
          ></button>
        ))}
      </div>
    </Carousel>
  );
}
