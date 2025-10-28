import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      <main className="overflow-x-hidden">
        <section>
          <div className="pt-12 pb-24 md:pb-32 lg:pt-24 lg:pb-28">
            <div className="relative mx-auto flex max-w-6xl flex-col-reverse items-center justify-between px-6 lg:flex-row">
              <div className="max-w-lg text-center lg:w-1/2 lg:text-left">
                <h1 className="mt-8 max-w-2xl text-5xl font-medium text-balance md:text-6xl xl:text-7xl">
                  Vision 10x Better Sensing
                </h1>
                <p className="mt-8 max-w-2xl text-lg text-pretty">
                  Sarbit Innovations is dedicated to pioneering advancements in
                  nanosensor technology for early disease diagnosis and
                  monitoring food adulteration
                </p>
                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                  <Button asChild size="lg" className="px-5 text-base">
                    <Link href="#link">
                      <span className="text-nowrap">Start Building</span>
                    </Link>
                  </Button>
                  <Button
                    key={2}
                    asChild
                    size="lg"
                    variant="ghost"
                    className="px-5 text-base"
                  >
                    <Link href="#link">
                      <span className="text-nowrap">Request a demo</span>
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex w-full max-w-xl justify-center lg:w-1/2 lg:max-w-none">
                <Image
                  className="object-contain"
                  src="/hero.png"
                  alt="Abstract Object"
                  height={4000}
                  width={3000}
                  priority
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
