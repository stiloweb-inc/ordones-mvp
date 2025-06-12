"use client";

import { LoginForm } from "@/components/forms/login-form";
import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogContent,
  DialogDescription,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";

export default function LoginDialog() {
  const router = useRouter();

  return (
    <Dialog defaultOpen onOpenChange={() => router.back()}>
      <DialogContent className="w-md">
        <DialogHeader>
          <DialogTitle>Já possuí uma conta?</DialogTitle>
          <DialogDescription>
            Informe os seus dados abaixo para acessá-la
          </DialogDescription>
        </DialogHeader>
        <LoginForm />
      </DialogContent>
    </Dialog>
  );
}
