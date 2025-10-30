import { Cpu, HeartPulse, Layers, Droplet, Disc, PlugZap } from "lucide-react";
import Image from "next/image";

export default function ProductContent() {
  return (
    <section className="py-16 md:py-28">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">
          The Sarbit ecosystem unites innovation.
        </h2>
        <div className="relative">
          <div className="relative z-10 space-y-4 md:w-1/2">
            <p>
              Sarbit Innovations is more than just a product company.
              <span className="font-medium">
                {" "}
                It supports a complete ecosystem
              </span>{" "}
              — from biosensors and SERS substrates to thin film coatings and
              micropatterning.
            </p>
            <p>
              We also offer expertise in wafer dicing and wire bonding,
              empowering researchers and industries to innovate with precision.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6 sm:gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <HeartPulse className="size-4" />
                  <h3 className="text-sm font-medium">Nano & Biosensors</h3>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Layers className="size-4" />
                  <h3 className="text-sm font-medium">SERS Substrates</h3>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Droplet className="size-4" />
                  <h3 className="text-sm font-medium">Thin Film Coatings</h3>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Cpu className="size-4" />
                  <h3 className="text-sm font-medium">Micropatterning</h3>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Disc className="size-4" />
                  <h3 className="text-sm font-medium">Wafer Dicing</h3>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <PlugZap className="size-4" />
                  <h3 className="text-sm font-medium">Wire Bonding</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 h-fit md:absolute md:inset-x-0 md:-inset-y-12 md:mt-0 md:mask-l-from-35% md:mask-l-to-55%">
            <div className="border-border/50 relative rounded-2xl border border-dotted p-2">
              <Image
                src="/product-content.png"
                className="hidden rounded-[12px] dark:block"
                alt="Sarbit Innovations sensor technology"
                width={1207}
                height={929}
              />
              <Image
                src="/product-content.png"
                className="rounded-[12px] shadow dark:hidden"
                alt="Sarbit Innovations sensor technology"
                width={1207}
                height={929}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
