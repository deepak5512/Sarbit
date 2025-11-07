import {
  Layers,
  Wrench,
  Microscope,
  Rss,
  Flame,
  CircuitBoard,
  Dna,
  Scan,
  LayoutTemplate,
  Droplets,
  Building2,
} from "lucide-react";

export const navItems = [
  { name: "About Us", href: "/about" },
  {
    name: "Our Products",
    href: "/products",
    dropdown: [
      {
        title: "SERS Substrate",
        description:
          "High-sensitivity Surface Enhanced Raman Scattering (SERS) substrates enabling precise molecular and chemical detection.",
        icon: Microscope,
        href: "/products/sers-substrate",
      },
      {
        title: "Nano Sensors",
        description:
          "Advanced nanoscale sensors designed for real-time chemical, biological, and environmental monitoring applications.",
        icon: Rss,
        href: "/products/nano-sensors",
      },
      {
        title: "Micro Heaters",
        description:
          "Compact and energy-efficient micro heaters providing accurate thermal control for lab-on-chip and MEMS devices.",
        icon: Flame,
        href: "/products/micro-heaters",
      },
      {
        title: "Patterned Electrodes",
        description:
          "Precisely fabricated micro and nano-patterned electrodes for advanced electrochemical and biosensing systems.",
        icon: CircuitBoard,
        href: "/products/patterned-electrodes",
      },
      {
        title: "Micro PCR Unit",
        description:
          "Portable and rapid microfluidic PCR unit for DNA amplification and on-site molecular diagnostics.",
        icon: Dna,
        href: "/products/micro-pcr-unit",
      },
    ],
  },

  {
    name: "Our Services",
    href: "/services",
    dropdown: [
      {
        title: "Thin Film Coating",
        description:
          "High-quality thin film deposition using advanced techniques for optical, electronic, and MEMS applications.",
        icon: Layers,
        href: "/services/thin-film-coating",
      },
      {
        title: "Microfabrication Solutions",
        description:
          "Tailored and need-based process development for microfabrication, enabling precision manufacturing and prototyping.",
        icon: Wrench,
        href: "/services/custom-microfabrication",
      },
      {
        title: "Photolithography",
        description:
          "State-of-the-art photolithography services for defining micro and nano-scale patterns with high precision.",
        icon: Scan,
        href: "/services/photolithography",
      },
      {
        title: "Photomask Design & Fabrication",
        description:
          "Design and fabrication of high-resolution photomasks optimized for semiconductor and MEMS applications.",
        icon: LayoutTemplate,
        href: "/services/photomask-design",
      },
      {
        title: "Wet / Dry Etching",
        description:
          "Comprehensive etching services including both wet chemical and plasma-based dry etching for diverse materials.",
        icon: Droplets,
        href: "/services/etching",
      },
      {
        title: "Semiconductor Fabrication Consultancy",
        description:
          "Expert consultancy for planning, designing, and establishing semiconductor and microfabrication facilities.",
        icon: Building2,
        href: "/services/semiconductor-consultancy",
      },
    ],
  },

  { name: "Gallery", href: "/gallery" },
  { name: "Achievements", href: "/achievements" },
  { name: "Contact Us", href: "/contact" },
];
