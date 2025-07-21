import React from "react";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <div className="dark:text-neutral-400 sm:flex space-y-4 sm:space-y-0 items-center justify-between">
      <aside className="text-xs sm:text-md">
        <p>&copy; 2025 My App. All rights reserved.</p>
      </aside>
      <aside>
        <SocialIcons />
      </aside>
    </div>
  );
};

export default Footer;
