import { ShinyTextProps } from "@/types/animation";
import React from "react";
import AnimatedContent from "./AnimatedContent";

const ShinyText: React.FC<ShinyTextProps> = ({
  icon,
  text,
  disabled = false,
  speed = 5,
  className = "",
}) => {
  const animationDuration = `${speed}s`;
  return (
    <AnimatedContent
      distance={150}
      direction="vertical"
      reverse={false}
      duration={1.2}
      ease="bounce.out"
      initialOpacity={0}
      animateOpacity
      scale={1.1}
      threshold={0.2}
      delay={0.3}
    >
      <div
        className={`dark:text-[#b5b5b5a4] bg-clip-text ${
          disabled ? "" : "animate-shine"
        } ${className}`}
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)",
          backgroundSize: "200% 100%",
          WebkitBackgroundClip: "text",
          animationDuration: animationDuration,
        }}
      >
        {text}
        {icon}
      </div>
    </AnimatedContent>
  );
};

export default ShinyText;
