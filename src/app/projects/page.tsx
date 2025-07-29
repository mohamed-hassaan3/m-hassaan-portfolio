import { Layout } from "@/modules";
import { Metadata } from "next";
import React from "react";


export const metadata: Metadata = {
  title: "Projects",
};


const page = () => {
  return (
    <div>
      <Layout>Projects</Layout>
    </div>
  );
};

export default page;
