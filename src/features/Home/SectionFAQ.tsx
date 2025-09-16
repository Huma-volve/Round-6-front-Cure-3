import { Tag } from "@/components/shared";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SectionFAQ = () => {
  return (
    <section id="faq">
      <Tag text="Frequently Asked Questions" />
      <h2 className="text-3xl md:text-[40px] text-center mt-4 mb-12">
        Got Questions ? We’ve got Answers!
      </h2>
      <Accordion
        className="flex flex-col gap-4 max-w-[800px] mx-auto"
        type="single"
        collapsible
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-base md:text-lg lg:text-2xl p-4 bg-Background-Neutral-Lightest rounded-[8px]">
            What is this app used for?
          </AccordionTrigger>
          <AccordionContent className="text-base md:text-lg lg:text-2xl p-4 bg-Background-Neutral-Lightest text-shadow-Text-Neutral-Darker">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="text-base md:text-lg lg:text-2xl p-4 bg-Background-Neutral-Lightest rounded-[8px]">
            Is the app free to use?
          </AccordionTrigger>
          <AccordionContent className="text-base md:text-lg lg:text-2xl p-4 bg-Background-Neutral-Lightest text-shadow-Text-Neutral-Darker">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="text-base md:text-lg lg:text-2xl p-4 bg-Background-Neutral-Lightest rounded-[8px]">
            How can I find a doctor?
          </AccordionTrigger>
          <AccordionContent className="text-base md:text-lg lg:text-2xl p-4 bg-Background-Neutral-Lightest text-shadow-Text-Neutral-Darker">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger className="text-base md:text-lg lg:text-2xl p-4 bg-Background-Neutral-Lightest rounded-[8px]">
            Can I cancel my appointment?
          </AccordionTrigger>
          <AccordionContent className="text-base md:text-lg lg:text-2xl p-4 bg-Background-Neutral-Lightest text-shadow-Text-Neutral-Darker">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger className="text-base md:text-lg lg:text-2xl p-4 bg-Background-Neutral-Lightest rounded-[8px]">
            What payment are supported
          </AccordionTrigger>
          <AccordionContent className="text-base md:text-lg lg:text-2xl p-4 bg-Background-Neutral-Lightest text-shadow-Text-Neutral-Darker">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger className="text-base md:text-lg lg:text-2xl p-4 bg-Background-Neutral-Lightest rounded-[8px]">
            How do I edit my profile?
          </AccordionTrigger>
          <AccordionContent className="text-base md:text-lg lg:text-2xl p-4 bg-Background-Neutral-Lightest text-shadow-Text-Neutral-Darker">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default SectionFAQ;
