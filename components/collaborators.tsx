"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const data = [
  {
    name: "AIIMS",
    src: "/collaborators/aiims.png",
    href: "https://www.aiims.edu/",
  },
  {
    name: "BIRAC",
    src: "/collaborators/birac.png",
    href: "https://www.birac.nic.in/",
  },
  {
    name: "IIT Jodhpur",
    src: "/collaborators/iitj.png",
    href: "https://www.iitj.ac.in/",
  },
  {
    name: "JCKIF",
    src: "/collaborators/jckif.png",
    href: "https://jckif.iitj.ac.in/",
  },
  {
    name: "MedTech",
    src: "/collaborators/medtech.png",
    href: "https://medtech.iitj.ac.in/",
  },
  {
    name: "SINE",
    src: "/collaborators/sine.png",
    href: "https://sine.iitj.ac.in/",
  },
];

const Collaborators = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider && slider.children.length === data.length) {
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
          <div
            ref={sliderRef}
            className="animate-marquee flex items-center gap-12"
          >
            {data.map((collaborator, index) => (
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
