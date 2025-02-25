import SignupForm from "@/components/signup/signup-form";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8 flex items-center justify-center">
        <SignupForm />
      </main>
    </div>
  );
}
