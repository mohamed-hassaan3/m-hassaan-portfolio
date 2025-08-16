import {
  Awards,
  DesignProcess,
  Eductian,
  Experience,
  HeroAbout,
} from "@/modules/about";
import { SubFooter } from "@/modules/home";
import Layout from "@/modules/Layout";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "About",
};

const page = () => {
  return (
    <Layout className="md:w-[80%] m-auto">
      <HeroAbout />
      <Experience />
      <DesignProcess />
      <Awards />
      <Eductian />
      <SubFooter />
    </Layout>
  );
};

export default page;
