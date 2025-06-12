import { OrderSelect } from "@/components/order-select";
import { Label } from "@/components/ui/label";

export default function ProductsPage() {
  return (
    <div className="flex items-center justify-between w-full">
      <Label variant="h3">Nossos Produtos</Label>
      <OrderSelect />
    </div>
  );
}
