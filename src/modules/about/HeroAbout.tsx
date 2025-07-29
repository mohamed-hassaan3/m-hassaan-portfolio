"use client";
import Image from "next/image";
import React from "react";
import PROFILE_IMG from "../../../public/images/profile-img.webp";
import Title from "@/components/ui/Title";
import BlurText from "@/components/ui/animation/BlurText";
import AnimationButton from "@/components/ui/AnimationButton";
import CircularText from "@/components/ui/animation/CircularText";
import InfintyMovingSkills from "@/components/InfintyMovingSkills";
import { skills } from "@/data/data";
const Hero = () => {
  return (
    <article className="min-h-dvh m-auto sm:w-[80%] relative flex">
      <section className="w-full md:absolute top-1/2 left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:flex items-center justify-center gap-12 space-y-12 md:space-y-0">
        <aside className="xl:w-[35%] relative">
          <Image
            src={PROFILE_IMG}
            width={300}
            height={600}
            alt="profile_img"
            className="w-full h-[400] sm:h-[600]  object-cover rounded-b-full "
          />
          <CircularText
            text=" Lets * Build * Creative * APP * "
            onHover="speedUp"
            spinDuration={20}
            className="custom-class !absolute -bottom-12 -right-12 bg-neutral-800 !p-12 !font-thin hidden xl:block"
          />
        </aside>
        <aside className="xl:w-[65%] *:float-left">
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
