import Collaborators from "@/components/collaborators";
import FAQsThree from "@/components/faqs";
import HeroSection from "@/components/hero-section";
import { TestimonialsDemo } from "@/components/testimonials";
import Mission from "@/components/mission";
import StatsSection from "@/components/stats";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <Mission />
      <FAQsThree />
      <TestimonialsDemo />
      <Collaborators />
    </>
  );
}
