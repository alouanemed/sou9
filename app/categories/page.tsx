import {
  getAllCategories,
  getAllProducts,
  getProductsByCategory,
  Product,
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

export default async function CategoryPage({ searchParams }: CategoryPageProps) {
  const category = searchParams.category ?? "";

  let title = "Product Categories | SOU9-FPK";
  let description = "Browse our collection of product categories";
  let products: Product[] = [];

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
    <main className="flex w-full flex-1 flex-col">
      {/* Hero Section */}
      <HeroComponent
        title={title}
        description={description}
        className="bg-gradient-to-r from-primary to-secondary text-white py-16"
      />

      {/* Main Content */}
      <div className="px-6 py-12">
        <MaxWidthWrapper className="grid gap-12 md:grid-cols-4">
          {/* Category Navigation */}
          <div className="hidden md:block">
            <CategoryNav categories={categories} />
          </div>

          {/* Product Grid */}
          <div className="md:col-span-3">
            <ProductGrid products={products} basePageUrl="/categories" />
          </div>
        </MaxWidthWrapper>
      </div>
    </main>
  );
}
