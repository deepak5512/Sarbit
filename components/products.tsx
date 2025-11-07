// "use client";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import {
//   ChartBarIncreasingIcon,
//   Database,
//   Fingerprint,
//   IdCard,
// } from "lucide-react";
// import Image from "next/image";
// import { useState } from "react";
// import { motion, AnimatePresence } from "motion/react";
// import { BorderBeam } from "@/components/ui/border-beam";
// import { productsData } from "@/data/productData";

// export default function Products({ heading = false }: { heading?: boolean }) {
//   type ImageKey = "item-1" | "item-2" | "item-3" | "item-4";
//   const [activeItem, setActiveItem] = useState<ImageKey>("item-1");

//   return (
//     <section className="py-12 md:py-20 lg:py-32">
//       <div className="absolute inset-0 -z-10 bg-linear-to-b sm:inset-6 sm:rounded-b-3xl dark:block dark:to-[color-mix(in_oklab,var(--color-zinc-900)_75%,var(--color-background))]"></div>
//       <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 lg:space-y-20 dark:[--color-border:color-mix(in_oklab,var(--color-white)_10%,transparent)]">
//         {heading && (
//           <div className="relative z-10 mx-auto max-w-3xl space-y-6 text-center">
//             <h2 className="text-4xl font-semibold text-balance lg:text-6xl">
//               Our Products & Services
//             </h2>
//             <p>
//               Sarbit Innovations develops nano/biosensors, SERS substrates,
//               thin-film coatings, micropatterning, and semiconductor solutions
//               like wafer dicing and wire bonding.
//             </p>
//           </div>
//         )}

//         <div className="grid gap-12 sm:px-12 md:grid-cols-2 lg:gap-20 lg:px-0">
//           <Accordion
//             type="single"
//             value={activeItem}
//             onValueChange={(value) => setActiveItem(value as ImageKey)}
//             className="w-full"
//           >
//             {Object.entries(productsData).map(([key, item]) => (
//               <AccordionItem key={key} value={key as ImageKey}>
//                 <AccordionTrigger>
//                   <div className="flex items-center gap-2 text-base">
//                     {key === "item-1" ? (
//                       <Database className="size-4" />
//                     ) : key === "item-2" ? (
//                       <Fingerprint className="size-4" />
//                     ) : key === "item-3" ? (
//                       <IdCard className="size-4" />
//                     ) : (
//                       <ChartBarIncreasingIcon className="size-4" />
//                     )}
//                     {item.title}
//                   </div>
//                 </AccordionTrigger>
//                 <AccordionContent>{item.description}</AccordionContent>
//               </AccordionItem>
//             ))}
//           </Accordion>

//           <div className="bg-background relative flex overflow-hidden rounded-3xl border p-2">
//             <div className="absolute inset-0 right-0 ml-auto w-15 border-l bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_8px)]"></div>
//             <div className="bg-background relative aspect-76/59 w-[calc(3/4*100%+3rem)] rounded-2xl">
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={`${activeItem}-id`}
//                   initial={{ opacity: 0, y: 6, scale: 0.98 }}
//                   animate={{ opacity: 1, y: 0, scale: 1 }}
//                   exit={{ opacity: 0, y: 6, scale: 0.98 }}
//                   transition={{ duration: 0.2 }}
//                   className="size-full overflow-hidden rounded-2xl border bg-zinc-900 shadow-md"
//                 >
//                   <Image
//                     src={productsData[activeItem].image}
//                     className="size-full object-cover object-top-left dark:mix-blend-lighten"
//                     alt={productsData[activeItem].alt}
//                     width={1207}
//                     height={929}
//                   />
//                 </motion.div>
//               </AnimatePresence>
//             </div>
//             <BorderBeam
//               duration={6}
//               size={200}
//               className="from-transparent via-yellow-700 to-transparent dark:via-white/50"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { products } from "@/data/products";
import { ProductCard } from "./ui/product-card";

export default function Products() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 md:py-32">
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-neutral-700 sm:text-4xl dark:text-gray-100">
          Empowering innovation through
          <br />
          <span className="font-bold text-neutral-900 dark:text-gray-50">
            next-generation{" "}
            <span className="text-neutral-800 dark:text-white">
              Semiconductor & Sensor Solutions
            </span>
          </span>
        </h2>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard
            key={product.slug}
            image={product.images[0]}
            title={product.title}
            description={product.description}
            href={`/products/${product.slug}`}
          />
        ))}
      </div>
    </section>
  );
}
