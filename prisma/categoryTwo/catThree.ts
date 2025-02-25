// seed.js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createQuestionSix() {
  // Data for seeding
  const questionsData = [
    {
      levelId: 1, // Beginner
      subCategoryId: 6, // Cover Letter Writing
      questions: [
        {
          question: "How should you prepare for an interview?",
          options: [
            "Research the company and role",
            "Wait until the day before the interview",
            "Do nothing and rely on your skills",
            "Ask friends to provide all the answers",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question: "What should you do before an interview?",
          options: [
            "Practice answering common interview questions",
            "Review your resume on the way to the interview",
            "Arrive late to show confidence",
            "Ignore the job description",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question: "How can you stand out during an interview?",
          options: [
            "Show enthusiasm and interest in the company",
            "Stay silent throughout the interview",
            "Dress casually to seem relaxed",
            "Avoid asking any questions",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question: "How should you follow up after an interview?",
          options: [
            "Send a thank-you email within 24 hours",
            "Wait for them to contact you",
            "Call them every day until they respond",
            "Forget about the interview entirely",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question: "What is a good strategy for answering tough questions?",
          options: [
            "Take your time and structure your answer",
            "Give a one-word response",
            "Try to avoid answering altogether",
            "Talk about unrelated experiences",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question:
            "How should you prepare your questions for the interviewer?",
          options: [
            "Prepare thoughtful questions about the company or role",
            "Ask personal questions about the interviewer's life",
            "Avoid asking questions to seem confident",
            "Only ask about salary and benefits",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question: "How should you handle a group interview?",
          options: [
            "Make sure to engage with all interviewers and candidates",
            "Stay quiet and avoid making eye contact",
            "Only speak to the interviewer asking you questions",
            "Try to dominate the conversation",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question:
            "What should you do if you feel nervous before an interview?",
          options: [
            "Practice deep breathing and stay calm",
            "Ignore your nervousness and hope it goes away",
            "Cancel the interview",
            "Talk excessively to cover up your nerves",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question:
            "What is the most important thing to convey during an interview?",
          options: [
            "Confidence in your skills and abilities",
            "That you're only interested in high-paying jobs",
            "That you don't want to work hard",
            "That you're nervous and unsure",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question:
            "How can you make a great first impression in an interview?",
          options: [
            "Greet the interviewer with a smile and a firm handshake",
            "Walk in late and apologize",
            "Sit down without speaking",
            "Talk about your personal life",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
      ],
    },
    {
      levelId: 2, // Intermediate
      subCategoryId: 6, // Cover Letter Writing
      questions: [
        {
          question: "How should you prepare for an interview?",
          options: [
            "Research the company and role",
            "Wait until the day before the interview",
            "Do nothing and rely on your skills",
            "Ask friends to provide all the answers",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question: "What should you do before an interview?",
          options: [
            "Practice answering common interview questions",
            "Review your resume on the way to the interview",
            "Arrive late to show confidence",
            "Ignore the job description",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question: "How can you stand out during an interview?",
          options: [
            "Show enthusiasm and interest in the company",
            "Stay silent throughout the interview",
            "Dress casually to seem relaxed",
            "Avoid asking any questions",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question: "How should you follow up after an interview?",
          options: [
            "Send a thank-you email within 24 hours",
            "Wait for them to contact you",
            "Call them every day until they respond",
            "Forget about the interview entirely",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question: "What is a good strategy for answering tough questions?",
          options: [
            "Take your time and structure your answer",
            "Give a one-word response",
            "Try to avoid answering altogether",
            "Talk about unrelated experiences",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question:
            "How should you prepare your questions for the interviewer?",
          options: [
            "Prepare thoughtful questions about the company or role",
            "Ask personal questions about the interviewer's life",
            "Avoid asking questions to seem confident",
            "Only ask about salary and benefits",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question: "How should you handle a group interview?",
          options: [
            "Make sure to engage with all interviewers and candidates",
            "Stay quiet and avoid making eye contact",
            "Only speak to the interviewer asking you questions",
            "Try to dominate the conversation",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question:
            "What should you do if you feel nervous before an interview?",
          options: [
            "Practice deep breathing and stay calm",
            "Ignore your nervousness and hope it goes away",
            "Cancel the interview",
            "Talk excessively to cover up your nerves",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question:
            "What is the most important thing to convey during an interview?",
          options: [
            "Confidence in your skills and abilities",
            "That you're only interested in high-paying jobs",
            "That you don't want to work hard",
            "That you're nervous and unsure",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question:
            "How can you make a great first impression in an interview?",
          options: [
            "Greet the interviewer with a smile and a firm handshake",
            "Walk in late and apologize",
            "Sit down without speaking",
            "Talk about your personal life",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
      ],
    },
    {
      levelId: 3, // Advanced
      subCategoryId: 6, // Cover Letter Writing
      questions: [
        {
          question: "How should you prepare for an interview?",
          options: [
            "Research the company and role",
            "Wait until the day before the interview",
            "Do nothing and rely on your skills",
            "Ask friends to provide all the answers",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question: "What should you do before an interview?",
          options: [
            "Practice answering common interview questions",
            "Review your resume on the way to the interview",
            "Arrive late to show confidence",
            "Ignore the job description",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question: "How can you stand out during an interview?",
          options: [
            "Show enthusiasm and interest in the company",
            "Stay silent throughout the interview",
            "Dress casually to seem relaxed",
            "Avoid asking any questions",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question: "How should you follow up after an interview?",
          options: [
            "Send a thank-you email within 24 hours",
            "Wait for them to contact you",
            "Call them every day until they respond",
            "Forget about the interview entirely",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question: "What is a good strategy for answering tough questions?",
          options: [
            "Take your time and structure your answer",
            "Give a one-word response",
            "Try to avoid answering altogether",
            "Talk about unrelated experiences",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question:
            "How should you prepare your questions for the interviewer?",
          options: [
            "Prepare thoughtful questions about the company or role",
            "Ask personal questions about the interviewer's life",
            "Avoid asking questions to seem confident",
            "Only ask about salary and benefits",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question: "How should you handle a group interview?",
          options: [
            "Make sure to engage with all interviewers and candidates",
            "Stay quiet and avoid making eye contact",
            "Only speak to the interviewer asking you questions",
            "Try to dominate the conversation",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question:
            "What should you do if you feel nervous before an interview?",
          options: [
            "Practice deep breathing and stay calm",
            "Ignore your nervousness and hope it goes away",
            "Cancel the interview",
            "Talk excessively to cover up your nerves",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question:
            "What is the most important thing to convey during an interview?",
          options: [
            "Confidence in your skills and abilities",
            "That you're only interested in high-paying jobs",
            "That you don't want to work hard",
            "That you're nervous and unsure",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question:
            "How can you make a great first impression in an interview?",
          options: [
            "Greet the interviewer with a smile and a firm handshake",
            "Walk in late and apologize",
            "Sit down without speaking",
            "Talk about your personal life",
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
