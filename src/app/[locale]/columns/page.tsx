import { ContentCards } from "@/components/columns/content-cards";
import { RecommendedCategories } from "@/components/columns/recommended-categories";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-0 max-w-[960px]">
          <RecommendedCategories />
          <ContentCards />
        </div>
      </section>
    </div>
  );
}
