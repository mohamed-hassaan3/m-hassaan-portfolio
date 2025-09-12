import Image from "next/image";
import React from "react";
import AVATAR from "../../public/images/profile-img.webp";
import { LoaderFive } from "@/components/ui/loader";
 
const ChatConversion = (props: ChatConversionProps) => {
  const { messages, isSending, endRef } = props;
  return (
    <article className="p-3 flex flex-col gap-3">
      {messages.map((message, index) => (
        <aside
          key={index}
          className={`${
            message.role === "user"
              ? " dark:bg-neutral-700 bg-neutral-300 w-fit ml-auto"
              : "mr-auto"
          } py-2 px-4 rounded-[12px] `}
        >
          {message.role === "assistant" && (
            <Image
              src={AVATAR}
              width={50}
              height={50}
              alt={message.role}
              className="rounded-full w-[50px] h-[50px] object-cover mb-1"
            />
          )}
          <p>{message.content}</p>
        </aside>
      ))}
      {isSending && (
        <aside className="mr-auto py-2 px-4 rounded-[12px] ">
          <Image
            src={AVATAR}
            width={50}
            height={50}
            alt="assistant"
            className="rounded-full w-[50px] h-[50px] object-cover mb-1"
          />
          <LoaderFive text="Hassaan Typing..." />
        </aside>
      )}
      <div ref={endRef} />
    </article>
  );
};

export default ChatConversion;
