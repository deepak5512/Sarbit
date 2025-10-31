import TeamSection from "@/components/team";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About",
};

const page = () => {
  return (
    <>
      <TeamSection />
    </>
  );
};

export default page;
