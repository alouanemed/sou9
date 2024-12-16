import { Suspense } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProduct, getAllProducts } from "@/lib/api/faker-shop";
import { Loader } from "@/components/ui/Loader";
import { Card } from "@/components/ui/card";
import AddToCartButton from "@/components/cart/AddToCartButton";
import HeroComponent from "@/components/HeroComponent";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

interface ProductPageProps {
  params: {
    id: string;
  };
}

// Generate metadata for the page
export async function generateMetadata({ params }: ProductPageProps) {
  try {
    const { id } = params;
    const product = await getProduct(parseInt(id));

    return {
      title: `${product.title} | SOU9-FPK`,
      description: product.description,
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Product Not Found | SOU9-FPK",
      description: "The requested product could not be found.",
    };
  }
}

// Generate static params for all products
export async function generateStaticParams() {
  try {
    const products = await getAllProducts();
    return products.map((product) => ({
      id: product.id.toString(),
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  let product;

  try {
    const { id } = params;
    product = await getProduct(parseInt(id));
  } catch (error) {
    console.error("Error fetching product:", error);
    notFound();
  }

  if (!product) {
    notFound();
  }

  return (
    <main className="flex w-full flex-1 flex-col">
      {/* Hero Section */}
      <HeroComponent
        title={product.title}
        description={product.description}
        className="bg-gradient-to-br from-primary to-secondary text-white py-16"
      />

      {/* Main Content */}
      <div className="px-6 py-12">
        <MaxWidthWrapper className="grid gap-12 md:grid-cols-2">
          {/* Product Image Section */}
          <div className="flex justify-center items-center">
            <div className="relative aspect-square w-full max-w-sm overflow-hidden rounded-lg bg-muted shadow-lg">
              <Image
                src={product.image}
                alt={product.title}
                className="object-cover transition-transform duration-500 hover:scale-110"
                height={400}
                width={400}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR0XFyAeIBogHh4gIiAdHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
            </div>
          </div>

          {/* Product Details Section */}
          <div className="space-y-8">
            {/* Title and Price */}
            <div className="space-y-2">
              <h1 className="text-4xl font-extrabold">{product.title}</h1>
              <p className="text-2xl font-bold text-orange-500">
                ${product.price.toFixed(2)}
              </p>
            </div>

            {/* Ratings */}
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-lg ${
                      i < Math.floor(product.rating.rate)
                        ? "text-yellow-500"
                        : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                ({product.rating.count} reviews)
              </span>
            </div>

            {/* Description */}
            <Card className="p-6 border shadow-md bg-white">
              <h2 className="text-xl font-semibold mb-4">Description</h2>
              <p className="text-muted-foreground">{product.description}</p>
            </Card>

            {/* Add to Cart Button */}
            <Suspense fallback={<Loader />}>
              <AddToCartButton product={product} />
            </Suspense>

            {/* View Cart Link */}
            <Link
              href="/cart"
              className="flex items-center gap-2 text-primary font-medium hover:text-orange-500"
            >
              View Cart <ShoppingCart className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </MaxWidthWrapper>
      </div>
    </main>
  );
}
