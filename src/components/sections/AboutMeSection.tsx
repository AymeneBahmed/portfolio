export default function AboutMeSection() {
  return (
    <section
      className="bg-muted/20 relative flex min-h-dvh items-center justify-center overflow-hidden"
      id="about-me"
    >
      {/* Ambient Aurora Glows - 100% static, zero performance cost */}
      <div className="pointer-events-none absolute inset-0 -z-10 select-none">
        {/* Soft Indigo/Primary glow drifting from the top left behind the card */}
        <div className="bg-primary/5 absolute -top-20 -left-20 size-125 rounded-full blur-[130px]" />

        {/* Soft Cyan glow escaping out of the bottom right */}
        <div className="bg-primary/5 absolute -right-20 -bottom-32 size-150 rounded-full blur-[130px]" />
      </div>

      {/* Central Content Card */}
      <div className="border-primary shadow-primary bg-muted/60 w-[min(41rem,90vw)] rounded-md border p-14 shadow-[0_0_15px_0px] backdrop-blur-sm">
        <h2 className="text-center text-5xl font-extrabold">About me</h2>

        <div className="text-muted-foreground mt-9 space-y-5 text-lg tracking-wider">
          <p>
            I am Aymene Bahmed,{" "}
            <strong className="text-primary">a computer nerd</strong> {""}
            who&apos;s passionate and always{" "}
            <strong className="text-primary">
              ready to learn anything
            </strong>{" "}
            related to technology and computers. I also love math as well as
            studying how things work under the hood 👨‍💻.
          </p>

          <p>
            I <strong className="text-primary">create websites for fun</strong>{" "}
            and I strive for an{" "}
            <strong className="text-primary">optimal user experience</strong> to
            make them accessible for everyone as much as possible so even{" "}
            <strong className="text-primary">
              people with disabilities can use them without much trouble!
            </strong>
          </p>

          <p>
            I am a{" "}
            <strong className="text-primary">
              graduate Computer Science student
            </strong>
            , pursuing a master&apos;s degree in Data Science where I&apos;m
            taking courses in{" "}
            <strong className="text-primary">
              Data Science and Data Engineering
            </strong>
          </p>

          <p>
            It will be my pleasure to work with you and make sure{" "}
            <strong className="text-primary">
              you get satisfied and happy with my services 😃!
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
}
