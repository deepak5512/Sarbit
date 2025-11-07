export interface ServiceData {
  slug: string;
  title: string;
  description: string;
  highlights: string[];
  images: string[];
  pdfUrl: string;
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
      "/services/thin-film-coating/3.png",
    ],
    pdfUrl: "/pdfs/thin-film-coating-specifications.pdf",
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
      "/services/microfabrication/3.png",
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
      "/services/photolithography/3.png",
    ],
    pdfUrl: "/pdfs/photolithography-specifications.pdf",
  },
  {
    slug: "photomask-design",
    title: "Photomask Design & Fabrication",
    description:
      "Design and fabrication of high-resolution photomasks optimized for semiconductor and MEMS applications.",
    highlights: [
      "Custom mask layouts for diverse applications",
      "Sub-micron resolution patterning",
      "Optimized optical density and edge definition",
      "Quick turnaround and quality assurance",
    ],
    images: [
      "/services/photomask-design/1.png",
      "/services/photomask-design/2.png",
      "/services/photomask-design/3.png",
    ],
    pdfUrl: "/pdfs/photomask-design-specifications.pdf",
  },
  {
    slug: "etching",
    title: "Wet/Dry Etching",
    description:
      "Comprehensive etching services including both wet chemical and plasma-based dry etching for diverse materials.",
    highlights: [
      "Precise material removal with uniform depth",
      "Support for multiple substrate materials",
      "Plasma and reactive ion etching available",
      "Ideal for MEMS, microfluidic, and photonic devices",
    ],
    images: [
      "/services/etching/1.png",
      "/services/etching/2.png",
      "/services/etching/3.png",
    ],
    pdfUrl: "/pdfs/etching-specifications.pdf",
  },
  {
    slug: "semiconductor-consultancy",
    title: "Semiconductor Fabrication Consultancy",
    description:
      "Expert consultancy for planning, designing, and establishing semiconductor and microfabrication facilities.",
    highlights: [
      "Facility layout and equipment selection guidance",
      "End-to-end process flow design",
      "Cost optimization and process standardization",
      "Ideal for startups, universities, and R&D labs",
    ],
    images: [
      "/services/semiconductor-consultancy/1.png",
      "/services/semiconductor-consultancy/2.png",
      "/services/semiconductor-consultancy/3.png",
    ],
    pdfUrl: "/pdfs/semiconductor-consultancy-specifications.pdf",
  },
];
