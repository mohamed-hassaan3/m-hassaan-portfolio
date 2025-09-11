export {};

declare global {
  type ResponsiveProps = {
    children: React.ReactNode;
    reset: string;
  };
  type TitleProps = {
    text: string;
    icon?: React.ReactNode;
  };
  type UserValueProps = {
    id?: Date;
    name: string;
    email: string;
    message: string;
  };
  // chatbot
  type ChatMessageProps = {
    role: "user" | "assistant";
    content: string;
  };
  type ChatFormProps = {
    handleSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
    input: string | number | readonly string[] | undefined;
    setInput: (arg0: string) => void;
    isSending: boolean | undefined;
  };
  type ChatConversionProps = {
    messages: ChatMessageProps[];
    isSending: boolean;
    endRef: React.RefObject<HTMLDivElement | null>;
  };
}
