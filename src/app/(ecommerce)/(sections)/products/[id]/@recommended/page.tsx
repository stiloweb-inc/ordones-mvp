import { ProductsHighlight } from "@/components/shop/products-highlight";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function ProductDetails() {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-8">
      <Label variant="h3">Você também pode se interessar</Label>
      <div className="grid grid-cols-12 w-full gap-4">
        <div className="col-span-10 col-start-2 flex flex-col gap-4 w-full">
          <ProductsHighlight />
          <ProductsHighlight />
          <ProductsHighlight />
        </div>
      </div>
      <Button variant="secondary">Ver mais</Button>
    </div>
  );
}
