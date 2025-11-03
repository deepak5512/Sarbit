"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { collaboratorsData } from "@/data/collaboratorsData";

const Collaborators = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider && slider.children.length === collaboratorsData.length) {
      slider.innerHTML += slider.innerHTML;
    }
  }, []);

  return (
    <section className="overflow-hidden py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="mb-10 text-4xl font-semibold text-balance md:text-5xl lg:text-5xl">
          Our Collaborators
        </h2>

        <div className="relative w-full overflow-hidden">
          {/* Gradient blur on both ends */}
          <div className="from-background pointer-events-none absolute top-0 left-0 z-10 h-full w-24 bg-linear-to-r to-transparent" />
          <div className="from-background pointer-events-none absolute top-0 right-0 z-10 h-full w-24 bg-linear-to-l to-transparent" />

          <div
            ref={sliderRef}
            className="animate-marquee flex items-center gap-12"
          >
            {collaboratorsData.map((collaborator, index) => (
              <div
                key={index}
                className="flex shrink-0 items-center justify-center"
              >
                <Link
                  href={collaborator.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={collaborator.src}
                    alt={`${collaborator.name} Logo`}
                    height={100}
                    width={150}
                    className={`mx-auto h-16 w-auto object-contain ${
                      collaborator.name === "MedTech" ? "dark:invert" : ""
                    }`}
                    priority
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaborators;
