import { Minus, Plus } from "lucide-react";

export function QuantitySelector({
  quantity,
  addQuantity,
  removeQuantity,
  onChangeQuantity,
}: {
  quantity: number;
  addQuantity: () => void;
  removeQuantity: () => void;
  onChangeQuantity: (quantity: number) => void;
}) {
  return (
    <div className="flex items-center justify-between w-[110px] px-2 bg-accent rounded-lg h-9">
      <div>
        <button
          onClick={removeQuantity}
          className="hover:bg-white/10 flex items-center justify-center size-6 rounded-lg transition ease-in cursor-pointer"
        >
          <Minus className="size-4" />
        </button>
      </div>
      <input
        type="number"
        className="no-spinner select-none outline-none w-full h-full text-center"
        value={quantity}
        onChange={(e) => onChangeQuantity(Number(e.target.value))}
      />
      <div>
        <button
          onClick={addQuantity}
          className="hover:bg-white/10 flex items-center justify-center size-6 rounded-lg transition ease-in cursor-pointer"
        >
          <Plus className="size-4" />
        </button>
      </div>
    </div>
  );
}
