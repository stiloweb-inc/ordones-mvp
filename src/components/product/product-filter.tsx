import { PriceSlider } from "@/components/price-slider";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { X } from "lucide-react";

export default function ProductFilters() {
  return (
    <div className="flex flex-col w-full gap-8">
      <div className="flex flex-col w-full gap-4">
        <Label className="text-md font-semibold mb-8">Preço</Label>
        <PriceSlider />
      </div>
      <Separator />
      <div className="flex flex-col w-full gap-4  -mt-2">
        <Label className="text-md font-semibold">Categorias</Label>
        <div className="flex items-center gap-2">
          <Checkbox />
          <Label>Copos Térmicos</Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox />
          <Label>Jogo Americano</Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox />
          <Label>Kits e Petisqueiras</Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox />
          <Label>Bar e Restaurantes</Label>
        </div>
      </div>
      <Separator />
      <div className="flex flex-col w-full gap-4 -mt-2">
        <Label className="text-md font-semibold">Outros</Label>
        <div className="flex items-center gap-2">
          <Checkbox />
          <Label>Combos</Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox />
          <Label>Em promoção</Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox />
          <Label>Adicionado recentemente</Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox />
          <Label>Mais de 50% de desconto</Label>
        </div>
      </div>
      <div className="flex items-center w-full gap-2">
        <div className="w-full">
          <Button className="w-full">Aplicar filtros</Button>
        </div>
        <Button size="icon" variant="secondary">
          <X />
        </Button>
      </div>
    </div>
  );
}
