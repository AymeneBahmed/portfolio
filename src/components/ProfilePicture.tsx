import profilePicture from "@/assets/profile picture.jpeg";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface ProfilePictureProps {
  className?: string;
}

export default function ProfilePicture({ className }: ProfilePictureProps) {
  return (
    <div className={cn("relative size-[18rem] rounded-full", className)}>
      <div className="absolute left-0 top-0 size-full scale-[1.03] rounded-full bg-primary shadow-[0_0_15px_0px] shadow-primary"></div>

      <Image
        src={profilePicture}
        alt="profile picture"
        fill
        className="rounded-full object-cover"
      />
    </div>
  );
}
