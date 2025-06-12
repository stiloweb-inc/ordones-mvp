import { DifferentialsSection } from "@/components/home/differentials-section";
import { HeroCarousel } from "@/components/home/hero-carousel";
import { SalesSection } from "@/components/home/sales-section";
import { WholesaleSection } from "@/components/home/wholesale-section";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full gap-4 p-8">
      <HeroCarousel />
      <DifferentialsSection />
      <SalesSection />
      <WholesaleSection />
    </div>
  );
}
