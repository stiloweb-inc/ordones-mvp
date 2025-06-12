import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function WishlistPage() {
  return (
    <div className="flex flex-col w-full h-full items-center justify-center gap-4">
      <Label variant="h3">Lista de desejos vazia 💔</Label>
      <Label variant="small">
        Você ainda não adicionou nenhum item a sua lista
      </Label>
      <Button>Ver produtos</Button>
    </div>
  );
}
