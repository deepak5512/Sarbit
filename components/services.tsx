import { services } from "@/data/services";
import { ProductCard } from "./ui/product-card";

export default function Services() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 md:py-32">
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-700 sm:text-4xl dark:text-gray-100">
          Accelerating innovation through
          <br />
          <span className="font-bold text-gray-900 dark:text-gray-50">
            cutting-edge{" "}
            <span className="text-gray-800 dark:text-white">
              Microfabrication & Engineering Services
            </span>
          </span>
        </h2>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ProductCard
            key={service.slug}
            image={service.images[0]}
            title={service.title}
            description={service.description}
            href={`/services/${service.slug}`}
          />
        ))}
      </div>
    </section>
  );
}
