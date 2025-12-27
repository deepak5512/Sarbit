import { products } from "@/data/products";
import { ProductCard } from "./ui/product-card";

export default function Products() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 md:py-32">
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-neutral-700 sm:text-4xl dark:text-gray-100">
          Our Fabrication Products
        </h2>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard
            key={product.slug}
            image={product.images[0]}
            title={product.title}
            description={product.description}
            href={`/products/${product.slug}`}
          />
        ))}
      </div>
    </section>
  );
}
