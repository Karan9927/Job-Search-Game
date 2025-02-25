import { Leaderboard } from "@/components/leaderboard/Leaderboard";

export default function LeaderboardPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col bg-gradient-to-br from-blue-50 to-indigo-100 p-6 items-center">
      <main className="flex-grow container mx-auto px-4 py-8">
        <Leaderboard />
      </main>
    </div>
  );
}
