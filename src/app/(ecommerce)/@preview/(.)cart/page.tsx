"use client";

import { CartEmptyState } from "@/components/cart/empty-state";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetHeader,
  SheetTitle,
  SheetContent,
  SheetDescription,
  SheetFooter,
} from "@/components/ui/sheet";
import { useRouter } from "next/navigation";

export default function CartDialog() {
  const router = useRouter();

  return (
    <Sheet defaultOpen onOpenChange={() => router.back()}>
      <SheetContent className="w-md">
        <SheetHeader>
          <SheetTitle>Carrinho</SheetTitle>
          <SheetDescription>Seu carrinho de compras</SheetDescription>
        </SheetHeader>
        <CartEmptyState />
        <SheetFooter className="border-t">
          <div className="flex flex-col w-full mb-2">
            <div className="flex items-center justify-between w-full">
              <Label className="text-md font-medium">Subtotal</Label>
              <Label className="text-md font-bold">R$ 00,00</Label>
            </div>
            <Label className="text-xs font-normal text-muted-foreground">
              Frete será calculado na finalização
            </Label>
          </div>
          <Button>Finalizar pedido</Button>
          <Button variant="link" onClick={() => location.reload()}>
            Ir para o carrinho
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
