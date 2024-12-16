import { getAllProducts, getAllCategories } from "@/lib/api/faker-shop";
import { ProductGrid } from "@/components/products/ProductGrid";
import HeroComponent from "@/components/HeroComponent";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { CategoryNav } from "@/components/CategoryNav";

export const metadata = {
  title: "Products | SOU9-FPK",
  description: "Browse our collection of products",
};

export default async function ProductsPage() {
  const [products, categories] = await Promise.all([
    getAllProducts(),
    getAllCategories(),
  ]);

  return (
    <main className="w-full">
      {/* Hero Section */}
      <HeroComponent
        title="Our Products"
      description="Explore a wide range of high-quality used products for and bby Khouribga students"
      className="bg-gradient-to-r from-primary to-secondary text-white py-16 shadow-lg"
      >
  <div className="absolute inset-0 bg-black/20" />
</HeroComponent>


      {/* Main Content */}
      <MaxWidthWrapper className="py-12 space-y-12">
        {/* Category Navigation (visible on large screens) */}
        <div className="flex flex-col-reverse gap-12 lg:flex-row">
          <aside className="lg:w-1/4">
            <CategoryNav categories={categories} />
          </aside>

          {/* Product Grid */}
          <section className="flex-1">
            <ProductGrid
              products={products}
              basePageUrl="/"
              itemsPerPage={8}
            />
          </section>
        </div>
      </MaxWidthWrapper>
    </main>
  );
}
