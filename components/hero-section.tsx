import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

export default function HeroSection() {
  return (
    <>
      <main className="overflow-x-hidden">
        <section>
          <div className="pt-12 pb-24 md:pb-32 lg:pt-24 lg:pb-56">
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
        <section className="bg-background pb-16 md:pb-32">
          <div className="group relative m-auto max-w-6xl px-6">
            <div className="flex flex-col items-center md:flex-row">
              <div className="md:max-w-44 md:border-r md:pr-6">
                <p className="text-end text-sm">Powering the best teams</p>
              </div>
              <div className="relative py-6 md:w-[calc(100%-11rem)]">
                <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
                  <div className="flex">
                    <img
                      className="mx-auto h-5 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/nvidia.svg"
                      alt="Nvidia Logo"
                      height="20"
                      width="auto"
                    />
                  </div>

                  <div className="flex">
                    <img
                      className="mx-auto h-4 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/column.svg"
                      alt="Column Logo"
                      height="16"
                      width="auto"
                    />
                  </div>
                  <div className="flex">
                    <img
                      className="mx-auto h-4 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/github.svg"
                      alt="GitHub Logo"
                      height="16"
                      width="auto"
                    />
                  </div>
                  <div className="flex">
                    <img
                      className="mx-auto h-5 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/nike.svg"
                      alt="Nike Logo"
                      height="20"
                      width="auto"
                    />
                  </div>
                  <div className="flex">
                    <img
                      className="mx-auto h-5 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
                      alt="Lemon Squeezy Logo"
                      height="20"
                      width="auto"
                    />
                  </div>
                  <div className="flex">
                    <img
                      className="mx-auto h-4 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/laravel.svg"
                      alt="Laravel Logo"
                      height="16"
                      width="auto"
                    />
                  </div>
                  <div className="flex">
                    <img
                      className="mx-auto h-7 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/lilly.svg"
                      alt="Lilly Logo"
                      height="28"
                      width="auto"
                    />
                  </div>

                  <div className="flex">
                    <img
                      className="mx-auto h-6 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/openai.svg"
                      alt="OpenAI Logo"
                      height="24"
                      width="auto"
                    />
                  </div>
                </InfiniteSlider>

                <div className="from-background absolute inset-y-0 left-0 w-20 bg-linear-to-r"></div>
                <div className="from-background absolute inset-y-0 right-0 w-20 bg-linear-to-l"></div>
                <ProgressiveBlur
                  className="pointer-events-none absolute top-0 left-0 h-full w-20"
                  direction="left"
                  blurIntensity={1}
                />
                <ProgressiveBlur
                  className="pointer-events-none absolute top-0 right-0 h-full w-20"
                  direction="right"
                  blurIntensity={1}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
