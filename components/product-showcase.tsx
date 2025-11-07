"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ProductShowcaseProps {
  title: string;
  description: string;
  highlights?: string[];
  images: string[];
  pdfUrl: string;
  specifications?: { label: string; value: string }[];
}

export function ProductShowcase({
  title,
  description,
  highlights = [],
  images,
  pdfUrl,
  specifications,
}: ProductShowcaseProps) {
  const [selectedImage, setSelectedImage] = React.useState(images[0]);

  return (
    <main className="container mx-auto max-w-6xl px-6 py-12 md:py-20 lg:py-32">
      <div className="grid gap-10 md:grid-cols-2">
        {/* 🖼️ Image Section */}
        <div className="flex flex-col">
          <div className="border-border relative aspect-square w-full overflow-hidden rounded-2xl border">
            <Image
              src={selectedImage}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              priority
            />
          </div>

          {/* Thumbnails */}
          <div className="mt-4 flex justify-center gap-3">
            {images.map((src, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(src)}
                className={`relative h-16 w-16 overflow-hidden rounded-xl border-2 transition ${
                  selectedImage === src
                    ? "border-primary"
                    : "hover:border-primary/50 border-transparent"
                }`}
              >
                <Image
                  src={src}
                  alt={`${title} image ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* 🧾 Product Details */}
        <div className="flex flex-col justify-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight">{title}</h1>

          {description && (
            <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
              {description}
            </p>
          )}

          {/* Highlights */}
          {highlights.length > 0 && (
            <div className="mb-6">
              <h2 className="mb-2 text-xl font-semibold">Highlights</h2>
              <ul className="text-muted-foreground list-inside list-disc space-y-1">
                {highlights.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Details */}
          <div className="mt-6 border-t pt-6">
            <h3 className="mb-2 text-lg font-semibold">Details</h3>
            <p className="text-muted-foreground mb-4">
              To better serve you, we would like to discuss your specific
              requirement. Please Contact Us for a quote.
            </p>

            <div className="flex gap-4">
              <Button asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>

              <Button
                variant="outline"
                onClick={() => window.open(pdfUrl, "_blank")}
              >
                View Specifications
              </Button>
            </div>
          </div>
        </div>
      </div>
      {specifications && specifications.length > 0 && (
        <div className="mt-8">
          <h3 className="mb-3 text-2xl font-semibold">Specifications</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <tbody>
                {specifications.map((spec, i) => (
                  <tr key={i} className="border-border border-b">
                    <td className="text-foreground w-1/2 py-2 pr-4 font-medium">
                      {spec.label}
                    </td>
                    <td className="text-muted-foreground py-2">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </main>
  );
}
