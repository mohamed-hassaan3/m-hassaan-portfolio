import { Layout } from "@/modules";
import { HeroAbout } from "@/modules/about";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About",
};

const page = () => {
  return (
    <Layout>
      <HeroAbout />
    </Layout>
  );
};

export default page;
