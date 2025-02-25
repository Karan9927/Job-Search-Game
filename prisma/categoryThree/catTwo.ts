// seed.js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createQuestionEight() {
  // Data for seeding
  const questionsData = [
    {
      levelId: 1, // Beginner
      subCategoryId: 8, // Cover Letter Writing
      questions: [
        {
          question: "What is online networking?",
          options: [
            "Connecting with professionals through online platforms",
            "Only sending emails to people you know",
            "Posting personal updates on social media",
            "Ignoring social media profiles",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question:
            "Which platform is commonly used for professional online networking?",
          options: ["LinkedIn", "Facebook", "Instagram", "TikTok"],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question: "What is a key feature of online networking?",
          options: [
            "Connecting with professionals worldwide",
            "Sharing private information with everyone",
            "Ignoring other people's posts",
            "Only connecting with people from your industry",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question: "How should you connect with someone on LinkedIn?",
          options: [
            "Send a personalized connection request",
            "Send a generic request",
            "Spam people with multiple requests",
            "Connect with everyone randomly",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question: "What should your LinkedIn profile focus on?",
          options: [
            "Your professional achievements and skills",
            "Personal hobbies only",
            "Your vacation pictures",
            "Your personal life",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question: "Why is it important to engage with posts on LinkedIn?",
          options: [
            "It increases visibility and helps build relationships",
            "It helps you gain followers quickly",
            "It distracts others from your profile",
            "It helps you avoid work",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question:
            "What is an appropriate message to send after connecting with someone online?",
          options: [
            "Introduce yourself briefly and express interest in their work",
            "Ask for a job immediately",
            "Send them a long, unrelated message",
            "Ignore them after connecting",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question:
            "How should you maintain your online professional relationships?",
          options: [
            "Engage regularly with meaningful interactions",
            "Only contact people when you need help",
            "Ignore others' posts",
            "Never reply to messages",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question: "What is a good strategy for growing your online network?",
          options: [
            "Consistently engage with content relevant to your field",
            "Connect with random people without purpose",
            "Post irrelevant content to gain attention",
            "Ignore profiles that aren't in your industry",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question: "What should you avoid when networking online?",
          options: [
            "Spamming people with messages",
            "Sending personalized connection requests",
            "Sharing valuable insights on professional topics",
            "Asking for mentorship without showing interest first",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
      ],
    },
    {
      levelId: 2, // Intermediate
      subCategoryId: 8, // Cover Letter Writing
      questions: [
        {
          question: "What is online networking?",
          options: [
            "Connecting with professionals through online platforms",
            "Only sending emails to people you know",
            "Posting personal updates on social media",
            "Ignoring social media profiles",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question:
            "Which platform is commonly used for professional online networking?",
          options: ["LinkedIn", "Facebook", "Instagram", "TikTok"],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question: "What is a key feature of online networking?",
          options: [
            "Connecting with professionals worldwide",
            "Sharing private information with everyone",
            "Ignoring other people's posts",
            "Only connecting with people from your industry",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question: "How should you connect with someone on LinkedIn?",
          options: [
            "Send a personalized connection request",
            "Send a generic request",
            "Spam people with multiple requests",
            "Connect with everyone randomly",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question: "What should your LinkedIn profile focus on?",
          options: [
            "Your professional achievements and skills",
            "Personal hobbies only",
            "Your vacation pictures",
            "Your personal life",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question: "Why is it important to engage with posts on LinkedIn?",
          options: [
            "It increases visibility and helps build relationships",
            "It helps you gain followers quickly",
            "It distracts others from your profile",
            "It helps you avoid work",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question:
            "What is an appropriate message to send after connecting with someone online?",
          options: [
            "Introduce yourself briefly and express interest in their work",
            "Ask for a job immediately",
            "Send them a long, unrelated message",
            "Ignore them after connecting",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question:
            "How should you maintain your online professional relationships?",
          options: [
            "Engage regularly with meaningful interactions",
            "Only contact people when you need help",
            "Ignore others' posts",
            "Never reply to messages",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question: "What is a good strategy for growing your online network?",
          options: [
            "Consistently engage with content relevant to your field",
            "Connect with random people without purpose",
            "Post irrelevant content to gain attention",
            "Ignore profiles that aren't in your industry",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question: "What should you avoid when networking online?",
          options: [
            "Spamming people with messages",
            "Sending personalized connection requests",
            "Sharing valuable insights on professional topics",
            "Asking for mentorship without showing interest first",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
      ],
    },
    {
      levelId: 3, // Advanced
      subCategoryId: 8, // Cover Letter Writing
      questions: [
        {
          question: "What is online networking?",
          options: [
            "Connecting with professionals through online platforms",
            "Only sending emails to people you know",
            "Posting personal updates on social media",
            "Ignoring social media profiles",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question:
            "Which platform is commonly used for professional online networking?",
          options: ["LinkedIn", "Facebook", "Instagram", "TikTok"],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question: "What is a key feature of online networking?",
          options: [
            "Connecting with professionals worldwide",
            "Sharing private information with everyone",
            "Ignoring other people's posts",
            "Only connecting with people from your industry",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question: "How should you connect with someone on LinkedIn?",
          options: [
            "Send a personalized connection request",
            "Send a generic request",
            "Spam people with multiple requests",
            "Connect with everyone randomly",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question: "What should your LinkedIn profile focus on?",
          options: [
            "Your professional achievements and skills",
            "Personal hobbies only",
            "Your vacation pictures",
            "Your personal life",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question: "Why is it important to engage with posts on LinkedIn?",
          options: [
            "It increases visibility and helps build relationships",
            "It helps you gain followers quickly",
            "It distracts others from your profile",
            "It helps you avoid work",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question:
            "What is an appropriate message to send after connecting with someone online?",
          options: [
            "Introduce yourself briefly and express interest in their work",
            "Ask for a job immediately",
            "Send them a long, unrelated message",
            "Ignore them after connecting",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question:
            "How should you maintain your online professional relationships?",
          options: [
            "Engage regularly with meaningful interactions",
            "Only contact people when you need help",
            "Ignore others' posts",
            "Never reply to messages",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question: "What is a good strategy for growing your online network?",
          options: [
            "Consistently engage with content relevant to your field",
            "Connect with random people without purpose",
            "Post irrelevant content to gain attention",
            "Ignore profiles that aren't in your industry",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question: "What should you avoid when networking online?",
          options: [
            "Spamming people with messages",
            "Sending personalized connection requests",
            "Sharing valuable insights on professional topics",
            "Asking for mentorship without showing interest first",
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
