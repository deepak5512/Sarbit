import Collaborators from "@/components/collaborators";
import FAQsThree from "@/components/faqs";
import Products from "@/components/products";
import HeroSection from "@/components/hero-section";
import { TestimonialsDemo } from "@/components/testimonials";
import { Gallery } from "@/components/gallery";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Products />
      <Gallery />
      <FAQsThree />
      <TestimonialsDemo />
      <Collaborators />
    </>
  );
}
