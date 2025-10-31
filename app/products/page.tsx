import ProductContent from "@/components/product-content";
import Products from "@/components/products";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
};

const page = () => {
  return (
    <>
      <ProductContent />
      <Products />
    </>
  );
};

export default page;
