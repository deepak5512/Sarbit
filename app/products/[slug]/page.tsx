import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { ProductShowcase } from "@/components/product-showcase";

export const dynamicParams = true;

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The requested product does not exist.",
    };
  }

  return {
    title: `${product.title} | NanoTech Labs`,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  return (
    <ProductShowcase
      title={product.title}
      description={product.description}
      highlights={product.highlights}
      images={product.images}
      pdfUrl={product.pdfUrl}
    />
  );
}
