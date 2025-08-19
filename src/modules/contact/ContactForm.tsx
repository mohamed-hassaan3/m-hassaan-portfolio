"use client";
import { Title } from "@/components/ui";
import { Sparkle } from "lucide-react";
import React, { ChangeEvent, useState } from "react";
import { SplitText } from "@/components/ui/animation";
import { SubmitHandler, useForm } from "react-hook-form";
import CaontactCard from "./ContactCard";

const ContactForm = () => {
  const [userValue, setUserValue] = useState<UserValueProps>({
    id: new Date(),
    name: "",
    email: "",
    message: "",
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UserValueProps>();
  const [isSuccess, setIsSuccess] = useState(false);

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

  const onSubmit: SubmitHandler<UserValueProps> = async () => {
    const { name, email, message } = userValue;
    if (!name || !email || !message) return;

    // Send message to you
    const received = await fetch("/api/receiveEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    }).then((res) => res.json());

    // Send confirmation to client
    const sent = await fetch("/api/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email }),
    }).then((res) => res.json());

    if (received.success && sent.success) {
      setIsSuccess(true);
      setUserValue({
        id: new Date(),
        name: "",
        email: "",
        message: "",
      });
    } else {
      console.log("Error: Email failed to send.");
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
        {isSuccess ? (
          <SplitText
            text={"Email Sent, Thanks!"}
            className="md:text-2xl text-lg text-center text-[var(--highlight)] my-12 md:my-auto flex content-center"
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
        ) : (
          <form
            className="flex flex-col w-full mb-6 md:mb-0 *:text-base"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="sm:my-2 my-1">
              <label>Full Name</label>
              <input
                {...register("name", { required: true })}
                value={userValue.name || ""}
                onChange={handleChange}
                name="name"
                type="text"
                className={`border outline-none rounded-[6px] mt-1 w-full p-2 ${
                  errors.name && "border-red-500"
                }`}
              />
              {errors.name && (
                <small className="text-xs text-red-500">Name is required</small>
              )}
            </div>
            <div className="sm:my-2 my-1">
              <label>Email</label>
              <input
                {...register("email", { required: true })}
                value={userValue.email || ""}
                onChange={handleChange}
                name="email"
                type="email"
                className={`border outline-none rounded-[6px] mt-1 w-full p-2 ${
                  errors.email && "border-red-500"
                }`}
              />
              {errors.email && (
                <small className="text-xs text-red-500">
                  Email is required
                </small>
              )}
            </div>
            <div className="sm:my-2 my-1">
              <label>Message</label>
              <textarea
                {...register("message", { required: true })}
                value={userValue.message || ""}
                onChange={handleChange}
                name="message"
                className={`border outline-none rounded-[6px] mt-1 w-full p-2 min-h-24 max-h-60 ${
                  errors.message && "border-red-500"
                }`}
                rows={4}
              />
              {errors.message && (
                <small className="text-xs text-red-500">
                  Message is required
                </small>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`${
                isSubmitting
                  ? "cursor-not-allowed hover:bg-none"
                  : "cursor-pointer hover:bg-neutral-700"
              } border border-white py-2 px-4 rounded-2xl mr-auto`}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        )}
        <aside>
          <CaontactCard />
        </aside>
      </section>
    </article>
  );
};

export default ContactForm;
