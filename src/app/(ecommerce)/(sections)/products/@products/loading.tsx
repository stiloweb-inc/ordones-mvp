import { ProductSkeleton } from "@/components/product/product-skeleton";

export default function ProductsLoading() {
  return (
    <div className="grid grid-cols-5 gap-4 w-full">
      {Array.from({ length: 15 }).map((_, index) => (
        <ProductSkeleton key={index} />
      ))}
    </div>
  );
}
