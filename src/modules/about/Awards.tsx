import { Title } from "@/components/ui";
import { Sparkle } from "lucide-react";
import React from "react";

const Awards = () => {
  return (
    <article className="my-16 m-auto lg:grid grid-cols-6 gap-12">
      <section className="*:float-left flex flex-col justify-start items-start space-y-4 col-span-2 mb-4">
        <Title
          text="AWARDS"
          icon={<Sparkle color={"var(--highlight)"} size={30} />}
        />
        <h1 className="lg:text-4xl lg:font-semibold leading-12">
          Awards & Certifications
        </h1>
      </section>
      <section className="col-span-4">
        <ul className="*:border-b *:py-4 tracking-widest">
          <li className="flex jusitfy-between *:text-[12px]">
            <p className="w-1/2 leading-6 font-semibold">
              <span className="text-[#b5ff6d]">IBM</span> Solution Designer -
              Rational Software Architect
            </p>
            <a
              className="ml-auto hover:underline text-neutral-300"
              href="https://skills.yourlearning.ibm.com/activity/ILB-RKEVKEEWNQZVV8JV"
              target="_blank"
            >
              OCT 2024
            </a>
          </li>
          <li className="flex jusitfy-between *:text-[12px]">
            <p className="w-1/2 leading-6 font-semibold">
              <span className="text-[#b5ff6d]">Codecdemy </span>
              Building Interactive JavaScript Websites Course
            </p>
            <a
              className="ml-auto hover:underline text-neutral-300"
              href="https://www.codecademy.com/profiles/MuhammadHassaan3/certificates/36ae898a1d1c8524815305b2d1d2ebab"
              target="_blank"
            >
              FEB 2021
            </a>
          </li>
          <li className="flex jusitfy-between *:text-[12px]">
            <p className="w-1/2 leading-6 font-semibold">
              <span className="text-[#b5ff6d]">Udacity </span>
              Earn a Certificate from Dubai 1Million Arab Coder Web Developer
            </p>
            <a
              className="ml-auto hover:underline text-neutral-300"
              href="https://www.dubaifuture.ae/initiatives/capacity-building/one-million-arab-coders"
              target="_blank"
            >
              JUL 2020
            </a>
          </li>
          <li className="flex jusitfy-between *:text-[12px]">
            <p className="w-1/2 leading-6 font-semibold">
              <span className="text-[#b5ff6d]">Test Dome </span>
              Passed the Public Test Ranking in the 25%
            </p>
            <a
              className="ml-auto hover:underline text-neutral-300"
              href="https://www.testdome.com/certificates/932bb3895b5749249a7eaf5a3a891a2b"
              target="_blank"
            >
              JAN 2023
            </a>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default Awards;
