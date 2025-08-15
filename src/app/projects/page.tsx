import { SubFooter } from "@/modules/home";
import Layout from "@/modules/Layout";
import Projects from "@/modules/projects/Projects";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Projects",
};

const page = () => {
  return (
    <Layout>
      <Projects />
      <SubFooter />
    </Layout>
  );
};

export default page;
