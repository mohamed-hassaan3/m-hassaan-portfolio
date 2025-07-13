import { AnimationButtonProps } from "@/types/animation";
import React from "react";
import Magnet from "@/components/ui/animation/Magnet";
import Link from "next/link";

const AnimationButton = ({ children, className, href }: AnimationButtonProps) => {
  return (
    <Magnet padding={50} disabled={false} magnetStrength={2}>
      <Link href={href} className={className}>
        {children}
      </Link>
    </Magnet>
  );
};

export default AnimationButton;
