import { Linkedin, Mail } from "lucide-react";

export interface FooterProps {
  logo?: {
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
}

export const footerSections = [
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Our Products", href: "/products" },
      { name: "Our Services", href: "/services" },
      { name: "Gallery", href: "/gallery" },
      { name: "Achievements", href: "/achievements" },
      { name: "Terms & Conditions", href: "/terms" },
    ],
  },
  {
    title: "Products",
    links: [
      { name: "SERS Substrate", href: "/products/sers-substrate" },
      { name: "Nano Sensors", href: "/products/nano-sensors" },
      { name: "Micro Heaters", href: "/products/micro-heaters" },
      { name: "Patterned Electrodes", href: "/products/patterned-electrodes" },
      { name: "Micro PCR Unit", href: "/products/micro-pcr-unit" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "Thin Film Coating", href: "/services/thin-film-coating" },
      {
        name: "Microfabrication Solutions",
        href: "/services/microfabrication",
      },
      { name: "Photolithography", href: "/services/photolithography" },
      {
        name: "Photomask Design",
        href: "/services/photomask-design",
      },
      { name: "Wet/Dry Etching", href: "/services/etching" },
      {
        name: "Semiconductor Fabrication Consultancy",
        href: "/services/semiconductor-consultancy",
      },
    ],
  },
];

export const footerSocialLinks = [
  {
    icon: <Linkedin className="size-5" />,
    href: "https://www.linkedin.com/company/sarbit-innovations/",
    label: "LinkedIn",
  },
  {
    icon: <Mail className="size-5" />,
    href: "mailto:office@sarbit.in",
    label: "Mail",
  },
];
