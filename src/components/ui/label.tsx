"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const labelVariants = cva(
  "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "text-sm leading-none font-normal",
        h1: "scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance",
        h2: "scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0",
        h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
        h4: "scroll-m-20 text-xl font-semibold tracking-tight",
        p: "leading-7 [&:not(:first-child)]:mt-6",
        lead: "text-muted-foreground text-xl",
        large: "text-lg font-semibold",
        small: "text-sm leading-none font-medium",
        muted: "text-muted-foreground text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Label({
  className,
  variant,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root> &
  VariantProps<typeof labelVariants>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(labelVariants({ variant, className }))}
      {...props}
    />
  );
}

export { Label };
