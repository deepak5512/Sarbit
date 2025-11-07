import Image from "next/image";
import Link from "next/link";

interface CardItemProps {
  image: string;
  title: string;
  description: string;
  href: string;
}

export function ProductCard({
  image,
  title,
  description,
  href,
}: CardItemProps) {
  return (
    <div className="flex flex-col">
      <div className="rounded-sm border border-gray-200 bg-white p-1 shadow-sm transition hover:shadow-md dark:border-gray-900 dark:bg-zinc-900">
        <div className="aspect-square w-full overflow-hidden rounded-sm">
          <Image
            src={image}
            alt={title}
            width={500}
            height={500}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <h3 className="mt-4 text-sm font-medium text-gray-800 dark:text-gray-100">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        {description}
      </p>

      <Link
        href={href}
        className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-800"
      >
        Check Out
        <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}
