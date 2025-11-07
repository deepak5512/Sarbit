export interface Specification {
  label: string;
  value: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  description: string;
  highlights: string[];
  images: string[];
  pdfUrl: string;
  specifications?: Specification[];
}

export const services: ServiceData[] = [
  {
    slug: "thin-film-coating",
    title: "Thin Film Coating",
    description:
      "High-quality thin film deposition using advanced techniques for optical, electronic, and MEMS applications.",
    highlights: [
      "Precise control of thickness and uniformity",
      "Supports multiple materials and substrates",
      "High adhesion and optical clarity",
      "Ideal for MEMS and photonics components",
    ],
    images: [
      "/services/thin-film-coating/1.png",
      "/services/thin-film-coating/2.png",
    ],
    pdfUrl: "/pdfs/thin-film-coating-specifications.pdf",
    specifications: [
      { label: "Deposition Method", value: "Sputtering / Thermal Evaporation" },
      { label: "Thickness Range", value: "10 nm – 5 µm" },
      { label: "Uniformity", value: "±3%" },
      { label: "Substrate Size", value: "Up to 6 inches" },
    ],
  },
  {
    slug: "microfabrication",
    title: "Microfabrication Solutions",
    description:
      "Tailored and need-based process development for microfabrication, enabling precision manufacturing and prototyping.",
    highlights: [
      "Custom fabrication process development",
      "Cleanroom-compatible techniques",
      "Rapid prototyping and batch production",
      "Support for MEMS, sensors, and microdevices",
    ],
    images: [
      "/services/microfabrication/1.png",
      "/services/microfabrication/2.png",
    ],
    pdfUrl: "/pdfs/microfabrication-specifications.pdf",
  },
  {
    slug: "photolithography",
    title: "Photolithography",
    description:
      "State-of-the-art photolithography services for defining micro and nano-scale patterns with high precision.",
    highlights: [
      "High-resolution pattern transfer",
      "Optimized for both positive and negative resists",
      "Precise mask alignment and exposure control",
      "Suitable for R&D and production-scale applications",
    ],
    images: [
      "/services/photolithography/1.png",
      "/services/photolithography/2.png",
    ],
    pdfUrl: "/pdfs/photolithography-specifications.pdf",
    specifications: [
      { label: "Resolution", value: "Up to 1 µm" },
      { label: "Alignment Accuracy", value: "±0.5 µm" },
      { label: "Wafer Size", value: "Up to 6 inches" },
      { label: "Photoresist Type", value: "Positive / Negative" },
    ],
  },
];
