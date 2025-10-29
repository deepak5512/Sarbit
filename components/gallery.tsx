"use client";

import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function Gallery() {
  const images = [
    {
      src: "/gallery/image1.jpg",
      desc: "Received Bio ignition Grant in 22 call by BIRAC, DBT, India",
    },
    {
      src: "/gallery/image2.jpg",
      desc: "With Global Business leader Kiran Mazumdar Shaw at Global Bio India 2023, Delhi",
    },
    {
      src: "/gallery/image3.jpg",
      desc: "With Honble Cabinet Minister, Odisha Shri Ashok Chandra Panda at Global Bio India 2023, Delhi",
    },
    {
      src: "/gallery/image4.jpg",
      desc: "Team Sarbit Innovations",
    },
    {
      src: "/gallery/image5.jpg",
      desc: "Showcasing Our Prototype at Science & Technology, Jodhpur Cluster Fair",
    },
  ];

  const duplicatedImages = [...images, ...images];

  return (
    <>
      <style>{`
        html, body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .infinite-scroll {
          animation: scroll-right 20s linear infinite;
        }

        .scroll-container {
          mask: linear-gradient(
            90deg,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
          -webkit-mask: linear-gradient(
            90deg,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
        }

        .image-item {
          transition: transform 0.3s ease, filter 0.3s ease;
        }

        .image-item:hover {
          transform: scale(1.05);
          filter: brightness(1.1);
        }
      `}</style>

      <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0" />

        <div className="relative z-10 flex w-full items-center justify-center py-8">
          <div className="scroll-container w-full max-w-6xl">
            <div className="infinite-scroll flex w-max gap-6">
              <TooltipProvider delayDuration={100}>
                {duplicatedImages.map((image, index) => (
                  <Tooltip key={index}>
                    <TooltipTrigger asChild>
                      <div className="image-item h-48 w-48 shrink-0 overflow-hidden rounded-xl shadow-2xl md:h-64 md:w-64 lg:h-80 lg:w-80">
                        <Image
                          src={image.src}
                          alt={`Gallery image ${(index % images.length) + 1}`}
                          className="h-full w-full object-cover"
                          loading="lazy"
                          width={300}
                          height={300}
                        />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="max-w-xs text-center">
                      <p>{image.desc}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </TooltipProvider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
