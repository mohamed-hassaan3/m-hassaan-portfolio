"use client";
import BlurText from "@/components/ui/animation/BlurText";
import CurvedLoop from "@/components/ui/animation/CurvedLoop";
import ShinyText from "@/components/ui/animation/ShinyText";
import AnimationButton from "@/components/ui/AnimationButton";
import { BackgroundBeams } from "@/components/ui/background-beams";
import React from "react";

export function Hero() {
  return (
    <div className="min-h-dvh flex flex-col justify-center w-full rounded-md dark:bg-neutral-950 relative items-center antialiased">
      {/* INTERDOUCTION CONTENT */}
      <div className="max-w-2xl mx-auto p-4 min-h-[calc(100vh-500px)] ">
        <ShinyText
          text="Frontend Engineer"
          disabled={false}
          speed={3}
          className="custom-class sm:text-6xl text-3xl text-center font-semibold whitespace-nowrap py-1"
        />

        <BlurText
          text="I work with brands globally to build pixel-perfect, engaging, and accessible digital experiences that drive results and achieve business goals."
          delay={150}
          animateBy="words"
          direction="top"
          className="dark:text-neutral-200 max-w-lg mx-auto my-2 text-sm text-center relative z-10"
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
      <AnimationButton href="/about" className="border border-white py-4 px-8 rounded-full font-semibold">
        Know me better
      </AnimationButton>
    </div>
  );
}
