import {
  Award,
  FileSignature,
  School,
  Briefcase,
  CheckCircle2,
  Globe,
} from "lucide-react";

export const achievements = [
  {
    title: "BIRAC BIG Grant",
    blurb: "Awardee of BIRAC BIG grant worth INR 50 Lacs.",
    meta: "Funding",
    icon: Award,
    span: "md:col-span-3 md:row-span-1",
    animation: "ach-float 6s ease-in-out infinite",
  },
  {
    title: "Joint IP Development",
    blurb:
      "MoU signed with IIT Jodhpur and AIIMS Jodhpur for joint IP development. One tri-partite patent filed already.",
    meta: "Research",
    icon: FileSignature,
    span: "md:col-span-3 md:row-span-1",
    animation: "ach-pulse 5s ease-in-out infinite",
  },
  {
    title: "Academic Collaborations",
    blurb:
      "MoUs signed with Amrita Vishwa Vidyapeetham and Sangam University for curriculum development, lab setup, and joint device R&D.",
    meta: "Collaboration",
    icon: School,
    span: "md:col-span-4 md:row-span-1",
    animation: "ach-drift 7s ease-in-out infinite",
  },
  {
    title: "MSME 4.0 Grant",
    blurb: "Awardee of MSME 4.0 grant worth INR 15 Lacs.",
    meta: "Funding",
    icon: Briefcase,
    span: "md:col-span-2 md:row-span-1",
    animation: "ach-tilt 5s ease-in-out infinite",
  },
  {
    title: "Recognized Startup & MSME",
    blurb: "Received official recognition as a Startup and MSME entity.",
    meta: "Recognition",
    icon: CheckCircle2,
    span: "md:col-span-3 md:row-span-1",
    animation: "ach-pulse 6s ease-in-out infinite",
  },
  {
    title: "National Presence",
    blurb:
      "Listed on Government e-Marketplace (GeM) and I-STEM portal for nationwide accessibility.",
    meta: "Visibility",
    icon: Globe,
    span: "md:col-span-3 md:row-span-1",
    animation: "ach-float 6.5s ease-in-out infinite",
  },
];
