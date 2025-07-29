import profilePicture from "@/assets/profile picture.jpg";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface ProfilePictureProps {
  className?: string;
}

export default function ProfilePicture({ className }: ProfilePictureProps) {
  return (
    <div
      className={cn(
        "relative size-100 overflow-hidden rounded-full border-[6px] border-primary shadow-[0_0_15px_0px] shadow-primary",
        className,
      )}
    >
      <Image
        src={profilePicture}
        alt="profile picture"
        fill
        className="scale-[1.2] rounded-full object-cover object-[110%_-30px]"
      />
    </div>
  );
}
