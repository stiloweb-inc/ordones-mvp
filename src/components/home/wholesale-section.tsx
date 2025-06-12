import { Button } from "../ui/button";
import { Label } from "../ui/label";

export function WholesaleSection() {
  return (
    <div className="grid grid-cols-2 w-full h-[550px] bg-primary rounded-lg">
      <div className="flex items-center justify-between p-6 w-full h-full">
        <div className="bg-muted rounded-xl w-full h-full"></div>
      </div>
      <div className="flex flex-col w-full h-full items-start justify-center px-24 gap-4">
        <Label variant="h1" className="text-accent">
          Atacado Ordones
        </Label>
        <Label className="text-accent text-md w-2/3">
          Quer fazer seu pedido em grande quantidade? Nossa equipe está pronta
          para te atender em qualquer lugar do Brasil em um prazo que você vai
          surpreender.
        </Label>
        <Button variant="secondary">Falar com um consultor</Button>
      </div>
    </div>
  );
}
