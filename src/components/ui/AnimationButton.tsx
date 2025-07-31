import { AnimationButtonProps } from "@/types/animation";
import React from "react";
import Link from "next/link";
import { HoverBorderGradient, Magnet } from "./animation";

const AnimationButton = ({
  children,
  className,
  href,
}: AnimationButtonProps) => {
  return (
    <div className="m-12 flex justify-center text-center">
      <Magnet padding={50} disabled={false} magnetStrength={2}>
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
        >
          <Link
            href={href}
            className={`${className} space-x-2 text-xs sm:text-md whitespace-nowrap `}
          >
            {children}
          </Link>
        </HoverBorderGradient>
      </Magnet>
    </div>
  );
};

export default AnimationButton;
