export interface Specification {
  label: string;
  value: string;
}

export interface ProductData {
  slug: string;
  title: string;
  description: string;
  highlights: string[];
  images: string[];
  pdfUrl: string;
  specifications?: Specification[];
}

export const products: ProductData[] = [
  {
    slug: "sers-substrate",
    title: "SERS Substrate",
    description:
      "High-sensitivity Surface Enhanced Raman Scattering (SERS) substrates enabling precise molecular and chemical detection.",
    highlights: [
      "High sensitivity for molecular detection",
      "Compatible with a wide range of analytes",
      "Uniform enhancement factor across surface",
      "Ideal for biosensing and chemical analysis",
    ],
    images: [
      "/products/sers-substrate/1.png",
      "/products/sers-substrate/2.png",
      "/products/sers-substrate/3.png",
      "/products/sers-substrate/4.png",
    ],
    pdfUrl: "/pdfs/sers-substrate-specifications.pdf",
    specifications: [
      { label: "Material", value: "Gold/Silver coated Silicon wafer" },
      { label: "Enhancement Factor", value: "Up to 10⁸" },
      { label: "Substrate Size", value: "10mm × 10mm" },
      { label: "Surface Roughness", value: "< 10 nm RMS" },
      { label: "Detection Range", value: "10⁻⁶ to 10⁻⁹ M concentration" },
    ],
  },
  {
    slug: "nano-sensors",
    title: "Nano Sensors",
    description:
      "Advanced nanoscale sensors designed for real-time chemical, biological, and environmental monitoring applications.",
    highlights: [
      "Ultra-fast response and high selectivity",
      "Suitable for gaseous and liquid sensing",
      "Low power consumption with compact design",
      "Ideal for IoT and environmental monitoring",
    ],
    images: [
      "/products/nano-sensors/1.png",
      "/products/nano-sensors/2.png",
      "/products/nano-sensors/3.png",
    ],
    pdfUrl: "/pdfs/nano-sensors-specifications.pdf",
    specifications: [
      { label: "Sensing Type", value: "Electrochemical / Optical" },
      { label: "Detection Limit", value: "Sub-ppm level" },
      { label: "Response Time", value: "< 5 seconds" },
      { label: "Operating Temperature", value: "0°C – 60°C" },
    ],
  },
  {
    slug: "micro-heaters",
    title: "Micro Heaters",
    description:
      "Compact and energy-efficient micro heaters providing accurate thermal control for lab-on-chip and MEMS devices.",
    highlights: [
      "Rapid thermal response and precise control",
      "Compact design for integration in MEMS",
      "Low power consumption",
      "Customizable heating profiles available",
    ],
    images: [
      "/products/micro-heaters/1.png",
      "/products/micro-heaters/2.png",
      "/products/micro-heaters/3.png",
      "/products/micro-heaters/4.png",
    ],
    pdfUrl: "/pdfs/micro-heaters-specifications.pdf",
  },
  {
    slug: "patterned-electrodes",
    title: "Patterned Electrodes",
    description:
      "Precisely fabricated micro and nano-patterned electrodes for advanced electrochemical and biosensing systems.",
    highlights: [
      "High-resolution electrode patterning",
      "Optimized for uniform current distribution",
      "Compatible with multiple substrate materials",
      "Suitable for electrochemical and biological interfaces",
    ],
    images: [
      "/products/patterned-electrodes/1.png",
      "/products/patterned-electrodes/2.png",
      "/products/patterned-electrodes/3.png",
    ],
    pdfUrl: "/pdfs/patterned-electrodes-specifications.pdf",
  },
  {
    slug: "micro-pcr-unit",
    title: "Micro PCR Unit",
    description:
      "Portable and rapid microfluidic PCR unit for DNA amplification and on-site molecular diagnostics.",
    highlights: [
      "Fast thermal cycling with precise temperature control",
      "Compact and portable design",
      "Compatible with low-volume PCR reactions",
      "Ideal for field diagnostics and genetic testing",
    ],
    images: [
      "/products/micro-pcr-unit/1.png",
      "/products/micro-pcr-unit/2.png",
      "/products/micro-pcr-unit/3.png",
    ],
    pdfUrl: "/pdfs/micro-pcr-unit-specifications.pdf",
    specifications: [
      { label: "Temperature Range", value: "25°C – 100°C" },
      { label: "Cycle Time", value: "< 45 minutes" },
      { label: "Sample Volume", value: "10–20 µL" },
      { label: "Channels", value: "4 independent microchannels" },
    ],
  },
];
