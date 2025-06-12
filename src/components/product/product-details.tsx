import { ShippingCard } from "@/components/shipping-card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { floatToBrlCurrency } from "@/utils/float-to-brl-currency";
import { Heart, Star } from "lucide-react";

export default function ProductDetails({
  title,
  description,
  price,
}: {
  title: string;
  description: string;
  price: number;
}) {
  return (
    <div className="grid grid-cols-12 w-full h-full gap-4">
      <div className="col-span-5 col-start-2 flex flex-col w-full h-full gap-4 bg-accent/20 border p-6 rounded-xl">
        <div className="w-full h-auto aspect-square rounded-xl bg-muted-foreground/20"></div>
        <div className="grid grid-cols-5 gap-4">
          <div className="w-full h-auto aspect-square rounded-xl bg-muted-foreground/20"></div>
          <div className="w-full h-auto aspect-square rounded-xl bg-muted-foreground/20"></div>
          <div className="w-full h-auto aspect-square rounded-xl bg-muted-foreground/20"></div>
          <div className="w-full h-auto aspect-square rounded-xl bg-muted-foreground/20"></div>
          <div className="w-full h-auto aspect-square rounded-xl bg-muted-foreground/20"></div>
        </div>
      </div>
      <div className="col-span-5 flex flex-col w-full h-full gap-4 p-6 border rounded-xl">
        <div className="flex flex-col w-full gap-4">
          <div className="flex items-center justify-between w-full">
            <Label variant="h3">{title}</Label>
            <Button size="icon" variant="secondary" className="rounded-full">
              <Heart />
            </Button>
          </div>
          <Label className="text-sm text-muted-foreground w-4/5">
            {description}
          </Label>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-primary">
              <Star className="size-4" fill="#ffcf29" />
              <Star className="size-4" fill="#ffcf29" />
              <Star className="size-4" fill="#ffcf29" />
              <Star className="size-4" fill="#ffcf29" />
              <Star className="size-4" />
            </div>
            <Label className="text-sm font-medium">42 avaliações</Label>
          </div>
          <div className="flex items-center my-2">
            <Label variant="h2" className="font-bold">
              {floatToBrlCurrency(price)}
            </Label>
          </div>
          <Separator />
          <div className="flex flex-col w-full gap-4">
            {/* <QuantitySelector
              quantity={quantity}
              addQuantity={addQuantity}
              removeQuantity={removeQuantity}
              onChangeQuantity={(value) => setQuantity(value)}
            /> */}
            <div className="flex flex-col items-center w-full gap-2">
              <Button className="w-full">Comprar agora</Button>
              <Button className="w-full" variant="secondary">
                Adicionar ao carrinho
              </Button>
            </div>
          </div>
          <ShippingCard />
        </div>
      </div>
    </div>
  );
}
