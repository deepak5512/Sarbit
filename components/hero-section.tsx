import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TextEffect } from "./ui/text-effect";
import { AnimatedGroup } from "./ui/animated-group";
import { Particles } from "./ui/particles";

export default function HeroSection() {
  const transitionVariants = {
    item: {
      hidden: {
        opacity: 0,
        filter: "blur(12px)",
        y: 12,
      },
      visible: {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        transition: {
          type: "spring",
          bounce: 0.3,
          duration: 1.5,
        },
      } as const,
    },
  };

  // const { theme } = useTheme()
  // const [color, setColor] = useState("#ffffff")

  // useEffect(() => {
  //   setColor(theme === "dark" ? "#ffffff" : "#000000")
  // }, [theme])

  return (
    <>
      <main className="overflow-x-hidden">
        <div
          aria-hidden
          className="absolute inset-0 isolate hidden contain-strict lg:block"
        >
          {/* Shape 1 */}
          <div className="absolute top-0 left-0 h-320 w-140 -translate-y-87.5 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)] dark:bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,40%,.25)_0,hsla(0,0%,20%,.08)_50%,transparent_100%)]" />

          {/* Shape 2 */}
          <div className="absolute top-0 left-0 h-320 w-60 [translate:5%_-50%] -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] dark:bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,50%,.18)_0,hsla(0,0%,30%,.06)_80%,transparent_100%)]" />

          {/* Shape 3 */}
          <div className="absolute top-0 left-0 h-320 w-60 -translate-y-87.5 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] dark:bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,55%,.12)_0,hsla(0,0%,35%,.05)_80%,transparent_100%)]" />
        </div>

        <section>
          <div className="relative pt-24">
            <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>
            <div className="mx-auto max-w-5xl px-6">
              <div className="sm:mx-auto lg:mt-0 lg:mr-auto">
                <TextEffect
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  as="h1"
                  className="mt-8 max-w-2xl text-5xl font-medium text-balance md:text-6xl lg:mt-16"
                >
                  Vision 10x better sensing
                </TextEffect>
                <TextEffect
                  per="line"
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  delay={0.5}
                  as="p"
                  className="mt-8 max-w-2xl text-lg text-pretty"
                >
                  Sarbit Innovations is dedicated to pioneering advancements in
                  nanosensor technology for early disease diagnosis and
                  monitoring food adulteration
                </TextEffect>

                <AnimatedGroup
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.75,
                        },
                      },
                    },
                    ...transitionVariants,
                  }}
                  className="mt-12 flex items-center gap-2"
                >
                  <div
                    key={1}
                    className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5"
                  >
                    <Button
                      asChild
                      size="lg"
                      className="rounded-xl px-5 text-base"
                    >
                      <Link href="/products">
                        <span className="text-nowrap">See our Products</span>
                      </Link>
                    </Button>
                  </div>
                  <Button
                    key={2}
                    asChild
                    size="lg"
                    variant="ghost"
                    className="h-10.5 rounded-xl px-5 text-base"
                  >
                    <Link href="#demo">
                      <span className="text-nowrap">Have a Demo</span>
                    </Link>
                  </Button>
                </AnimatedGroup>
              </div>
            </div>
            <section id="demo">
              <AnimatedGroup
                variants={{
                  container: {
                    visible: {
                      transition: {
                        staggerChildren: 0.05,
                        delayChildren: 0.75,
                      },
                    },
                  },
                  ...transitionVariants,
                }}
              >
                <div className="relative mt-8 px-2 sm:mt-12 md:mt-20">
                  <div className="ring-background bg-background relative mx-auto max-w-5xl overflow-hidden rounded-2xl border p-2 shadow-lg ring-1 inset-shadow-2xs shadow-zinc-950/15 sm:p-4 dark:inset-shadow-white/20">
                    <div
                      className="relative w-full overflow-hidden rounded-2xl"
                      style={{ aspectRatio: "16 / 9" }}
                    >
                      <video
                        className="absolute inset-0 h-full w-full rounded-2xl object-cover sm:object-contain"
                        src="/demo-video.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                    </div>
                  </div>
                </div>
              </AnimatedGroup>
            </section>
          </div>
        </section>
      </main>
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color="#8C8C8C"
        refresh
      />
    </>
  );
}
