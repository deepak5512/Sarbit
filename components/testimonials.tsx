import { Testimonials } from "@/components/ui/testimonials";
import { testimonials } from "@/data/testimonialsData";

export function TestimonialsDemo() {
  return (
    <div className="container mx-auto max-w-5xl py-10">
      <Testimonials testimonials={testimonials} />
    </div>
  );
}
