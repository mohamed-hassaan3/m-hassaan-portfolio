"use client";
import { Title } from "@/components/ui";
import { Sparkle } from "lucide-react";
import CaontactCard from "./CaontactCard";
import React, { ChangeEvent, useState } from "react";
import { receiveEmail } from "@/utils/receiveEmail";
import { sendEmail } from "@/utils/sendEmail";
import { SplitText } from "@/components/ui/animation";

const ContactForm: React.FC<UserValueProps> = () => {
  const [userValue, setUserValue] = useState<UserValueProps>({
    id: new Date(),
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUserValue((prev) => ({
      ...prev,
      id: new Date(),
      [name]: value,
    }));
    console.log("FORM", userValue);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, message } = userValue;
    if (!name || !email || !message) {
      setStatus("Warning: Field is required");
      return;
    }
    const received = await receiveEmail(email, name, message);
    const sent = await sendEmail(email, name);
    if (received.success && sent.success) {
      setStatus("Success: Email sent, Thanks!");
      setUserValue({
        id: new Date(),
        name: "",
        email: "",
        message: "",
      });
    } else {
      setStatus("Error: Email failed to send.");
    }
  };

  return (
    <article className="sm:mt-32 mt-16 m-auto sm:w-[80%]">
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
        {!status.toLowerCase().includes("success") ? (
          <form
            className="flex flex-col w-full mb-6 md:mb-0 *:text-[13px]"
            onSubmit={handleSubmit}
          >
            <div className="my-2">
              <label>Full Name</label>
              <input
                value={userValue.name || ""}
                onChange={handleChange}
                name="name"
                className="border outline-none rounded-[6px] mt-1 w-full p-2"
                type="text"
              />
            </div>
            <div className="my-2">
              <label>Email</label>
              <input
                value={userValue.email || ""}
                onChange={handleChange}
                name="email"
                className="border outline-none rounded-[6px] mt-1 w-full p-2"
                type="email"
              />
            </div>
            <div className="my-2">
              <label>Message</label>
              <textarea
                value={userValue.message || ""}
                onChange={handleChange}
                name="message"
                className="border outline-none rounded-[6px] mt-1 w-full p-2 min-h-24 max-h-60"
                rows={4}
              />
            </div>
            <div className="flex justify-between sm:items-center">
              <button
                type="submit"
                value="Submit"
                className="border border-white hover:bg-neutral-700 cursor-pointer py-2 px-4 rounded-2xl mr-auto"
              >
                Submit
              </button>
              {status && (
                <p
                  className={`text-[10px] sm:text-base ${
                    status.toLocaleLowerCase().includes("error")
                      ? "text-red-600"
                      : status.toLocaleLowerCase().includes("warning")
                      ? "text-amber-600"
                      : "text-[var(--highlight)]"
                  } `}
                >
                  {status}
                </p>
              )}
            </div>
          </form>
        ) : (
          <SplitText
            text={status}
            className="md:text-2xl text-xl font-semibold text-center text-[var(--highlight)] my-12 md:my-auto flex content-center"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
        )}
        <aside>
          <CaontactCard />
        </aside>
      </section>
    </article>
  );
};

export default ContactForm;
