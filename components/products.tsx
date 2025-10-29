"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ChartBarIncreasingIcon,
  Database,
  Fingerprint,
  IdCard,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BorderBeam } from "@/components/ui/border-beam";

export default function Products() {
  type ImageKey = "item-1" | "item-2" | "item-3" | "item-4";
  const [activeItem, setActiveItem] = useState<ImageKey>("item-1");

  const images = {
    "item-1": {
      image: "/products/medical.png",
      alt: "Medical Diagnostic Sensors & Systems",
    },
    "item-2": {
      image: "/products/micro.jpg",
      alt: "Micro/Nano Patterned Devices",
    },
    "item-3": {
      image: "/products/metal.jpg",
      alt: "Metals & Dielectric Coatings",
    },
    "item-4": {
      image: "/products/wafer.png",
      alt: "Wafer Dicing Services",
    },
  };

  return (
    <section className="py-12 md:py-20 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-linear-to-b sm:inset-6 sm:rounded-b-3xl dark:block dark:to-[color-mix(in_oklab,var(--color-zinc-900)_75%,var(--color-background))]"></div>
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 lg:space-y-20 dark:[--color-border:color-mix(in_oklab,var(--color-white)_10%,transparent)]">
        <div className="relative z-10 mx-auto max-w-3xl space-y-6 text-center">
          <h2 className="text-4xl font-semibold text-balance lg:text-6xl">
            Our Products & Services
          </h2>
          <p>
            Sarbit Innovations develops nano/biosensors, SERS substrates,
            thin-film coatings, micropatterning, and semiconductor solutions
            like wafer dicing and wire bonding.
          </p>
        </div>

        <div className="grid gap-12 sm:px-12 md:grid-cols-2 lg:gap-20 lg:px-0">
          <Accordion
            type="single"
            value={activeItem}
            onValueChange={(value) => setActiveItem(value as ImageKey)}
            className="w-full"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-base">
                  <Database className="size-4" />
                  Medical Diagnostic Sensors & Systems
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Nano Sensors & Systems for early diagnosis of various diseases.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-base">
                  <Fingerprint className="size-4" />
                  Micro/Nano Patterned Devices
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Utilizing photolithography, wet-etching, and lift-off methods to
                generate electrodes, sensors, and biosensors from patterned
                metal films.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-base">
                  <IdCard className="size-4" />
                  Metals & Dielectric Coatings
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Discover our proficiency in RF & DC Sputtering, e-beam and
                thermal evaporation of various metals & dielectrics.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-base">
                  <ChartBarIncreasingIcon className="size-4" />
                  Wafer Dicing Services
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Explore our expertise in the cutting and singulation of various
                materials, including glass and silicon wafers.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="bg-background relative flex overflow-hidden rounded-3xl border p-2">
            <div className="absolute inset-0 right-0 ml-auto w-15 border-l bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_8px)]"></div>
            <div className="bg-background relative aspect-76/59 w-[calc(3/4*100%+3rem)] rounded-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeItem}-id`}
                  initial={{ opacity: 0, y: 6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="size-full overflow-hidden rounded-2xl border bg-zinc-900 shadow-md"
                >
                  <Image
                    src={images[activeItem].image}
                    className="size-full object-cover object-top-left dark:mix-blend-lighten"
                    alt={images[activeItem].alt}
                    width={1207}
                    height={929}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            <BorderBeam
              duration={6}
              size={200}
              className="from-transparent via-yellow-700 to-transparent dark:via-white/50"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
