"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function FiltersLoading() {
  return (
    <div className="rounded-xl w-full p-4 animate-pulse">
      <Skeleton className="rounded-lg w-full h-[250px]" />
    </div>
  );
}
