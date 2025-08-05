import { HeroHighlight, SocialIcons, Title } from "@/components/ui";
import { Sparkle } from "lucide-react";
import Image from "next/image";
import React from "react";
import PROFILE from "../../../public/images/profile-img.webp";
const ContactForm = () => {
  return (
    <article className="sm:my-32 my-16 m-auto sm:w-[80%]">
      <section className="*:float-left flex flex-col justify-start items-start sm:space-y-4 col-span-2 mb-4">
        <Title
          text="CONTACT WITH ME"
          icon={<Sparkle color={"var(--highlight)"} size={30} />}
        />
        <h1 className="md:text-4xl text-xl lg:w-[60%] lg:font-semibold lg:leading-12  sm:tracking-wider">
          Let&apos;s start a project together
        </h1>
      </section>
      <section className="md:mt-24 lg:grid grid-cols-2 sm:gap-6 gap-2 inset-0">
        <form className="flex flex-col w-full mb-6 md:mb-0">
          <div className="my-2">
            <label>Full Name</label>
            <input
              className="border outline-none rounded-[6px] mt-1 w-full p-2"
              type="text"
            />
          </div>
          <div className="my-2">
            <label>Email</label>
            <input
              className="border outline-none rounded-[6px] mt-1 w-full p-2"
              type="email"
            />
          </div>
          <div className="my-2">
            <label>Message</label>
            <textarea
              className="border outline-none rounded-[6px] mt-1 w-full p-2 min-h-24 max-h-60"
              rows={4}
            />
          </div>
          <input
            type="submit"
            value="Submit"
            className="border border-white hover:bg-neutral-700 cursor-pointer py-2 px-4 rounded-2xl mr-auto"
          />
        </form>
        <HeroHighlight className="w-full !grid grid-cols-1 grid-rows-4 items-center relative">
          <div className=" absolute p-4 flex flex-col xl:gap-4 gap-2 overflow-hidden">
            <div className="sm:tracking-widest bg-neutral-950 w-fit p-2 rounded-4xl text-neutral-300">
              Available for Work
            </div>
            <div className="border border-neutral-500 rounded-full w-fit p-4">
              <Image
                src={PROFILE}
                width={400}
                height={400}
                alt="profile"
                className="rounded-full w-16 h-16 object-cover"
              />
            </div>
            <h3 className="text-[12px] tracking-wider md:leading-6">
              My inbox is always open, Whether you have a project or just want
              to say Hi. I would love to hear from you. Feel free to contact me
              and I&apos;ll get back to you.
            </h3>
            <div>
              <SocialIcons />
            </div>
          </div>
        </HeroHighlight>
      </section>
    </article>
  );
};

export default ContactForm;
