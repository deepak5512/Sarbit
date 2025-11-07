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
    title: "Customized Need-Based Solutions for Microfabrication Processes",
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
    specifications: [
      { label: "Process Type", value: "Dry/Wet Etching, Lithography, Coating" },
      { label: "Feature Size", value: "Down to 1 µm" },
      { label: "Material Support", value: "Si, Glass, Polymers, Metals" },
      { label: "Application Area", value: "MEMS, Sensors, Microfluidics" },
    ],
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
  {
    slug: "photomask-design",
    title: "Photomask Design & Fabrication",
    description:
      "Comprehensive photomask design and fabrication services for precise and reliable pattern transfer in microfabrication processes.",
    highlights: [
      "Custom design support for complex geometries",
      "High-resolution mask writing up to sub-micron accuracy",
      "Optimized for optical and electron-beam lithography",
      "Fast turnaround and cleanroom-compatible quality",
    ],
    images: [
      "/services/photomask-design/1.png",
      "/services/photomask-design/2.png",
    ],
    pdfUrl: "/pdfs/photomask-design-specifications.pdf",
    specifications: [
      { label: "Minimum Feature Size", value: "0.5 µm" },
      { label: "Mask Size", value: "Up to 5 inches" },
      { label: "Material", value: "Quartz / Soda Lime Glass" },
      { label: "Chrome Layer Thickness", value: "100 nm" },
    ],
  },
  {
    slug: "wet-dry-etching",
    title: "Wet/Dry Etching",
    description:
      "High-precision wet and dry etching processes for material patterning and microstructure definition across diverse substrates.",
    highlights: [
      "Controlled etch depth and selectivity",
      "Support for anisotropic and isotropic etching",
      "Suitable for metals, oxides, and semiconductors",
      "Cleanroom-compatible with safe chemical handling",
    ],
    images: [
      "/services/wet-dry-etching/1.png",
      "/services/wet-dry-etching/2.png",
    ],
    pdfUrl: "/pdfs/wet-dry-etching-specifications.pdf",
    specifications: [
      { label: "Etching Type", value: "Wet (HF, KOH) / Dry (RIE, ICP)" },
      { label: "Etch Rate Control", value: "1–200 nm/min" },
      { label: "Feature Size", value: "≥1 µm" },
      { label: "Substrate Compatibility", value: "Si, SiO₂, Si₃N₄, Metals" },
    ],
  },
  {
    slug: "semiconductor-consultancy",
    title:
      "Consultancy for Establishment of Semiconductor Microfabrication Units",
    description:
      "Expert consultancy for setting up semiconductor and microfabrication facilities — from cleanroom planning to process integration.",
    highlights: [
      "Comprehensive feasibility and facility design support",
      "Equipment selection and process workflow design",
      "Assistance with cleanroom layout and contamination control",
      "End-to-end guidance for academic, R&D, and industrial labs",
    ],
    images: [
      "/services/semiconductor-consultancy/1.png",
      "/services/semiconductor-consultancy/2.png",
    ],
    pdfUrl: "/pdfs/semiconductor-consultancy-specifications.pdf",
    specifications: [
      {
        label: "Consultancy Scope",
        value: "Feasibility, Design, Equipment, Training",
      },
      { label: "Facility Type", value: "Cleanroom (Class 100–10000)" },
      {
        label: "Industry Segments",
        value: "Semiconductors, MEMS, Optoelectronics",
      },
      { label: "Support Model", value: "On-site / Remote" },
    ],
  },
];
