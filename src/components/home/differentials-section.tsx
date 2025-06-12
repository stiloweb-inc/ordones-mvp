import { CreditCard, Phone, ShieldCheck, Truck } from "lucide-react";
import { Separator } from "../ui/separator";
import { Label } from "../ui/label";
import { cn } from "@/lib/utils";

export function DifferentialsSection() {
  const differentials = [
    {
      icon: Truck,
      text: "Entrega em todo o território nacional",
    },
    {
      icon: CreditCard,
      text: "Condições especiais de pagamento",
    },
    {
      icon: Phone,
      text: "Suporte técnico por telefone",
    },
    {
      icon: ShieldCheck,
      text: "Garantia contra defeitos de fábrica",
    },
  ];

  return (
    <div className="flex flex-col w-full h-[200px] items-center justify-center">
      <div className="grid grid-cols-6 w-full h-12">
        {differentials.map((item, index) => (
          <div
            key={index}
            className={cn(
              "flex items-center justify-center gap-4",
              index === 0 && "col-start-2"
            )}
          >
            <div className="flex items-center justify-center size-12 bg-primary/5 rounded-lg text-primary">
              <item.icon />
            </div>
            <Separator orientation="vertical" />
            <Label className="w-2/3 text-white/90">{item.text}</Label>
          </div>
        ))}
      </div>
    </div>
  );
}
