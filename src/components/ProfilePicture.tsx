"use client";

import profilePicture from "@/assets/profile picture.jpeg";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import Image from "next/image";

interface ProfilePictureProps {
  className?: string;
}

export default function ProfilePicture({ className }: ProfilePictureProps) {
  const { theme } = useTheme();

  return (
    <div className={cn("relative size-[18rem] rounded-full", className)}>
      <div
        className="absolute left-0 top-0 size-full scale-[1.03] rounded-full bg-primary"
        style={{
          boxShadow: `0 0 15px 0px ${theme === "dark" ? "hsl(180 100% 50%)" : "hsl(221.2 83.2% 53.3%)"}`,
        }}
      ></div>

      <Image
        src={profilePicture}
        alt="profile picture"
        fill
        className="rounded-full object-cover"
      />
    </div>
  );
}
