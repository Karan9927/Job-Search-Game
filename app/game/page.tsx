import { auth } from "@/auth";
import Game from "../../components/Game";

export default async function GamePage() {
  const session = await auth();
  const userId = session?.user.id;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-primary mb-8 text-center">
          Guhuza Job-Seeking Adventure
        </h1>

        <div className="space-y-8">
          <Game userId={userId || ""} />
        </div>
      </main>
    </div>
  );
}
