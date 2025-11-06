import { type IconName } from "lucide-react/dynamic";

export type FAQItem = {
  id: string;
  icon: IconName;
  question: string;
  answer: string;
};

export const faqItems: FAQItem[] = [
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
      "Sarbit Innovations is a deep-tech startup which emerged from the Medical Technologies program, a joint initiative of AIIMS Jodhpur and IIT Jodhpur.", // Changed answer
  },
  {
    id: "item-5",
    icon: "map-pin", // Changed icon
    question: "Where is Sarbit Innovations located?", // Changed question
    answer:
      "Sarbit Innovations Pvt. Ltd. is located at TISC, IIT Jodhpur, Karwar, Jodhpur, Rajasthan, 342037.", // Changed answer
  },
];
