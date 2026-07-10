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
    <Carousel setApi={setCarouselApi} className="relative select-none">
      <CarouselContent>
        {project.carousel.map((image, i) => (
          <CarouselItem key={i} className="relative h-137.5">
            <Image
              src={image}
              alt={`${project.title} picture ${i + 1}`}
              className="object-contain"
              fill
              priority={i === 0} // Optional: Loads the first image instantly
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="border-primary text-primary absolute left-5 rounded-none" />
      <CarouselNext className="border-primary text-primary absolute right-5 rounded-none" />

      {/* carousel indicator */}
      <div className="bg-secondary absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-2 p-2">
        {Array.from({ length: project.carousel.length }).map((_, i) => (
          <button
            key={i}
            className={cn(
              "bg-muted-foreground size-2 transition-colors",
              currentImg === i && "bg-primary",
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
