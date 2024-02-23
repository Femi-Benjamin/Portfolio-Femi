"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative bg-no-repeat">
      <div
        className="flex items-center w-full h-full bg-cover bg-no-repeat"
        style={{ backgroundImage: "url(main-bg.webp)" }}
        //style={{ backgroundImage: "url(/bg-2.jpg)" }}
        //style={{ backgroundImage: "url(/mountains.jpg)" }}
        //style={{ backgroundImage: "url(bg-3.jpg)" }}
        // style={{ backgroundImage: "url(atombg-comp.webp" }}
      >
        <div className="pl-10 md:pl-14 xl:pl-36 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className="xl:text-[60px] md:text-[50px] text-balance text-[30px] text-neutral-300 font-semibold capitalize">
            Design and build{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-purple-400 animate-pulse">
              beautiful and responsive websites
            </span>
          </h1>
          <p className="text-gray-200 hidden md:block">
            I specialize in crafting beautiful and functional websites using
            modern technologies like React, Next.js, Tailwind CSS and various
            frameworks. I am skilled at front-end web development, ensuring
            exceptional user experience and robust performance.
          </p>

          <div className="flex-col md:flex-row hidden md:flex gap-5">
            <Link
              href="https://portfolio-benjamin-sigma.vercel.app/"
              className="rounded-[20px] group relative bg-gradient-to-r from-cyan-700 to-purple-500 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              View my portfolio
            </Link>
            <Link
              href="/my-projects"
              className="rounded-[20px] group relative bg-trasparent px-5 border border-white py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
              Discover my creative solutions
            </Link>
            <Link
              href="/contact-me"
              className="rounded-[20px] group relative bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
              Schedule a consultation
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute flex bottom-10 z-[20] right-28 flex-col justify-center md:hidden gap-5">
        <Link
          href="/my-skills"
          className="rounded-[20px] group bg-gradient-to-r from-purple-500 to-cyan-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
        >
          Learn More
        </Link>

        <Link
          href="/my-projects"
          className="rounded-[20px] grou bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
        >
          My Projects
        </Link>

        <Link
          href="/contacts-me"
          className="rounded-[20px] grou bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
        >
          Contact Me
        </Link>
      </div>

      <div className="absolute bottom-0 right-0 z-[10]">
        <Image
          src="/horse.png"
          alt="horse"
          height={300}
          width={300}
          className="absolute right-55 top-40"
        />
        <Image src="/cliff.webp" alt="cliff" width={480} height={480} />
      </div>

      <div className="absolute bottom-0 z-5 w-full h-auto">
        <Image
          src="/trees.webp"
          alt="trees"
          width={2000}
          height={2000}
          className="w-full h-full"
        />
      </div>
      <Image
        src="/stars.png"
        alt="stars"
        height={300}
        width={300}
        className="absolut z-10"
      />
      <Image
        src="/stars.png"
        alt="stars"
        height={300}
        width={300}
        className="absolute top-10 left-0 z-10"
      />
    </main>
  );
}
