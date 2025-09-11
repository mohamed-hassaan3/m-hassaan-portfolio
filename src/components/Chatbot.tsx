"use client";
import React, { useEffect, useRef, useState } from "react";
import ChatForm from "./ChatForm";
import ChatConversion from "./ChatConversion";
import { Bot, X } from "lucide-react";

const Chatbot = () => {
  const [input, setInput] = useState<string>("");
  const [messages, setMessages] = useState<ChatMessageProps[]>([]);
  const [isSending, setIsSending] = useState<boolean>(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const endRef = useRef<HTMLDivElement | null>(null);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setInput("");

    const trimmed = input.trim();
    if (!trimmed || isSending) return;

    // append user message optimistically
    setMessages((prev) => [...prev, { role: "user", content: trimmed }]);
    setIsSending(true);
    try {
      const response = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed }),
      });
      // Fallback to JSON if not streaming
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data?.error || "Failed to get response");
      }
      const assistantContent: string =
        typeof data?.replay?.content === "string"
          ? data.replay.content
          : Array.isArray(data?.replay?.content)
          ? data.replay.content
              .map((c: unknown) => {
                if (typeof c === "string") return c;
                if (typeof c === "object" && c !== null && "text" in c) {
                  const maybe = (c as { text?: unknown }).text;
                  return typeof maybe === "string" ? maybe : "";
                }
                return "";
              })
              .join("")
          : "";
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: assistantContent || "" },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `Sorry, something went wrong. Please try again. ${err}`,
        },
      ]);
    } finally {
      setIsSending(false);
      setInput("");
    }
  };
  const haveChat = true;
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isSending]);
  return (
    <>
      {/* Floating toggle button */}
      <button
        type="button"
        aria-label={isChatOpen ? "Close chat" : "Open chat"}
        onClick={() => setIsChatOpen((prev) => !prev)}
        className="fixed bottom-6 right-6 z-50 rounded-full bg-neutral-800 text-white shadow-lg hover:scale-105 transition-transform p-4"
      >
        {isChatOpen ? <X size={22} /> : <Bot size={22} />}
      </button>

      {isChatOpen && (
        <main className="relative">
          <section className="overflow-y-scroll no-scrollbar h-[50vh] w-[30%] fixed bottom-44 right-6 bg-neutral-800 z-40 rounded-t-2xl text-base">
            {haveChat ? (
              <ChatConversion messages={messages} isSending={isSending} endRef={endRef} />
            ) : (
              <article className="p-4 text-neutral-300 text-md">👋Hi there! I&apos;m here to answer questions related to Mohamed&apos;s Professional career and portfolio. Feel free to ask about his work experience, projects, skills, or any details his resume</article>
            )}
          </section>
          <section className="fixed bottom-20 z-40 bg-neutral-700 border-t shadow-md rounded-b-2xl right-6 w-[30%]">
            <ChatForm
              input={input}
              setInput={setInput}
              isSending={isSending}
              handleSubmit={handleSubmit}
            />
          </section>
        </main>
      )}
    </>
  );
};

export default Chatbot;
