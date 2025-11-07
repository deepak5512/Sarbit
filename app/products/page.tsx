import Products from "@/components/products";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
};

const page = () => {
  return (
    <>
      <Products />
    </>
  );
};

export default page;
