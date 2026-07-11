import profilePicture from "@/assets/profile picture.jpg";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

interface ProfilePictureProps {
  className?: string;
}

export default function ProfilePicture({ className }: ProfilePictureProps) {
  return (
    <Tilt
      className={cn(
        "border-primary shadow-primary relative size-100 overflow-hidden rounded-full border-[6px] shadow-[0_0_15px_0px]",
        className,
      )}
    >
      <Image
        src={profilePicture}
        alt="profile picture"
        className="scale-[1.2] rounded-full object-cover object-[110%_-30px]"
        loading="eager"
        priority
        fill
      />
    </Tilt>
  );
}
