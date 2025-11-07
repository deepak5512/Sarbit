import { notFound } from "next/navigation";
import { services } from "@/data/services";
import { ProductShowcase } from "@/components/product-showcase";

export const dynamicParams = true;

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
      description: "The requested service does not exist.",
    };
  }

  return {
    title: `${service.title} | NanoTech Labs`,
    description: service.description,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <ProductShowcase
      title={service.title}
      description={service.description}
      highlights={service.highlights}
      images={service.images}
      pdfUrl={service.pdfUrl}
      specifications={service.specifications}
    />
  );
}
