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
              <span className="text-primary font-semibold">
                Sarbit Innovations
              </span>{" "}
              specializes in{" "}
              <span className="text-primary font-semibold">semiconductors</span>
              ,{" "}
              <span className="text-primary font-semibold">
                advanced sensors
              </span>
              , and{" "}
              <span className="text-primary font-semibold">
                microfabrication technologies
              </span>
              , targeting impactful applications in{" "}
              <span className="text-primary font-semibold">healthcare</span> and{" "}
              <span className="text-primary font-semibold">
                environmental monitoring
              </span>
              . With a commitment to developing innovative,{" "}
              <span className="text-primary font-semibold">
                need-driven solutions
              </span>
              , we empower scientists, researchers, and innovators to advance
              the frontiers of technology and discovery.
            </p>

            <p>
              Our mission is to translate cutting-edge microfabrication and
              semiconductor research into{" "}
              <span className="text-primary font-semibold">
                real-world impact
              </span>{" "}
              by creating high-performing , scalable, and cost-effective sensing
              systems . At Sarbit Innovations,{" "}
              <span className="text-primary font-semibold">
                translational research
              </span>{" "}
              is our priority as we strive to transform scientific breakthroughs{" "}
              into{" "}
              <span className="text-primary font-semibold">
                practical, commercially viable technologies
              </span>{" "}
              that address critical global challenges.
            </p>

            <Button
              asChild
              // variant="secondary"
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
