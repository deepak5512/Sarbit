// "use client";

// import Image from "next/image";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";

// export function Gallery() {
//   const images = [
//     {
//       src: "/gallery/image1.jpg",
//       desc: "Received Bio ignition Grant in 22 call by BIRAC, DBT, India",
//     },
//     {
//       src: "/gallery/image2.jpg",
//       desc: "With Global Business leader Kiran Mazumdar Shaw at Global Bio India 2023, Delhi",
//     },
//     {
//       src: "/gallery/image3.jpg",
//       desc: "With Honble Cabinet Minister, Odisha Shri Ashok Chandra Panda at Global Bio India 2023, Delhi",
//     },
//     {
//       src: "/gallery/image4.jpg",
//       desc: "Team Sarbit Innovations",
//     },
//     {
//       src: "/gallery/image5.jpg",
//       desc: "Showcasing Our Prototype at Science & Technology, Jodhpur Cluster Fair",
//     },
//   ];

//   const duplicatedImages = [...images, ...images];

//   return (
//     <>
//       <style>{`
//         html, body {
//           margin: 0;
//           padding: 0;
//           overflow-x: hidden;
//           font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
//         }

//         @keyframes scroll-right {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }

//         .infinite-scroll {
//           animation: scroll-right 20s linear infinite;
//         }

//         .scroll-container {
//           mask: linear-gradient(
//             90deg,
//             transparent 0%,
//             black 10%,
//             black 90%,
//             transparent 100%
//           );
//           -webkit-mask: linear-gradient(
//             90deg,
//             transparent 0%,
//             black 10%,
//             black 90%,
//             transparent 100%
//           );
//         }

//         .image-item {
//           transition: transform 0.3s ease, filter 0.3s ease;
//         }

//         .image-item:hover {
//           transform: scale(1.05);
//           filter: brightness(1.1);
//         }
//       `}</style>

//       <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
//         <div className="absolute inset-0 z-0" />

//         <div className="relative z-10 flex w-full items-center justify-center py-8">
//           <div className="scroll-container w-full max-w-6xl">
//             <div className="infinite-scroll flex w-max gap-6">
//               <TooltipProvider delayDuration={100}>
//                 {duplicatedImages.map((image, index) => (
//                   <Tooltip key={index}>
//                     <TooltipTrigger asChild>
//                       <div className="image-item h-48 w-48 shrink-0 overflow-hidden rounded-xl shadow-2xl md:h-64 md:w-64 lg:h-80 lg:w-80">
//                         <Image
//                           src={image.src}
//                           alt={`Gallery image ${(index % images.length) + 1}`}
//                           className="h-full w-full object-cover"
//                           loading="lazy"
//                           width={300}
//                           height={300}
//                         />
//                       </div>
//                     </TooltipTrigger>
//                     <TooltipContent side="top" className="max-w-xs text-center">
//                       <p>{image.desc}</p>
//                     </TooltipContent>
//                   </Tooltip>
//                 ))}
//               </TooltipProvider>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

"use client";

import React, { useState, useEffect } from "react";
import { Gallery, ImageModal } from "@/components/ui/image-gallery-bento";

const galleryData = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=1470&auto=format&fit=crop",
    alt: "Cityscape at dusk",
    title: "Cityscape at dusk",
    span: "col-span-1",
  },
  {
    id: 2,
    src: "https://ix-marketing.imgix.net/focalpoint.png?q=80&w=1470&auto=format&fit=crop",
    alt: "Portrait",
    title: "Portrait",
    span: "sm:col-span-2",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1470&auto=format&fit=crop",
    alt: "Sunlight through a forest",
    title: "Forest Path",
    span: "col-span-1",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1364&auto=format&fit=crop",
    alt: "Portrait of a person",
    title: "Portrait",
    span: "col-span-1",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?q=80&w=1470&auto=format&fit=crop",
    alt: "Wildlife photography",
    title: "Wildlife",
    span: "sm:col-span-2",
  },
  {
    id: 6,
    src: "https://ix-marketing.imgix.net/bg-remove_after.png?q=80&w=1470&auto=format&fit=crop",
    alt: "Modern architecture",
    title: "Architecture",
    span: "col-span-1",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1488866022504-f2584929ca5f?q=80&w=1470&auto=format&fit=crop",
    alt: "Starry night sky",
    title: "Night Sky",
    span: "col-span-1",
  },
  {
    id: 8,
    src: "https://ix-marketing.imgix.net/autocompress.png?q=80&w=1287&auto=format&fit=crop",
    alt: "Street art",
    title: "Street Art",
    span: "col-span-1",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1470&auto=format&fit=crop",
    alt: "Mountain Range",
    title: "Mountain Range",
    span: "sm:col-span-2",
  },
];

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
      <section className="py-12 md:py-20 lg:py-32">
        <div className="absolute inset-0 -z-10 bg-linear-to-b sm:inset-6 sm:rounded-b-3xl dark:block dark:to-[color-mix(in_oklab,var(--color-zinc-900)_75%,var(--color-background))]"></div>
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 lg:space-y-20 dark:[--color-border:color-mix(in_oklab,var(--color-white)_10%,transparent)]"></div>
        <div className="relative z-10 mx-auto max-w-3xl space-y-6 text-center">
          <h2 className="text-4xl font-semibold text-balance lg:text-6xl">
            Our Journey in Frames
          </h2>
          <p>
            A collection of moments that define who we are — our achievements,
            collaborations, and the unforgettable memories we’ve created
            together along the way.
          </p>
        </div>

        <Gallery data={galleryData} onImageClick={openModal} />
        <ImageModal src={modalImage} onClose={closeModal} />
      </section>
    </>
  );
}
