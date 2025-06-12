"use client";

import { HeartPlus } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Label } from "../ui/label";
import { Badge } from "../ui/badge";
import { floatToBrlCurrency } from "@/utils/float-to-brl-currency";
import { calculateValueByPercentage } from "@/utils/calculate-value-by-percentage";
import { calculateInstallmentsValues } from "@/utils/calculate-installments-values";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export type ProductItem = {
  id: string;
  name: string;
  percentageSale?: number;
  value: number;
  installments?: number;
};

export function ProductCard({
  id,
  name,
  percentageSale,
  value,
  installments,
}: ProductItem) {
  const router = useRouter();

  const newValue = percentageSale
    ? calculateValueByPercentage(value, percentageSale)
    : value;
  const installmentsValues =
    installments && calculateInstallmentsValues(value, installments);

  return (
    <Card className="hover:border-primary/30 transition ease-in">
      <CardContent>
        <div className="flex flex-col w-full gap-4">
          <div
            className="bg-white/10 w-full h-[250px] rounded-lg cursor-pointer"
            onClick={() => router.push(`/products/${id}`)}
          ></div>
          <div className="flex flex-col w-full gap-2">
            <div className="flex items-center gap-2 w-full">
              <Label
                className={cn(
                  !percentageSale && "-mb-1",
                  "text-md font-medium"
                )}
              >
                {name}
              </Label>
              {percentageSale && (
                <Badge variant="outline">
                  <span className="font-semibold">
                    {percentageSale.toString()}% OFF
                  </span>
                </Badge>
              )}
            </div>
            <div className="flex flex-col w-full">
              {percentageSale && (
                <Label className="text-xs font-normal line-through">
                  {floatToBrlCurrency(value)}
                </Label>
              )}
              <Label className="text-2xl font-bold">
                {floatToBrlCurrency(newValue)}
              </Label>
              {installmentsValues && (
                <Label className="text-sm font-medium text-muted-foreground">
                  Em até {installments}x de{" "}
                  {floatToBrlCurrency(installmentsValues)}
                </Label>
              )}
            </div>
            <div className="flex items-center gap-2 w-full">
              <div className="w-full">
                <Button className="w-full">Comprar</Button>
              </div>
              <Button size="icon" variant="secondary">
                <HeartPlus />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
