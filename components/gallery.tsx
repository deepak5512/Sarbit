"use client";

import { Carousel } from "@/components/ui/carousel";

export function Gallery() {
  const slideData = [
    {
      title: "Received Bio ignition Grant in 22 call by BIRAC, DBT, India",
      src: "/gallery/image1.jpg",
    },
    {
      title:
        "With Global Business leader Kiran Mazumdar Shaw at Global Bio India 2023, Delhi",
      src: "/gallery/image2.jpg",
    },
    {
      title:
        "With Honble Cabinet Minister, Odisha Shri Ashok Chandra Panda at Global Bio India 2023, Delhi",
      src: "/gallery/image3.jpg",
    },
    {
      title: "Team Sarbit innovations",
      src: "/gallery/image4.jpg",
    },
    {
      title:
        "Showcasing Our Prototype at Science & Technology, Jodhpur Cluster Fair",
      src: "/gallery/image5.jpg",
    },
  ];
  return (
    <div className="relative h-full w-full overflow-hidden py-20">
      <Carousel slides={slideData} />
    </div>
  );
}
