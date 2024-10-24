import Link from "next/link";
import ProfilePicture from "../ProfilePicture";
import { FaFacebookF, FaGithub, FaInstagram } from "react-icons/fa6";

export default function HeroSection() {
  const socials = [
    {
      Icon: FaFacebookF,
      href: "https://www.facebook.com/dahmani.anes",
    },
    {
      Icon: FaInstagram,
      href: "https://www.instagram.com/randomguyfromthisworld",
    },
    {
      Icon: FaGithub,
      href: "https://github.com/CoolNewsGuy",
    },
  ];

  return (
    <section className="flex min-h-dvh flex-col items-center justify-center gap-8">
      <ProfilePicture />

      <div className="w-[40rem]">
        <h1 className="text-pretty text-center text-5xl font-bold leading-[4rem] tracking-wide">
          I am{" "}
          <span className="text-primary">
            {"{"} Aymen Bahmed {"}"}
          </span>
          <br />A passionate{" "}
          <span className="text-primary">web developer!</span>
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-xl tracking-wide underline decoration-dashed underline-offset-[6px]">
          Get in touch:{" "}
        </span>

        <div className="flex gap-5">
          {socials.map(({ Icon, href }, i) => (
            <Link
              key={i}
              href={href}
              target="_blank"
              className="rounded-full border border-black p-1.5 transition-colors hover:border-black hover:bg-black *:hover:fill-white dark:border-white dark:hover:border-black dark:hover:bg-white *:hover:dark:fill-black"
            >
              <Icon className="size-5 transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
