"use client";

import Image from "next/image";
import { Product } from "@/lib/api/faker-shop";
import { generateBlurDataUrl } from "@/lib/generate-blur";

type Props = {
  product: Product;
};

const ImageComponent = ({ product }: Props) => {
  return (
    <div className="relative flex h-[300px] w-full items-center justify-center bg-muted rounded-lg overflow-hidden shadow-md">
      <Image
        src={product.image}
        alt={product.title}
        className="object-cover transition-transform duration-500 hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 300px, 300px"
        priority
        width={300}
        height={300}
        quality={85}
        placeholder="blur"
        blurDataURL={generateBlurDataUrl(300, 300)}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 pointer-events-none" />
    </div>
  );
};

export default ImageComponent;
