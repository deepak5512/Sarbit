"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DynamicIcon, type IconName } from "lucide-react/dynamic";
import Link from "next/link";

type FAQItem = {
  id: string;
  icon: IconName;
  question: string;
  answer: string;
};

export default function FAQsThree() {
  const faqItems: FAQItem[] = [
    {
      id: "item-1",
      icon: "cpu", // Changed icon
      question: "What does Sarbit Innovations specialize in?", // Changed question
      answer:
        "Sarbit Innovations is dedicated to pioneering advancements in nanosensor technology for early disease diagnosis and monitoring food adulteration.", // Changed answer
    },
    {
      id: "item-2",
      icon: "target", // Changed icon
      question: "What is the mission of Sarbit Innovations?", // Changed question
      answer:
        "Their mission is to transform health and safety through sensor innovation, focusing on advancing sensor technologies for early disease diagnosis and monitoring food adulteration to ensure a healthier, safer world.", // Changed answer
    },
    {
      id: "item-3",
      icon: "box", // Changed icon
      question: "What products and services does Sarbit Innovations offer?", // Changed question
      answer:
        "Sarbit Innovations specializes in advanced products and services, including nano and biosensors for early disease detection, SERS substrates, thin film coatings, customized micropatterning solutions, wafer dicing, and wire bonding.", // Changed answer
    },
    {
      id: "item-4",
      icon: "award", // Changed icon
      question: "What is the origin of Sarbit Innovations?", // Changed question
      answer:
        "Sarbit Innovations is a Deep Tech startup from the Medical Technologies Program by IIT Jodhpur & AIIMS Jodhpur.", // Changed answer
    },
    {
      id: "item-5",
      icon: "map-pin", // Changed icon
      question: "Where is Sarbit Innovations located?", // Changed question
      answer:
        "Sarbit Innovations Pvt. Ltd. is located at TISC, IIT Jodhpur, Karwar, Jodhpur, Rajasthan, 342037.", // Changed answer
    },
  ];

  return (
    <section className="dark:bg-background py-20">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:gap-16">
          <div className="md:w-1/3">
            <div className="sticky top-20">
              <h2 className="mt-4 text-3xl font-bold">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground mt-4">
                Can&#39;t find what you&#39;re looking for? Contact our{" "}
                <Link
                  href="/contact"
                  className="text-primary font-medium hover:underline"
                >
                  customer support team
                </Link>
              </p>
            </div>
          </div>
          <div className="md:w-2/3">
            <Accordion type="single" collapsible className="w-full space-y-2">
              {faqItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="bg-background rounded-lg border px-4 shadow-xs last:border-b"
                >
                  <AccordionTrigger className="cursor-pointer items-center py-5 hover:no-underline">
                    <div className="flex items-center gap-3">
                      <div className="flex size-6">
                        <DynamicIcon
                          name={item.icon}
                          className="m-auto size-4"
                        />
                      </div>
                      <span className="text-base">{item.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5">
                    <div className="px-9">
                      <p className="text-base">{item.answer}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
