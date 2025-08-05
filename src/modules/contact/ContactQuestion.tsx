import { Accordion, Title } from "@/components/ui";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { questions } from "@/data/data";
import { QuestionsProps } from "@/types/data";
import { Sparkle } from "lucide-react";
import React from "react";

const ContactQuestion = () => {
  return (
    <article className="sm:my-32 my-16 m-auto sm:w-[80%] lg:flex sm:gap-12 gap-4">
      <section className="*:float-left flex flex-col justify-start items-start sm:space-y-4 col-span-2 mb-4 lg:w-[40%]">
        <Title
          text="FAQS"
          icon={<Sparkle color={"var(--highlight)"} size={30} />}
        />
        <h1 className="md:text-4xl text-xl lg:font-semibold lg:leading-12  sm:tracking-wider w-full">
          Have Questions?
        </h1>
      </section>
      <section className="flex-1 lg:w-[60%]">
        <section className="my-2">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
          >
            {questions &&
              questions.map((question: QuestionsProps) => (
                <AccordionItem
                  key={question.id}
                  value={`item-${question.id}`}
                  className="w-full "
                >
                  <AccordionTrigger className="!cursor-pointer font-bold tracking-wider hover:opacity-75 flex items-center gap-2 md:gap-4 mb-2">
                    {question.question}
                  </AccordionTrigger>
                  <div className="flex flex-col md:flex-row gap-2 md:gap-6 *:leading-7 tracking-wide *:text-neutral-400">
                    <AccordionContent>{question.answer}</AccordionContent>
                  </div>
                </AccordionItem>
              ))}
          </Accordion>
        </section>
      </section>
    </article>
  );
};

export default ContactQuestion;
