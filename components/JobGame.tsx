"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

import { fetchSubcategories, fetchQuestions } from "@/lib/dataActions";
import {
  saveUserAnswer,
  checkUserLevelProgress,
  saveUserLevelProgress,
  getPreviousAnswers,
} from "@/lib/userActions";
import { Category } from "./Game";
import { launchConfetti } from "@/components/ui/confetti";
import { ClockAlertIcon, Lock } from "lucide-react";
import { toast } from "sonner";
import { getUserPoints, updateLeaderboard } from "@/lib/leaderboard";
import checkAndAssignBadges from "@/lib/badge";

type GameStage =
  | "game_selection"
  | "subcategory_selection"
  | "difficulty_selection"
  | "playing"
  | "level_complete"
  | "time_up";

type Subcategory = {
  id: number;
  name: string;
};

type DifficultyStatus = {
  name: string;
  isUnlocked: boolean;
};

export interface Question {
  id: number;
  question: string;
  options: any;
  correctAnswer: number;
  points: any;
  levelId: number;
}

type AnsweredQuestion = {
  questionId: number;
  isCorrect: boolean;
};

export const JobGame: React.FC<{ userId: string; category: Category }> = ({
  userId,
  category,
}) => {
  const [gameStage, setGameStage] = useState<GameStage>("game_selection");
  const [subcategories, setSubcategories] = useState<Subcategory[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [userProgress, setUserProgress] = useState<any[]>([]);

  const [selectedSubcategory, setSelectedSubcategory] = useState<
    number | undefined
  >(undefined);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(
    null
  );

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const [timeRemaining, setTimeRemaining] = useState(90); // 5 minutes (300 seconds)
  const [timerActive, setTimerActive] = useState(false);

  const [difficultyLevels, setDifficultyLevels] = useState<DifficultyStatus[]>([
    { name: "Beginner", isUnlocked: true },
    { name: "Intermediate", isUnlocked: false },
    { name: "Advanced", isUnlocked: false },
  ]);

  const [answeredQuestions, setAnsweredQuestions] = useState<
    AnsweredQuestion[]
  >([]);

  const [sessionScore, setSessionScore] = useState(0);

  useEffect(() => {
    const loadGameData = async () => {
      try {
        const fetchedSubcategories = await fetchSubcategories(category.id);
        const progress = await checkUserLevelProgress(userId, category.id);
        const score = await getUserPoints(userId);

        setScore(score ?? 0);
        setSubcategories(fetchedSubcategories);
        setUserProgress(progress);

        const updatedDifficulties = difficultyLevels.map((diff, index) => ({
          ...diff,
          isUnlocked:
            index === 0 ||
            progress.some(
              (p) =>
                p.subcategoryId === selectedSubcategory && p.levelId === index
            ),
        }));
        setDifficultyLevels(updatedDifficulties);
      } catch (error) {}
    };
    loadGameData();
  }, [category, userId, selectedSubcategory]);

  // Timer effect
  useEffect(() => {
    let timerId: NodeJS.Timeout;

    if (timerActive && timeRemaining > 0) {
      timerId = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            clearInterval(timerId);
            handleTimeUp();
            setTimerActive(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timerId);
  }, [timerActive, timeRemaining]);

  const handleTimeUp = async () => {
    await updateLeaderboard(userId, sessionScore);
    setGameStage("time_up");
  };

  const handleSubcategorySelect = (subcategoryId: number) => {
    setSelectedSubcategory(subcategoryId);
    setGameStage("difficulty_selection");
  };

  const handleDifficultySelect = async (difficulty: string) => {
    const selectedDifficultyStatus = difficultyLevels.find(
      (d) => d.name === difficulty
    );

    if (!selectedDifficultyStatus?.isUnlocked) {
      toast.info("This difficulty level is not yet unlocked!");
      return;
    }

    try {
      const fetchedQuestions = await fetchQuestions(
        category.id,
        selectedSubcategory ?? 0,
        difficulty
      );

      const previousAnswers = await getPreviousAnswers(
        userId,
        selectedSubcategory ?? 0,
        getDifficultyLevel(difficulty)
      );

      setAnsweredQuestions(previousAnswers);
      setSelectedDifficulty(difficulty);
      setQuestions(fetchedQuestions);
      setGameStage("playing");
      setCurrentQuestionIndex(0);

      setTimeRemaining(90);
      setTimerActive(true);
      setSessionScore(0);
    } catch (error) {
      alert("Failed to load questions");
    }
  };

  const handleAnswerSubmit = async () => {
    if (selectedAnswer === null) return;

    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

    const previouslyAnswered = answeredQuestions.find(
      (q) => q.questionId === currentQuestion.id && q.isCorrect
    );

    if (isCorrect && !previouslyAnswered) {
      const pointsForQuestion = currentQuestion.points.point;
      setSessionScore((prev) => prev + pointsForQuestion);
      setScore((prev) => prev + pointsForQuestion);
    } else if (isCorrect && previouslyAnswered) {
      toast.info("You've already answered this question correctly before!");
    }

    try {
      await saveUserAnswer(
        userId,
        currentQuestion.id,
        selectedAnswer,
        currentQuestion.levelId,
        selectedSubcategory ?? 0
      );

      if (isCorrect) {
        setAnsweredQuestions((prev) => [
          ...prev.filter((q) => q.questionId !== currentQuestion.id),
          { questionId: currentQuestion.id, isCorrect: true },
        ]);
      }
    } catch (error) {
      console.error("Failed to save answer", error);
    }

    setIsAnswerSubmitted(true);
  };

  const getDifficultyLevel = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return 1;
      case "Intermediate":
        return 2;
      case "Advanced":
        return 3;
      default:
        return 1;
    }
  };

  const nextLevel = async () => {
    const currentLevelIndex = difficultyLevels.findIndex(
      (level) => level.name === selectedDifficulty
    );
    const nextLevel = difficultyLevels[currentLevelIndex + 1];

    if (!nextLevel) {
      setGameStage("game_selection");
      return;
    }

    try {
      // Unlock the next difficulty level
      const updatedDifficulties = difficultyLevels.map((diff, index) => ({
        ...diff,
        isUnlocked: index <= currentLevelIndex + 1, // Unlock next level
      }));
      setSelectedAnswer(null);
      setIsAnswerSubmitted(false);
      setDifficultyLevels(updatedDifficulties);
      setSelectedDifficulty(nextLevel.name);
      setGameStage("difficulty_selection");
    } catch (error) {
      console.error("Failed to unlock next level", error);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswerSubmitted(false);
    } else {
      if (selectedDifficulty === null) {
        toast.info("Please select a difficulty level before proceeding.");
        return;
      }
      const levelId = getDifficultyLevel(selectedDifficulty);
      const completeLevel = async () => {
        try {
          await saveUserLevelProgress(
            userId,
            levelId, // Assuming all questions are from the same level
            selectedSubcategory ?? 0
          );

          await updateLeaderboard(userId, sessionScore);
          const badges = await checkAndAssignBadges(userId);
          badges.forEach((badge) => {
            toast.success(
              `🎉 Congratulations! You've earned the "${badge}" badge!`
            );
          });
          setGameStage("level_complete");
          setTimerActive(false);
          launchConfetti();
        } catch (error) {
          console.error("Failed to save level progress", error);
        }
      };
      completeLevel();
    }
  };

  const resetGame = () => {
    setGameStage("subcategory_selection");
    setSelectedSubcategory(0);
    setSelectedDifficulty(null);
    setScore(0);
    setCurrentQuestionIndex(0);
    setTimeRemaining(300);
    setTimerActive(false);
    setSessionScore(0);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const startGame = () => {
    setGameStage("subcategory_selection");
  };

  const renderContent = () => {
    switch (gameStage) {
      case "game_selection":
        return (
          <div className="text-center mt-4">
            <p className="mb-4 text-lg">
              Are you ready to start the Career Development challenge?
            </p>
            <Button onClick={startGame}>Start Challange</Button>
          </div>
        );
      case "subcategory_selection":
        return (
          <div>
            <h3 className="text-lg font-semibold mb-4">Select Subcategory</h3>
            <div className="grid grid-cols-2 gap-4">
              {subcategories.map((subcategory) => (
                <Button
                  key={subcategory.id}
                  onClick={() => handleSubcategorySelect(subcategory.id)}
                >
                  {subcategory.name}
                </Button>
              ))}
            </div>
          </div>
        );

      case "difficulty_selection":
        return (
          <div>
            <h3 className="text-lg font-semibold mb-4">Select Difficulty</h3>
            <div className="grid grid-cols-3 gap-4">
              {difficultyLevels.map((difficulty) => (
                <Button
                  key={difficulty.name}
                  onClick={() => handleDifficultySelect(difficulty.name)}
                  variant={difficulty.isUnlocked ? "default" : "outline"}
                  className="relative"
                >
                  {!difficulty.isUnlocked && (
                    <Lock
                      className="absolute right-1 text-gray-400"
                      size={16}
                    />
                  )}
                  {difficulty.name}
                </Button>
              ))}
            </div>
          </div>
        );

      case "playing":
        const currentQuestion = questions[currentQuestionIndex];
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">
              {currentQuestion.question}
            </h3>
            <div className="space-y-2">
              {currentQuestion.options.map((option: string, index: number) => (
                <Button
                  key={index}
                  variant={
                    isAnswerSubmitted
                      ? index === currentQuestion.correctAnswer
                        ? "success"
                        : selectedAnswer === index
                        ? "destructive"
                        : "outline"
                      : "outline"
                  }
                  className={`w-full ${
                    selectedAnswer === index && !isAnswerSubmitted
                      ? "bg-blue-500 text-white hover:bg-blue-500 hover:text-white"
                      : ""
                  }`}
                  onClick={() => !isAnswerSubmitted && setSelectedAnswer(index)}
                >
                  {option}
                </Button>
              ))}
            </div>

            {!isAnswerSubmitted && (
              <div>
                <Button
                  onClick={handleAnswerSubmit}
                  disabled={selectedAnswer === null}
                >
                  Submit Answer
                </Button>
              </div>
            )}
            {isAnswerSubmitted && (
              <Button onClick={handleNextQuestion}>
                {currentQuestionIndex < questions.length - 1
                  ? "Next Question"
                  : "Complete Level"}
              </Button>
            )}
          </div>
        );

      case "level_complete":
        return (
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Level Complete!</h3>
            <p>Your Score: {score}</p>
            <div className="mt-4 flex gap-4 justify-center">
              <Button onClick={nextLevel}>Next Level</Button>
              <Button onClick={resetGame}>Play Again</Button>
            </div>
          </div>
        );

      case "time_up":
        return (
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Time&apos;s Up!</h3>
            <p>Your Final Score: {score}</p>
            <Button onClick={resetGame} className="mt-4">
              Play Again
            </Button>
          </div>
        );

      default:
        return <></>;
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex justify-between">
          <div>{`${category.name} Challenge`}</div>
          <span className="text-red-500 text-sm flex items-center gap-2">
            <ClockAlertIcon size={16} />
            {formatTime(timeRemaining)}
          </span>
        </CardTitle>
        <CardDescription>
          {gameStage === "game_selection" &&
            `Welcome to the ${category.name} challenge!`}
          {gameStage === "subcategory_selection" &&
            "Select a subcategory to begin"}
          {gameStage === "difficulty_selection" &&
            "Choose your difficulty level"}
          {gameStage === "playing" &&
            `${category.name} - ${selectedDifficulty} - Question ${
              currentQuestionIndex + 1
            } of 10`}
        </CardDescription>
      </CardHeader>
      <CardContent>{renderContent()}</CardContent>
      <CardFooter>
        {gameStage !== "subcategory_selection" &&
          gameStage !== "difficulty_selection" && (
            <div className="w-full flex justify-between items-center">
              <p className="flex mr-4 gap-2">
                <span>Score:</span> <span>{score}</span>
              </p>
              <Progress
                value={
                  questions.length > 0
                    ? (currentQuestionIndex / (questions.length - 1)) * 100
                    : 0
                }
              />
            </div>
          )}
      </CardFooter>
    </Card>
  );
};
