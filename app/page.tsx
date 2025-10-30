import Collaborators from "@/components/collaborators";
import FAQsThree from "@/components/faqs";
import Products from "@/components/products";
import HeroSection from "@/components/hero-section";
import { TestimonialsDemo } from "@/components/testimonials";
import { Gallery } from "@/components/gallery";
import Mission from "@/components/mission";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Mission />
      <Products heading={true} />
      <Gallery />
      <FAQsThree />
      <TestimonialsDemo />
      <Collaborators />
    </>
  );
}
