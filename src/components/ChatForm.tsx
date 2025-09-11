import { Send } from "lucide-react";
import React from "react";

const ChatForm = (props: ChatFormProps) => {
  const { input, setInput, isSending, handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit} className="flex items-center">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="p-2 w-full outline-none resize-none h-24 no-scrollbar"
      />
      <button
        type="submit"
        disabled={isSending}
        className="bg-white p-2 rounded-full text-neutral-800 float-right m-2 cursor-pointer hover:scale-105"
      >
        <Send size={18} />
      </button>
    </form>
  );
};

export default ChatForm;
