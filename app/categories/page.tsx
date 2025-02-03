import {
  getAllCategories,
  getProductsByCategory,
  getAllProducts,
} from "@/lib/api/faker-shop";
import { ProductGrid } from "@/components/products/ProductGrid";
import { CategoryNav } from "@/components/CategoryNav";
import HeroComponent from "@/components/HeroComponent";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

interface CategoryPageProps {
  searchParams: Record<string, string | undefined>;
}

export async function generateMetadata({ searchParams }: CategoryPageProps) {
  const category = searchParams?.category;
  let title = "Product Categories | SOU9-FPK";
  let description = "Browse our collection of product categories";

  if (category) {
    title = `${category.charAt(0).toUpperCase() + category.slice(1)} | SOU9-FPK`;
    description = `Browse our collection of ${category} products`;
  }
  return {
    title,
    description,
  };
}

export default async function CategoryPage({
  searchParams,
}: CategoryPageProps) {
  const category = searchParams.category ?? "";

  let title = "Product Categories | SOU9-FPK";
  let description = "Browse our collection of product categories";
  let products = [];

  if (category) {
    title = `${category.charAt(0).toUpperCase() + category.slice(1)} | SOU9-FPK`;
    description = `Browse our collection of ${category} products`;
    const decodedCategory = decodeURIComponent(category);
    products = await getProductsByCategory(decodedCategory);
  } else {
    products = await getAllProducts();
  }

  const categories = await getAllCategories();

  return (
    <main className="w-full">
      <HeroComponent title={title} description={description} />
      <MaxWidthWrapper className="py-12 md:flex">
        <div className="basis-2/3">
          <ProductGrid products={products} basePageUrl="/categories" />
        </div>
        <div className="basis-1/3 max-md:hidden">
          <CategoryNav categories={categories} />
        </div>
      </MaxWidthWrapper>
    </main>
  );
}
