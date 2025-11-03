"use client";

import React, { useState, useEffect } from "react";
import { Gallery, ImageModal } from "@/components/ui/image-gallery-bento";
import { galleryData } from "@/data/galleryData";

export default function GalleryPage() {
  const [modalImage, setModalImage] = useState<string | null>(null);

  const openModal = (src: string) => setModalImage(src);
  const closeModal = () => setModalImage(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <section className="py-12 pt-24 md:py-20 md:pt-32 lg:py-32">
        <div className="absolute inset-0 -z-10 bg-linear-to-b sm:inset-6 sm:rounded-b-3xl dark:block dark:to-[color-mix(in_oklab,var(--color-zinc-900)_75%,var(--color-background))]"></div>
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 lg:space-y-20 dark:[--color-border:color-mix(in_oklab,var(--color-white)_10%,transparent)]"></div>
        <div className="relative z-10 mx-auto max-w-3xl space-y-6 text-center">
          <h2 className="text-4xl font-semibold text-balance lg:text-6xl">
            Our Journey in Frames
          </h2>
          <p>
            Moments that define us — our achievements, collaborations, and
            memories.
          </p>
        </div>

        <Gallery data={galleryData} onImageClick={openModal} />
        <ImageModal src={modalImage} onClose={closeModal} />
      </section>
    </>
  );
}
