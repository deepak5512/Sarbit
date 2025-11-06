import {
  Box,
  Layers,
  Settings,
  Camera,
  Cpu,
  Database,
  BarChart,
  Cloud,
  Network,
  ShieldCheck,
  Wrench,
} from "lucide-react";

export const navItems = [
  { name: "About Us", href: "/about" },
  {
    name: "Our Products",
    href: "/products",
    dropdown: [
      {
        title: "Smart Vision System",
        description: "AI-powered system for visual inspection and analytics.",
        icon: Camera,
        href: "/products/smart-vision",
      },
      {
        title: "Edge AI Box",
        description: "Compact hardware for on-device deep learning inference.",
        icon: Box,
        href: "/products/edge-ai-box",
      },
      {
        title: "IoT Cloud Suite",
        description: "Manage, monitor, and automate IoT devices effortlessly.",
        icon: Cloud,
        href: "/products/iot-cloud-suite",
      },
      {
        title: "Data Processing Engine",
        description: "High-performance backend for streaming and batch data.",
        icon: Database,
        href: "/products/data-engine",
      },
      {
        title: "Analytics Dashboard",
        description:
          "Interactive platform for data insights and visualizations.",
        icon: BarChart,
        href: "/products/analytics-dashboard",
      },
    ],
  },
  {
    name: "Our Services",
    href: "/services",
    dropdown: [
      {
        title: "AI Model Development",
        description: "Custom deep learning model design and optimization.",
        icon: Cpu,
        href: "/services/ai-models",
      },
      {
        title: "Cloud Infrastructure",
        description: "Setup and manage scalable cloud-based solutions.",
        icon: Network,
        href: "/services/cloud",
      },
      {
        title: "MLOps Pipeline",
        description: "Deploy, monitor, and retrain models seamlessly.",
        icon: Settings,
        href: "/services/mlops",
      },
      {
        title: "Computer Vision",
        description: "Image and video analytics solutions for industries.",
        icon: Layers,
        href: "/services/computer-vision",
      },
      {
        title: "Security & Compliance",
        description: "Ensure end-to-end data protection and compliance.",
        icon: ShieldCheck,
        href: "/services/security",
      },
      {
        title: "Maintenance & Support",
        description: "Continuous technical support for deployed systems.",
        icon: Wrench,
        href: "/services/support",
      },
    ],
  },
  { name: "Gallery", href: "/gallery" },
  { name: "Achievements", href: "/achievements" },
  { name: "Contact Us", href: "/contact" },
];
