import HeroComponent from "@/components/HeroComponent";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <main className="flex h-screen w-full flex-col">
      <HeroComponent
        title="404"
        description="That resource could not be found"
      />
      <div className="flex flex-1 flex-col items-center justify-center space-y-4">
        <div className="mt-8">
          <Button asChild variant="outline">
            <Link href="/">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
