// seed.js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createQuestionSeven() {
  // Data for seeding
  const questionsData = [
    {
      levelId: 1, // Beginner
      subCategoryId: 7, // Cover Letter Writing
      questions: [
        {
          question: "What is professional networking?",
          options: [
            "Building relationships with people for career growth",
            "Only talking to people in your industry",
            "Sharing personal details with everyone",
            "Ignoring online platforms",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question: "Which of the following is a key to successful networking?",
          options: [
            "Being genuine and authentic",
            "Forcing people to listen to you",
            "Only talking about your job",
            "Avoiding new connections",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question: "How can you expand your professional network?",
          options: [
            "Attend industry events and conferences",
            "Only connect with people you already know",
            "Ignore LinkedIn and other platforms",
            "Avoid speaking to people outside of your department",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question:
            "What should you do after meeting someone at a networking event?",
          options: [
            "Follow up with a personalized message",
            "Ignore them completely",
            "Wait for them to contact you",
            "Send a generic message",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question:
            "What is the best way to maintain your professional network?",
          options: [
            "Engage with your connections regularly",
            "Only reach out when you need something",
            "Ignore them until you need help",
            "Remove all inactive connections",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question: "Why is networking important for career growth?",
          options: [
            "It opens up job opportunities and provides mentorship",
            "It allows you to avoid work",
            "It helps you hide from competition",
            "It increases your workload",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question: "Which of these is an appropriate way to network online?",
          options: [
            "Send a personalized connection request",
            "Spam people with irrelevant messages",
            "Connect with everyone you can",
            "Ignore any profiles that don't match your interests",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question:
            "What should you focus on when networking with someone new?",
          options: [
            "Building a genuine relationship",
            "Asking for favors immediately",
            "Talking only about yourself",
            "Ignoring the other person's interests",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question:
            "What is a good way to introduce yourself at a networking event?",
          options: [
            "Give a short introduction with your name and interests",
            "Talk only about your current job",
            "Ignore the other person and wait for them to talk",
            "Ask for a job right away",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question: "How should you use social media for networking?",
          options: [
            "Share professional insights and engage with others' posts",
            "Post personal updates constantly",
            "Ignore people who aren't in your field",
            "Post irrelevant content to get attention",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
      ],
    },
    {
      levelId: 2, // Intermediate
      subCategoryId: 7, // Cover Letter Writing
      questions: [
        {
          question: "What is professional networking?",
          options: [
            "Building relationships with people for career growth",
            "Only talking to people in your industry",
            "Sharing personal details with everyone",
            "Ignoring online platforms",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question: "Which of the following is a key to successful networking?",
          options: [
            "Being genuine and authentic",
            "Forcing people to listen to you",
            "Only talking about your job",
            "Avoiding new connections",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question: "How can you expand your professional network?",
          options: [
            "Attend industry events and conferences",
            "Only connect with people you already know",
            "Ignore LinkedIn and other platforms",
            "Avoid speaking to people outside of your department",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question:
            "What should you do after meeting someone at a networking event?",
          options: [
            "Follow up with a personalized message",
            "Ignore them completely",
            "Wait for them to contact you",
            "Send a generic message",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question:
            "What is the best way to maintain your professional network?",
          options: [
            "Engage with your connections regularly",
            "Only reach out when you need something",
            "Ignore them until you need help",
            "Remove all inactive connections",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question: "Why is networking important for career growth?",
          options: [
            "It opens up job opportunities and provides mentorship",
            "It allows you to avoid work",
            "It helps you hide from competition",
            "It increases your workload",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question: "Which of these is an appropriate way to network online?",
          options: [
            "Send a personalized connection request",
            "Spam people with irrelevant messages",
            "Connect with everyone you can",
            "Ignore any profiles that don't match your interests",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question:
            "What should you focus on when networking with someone new?",
          options: [
            "Building a genuine relationship",
            "Asking for favors immediately",
            "Talking only about yourself",
            "Ignoring the other person's interests",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question:
            "What is a good way to introduce yourself at a networking event?",
          options: [
            "Give a short introduction with your name and interests",
            "Talk only about your current job",
            "Ignore the other person and wait for them to talk",
            "Ask for a job right away",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question: "How should you use social media for networking?",
          options: [
            "Share professional insights and engage with others' posts",
            "Post personal updates constantly",
            "Ignore people who aren't in your field",
            "Post irrelevant content to get attention",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
      ],
    },
    {
      levelId: 3, // Advanced
      subCategoryId: 7, // Cover Letter Writing
      questions: [
        {
          question: "What is professional networking?",
          options: [
            "Building relationships with people for career growth",
            "Only talking to people in your industry",
            "Sharing personal details with everyone",
            "Ignoring online platforms",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question: "Which of the following is a key to successful networking?",
          options: [
            "Being genuine and authentic",
            "Forcing people to listen to you",
            "Only talking about your job",
            "Avoiding new connections",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question: "How can you expand your professional network?",
          options: [
            "Attend industry events and conferences",
            "Only connect with people you already know",
            "Ignore LinkedIn and other platforms",
            "Avoid speaking to people outside of your department",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question:
            "What should you do after meeting someone at a networking event?",
          options: [
            "Follow up with a personalized message",
            "Ignore them completely",
            "Wait for them to contact you",
            "Send a generic message",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question:
            "What is the best way to maintain your professional network?",
          options: [
            "Engage with your connections regularly",
            "Only reach out when you need something",
            "Ignore them until you need help",
            "Remove all inactive connections",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question: "Why is networking important for career growth?",
          options: [
            "It opens up job opportunities and provides mentorship",
            "It allows you to avoid work",
            "It helps you hide from competition",
            "It increases your workload",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question: "Which of these is an appropriate way to network online?",
          options: [
            "Send a personalized connection request",
            "Spam people with irrelevant messages",
            "Connect with everyone you can",
            "Ignore any profiles that don't match your interests",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question:
            "What should you focus on when networking with someone new?",
          options: [
            "Building a genuine relationship",
            "Asking for favors immediately",
            "Talking only about yourself",
            "Ignoring the other person's interests",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question:
            "What is a good way to introduce yourself at a networking event?",
          options: [
            "Give a short introduction with your name and interests",
            "Talk only about your current job",
            "Ignore the other person and wait for them to talk",
            "Ask for a job right away",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question: "How should you use social media for networking?",
          options: [
            "Share professional insights and engage with others' posts",
            "Post personal updates constantly",
            "Ignore people who aren't in your field",
            "Post irrelevant content to get attention",
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
