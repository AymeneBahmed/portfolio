import profilePicture from "@/assets/profile picture.jpg";
import { cn } from "@/lib/utils";
import ExportedImage from "next-image-export-optimizer";
import Tilt from "react-parallax-tilt";

interface ProfilePictureProps {
  className?: string;
}

export default function ProfilePicture({ className }: ProfilePictureProps) {
  return (
    <Tilt
      className={cn(
        "border-primary dark:shadow-primary relative size-100 overflow-hidden rounded-full border-[6px] shadow-[0px_8px_16px_rgba(0,50,200,0.15)] dark:shadow-[0_0_15px_0px]",
        className,
      )}
    >
      <ExportedImage
        src={profilePicture}
        alt="profile picture"
        className="size-full scale-[1.2] rounded-full object-cover object-[110%_-20px]"
        loading="eager"
        placeholder="blur"
        basePath="/portfolio"
        preload
      />
    </Tilt>
  );
}
