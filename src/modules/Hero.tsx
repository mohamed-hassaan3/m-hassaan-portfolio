"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import React from "react";

export function Hero() {
  return (
    <div className="min-h-[calc(100vh-100px)] flex flex-col justify-center w-full rounded-md dark:bg-neutral-950 relative items-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold whitespace-nowrap">
          Frontend Engineer
        </h1>
        <p></p>
        <p className="dark:text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          I work with brands globally to build pixel-perfect, engaging, and
          accessible digital experiences that drive results and achieve business
          goals.
        </p>
      </div>
      <BackgroundBeams />
    </div>
  );
}
