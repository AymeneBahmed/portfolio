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
      <div
        className={cn(
          "bg-technology-card-background border-primary shadow-primary border p-6 shadow-[0_0_10px]",
          className,
        )}
      >
        {children}
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
