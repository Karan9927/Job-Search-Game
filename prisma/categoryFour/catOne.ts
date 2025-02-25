// seed.js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createQuestionTen() {
  // Data for seeding
  const questionsData = [
    {
      levelId: 1, // Beginner
      subCategoryId: 10, // Cover Letter Writing
      questions: [
        {
          question: "What is continuous learning?",
          options: [
            "A commitment to constantly improve your skills and knowledge",
            "Taking one course every year",
            "Learning only when you are forced to",
            "Focusing on your current skills without any improvement",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question:
            "Why is continuous learning important for career development?",
          options: [
            "It helps you stay relevant and adapt to changes in your field",
            "It allows you to stop learning after you finish your education",
            "It makes you overqualified for every job",
            "It is not important at all for your career growth",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question:
            "Which of the following is an example of continuous learning?",
          options: [
            "Attending webinars or conferences related to your field",
            "Only learning from your mistakes",
            "Relying solely on your existing knowledge",
            "Taking a break from learning once you get a job",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question:
            "How can you start incorporating continuous learning into your routine?",
          options: [
            "Setting aside time for regular skill development",
            "Waiting until your manager asks you to learn something new",
            "Only learning when you are about to change jobs",
            "Avoiding any new challenges",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question: "What is a benefit of continuous learning?",
          options: [
            "Improved job performance and career advancement",
            "Becoming too busy to focus on your career",
            "Filling your schedule with irrelevant activities",
            "Getting overwhelmed with unnecessary information",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question: "What is a simple way to start continuous learning?",
          options: [
            "Reading industry-related articles regularly",
            "Waiting for promotions before learning new skills",
            "Avoiding new topics that seem difficult",
            "Ignoring trends in your field",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question: "Which habit supports continuous learning?",
          options: [
            "Staying curious and open to new ideas",
            "Avoiding feedback and self-improvement",
            "Relying only on past experiences",
            "Ignoring technological advancements",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question: "How does continuous learning help with career growth?",
          options: [
            "It improves problem-solving skills and adaptability",
            "It makes work harder with no benefits",
            "It leads to unnecessary stress",
            "It has no impact on career success",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question: "Which platform can help you with continuous learning?",
          options: [
            "Online courses and learning apps",
            "Social media gossip pages",
            "Watching random videos online",
            "Avoiding digital learning tools",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question: "What is an effective way to stay committed to learning?",
          options: [
            "Setting learning goals and tracking progress",
            "Only learning when required",
            "Ignoring new industry trends",
            "Avoiding feedback from others",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
      ],
    },
    {
      levelId: 2, // Intermediate
      subCategoryId: 10, // Cover Letter Writing
      questions: [
        {
          question: "How can you integrate learning into your daily routine?",
          options: [
            "By reading or listening to educational content regularly",
            "By ignoring learning opportunities",
            "By waiting for your manager to assign new tasks",
            "By relying only on past knowledge",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question: "Why is it important to set learning goals?",
          options: [
            "To stay focused and measure progress",
            "To add unnecessary stress to your schedule",
            "To avoid learning new things",
            "To limit yourself to only one area of growth",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question: "Which strategy can help with continuous learning?",
          options: [
            "Seeking mentorship and professional feedback",
            "Only learning when facing difficulties",
            "Avoiding industry trends",
            "Ignoring constructive criticism",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question: "How can peer learning enhance continuous learning?",
          options: [
            "By exchanging knowledge with colleagues",
            "By avoiding discussions about professional development",
            "By working alone without seeking input",
            "By limiting exposure to new ideas",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question: "What is lifelong learning?",
          options: [
            "Enrolling in courses even after getting a stable job",
            "Stopping learning after college",
            "Avoiding new challenges in your field",
            "Relying only on past experiences",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question: "What are the benefits of developing a learning routine?",
          options: [
            "Improved productivity and skill retention",
            "Increased burnout and stress",
            "Overloading with unnecessary content",
            "Staying stagnant in your role",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question: "How can you expand your learning network?",
          options: [
            "By connecting with professionals in your field",
            "By avoiding networking opportunities",
            "By relying only on your current knowledge",
            "By isolating yourself from new experiences",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question: "How can you improve your learning approach?",
          options: [
            "By experimenting with different learning styles",
            "By sticking only to one method",
            "By avoiding challenges in your learning",
            "By waiting until you're forced to learn",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question: "What is the best way to stay consistent with learning?",
          options: [
            "Setting a fixed schedule for learning",
            "Learning only when there's free time",
            "Avoiding any extra work in your field",
            "Relying on others to guide your learning",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question: "How can continuous learning help with job transitions?",
          options: [
            "It allows you to adapt and acquire new skills quickly",
            "It makes you stay stuck in your current role",
            "It delays your career growth",
            "It prevents career changes altogether",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
      ],
    },
    {
      levelId: 3, // Advanced
      subCategoryId: 10, // Cover Letter Writing
      questions: [
        {
          question:
            "What is a key challenge in continuous learning for professionals?",
          options: [
            "Balancing learning with work responsibilities",
            "Having unlimited time to learn everything",
            "Not having access to learning resources",
            "Only focusing on technical skills",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question: "How can professionals ensure deep learning?",
          options: [
            "By applying new skills in real-world scenarios",
            "By reading a lot but never practicing",
            "By only attending workshops without action",
            "By ignoring feedback and evaluation",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question:
            "Which strategy can help professionals maintain continuous learning?",
          options: [
            "Creating a structured learning plan",
            "Waiting for promotions before learning new skills",
            "Avoiding change and staying in a comfort zone",
            "Relying only on formal education",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question: "Why should professionals seek interdisciplinary learning?",
          options: [
            "To develop a diverse skill set and adaptability",
            "To limit learning to only one field",
            "To avoid knowledge from other industries",
            "To stay in the same role without growth",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question: "What role does mentorship play in continuous learning?",
          options: [
            "It provides guidance and industry insights",
            "It limits independent thinking",
            "It makes learning unnecessary",
            "It prevents skill diversification",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question:
            "How can professionals measure the success of their learning?",
          options: [
            "By tracking the acquisition of new skills and career advancement",
            "By focusing only on theoretical knowledge",
            "By avoiding practical application",
            "By attending workshops without applying learnings",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question:
            "What is a common mistake when trying to learn continuously?",
          options: [
            "Not applying learned concepts to real-world challenges",
            "Overloading on information without action",
            "Focusing on irrelevant topics",
            "Avoiding feedback and improvement",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question:
            "How can professionals stay motivated in their learning journey?",
          options: [
            "By celebrating small milestones and progress",
            "By avoiding learning challenges",
            "By ignoring feedback",
            "By never setting goals",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question:
            "What is one way to stay current in a rapidly changing industry?",
          options: [
            "By staying updated through continuous learning and networking",
            "By ignoring industry news",
            "By avoiding technology advancements",
            "By relying only on previous experiences",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question: "How can professionals avoid burnout while learning?",
          options: [
            "By balancing work, rest, and learning",
            "By overloading on new knowledge",
            "By only focusing on learning and ignoring other responsibilities",
            "By neglecting self-care",
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
        pointId: q.pointId, // Added pointId to the seeding data
      })),
    });
  }
}
