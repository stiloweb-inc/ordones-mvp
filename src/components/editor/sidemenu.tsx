import { Input } from "../ui/input";
import { ChangeEvent, SetStateAction, Dispatch } from "react";
import { Label } from "../ui/label";
import Image from "next/image";

export function EditorSideMenu({
  imagePreview,
  setImagePreview,
}: {
  imagePreview: string | null;
  setImagePreview: Dispatch<SetStateAction<string | null>>;
}) {
  // const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col w-full h-full bg-accent border border-accent-foreground/10 rounded-xl p-4 gap-4">
      <div className="space-y-2">
        <Label htmlFor="image-upload">Upload de Imagem</Label>
        <Input
          id="image-upload"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="cursor-pointer"
        />
      </div>

      {imagePreview && (
        <div className="relative w-full aspect-square rounded-lg overflow-hidden border border-accent-foreground/10">
          <Image
            src={imagePreview}
            alt="Preview"
            className="w-full h-full object-contain"
          />
        </div>
      )}
    </div>
  );
}
