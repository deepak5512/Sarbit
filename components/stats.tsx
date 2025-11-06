import { NumberTicker } from "./ui/number-ticker";

export default function StatsSection() {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
          <div className="space-y-4">
            <div className="text-5xl font-bold">
              <NumberTicker value={6} />+
            </div>
            <p>MoU Signed</p>
          </div>
          <div className="space-y-4">
            <div className="text-5xl font-bold">
              <NumberTicker value={4} />+
            </div>
            <p>IPs Generated</p>
          </div>
          <div className="space-y-4">
            <div className="text-5xl font-bold">
              <NumberTicker value={1.7} decimalPlaces={1} /> Cr+
            </div>
            <p>Grants/Funding Raised</p>
          </div>
        </div>
      </div>
    </section>
  );
}
