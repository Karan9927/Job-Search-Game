// seed.js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createQuestionFour() {
  // Data for seeding
  const questionsData = [
    {
      levelId: 1, // Beginner
      subCategoryId: 4, // Cover Letter Writing
      questions: [
        {
          question: "What is the purpose of a job interview?",
          options: [
            "To assess the candidate's skills and suitability",
            "To make the candidate feel nervous",
            "To gather information about the company",
            "To discuss salary only",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question: "What should you wear to a job interview?",
          options: [
            "Casual clothes",
            "Professional attire",
            "Sportswear",
            "Anything comfortable",
          ],
          correctAnswer: 1,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question: "How should you greet the interviewer?",
          options: [
            "With a handshake and a smile",
            "With a hug",
            "By sitting down without speaking",
            "By offering a gift",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question: "What is the best way to prepare for a job interview?",
          options: [
            "Research the company and role",
            "Wait for the interviewer to ask questions",
            "Read a book during the interview",
            "Talk about personal experiences only",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question:
            "What should you do if you don't know the answer to an interview question?",
          options: [
            "Admit that you don't know and express willingness to learn",
            "Lie about the answer",
            "Change the subject",
            "Say something irrelevant",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question: "How should you handle questions about your weaknesses?",
          options: [
            "Talk about a real weakness and how you're working to improve it",
            "Avoid answering and change the topic",
            "Pretend you don't have any weaknesses",
            "Deny having weaknesses",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question:
            "What is a good way to ask questions at the end of an interview?",
          options: [
            "Ask about the company culture or role",
            "Ask about vacation policies only",
            "Ask about the interviewer's personal life",
            "Ask how much you will be paid",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question: "How early should you arrive for a job interview?",
          options: [
            "10-15 minutes before the interview time",
            "Exactly on time",
            "30 minutes early",
            "1 hour early",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question: "How should you follow up after an interview?",
          options: [
            "Send a thank you email",
            "Call the interviewer every day",
            "Send a gift",
            "Wait for them to contact you",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question: "What should you bring to a job interview?",
          options: [
            "A copy of your resume and references",
            "A backpack with personal items",
            "A family member or friend",
            "A laptop",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
      ],
    },
    {
      levelId: 2, // Intermediate
      subCategoryId: 4, // Cover Letter Writing
      questions: [
        {
          question: "What is the purpose of a job interview?",
          options: [
            "To assess the candidate's skills and suitability",
            "To make the candidate feel nervous",
            "To gather information about the company",
            "To discuss salary only",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question: "What should you wear to a job interview?",
          options: [
            "Casual clothes",
            "Professional attire",
            "Sportswear",
            "Anything comfortable",
          ],
          correctAnswer: 1,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question: "How should you greet the interviewer?",
          options: [
            "With a handshake and a smile",
            "With a hug",
            "By sitting down without speaking",
            "By offering a gift",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question: "What is the best way to prepare for a job interview?",
          options: [
            "Research the company and role",
            "Wait for the interviewer to ask questions",
            "Read a book during the interview",
            "Talk about personal experiences only",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question:
            "What should you do if you don't know the answer to an interview question?",
          options: [
            "Admit that you don't know and express willingness to learn",
            "Lie about the answer",
            "Change the subject",
            "Say something irrelevant",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question: "How should you handle questions about your weaknesses?",
          options: [
            "Talk about a real weakness and how you're working to improve it",
            "Avoid answering and change the topic",
            "Pretend you don't have any weaknesses",
            "Deny having weaknesses",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question:
            "What is a good way to ask questions at the end of an interview?",
          options: [
            "Ask about the company culture or role",
            "Ask about vacation policies only",
            "Ask about the interviewer's personal life",
            "Ask how much you will be paid",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question: "How early should you arrive for a job interview?",
          options: [
            "10-15 minutes before the interview time",
            "Exactly on time",
            "30 minutes early",
            "1 hour early",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question: "How should you follow up after an interview?",
          options: [
            "Send a thank you email",
            "Call the interviewer every day",
            "Send a gift",
            "Wait for them to contact you",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question: "What should you bring to a job interview?",
          options: [
            "A copy of your resume and references",
            "A backpack with personal items",
            "A family member or friend",
            "A laptop",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
      ],
    },
    {
      levelId: 3, // Advanced
      subCategoryId: 4, // Cover Letter Writing
      questions: [
        {
          question: "What is the purpose of a job interview?",
          options: [
            "To assess the candidate's skills and suitability",
            "To make the candidate feel nervous",
            "To gather information about the company",
            "To discuss salary only",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question: "What should you wear to a job interview?",
          options: [
            "Casual clothes",
            "Professional attire",
            "Sportswear",
            "Anything comfortable",
          ],
          correctAnswer: 1,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question: "How should you greet the interviewer?",
          options: [
            "With a handshake and a smile",
            "With a hug",
            "By sitting down without speaking",
            "By offering a gift",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question: "What is the best way to prepare for a job interview?",
          options: [
            "Research the company and role",
            "Wait for the interviewer to ask questions",
            "Read a book during the interview",
            "Talk about personal experiences only",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question:
            "What should you do if you don't know the answer to an interview question?",
          options: [
            "Admit that you don't know and express willingness to learn",
            "Lie about the answer",
            "Change the subject",
            "Say something irrelevant",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question: "How should you handle questions about your weaknesses?",
          options: [
            "Talk about a real weakness and how you're working to improve it",
            "Avoid answering and change the topic",
            "Pretend you don't have any weaknesses",
            "Deny having weaknesses",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question:
            "What is a good way to ask questions at the end of an interview?",
          options: [
            "Ask about the company culture or role",
            "Ask about vacation policies only",
            "Ask about the interviewer's personal life",
            "Ask how much you will be paid",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question: "How early should you arrive for a job interview?",
          options: [
            "10-15 minutes before the interview time",
            "Exactly on time",
            "30 minutes early",
            "1 hour early",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question: "How should you follow up after an interview?",
          options: [
            "Send a thank you email",
            "Call the interviewer every day",
            "Send a gift",
            "Wait for them to contact you",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question: "What should you bring to a job interview?",
          options: [
            "A copy of your resume and references",
            "A backpack with personal items",
            "A family member or friend",
            "A laptop",
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
