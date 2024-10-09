import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";

export default function TechnologyCard({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "space-y-6 rounded-md border border-primary p-6",
        className,
      )}
    >
      {children}
    </div>
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
    <p className={cn("text-lg text-muted-foreground", className)}>{children}</p>
  );
}
