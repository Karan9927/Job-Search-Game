// seed.js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createQuestionFive() {
  // Data for seeding
  const questionsData = [
    {
      levelId: 1, // Beginner
      subCategoryId: 5, // Cover Letter Writing
      questions: [
        {
          question: "What is the best way to start an interview?",
          options: [
            "Introduce yourself confidently",
            "Talk about your hobbies",
            "Sit quietly and wait for the interviewer to speak",
            "Make a joke",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question: "How should you answer behavioral interview questions?",
          options: [
            "Use the STAR method (Situation, Task, Action, Result)",
            "Give a brief answer with no details",
            "Talk only about personal life",
            "Answer with yes or no",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question: "What should you do if you're asked a tricky question?",
          options: [
            "Take a moment to think before answering",
            "Give an immediate answer, even if unsure",
            "Change the subject",
            "Get defensive",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question: "How should you describe your strengths in an interview?",
          options: [
            "Give specific examples that highlight your skills",
            "Talk in general terms without examples",
            "Focus on irrelevant skills",
            "Brag about your achievements",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question: "How can you show enthusiasm during an interview?",
          options: [
            "Be energetic and engaged in the conversation",
            "Speak in a monotone voice",
            "Only answer questions without elaborating",
            "Avoid eye contact",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question:
            "How should you handle a question about salary expectations?",
          options: [
            "Research the average salary for the role beforehand",
            "Give an inflated number to seem confident",
            "Avoid answering the question",
            "Answer with the lowest possible amount",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question:
            "What is the best way to answer why you want to leave your current job?",
          options: [
            "Focus on the new opportunities the new role provides",
            "Talk negatively about your current job",
            "Avoid answering and change the subject",
            "Mention personal reasons unrelated to the job",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question: "How can you improve your body language in an interview?",
          options: [
            "Maintain good posture and use open gestures",
            "Sit with your arms crossed",
            "Avoid making eye contact",
            "Fidget or check your phone",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question: "How should you prepare for technical interview questions?",
          options: [
            "Practice common problems or scenarios related to the role",
            "Skip technical preparation, focus only on soft skills",
            "Avoid answering any technical questions",
            "Give vague, high-level answers",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question:
            "What should you do if you don't understand a question in the interview?",
          options: [
            "Politely ask the interviewer to clarify the question",
            "Guess and give a random answer",
            "Say nothing and remain silent",
            "Change the topic",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
      ],
    },
    {
      levelId: 2, // Intermediate
      subCategoryId: 5, // Cover Letter Writing
      questions: [
        {
          question: "What is the best way to start an interview?",
          options: [
            "Introduce yourself confidently",
            "Talk about your hobbies",
            "Sit quietly and wait for the interviewer to speak",
            "Make a joke",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question: "How should you answer behavioral interview questions?",
          options: [
            "Use the STAR method (Situation, Task, Action, Result)",
            "Give a brief answer with no details",
            "Talk only about personal life",
            "Answer with yes or no",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question: "What should you do if you're asked a tricky question?",
          options: [
            "Take a moment to think before answering",
            "Give an immediate answer, even if unsure",
            "Change the subject",
            "Get defensive",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question: "How should you describe your strengths in an interview?",
          options: [
            "Give specific examples that highlight your skills",
            "Talk in general terms without examples",
            "Focus on irrelevant skills",
            "Brag about your achievements",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question: "How can you show enthusiasm during an interview?",
          options: [
            "Be energetic and engaged in the conversation",
            "Speak in a monotone voice",
            "Only answer questions without elaborating",
            "Avoid eye contact",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question:
            "How should you handle a question about salary expectations?",
          options: [
            "Research the average salary for the role beforehand",
            "Give an inflated number to seem confident",
            "Avoid answering the question",
            "Answer with the lowest possible amount",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question:
            "What is the best way to answer why you want to leave your current job?",
          options: [
            "Focus on the new opportunities the new role provides",
            "Talk negatively about your current job",
            "Avoid answering and change the subject",
            "Mention personal reasons unrelated to the job",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question: "How can you improve your body language in an interview?",
          options: [
            "Maintain good posture and use open gestures",
            "Sit with your arms crossed",
            "Avoid making eye contact",
            "Fidget or check your phone",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question: "How should you prepare for technical interview questions?",
          options: [
            "Practice common problems or scenarios related to the role",
            "Skip technical preparation, focus only on soft skills",
            "Avoid answering any technical questions",
            "Give vague, high-level answers",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question:
            "What should you do if you don't understand a question in the interview?",
          options: [
            "Politely ask the interviewer to clarify the question",
            "Guess and give a random answer",
            "Say nothing and remain silent",
            "Change the topic",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
      ],
    },
    {
      levelId: 3, // Advanced
      subCategoryId: 5, // Cover Letter Writing
      questions: [
        {
          question: "What is the best way to start an interview?",
          options: [
            "Introduce yourself confidently",
            "Talk about your hobbies",
            "Sit quietly and wait for the interviewer to speak",
            "Make a joke",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question: "How should you answer behavioral interview questions?",
          options: [
            "Use the STAR method (Situation, Task, Action, Result)",
            "Give a brief answer with no details",
            "Talk only about personal life",
            "Answer with yes or no",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question: "What should you do if you're asked a tricky question?",
          options: [
            "Take a moment to think before answering",
            "Give an immediate answer, even if unsure",
            "Change the subject",
            "Get defensive",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question: "How should you describe your strengths in an interview?",
          options: [
            "Give specific examples that highlight your skills",
            "Talk in general terms without examples",
            "Focus on irrelevant skills",
            "Brag about your achievements",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question: "How can you show enthusiasm during an interview?",
          options: [
            "Be energetic and engaged in the conversation",
            "Speak in a monotone voice",
            "Only answer questions without elaborating",
            "Avoid eye contact",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question:
            "How should you handle a question about salary expectations?",
          options: [
            "Research the average salary for the role beforehand",
            "Give an inflated number to seem confident",
            "Avoid answering the question",
            "Answer with the lowest possible amount",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question:
            "What is the best way to answer why you want to leave your current job?",
          options: [
            "Focus on the new opportunities the new role provides",
            "Talk negatively about your current job",
            "Avoid answering and change the subject",
            "Mention personal reasons unrelated to the job",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question: "How can you improve your body language in an interview?",
          options: [
            "Maintain good posture and use open gestures",
            "Sit with your arms crossed",
            "Avoid making eye contact",
            "Fidget or check your phone",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question: "How should you prepare for technical interview questions?",
          options: [
            "Practice common problems or scenarios related to the role",
            "Skip technical preparation, focus only on soft skills",
            "Avoid answering any technical questions",
            "Give vague, high-level answers",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question:
            "What should you do if you don't understand a question in the interview?",
          options: [
            "Politely ask the interviewer to clarify the question",
            "Guess and give a random answer",
            "Say nothing and remain silent",
            "Change the topic",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
      ],
    },
  ];

  // Seed questions
  for (const level of questionsData) {
    await prisma.question.createMany({
      data: level.questions.map((q) => ({
        question: q.question,
        options: q.options,
        correctAnswer: q.correctAnswer,
        levelId: level.levelId,
        subCategoryId: level.subCategoryId,
        pointId: q.pointId, // Using the pointId from each question
      })),
    });
  }
}
