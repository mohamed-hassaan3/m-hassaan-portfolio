import React from "react";
import StarBorder from "./animation/StrarBorder";
import { DynamicIcon } from "lucide-react/dynamic";

const SocialIcons = () => {
  return (
    <div className="flex items-center gap-4">
      <StarBorder as="button" className="custom-class " color="cyan" speed="5s">
        <a target="_blank" href="https://github.com/mohamed-hassaan3">
          <DynamicIcon name="github" color="gray" size={24} />
        </a>
      </StarBorder>
      <StarBorder as="button" className="custom-class " color="cyan" speed="5s">
        <a target="_blank" href="https://www.linkedin.com/in/mohamed-hassaan3">
          <DynamicIcon name="linkedin" color="gray" size={24} />
        </a>
      </StarBorder>
      <StarBorder as="button" className="custom-class " color="cyan" speed="5s">
        <a href={"mailto: mmhassaan3@gmail.com"}>
          <DynamicIcon name="mail" color="gray" size={24} />
        </a>
      </StarBorder>
    </div>
  );
};

export default SocialIcons;
