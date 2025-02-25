import LoginForm from "@/components/login/login-form";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8 flex items-center justify-center">
        <LoginForm />
      </main>
    </div>
  );
}
