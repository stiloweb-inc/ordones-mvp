import { Skeleton } from "../ui/skeleton";

export function ProductSkeleton() {
  return (
    <div className="flex flex-col gap-4 w-full p-6 rounded-xl bg-accent/50 animate-pulse">
      <Skeleton className="w-full h-[220px] rounded-xl" />
      <Skeleton className="w-full h-5 rounded-xl" />
      <div className="grid grid-cols-5 gap-2">
        <Skeleton className="col-span-3 w-full h-5 rounded-xl" />
        <Skeleton className="col-span-2 h-5 rounded-xl" />
      </div>
      <Skeleton className="w-full h-10 rounded-xl" />
    </div>
  );
}
