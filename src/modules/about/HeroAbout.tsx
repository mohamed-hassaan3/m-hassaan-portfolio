"use client";
import Image from "next/image";
import React from "react";
import PROFILE_IMG from "../../../public/images/profile-img.webp";
import { Title, AnimationButton } from "@/components/ui";
import { skills } from "@/data/data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import {
  InfintyMovingSkills,
  CircularText,
  BlurText,
} from "@/components/ui/animation";

const Hero = () => {
  return (
    <article className="min-h-dvh relative flex">
      <section className="w-full lg:flex items-center justify-center gap-12 space-y-12 md:space-y-0">
        <aside className="xl:w-[40%] lg:w-[50%] relative md:shrink-0">
          <Image
            src={PROFILE_IMG}
            width={300}
            height={600}
            alt="profile_img"
            className="w-full object-cover rounded-b-full md:mb-12 sm:mb-6 relative"
          />
          <Link href={"/contact"} className="hidden xl:block">
            <div className="absolute p-7 right-0 bottom-12 z-20 border rounded-full hover:-rotate-45 translate duration-75">
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
        <aside className="xl:w-[60%] lg:w-[50%] md:shrink-0 *:float-left">
          <Title text="Frontend Engineer" />
          <BlurText
            text={`I'm  Mohamed, Passionate Frontend Engineer skilled in React.js, Next.js, Redux, and Strapi for headless CMS. I craft responsive, user-focused interfaces with HTML, CSS, Tailwind, and Sass, while leveraging Jest for testing and CI/CD pipelines for seamless deployment. I deliver polished, end-to-end web solutions that blend technical precision with stunning design.`}
            delay={150}
            animateBy="words"
            direction="bottom"
            className="dark:text-neutral-200 md:max-w-2xl mx-auto my-2 text-sm lg:text-base text-center relative z-10 sm:leading-8 tracking-wider font-extralight "
          />
          <AnimationButton href="/" className="px-2 sm:text-lg">
            Resume
          </AnimationButton>
        </aside>
      </section>
      <section className="-bottom-6 absolute border-y">
        <InfintyMovingSkills items={skills} />
      </section>
    </article>
  );
};

export default Hero;
