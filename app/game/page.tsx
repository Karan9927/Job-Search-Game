import { Suspense } from "react";
import { Card } from "@/components/ui/card";
import QuizGameClient from "@/components/Game/quiz-game-client";
import { checkLevelCompletion } from "@/lib/userActions";

// Server-side data fetching
async function getInitialLevelData(level: number) {
  try {
    const levelCompletion = await checkLevelCompletion(level);
    console.log("levelcompletion", levelCompletion);
    console.log("level", level);
    const apiUrl = "https://api-ghz-v2.azurewebsites.net/api/v2/quiz";
    const response = await fetch(`${apiUrl}?level=${level}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();

    return {
      questions: data.test.question,
      levelCompleted: levelCompletion.completed,
    };
  } catch (error) {
    console.error("Failed to fetch initial level data:", error);

    return {
      questions: Array(10)
        .fill(null)
        .map((_, i) => ({
          question: `Sample question ${i + 1} for level ${level}?`,
          comment: "",
          test_answer: Math.floor(Math.random() * 3),
          answers: [
            `Option A for question ${i + 1}`,
            `Option B for question ${i + 1}`,
            `Option C for question ${i + 1}`,
          ],
        })),
      nextLevel: level + 1,
      levelCompleted: false,
    };
  }
}

export default async function QuizGamePage({
  searchParams,
}: {
  searchParams: { level?: string };
}) {
  const currentLevel = searchParams.level
    ? Number.parseInt(searchParams.level)
    : 1;

  const initialData = await getInitialLevelData(currentLevel);
  return (
    <main className="container mx-auto py-8 px-4">
      <Suspense
        fallback={<div className="text-center py-8">Loading quiz game...</div>}
      >
        <Card className="p-6 shadow-sm">
          <QuizGameClient
            initialLevel={currentLevel}
            initialQuestions={initialData.questions}
            initialLevelCompleted={initialData.levelCompleted}
          />
        </Card>
      </Suspense>
    </main>
  );
}
