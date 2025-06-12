import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Label } from "../ui/label";

export function CartEmptyState() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center w-full h-full px-4">
      <Label className="text-md font-medium">Seu carrinho está vazio 😔</Label>
      <Button variant="link" onClick={() => router.push("/products")}>
        Ver produtos
      </Button>
    </div>
  );
}
