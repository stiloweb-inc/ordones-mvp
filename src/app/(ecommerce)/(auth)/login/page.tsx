import { LoginForm } from "@/components/forms/login-form";

export default function LoginPage() {
  return (
    <div className="flex flex-col w-full h-full py-24 items-center justify-center gap-4">
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Já possuí uma conta?</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Informe os seus dados abaixo para acessá-la
        </p>
      </div>
      <LoginForm className="w-sm" />
    </div>
  );
}
