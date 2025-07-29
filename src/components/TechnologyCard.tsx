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
        "relative space-y-6 rounded-lg bg-slate-100 p-6 dark:bg-slate-950",
        className,
      )}
    >
      <div className="animate-spin-gradient absolute top-1/2 left-1/2 -z-1 size-[102%] -translate-1/2 rounded-lg bg-conic-[from_var(--conic-angle)_in_oklab,hsl(180,100%,50%)_0deg_10deg,var(--color-blue-500)_30deg_40deg,var(--color-purple-300)_50deg_60deg,transparent_70deg_180deg,hsl(180,100%,50%)_180deg_190deg,var(--color-blue-500)_210deg_220deg,var(--color-purple-300)_230deg_240deg,transparent_250deg]"></div>

      <div className="animate-spin-gradient absolute top-1/2 left-1/2 -z-1 size-[102%] -translate-1/2 rounded-lg bg-conic-[from_var(--conic-angle)_in_oklab,hsl(180,100%,50%)_0deg_10deg,var(--color-blue-500)_30deg_40deg,var(--color-purple-300)_50deg_60deg,transparent_70deg_180deg,hsl(180,100%,50%)_180deg_190deg,var(--color-blue-500)_210deg_220deg,var(--color-purple-300)_230deg_240deg,transparent_250deg] blur-lg"></div>

      <div>{children}</div>
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
    <p className={cn("text-muted-foreground text-lg", className)}>{children}</p>
  );
}
