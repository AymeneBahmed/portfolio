export default function AboutMeSection() {
  return (
    <section
      className="relative flex min-h-dvh items-center justify-center bg-muted/40"
      id="about-me"
    >
      <div className="w-[min(41rem,90vw)] rounded-md border border-primary p-14 shadow-[0_0_15px_0px] shadow-primary">
        <h2 className="text-center text-5xl font-extrabold">About me</h2>

        <div className="mt-9 space-y-5 text-lg tracking-wider text-muted-foreground">
          <p>
            I am Aymen Bahmed,{" "}
            <strong className="text-primary">a computer nerd</strong> who&apos;s
            passionate and always{" "}
            <strong className="text-primary">ready to learn anything</strong>{" "}
            related to technology and computers. I also love math as well as
            studying how things works under the hood 👨‍💻.
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
            I am currently a{" "}
            <strong className="text-primary">
              3rd year computer science student
            </strong>
            . My favorite topics are AI especially robotics, embedded
            programming, and web development. I am planning to take an AI degree
            and focus on robotics in the future since I love creating real world
            stuff!
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
