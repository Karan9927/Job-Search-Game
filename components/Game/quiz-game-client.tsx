"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Clock, AlertTriangle, CheckCircle, Trophy } from "lucide-react";
import { launchConfetti } from "../ui/confetti";
import { toast } from "sonner";
import {
  getUserPoints,
  saveUserLevelProgress,
  submitUserAnswer,
} from "@/lib/userActions";
import Spinner from "../ui/spinner/spinner";
import { updateLeaderboard } from "@/lib/leaderboardActions";

interface QuizGameClientProps {
  initialLevel: number;
  initialQuestions: any[];
  initialLevelCompleted: boolean;
}

export default function QuizGameClient({
  initialLevel,
  initialQuestions,
  initialLevelCompleted,
}: QuizGameClientProps) {
  const router = useRouter();
  const [gameState, setGameState] = useState<
    "idle" | "playing" | "completed" | "timedOut" | "alreadyCompleted"
  >(initialLevelCompleted ? "alreadyCompleted" : "idle");
  const [currentLevel, setCurrentLevel] = useState(initialLevel);
  const [questions, setQuestions] = useState<any[]>(initialQuestions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [confettiLaunched, setConfettiLaunched] = useState(false);
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes in seconds
  const [isCheckingProgress, setIsCheckingProgress] = useState(false);
  const [forcePlay, setForcePlay] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [levelManuallyCompleted, setLevelManuallyCompleted] = useState(false);

  const maxPossibleScore = questions.length * 100;

  const scoreProgressPercentage =
    maxPossibleScore > 0 ? Math.min(100, (score / maxPossibleScore) * 100) : 0;

  useEffect(() => {
    setCurrentLevel(initialLevel);
    setQuestions(initialQuestions);
    if (!levelManuallyCompleted) {
      setGameState(initialLevelCompleted ? "alreadyCompleted" : "idle");
    }
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
    setConfettiLaunched(false);
  }, [initialLevel, initialLevelCompleted]);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (gameState === "playing") {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            if (timer) clearInterval(timer);
            setGameState("timedOut");
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [gameState]);

  useEffect(() => {
    if (gameState === "completed" && !confettiLaunched) {
      launchConfetti();
      setConfettiLaunched(true);
    }
  }, [gameState, confettiLaunched]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    const loadGameData = async () => {
      try {
        const score = await getUserPoints();
        setScore(score ?? 0);
      } catch (error) {}
    };
    loadGameData();
  }, [currentLevel]);

  const startGame = async () => {
    if (initialLevelCompleted && !forcePlay) {
      setGameState("alreadyCompleted");
      return;
    }

    setQuestions(initialQuestions);
    setCurrentQuestionIndex(0);
    setScore(0);
    setTimeLeft(90);
    setGameState("playing");
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
  };

  const handleAnswerSelect = (index: number) => {
    if (!isAnswerSubmitted) {
      setSelectedAnswer(index);
    }
  };

  const handleAnswerSubmit = async () => {
    if (selectedAnswer === null || isSubmitting) return;

    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.test_answer;

    setIsSubmitting(true);

    try {
      await submitUserAnswer(
        currentQuestion.answers[selectedAnswer],
        isCorrect
      );

      if (isCorrect) {
        setScore((prev) => prev + 100);
      }

      setIsAnswerSubmitted(true);
    } catch (error) {
      console.error("Error saving answer:", error);
      toast.error("Failed to save your answer");

      if (isCorrect) {
        setScore((prev) => prev + 100);
      }
      setIsAnswerSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswerSubmitted(false);
    } else {
      completeLevel();
    }
  };

  const completeLevel = async () => {
    try {
      await saveUserLevelProgress(currentLevel);
      await updateLeaderboard(score);

      setLevelManuallyCompleted(true);

      setGameState("completed");
    } catch (error) {
      console.error("Error completing level:", error);
      toast.error("Error saving progress");
    }
  };

  const goToNextLevel = () => {
    const newLevel = currentLevel + 1;
    router.push(`?level=${newLevel}`);

    // Reset game state to ensure proper initialization on next level
    setGameState("idle");
    setConfettiLaunched(false);
    setForcePlay(false);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
  };

  const playAgain = () => {
    setGameState("idle");
    setConfettiLaunched(false);
    setForcePlay(true);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
  };

  const renderContent = () => {
    switch (gameState) {
      case "idle":
        return (
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">
              Level {currentLevel}
            </h2>
            <p className="mb-6">
              Ready to test your knowledge? Answer 10 questions to complete this
              level!
            </p>
            <Button size="lg" onClick={startGame} disabled={isCheckingProgress}>
              {isCheckingProgress ? "Checking Progress..." : "Start Challenge"}
            </Button>
          </div>
        );

      case "playing":
        const currentQuestion = questions[currentQuestionIndex];
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-800">
              {currentQuestion?.question || "Loading question..."}
            </h3>

            <div className="space-y-3">
              {currentQuestion?.answers?.map(
                (answer: string, index: number) => (
                  <Button
                    key={index}
                    variant={
                      isAnswerSubmitted
                        ? index === currentQuestion.test_answer
                          ? "success"
                          : selectedAnswer === index
                          ? "destructive"
                          : "outline"
                        : "outline"
                    }
                    className={`w-full justify-start h-auto py-4 px-6 text-left ${
                      isAnswerSubmitted
                        ? index === currentQuestion.test_answer
                          ? "bg-green-500 text-white hover:bg-green-500 hover:text-white"
                          : selectedAnswer === index
                          ? "bg-red-500 text-white hover:bg-red-500 hover:text-white"
                          : ""
                        : selectedAnswer === index
                        ? "bg-blue-500 text-white hover:bg-blue-500 hover:text-white"
                        : ""
                    }`}
                    onClick={() => handleAnswerSelect(index)}
                  >
                    {answer}
                  </Button>
                )
              )}
            </div>

            <div className="pt-4">
              {!isAnswerSubmitted ? (
                <Button
                  onClick={handleAnswerSubmit}
                  disabled={selectedAnswer === null || isSubmitting}
                >
                  {isSubmitting ? <Spinner /> : "Submit Answer"}
                </Button>
              ) : (
                <Button onClick={handleNextQuestion}>
                  {currentQuestionIndex < questions.length - 1
                    ? "Next Question"
                    : "Complete Level"}
                </Button>
              )}
            </div>
          </div>
        );

      case "completed":
        return (
          <div className="text-center py-10">
            <div className="flex justify-center mb-6">
              <Trophy className="h-16 w-16 text-yellow-500" />
            </div>
            <h2 className="text-3xl font-bold mb-6">Level Complete!</h2>
            <p className="text-xl mb-8">Your Score: {score}</p>

            <div className="flex justify-center gap-4">
              <Button
                onClick={goToNextLevel}
                className="bg-black hover:bg-black/80 text-white px-6"
              >
                Next Level
              </Button>
              <Button
                onClick={playAgain}
                className="bg-black hover:bg-black/80 text-white px-6"
              >
                Play Again
              </Button>
            </div>
          </div>
        );

      case "timedOut":
        return (
          <div className="text-center py-10">
            <div className="flex justify-center mb-6">
              <AlertTriangle className="h-16 w-16 text-red-500" />
            </div>
            <h2 className="text-3xl font-bold mb-6 text-red-500">
              Time&apos;s Up!
            </h2>
            <p className="text-xl mb-8">Your Final Score: {score}</p>

            <div className="flex justify-center">
              <Button
                onClick={playAgain}
                className="bg-black hover:bg-black/80 text-white px-6"
              >
                Play Again
              </Button>
            </div>
          </div>
        );

      case "alreadyCompleted":
        return (
          <div className="text-center py-10">
            <div className="flex justify-center mb-6">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            <h2 className="text-3xl font-bold mb-6 text-green-500">
              Level Already Completed!
            </h2>
            <p className="text-lg mb-8">
              You&apos;ve already completed this level. Would you like to play
              again or move to the next level?
            </p>

            <div className="flex justify-center gap-4">
              <Button
                onClick={goToNextLevel}
                className="bg-black hover:bg-black/80 text-white px-6"
              >
                Next Level
              </Button>
              <Button
                onClick={playAgain}
                className="bg-black hover:bg-black/80 text-white px-6"
              >
                Play Again
              </Button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Card className="w-full max-w-3xl mx-auto border-0 shadow-sm">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <div>Level {currentLevel}</div>
          {gameState === "playing" && (
            <div
              className={`flex items-center gap-1 text-lg font-medium ${
                timeLeft < 30 ? "text-red-500" : "text-gray-500"
              }`}
            >
              <Clock className="h-5 w-5" />
              {formatTime(timeLeft)}
            </div>
          )}
        </CardTitle>
        <CardDescription>
          {gameState === "idle" && `Welcome to the Job Application Challenge!`}
          {gameState === "playing" &&
            ` Question ${currentQuestionIndex + 1} of ${questions.length}`}
          {gameState === "completed" &&
            "Congratulations on completing this level!"}
          {gameState === "timedOut" && "You ran out of time!"}
          {gameState === "alreadyCompleted" &&
            "You've already mastered this level!"}
        </CardDescription>
      </CardHeader>

      <CardContent>{renderContent()}</CardContent>

      <CardFooter className="flex flex-col">
        {gameState === "playing" && (
          <div className="w-full space-y-2">
            <div className="flex justify-between items-center">
              <div className="font-medium text-gray-700">Score: {score}</div>
              <div className="text-sm text-gray-500">
                Question {currentQuestionIndex + 1} of {questions.length}
              </div>
            </div>
            <Progress
              value={(currentQuestionIndex / (questions.length - 1)) * 100}
              className="h-2"
            />
          </div>
        )}

        {gameState === "completed" && (
          <div className="w-full mt-4">
            <div className="flex justify-between items-center mb-2">
              <div className="font-medium text-gray-700">
                Final Score: {score}
              </div>
              <div className="text-sm text-gray-500">
                {score} / {maxPossibleScore}
              </div>
            </div>
            <Progress value={scoreProgressPercentage} className="h-2" />
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
