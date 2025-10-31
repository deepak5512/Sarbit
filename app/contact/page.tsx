import ContactSection from "@/components/contact";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact",
};

const page = () => {
  return (
    <>
      <ContactSection />
    </>
  );
};

export default page;
