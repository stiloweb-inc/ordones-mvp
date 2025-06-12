import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductsHighlight } from "../shop/products-highlight";

export function SalesSection() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-6 mb-2">
      <Tabs defaultValue="40" className="w-full gap-4 items-center">
        <div className="grid grid-cols-3 w-full">
          <Label className="font-semibold text-lg">Em promoção</Label>
          <div className="flex items-center justify-center">
            <TabsList>
              <TabsTrigger value="20">20% Off</TabsTrigger>
              <TabsTrigger value="40">40% Off</TabsTrigger>
              <TabsTrigger value="60">60% Off</TabsTrigger>
              <TabsTrigger value="80">80% Off</TabsTrigger>
            </TabsList>
          </div>
          <div className="flex items-center justify-end">
            <Button variant="ghost" className="hover:text-primary">
              Mais ofertas
            </Button>
          </div>
        </div>
        <TabsContent value="20" className="w-full">
          <ProductsHighlight />
        </TabsContent>
        <TabsContent value="40" className="w-full">
          <ProductsHighlight />
        </TabsContent>
        <TabsContent value="60" className="w-full">
          <ProductsHighlight />
        </TabsContent>
        <TabsContent value="80" className="w-full">
          <ProductsHighlight />
        </TabsContent>
      </Tabs>
      <Button>Ver todos</Button>
    </div>
  );
}
