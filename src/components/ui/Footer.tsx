import React from "react";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <div className="dark:text-neutral-400 flex items-center justify-between">
      <aside>
        <p>&copy; 2025 My App. All rights reserved.</p>
      </aside>
      <aside>
        <SocialIcons />
      </aside>
    </div>
  );
};

export default Footer;
