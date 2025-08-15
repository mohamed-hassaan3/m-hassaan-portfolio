import { HeroHighlight, SocialIcons } from "@/components/ui";
import Image from "next/image";
import React from "react";
import PROFILE from "../../../public/images/profile-img.webp";

const CaontactCard = () => {
  return (
    <HeroHighlight className="w-full !grid grid-cols-1 grid-rows-4 items-center relative">
      <div className=" absolute p-4 flex flex-col xl:gap-4 gap-2 overflow-hidden">
        <div className="sm:tracking-widest bg-neutral-950 w-fit p-2 rounded-4xl text-neutral-300">
          Available for Work
        </div>
        <div className="border border-neutral-500 rounded-full w-fit p-4">
          <Image
            src={PROFILE}
            width={400}
            height={400}
            alt="profile"
            className="rounded-full w-16 h-16 object-cover"
          />
        </div>
        <h3 className="text-[12px] tracking-wider md:leading-6">
          My inbox is always open, Whether you have a project or just want to
          say Hi. I would love to hear from you. Feel free to contact me and
          I&apos;ll get back to you.
        </h3>
        <div>
          <SocialIcons />
        </div>
      </div>
    </HeroHighlight>
  );
};

export default CaontactCard;
