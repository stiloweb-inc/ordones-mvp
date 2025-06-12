import { MapPin, Search } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { ShippingOptionTable } from "./tables/shipping-options/table";
import { ShippingOption as Option } from "@/types/shipping-option";

export function ShippingCard() {
  const options: Option[] = [
    {
      name: "pickup",
      time: 16,
      value: 0,
    },
    {
      name: "sedex",
      time: 22,
      value: 100,
    },
    {
      name: "pac",
      time: 22,
      value: 70,
    },
  ];

  return (
    <Card className="border-none">
      <CardHeader>
        <CardTitle>
          <span className="flex items-center gap-2">
            <MapPin className="text-primary" />
            Simule frete e prazo de entrega
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col w-full gap-4">
          <div className="flex items-center w-full gap-2">
            <Input placeholder="Insira seu CEP" />
            <Button size="icon">
              <Search />
            </Button>
          </div>
          <Separator />

          <div className="flex flex-col w-full gap-4 p-4 bg-accent/50 rounded-lg">
            <span className="flex items-center gap-2 leading-none font-semibold ml-2 mt-2">
              Opções de frete para{" "}
              <div className="flex items-center justify-center text-primary font-semibold">
                Vitória, ES
              </div>
            </span>
            <div className="flex flex-col w-full gap-2">
              <ShippingOptionTable data={options} />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
