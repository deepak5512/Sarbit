import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Mission() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-6 md:grid-cols-2 md:gap-12">
          <h2 className="text-4xl font-medium">
            Transforming Health and Safety through Sensor Innovation.
          </h2>
          <div className="space-y-6">
            <p>
              At <span className="font-semibold">Sarbit Innovations</span>,
              we’re advancing{" "}
              <span className="font-semibold">sensor technologies</span> for{" "}
              <span className="font-semibold">early disease diagnosis</span> and{" "}
              <span className="font-semibold">food adulteration detection</span>
              . Our mission is to build{" "}
              <span className="font-semibold">innovative sensor solutions</span>{" "}
              that provide timely and reliable health insights.
            </p>

            <p>
              Guided by our vision of a{" "}
              <span className="font-semibold">healthier, safer world</span>, our
              team combines scientific expertise with innovation to create tools
              for <span className="font-semibold">disease detection</span> and{" "}
              <span className="font-semibold">food safety assurance</span>.
              Through research and development, we aim to protect public health
              and ensure the integrity of the food supply chain.
            </p>

            <Button
              asChild
              variant="secondary"
              size="sm"
              className="gap-1 pr-1.5"
            >
              <Link href="/about">
                <span>Learn More</span>
                <ChevronRight className="size-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
