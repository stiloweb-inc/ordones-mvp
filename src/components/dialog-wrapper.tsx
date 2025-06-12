"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Expand, X } from "lucide-react";

export function DialogWrapper({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <Dialog defaultOpen={true} onOpenChange={() => router.back()}>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle className="hidden">Product Title</DialogTitle>
          <div className="absolute right-0 mr-6">
            <div className="flex items-center justify-end gap-2">
              <Button
                size="icon"
                variant="ghost"
                onClick={() => location.reload()}
              >
                <Expand />
              </Button>
              <Button size="icon" variant="ghost" onClick={() => router.back()}>
                <X className="size-5" />
              </Button>
            </div>
          </div>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}
