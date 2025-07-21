import React from "react";
import ShinyText from "./animation/ShinyText";

const Title = ({ text, icon }: TitleProps) => {
  return (
    <>
      <ShinyText
        text={text}
        icon={icon}
        disabled={false}
        speed={3}
        className="custom-class sm:text-2xl text-xl text-center font-semibold whitespace-nowrap py-1 flex flex-row-reverse items-center justify-center gap-2"
      />
    </>
  );
};

export default Title;
