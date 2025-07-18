import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/../public/assets/logo.webp";
import { ModeToggle } from "../theme/ModeToggle";

const Header = () => {
  return (
    <header className="flex items-center justify-between dark:text-neutral-400">
      <aside>
        <Link href={"/"}>
          <Image src={logo} width={45} height={25} alt="logo" />
        </Link>
      </aside>
      <nav className="flex items-center sm:gap-6 gap-4 *:hover:dark:text-neutral-200 sm:*:px-3 *:px-1">
        <Link href={"/"}>Home</Link>
        <Link href={"/projects"}>Projects</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/contact"}>Contact</Link>
      </nav>
      <aside>
        <ModeToggle />
      </aside>
    </header>
  );
};

export default Header;
