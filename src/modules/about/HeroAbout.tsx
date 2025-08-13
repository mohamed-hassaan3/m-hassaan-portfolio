"use client";
import Image from "next/image";
import React from "react";
import PROFILE_IMG from "../../../public/images/profile-img.webp";
import { skills } from "@/data/data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import {
  InfintyMovingSkills,
  CircularText,
  BlurText,
  HoverBorderGradient,
  Magnet,
} from "@/components/ui/animation";

const Hero = () => {
  return (
    <article className="min-h-dvh relative flex">
      <section className="w-full lg:flex items-center justify-center gap-12 space-y-4 md:space-y-0">
        <aside className="xl:w-[40%] lg:w-[50%] relative md:shrink-0">
          <Image
            src={PROFILE_IMG}
            width={300}
            height={600}
            alt="profile_img"
            className="w-full object-cover rounded-b-full relative lg:top-14 lg:ml-3"
          />
          <Link href={"/contact"} className="hidden xl:block">
            <div className="absolute p-7 right-0 bottom-12 z-20 border border-neutral-200 rounded-full hover:-rotate-45 translate duration-75 text-neutral-200">
              <ArrowRight />
            </div>
            <CircularText
              text=" Lets * Build * Creative * APP * "
              onHover="pause"
              spinDuration={20}
              className="custom-class !absolute bottom-0 -right-12 bg-neutral-800 !p-12 !font-thin"
            />
          </Link>
        </aside>
        <aside className="xl:w-[60%] lg:w-[50%] md:shrink-0 *:float-left xl:*:float-none">
          <BlurText
            text="Frontend Engineer"
            className="md:text-xl text-sm font-semibold tracking-wider dark:text-neutral-400 text-neutral-950"
          />
          <BlurText
            text={`I'm  Mohamed, Passionate Frontend Engineer skilled in React.js, Next.js, Redux, and Strapi for headless CMS. I craft responsive, user-focused interfaces with HTML, CSS, Tailwind, and Sass, while leveraging Jest for testing and CI/CD pipelines for seamless deployment. I deliver polished, end-to-end web solutions that blend technical precision with stunning design.`}
            delay={150}
            animateBy="words"
            direction="bottom"
            className="dark:text-neutral-200 md:max-w-2xl mx-auto xl:mx-0 my-2 text-[11px] md:text-sm lg:text-base text-center relative z-10 sm:leading-8 leading-5 tracking-wider font-extralight "
          />
          <Magnet padding={50} disabled={false} magnetStrength={2} className="px-2 sm:text-lg  m-12 flex justify-center text-center">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
            >
              <a
                href="https://docs.google.com/document/d/1-FAKUAzzpyFfYhI-qBLrKI_o76KxHXEt/edit"
                target="_blank"
              >
                Resume
              </a>
            </HoverBorderGradient>
          </Magnet>
        </aside>
      </section>
      <section className="xl:-bottom-6 -bottom-4 absolute border-y xl:border-none">
        <InfintyMovingSkills items={skills} />
      </section>
    </article>
  );
};

export default Hero;
