import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";
import Tilt from "react-parallax-tilt";

export default function TechnologyCard({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Tilt className="size-full">
      <div className="relative size-full">
        {/* Masked Border Wrapper */}
        <div
          className={cn(
            "relative isolate size-full overflow-hidden p-0.75",
            className,
          )}
        >
          {/* Sharp Spinning Border Texture */}
          <div className="sm:pointer-fine:animate-gpu-spin bg-glow absolute top-1/2 left-1/2 -z-1 aspect-square min-h-[170%] min-w-[170%] -translate-x-1/2 -translate-y-1/2 blur-xl" />

          {/* Content Card (Masks the center of the spinning circle, leaving a 2px border) */}
          <div className="bg-technology-card-background size-full p-6">
            {children}
          </div>
        </div>
      </div>
    </Tilt>
  );
}

TechnologyCard.Figure = TechnologyCardFigure;
TechnologyCard.Image = TechnologyCardImage;
TechnologyCard.Caption = TechnologyCardCaption;
TechnologyCard.Description = TechnologyCardDescription;

function TechnologyCardFigure({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <figure className={cn("flex flex-col items-center", className)}>
      {children}
    </figure>
  );
}

function TechnologyCardImage(props: ImageProps) {
  return <Image width={150} height={150} {...props} alt={props.alt || ""} />;
}

function TechnologyCardCaption({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <figcaption className={cn("text-2xl font-bold", className)}>
      {children}
    </figcaption>
  );
}

function TechnologyCardDescription({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <p className={cn("text-muted-foreground text-lg", className)}>{children}</p>
  );
}
