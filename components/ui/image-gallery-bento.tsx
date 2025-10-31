import Image from "next/image";
import React, { useState, useEffect } from "react";

export type ImageItem = {
  id: number;
  src: string;
  alt: string;
  title: string;
  span: string;
};

export function Gallery({
  data,
  onImageClick,
}: {
  data: ImageItem[];
  onImageClick: (src: string) => void;
}) {
  return (
    <section id="gallery" className="mx-auto max-w-6xl py-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.map((img) => (
            <div
              key={img.id}
              className={`group relative cursor-pointer overflow-hidden rounded-lg ${img.span}`}
              onClick={() => onImageClick(img.src)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                className="gallery-img h-full w-full object-cover"
                width={500}
                height={500}
              />
              <div className="absolute inset-0 flex items-end bg-linear-to-t from-black/70 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="translate-y-4 transform text-lg font-medium text-white transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                  {img.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ImageModal({
  src,
  onClose,
}: {
  src: string | null;
  onClose: () => void;
}) {
  const [internalSrc, setInternalSrc] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let rafId: number | null = null;
    let timerId: number | null = null;

    if (src) {
      rafId = requestAnimationFrame(() => {
        setInternalSrc(src);
        timerId = window.setTimeout(() => setIsVisible(true), 10);
      });

      return () => {
        if (rafId !== null) cancelAnimationFrame(rafId);
        if (timerId !== null) clearTimeout(timerId);
      };
    } else {
      timerId = window.setTimeout(() => setIsVisible(false), 0);
      const clearSrcTimerId = window.setTimeout(
        () => setInternalSrc(null),
        300
      );
      return () => {
        if (timerId !== null) clearTimeout(timerId);
        clearTimeout(clearSrcTimerId);
      };
    }
  }, [src]);

  if (!internalSrc) return null;

  return (
    <div
      id="imageModal"
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"} `}
      onClick={onClose}
    >
      <Image
        src={internalSrc}
        alt="Enlarged view"
        className={`max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl transition-transform duration-300 ease-in-out ${isVisible ? "scale-100" : "scale-90"} `}
        onClick={(e) => e.stopPropagation()}
        width={500}
        height={500}
      />
      <button
        className="absolute top-5 right-5 text-4xl font-bold text-white"
        onClick={onClose}
      >
        &times;{" "}
      </button>
    </div>
  );
}
