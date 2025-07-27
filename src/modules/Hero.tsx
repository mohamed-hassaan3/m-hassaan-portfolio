"use client";
import BlurText from "@/components/ui/animation/BlurText";
import CurvedLoop from "@/components/ui/animation/CurvedLoop";
import ShinyText from "@/components/ui/animation/ShinyText";
import AnimationButton from "@/components/ui/AnimationButton";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";
import React from "react";
import LOGO from "../../public/assets/avatar.svg";

function Hero() {
  return (
    <div className="min-h-dvh flex flex-col justify-center w-full rounded-md dark:bg-neutral-950 relative items-center antialiased">
      {/* INTERDOUCTION CONTENT */}
      <div className="max-w-2xl mx-auto p-4 min-h-[calc(100vh-500px)] ">
        <ShinyText
          text="Frontend Engineer"
          disabled={false}
          speed={3}
          className="custom-class lg:text-6xl md:text-base  text-3xl text-center font-semibold whitespace-nowrap py-2 lg:tracking-wider"
        />

        <BlurText
          text={`I'm  Mohamed, and I work with brands  globally to build pixel-perfect, engaging, and accessible digital experiences that drive results and achieve business goals.`}
          delay={150}
          animateBy="words"
          direction="top"
          className="dark:text-neutral-200 max-w-lg mx-auto my-2 text-sm lg:text-base text-center relative z-10 sm:leading-6 tracking-wider font-extralight "
        />
      </div>
      {/* LOOP */}
      <div className=" absolute bottom-0 w-full z-30">
        <CurvedLoop
          marqueeText="Community ✦ Creative ✦ Development ✦ Websites ✦ Mentor ✦ Animations ✦ "
          speed={3}
          curveAmount={10}
          direction="left"
          interactive={true}
          className="custom-text-style"
        />
      </div>
      {/* BACKGROUND */}
      <BackgroundBeams />
      {/* BUTTON */}
      <div className=" absolute bottom-[25%]">
        <AnimationButton href="/about">
          <Image
            src={LOGO}
            alt="logo"
            width={12}
            height={12}
            className="hidden sm:inline lg:w-6"
          />
          <span className="lg:text-base text-[8px]">Know me better</span>
        </AnimationButton>
      </div>
    </div>
  );
}

export default Hero;
