"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast, useToast } from "@/components/ui/use-toast";

type GameStage = "locked" | "resume" | "interview" | "complete";

const resumeQuestions = [
  {
    question: "Which of the following is most important in a resume?",
    options: [
      "Fancy formatting",
      "Relevant experience and skills",
      "Personal hobbies",
      "Long paragraphs of text",
    ],
    correctAnswer: 1,
  },
  {
    question: "How long should a typical resume be?",
    options: [
      "As long as possible",
      "1-2 pages",
      "At least 5 pages",
      "Only half a page",
    ],
    correctAnswer: 1,
  },
];

const interviewQuestions = [
  "Tell me about yourself.",
  "What is your greatest professional achievement?",
  "Where do you see yourself in 5 years?",
];

const MAX_SCORE = 75;

export function JobSeekingGame() {
  const [gameStage, setGameStage] = useState<GameStage>("locked");
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [interviewAnswer, setInterviewAnswer] = useState("");
  const [progress, setProgress] = useState(0);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
  const { toast } = useToast();

  useEffect(() => {
    setProgress((score / MAX_SCORE) * 100);
  }, [score]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (gameStage !== "locked" && gameStage !== "complete" && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    }

    if (timeLeft === 0 && gameStage !== "complete") {
      endGame();
    }

    return () => clearInterval(timer);
  }, [gameStage, timeLeft]);

  const startGame = () => {
    setGameStage("resume");
    setTimeLeft(60);
  };

  const endGame = () => {
    setGameStage("complete");
    // Here you would typically update the leaderboard
    toast({
      title: "Game Over",
      description: `Your final score is ${score}`,
    });
  };

  const handleResumeAnswer = () => {
    if (selectedAnswer === null) return;

    if (selectedAnswer === resumeQuestions[currentQuestion].correctAnswer) {
      setScore((prevScore) => prevScore + 10);
      toast({
        title: "Correct!",
        description: "You've earned 10 points.",
      });
    } else {
      toast({
        title: "Incorrect",
        description:
          "The correct answer was: " +
          resumeQuestions[currentQuestion].options[
            resumeQuestions[currentQuestion].correctAnswer
          ],
        variant: "destructive",
      });
    }

    if (currentQuestion < resumeQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer(null);
    } else {
      setGameStage("interview");
      setCurrentQuestion(0);
    }
  };

  const handleInterviewAnswer = () => {
    if (interviewAnswer.trim().length > 50) {
      setScore((prevScore) => prevScore + 15);
      toast({
        title: "Great answer!",
        description: "You've earned 15 points for your detailed response.",
      });
    } else {
      toast({
        title: "Good try",
        description: "Remember to provide more details in your answers.",
        variant: "destructive",
      });
    }

    if (currentQuestion < interviewQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setInterviewAnswer("");
    } else {
      setGameStage("complete");
    }
  };

  const resetGame = () => {
    setGameStage("locked");
    setScore(0);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setInterviewAnswer("");
    setProgress(0);
    setTimeLeft(300);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Guhuza Job-Seeking Game</CardTitle>
        <CardDescription>
          {gameStage === "locked"
            ? "Click Start to begin the game"
            : gameStage === "resume"
            ? "Build your perfect resume"
            : gameStage === "interview"
            ? "Ace your interview"
            : "Game Complete!"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center mb-4">
          <div className="font-semibold">Score: {score}</div>
          <Progress value={progress} className="w-2/3" />
          {gameStage !== "locked" && gameStage !== "complete" && (
            <div className="font-semibold">Time: {formatTime(timeLeft)}</div>
          )}
        </div>
        {gameStage === "locked" && (
          <div className="text-center">
            <Button onClick={startGame}>Start Game</Button>
          </div>
        )}
        {gameStage === "resume" && (
          <div>
            <h3 className="text-lg font-semibold mb-2">
              {resumeQuestions[currentQuestion].question}
            </h3>
            <RadioGroup
              value={selectedAnswer?.toString()}
              onValueChange={(value) =>
                setSelectedAnswer(Number.parseInt(value))
              }
            >
              {resumeQuestions[currentQuestion].options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <RadioGroupItem
                    value={index.toString()}
                    id={`option-${index}`}
                  />
                  <Label htmlFor={`option-${index}`}>{option}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        )}
        {gameStage === "interview" && (
          <div>
            <h3 className="text-lg font-semibold mb-2">
              {interviewQuestions[currentQuestion]}
            </h3>
            <Textarea
              placeholder="Type your answer here..."
              value={interviewAnswer}
              onChange={(e) => setInterviewAnswer(e.target.value)}
              className="min-h-[100px]"
            />
          </div>
        )}
        {gameStage === "complete" && (
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Congratulations!</h3>
            <p className="text-xl mb-2">
              You've completed the Guhuza Job-Seeking Game
            </p>
            <p className="text-lg font-semibold">
              Your final score: {score} / {MAX_SCORE}
            </p>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-end">
        {gameStage !== "locked" && gameStage !== "complete" ? (
          <Button
            onClick={
              gameStage === "resume"
                ? handleResumeAnswer
                : handleInterviewAnswer
            }
          >
            {currentQuestion <
            (gameStage === "resume"
              ? resumeQuestions.length - 1
              : interviewQuestions.length - 1)
              ? "Next Question"
              : gameStage === "resume"
              ? "Start Interview"
              : "Finish Game"}
          </Button>
        ) : gameStage === "complete" ? (
          <Button onClick={resetGame}>Play Again</Button>
        ) : null}
      </CardFooter>
    </Card>
  );
}
