// seed.js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createQuestionEleven() {
  // Data for seeding
  const questionsData = [
    {
      levelId: 1, // Beginner
      subCategoryId: 11, // Cover Letter Writing
      questions: [
        {
          question: "What is career growth?",
          options: [
            "The process of advancing in your profession and acquiring new skills",
            "Staying in the same position for years",
            "Avoiding learning new things",
            "Focusing on your current job without any changes",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question: "Why is career growth important?",
          options: [
            "It allows you to progress in your career and reach your goals",
            "It leads to stagnation in your role",
            "It prevents you from acquiring new skills",
            "It makes you overqualified for your current job",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question: "What is one way to start growing your career?",
          options: [
            "By setting career goals and developing a plan to achieve them",
            "By staying in the same position without any changes",
            "By avoiding challenges in your role",
            "By only doing what is required at work",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question: "How does networking contribute to career growth?",
          options: [
            "It helps you build relationships that may lead to new opportunities",
            "It creates unnecessary distractions at work",
            "It limits your exposure to new roles",
            "It prevents you from focusing on your current job",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question: "What is a good habit for fostering career growth?",
          options: [
            "Seeking feedback and continuously improving",
            "Ignoring feedback and staying the same",
            "Relying solely on your past achievements",
            "Avoiding learning new skills",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question: "Which of the following is a sign of career growth?",
          options: [
            "Taking on new responsibilities and challenges",
            "Remaining in the same position for years",
            "Avoiding any new projects",
            "Sticking to tasks you are already comfortable with",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question: "How does setting goals help with career growth?",
          options: [
            "It provides direction and focus, helping you achieve milestones",
            "It prevents you from advancing",
            "It makes you feel overwhelmed",
            "It keeps you stagnant in your current role",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question: "Why should you seek mentorship for career growth?",
          options: [
            "Mentors can offer guidance, advice, and insight into new opportunities",
            "Mentorship is unnecessary for growth",
            "Mentors slow down your progress",
            "Mentors only focus on their own careers",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question: "How can career development courses help with growth?",
          options: [
            "They provide new skills and knowledge that make you more valuable in your career",
            "They take time away from your work",
            "They create confusion about your current job",
            "They are irrelevant to your career",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question: "What is one key factor in growing your career?",
          options: [
            "Being open to new opportunities and challenges",
            "Avoiding changes in your routine",
            "Sticking only to your current role",
            "Focusing only on completing your daily tasks",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
      ],
    },
    {
      levelId: 2, // Intermediate
      subCategoryId: 11, // Cover Letter Writing
      questions: [
        {
          question:
            "How can you identify potential career growth opportunities?",
          options: [
            "By staying informed about trends in your industry and networking",
            "By ignoring market changes",
            "By avoiding new challenges in your role",
            "By staying in your comfort zone",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question: "What role does skill development play in career growth?",
          options: [
            "It allows you to become more competitive and capable in your field",
            "It slows down career progression",
            "It makes you overqualified for your job",
            "It keeps you from focusing on your current job",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question: "How can feedback help accelerate your career growth?",
          options: [
            "Feedback helps identify areas for improvement and growth",
            "Feedback creates confusion and doubt",
            "Feedback only highlights weaknesses",
            "Feedback prevents you from making progress",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question: "Why is adaptability important for career growth?",
          options: [
            "Being adaptable allows you to respond to changes and seize new opportunities",
            "Adaptability prevents growth by keeping you in one place",
            "Adaptability is unnecessary in a steady career path",
            "Being adaptable makes you unreliable",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question:
            "How does building a strong personal brand contribute to career growth?",
          options: [
            "It helps you stand out in your field and attract new opportunities",
            "It has no impact on career growth",
            "It limits your networking potential",
            "It makes you less appealing to employers",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question:
            "How can you expand your professional network for career growth?",
          options: [
            "By attending industry events and engaging with others in your field",
            "By avoiding networking opportunities",
            "By limiting your interactions with others",
            "By staying only within your department",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question: "What should you do when you face a career setback?",
          options: [
            "Use the setback as an opportunity to learn and improve",
            "Ignore the setback and stay in your comfort zone",
            "Blame others for the setback",
            "Give up and stop trying",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question: "How can you develop leadership skills for career growth?",
          options: [
            "By taking on leadership roles and learning from others",
            "By staying in individual contributor roles forever",
            "By avoiding challenges and staying comfortable",
            "By focusing solely on technical skills",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question:
            "What is the benefit of taking on new challenges for career growth?",
          options: [
            "It helps you develop new skills and demonstrates your potential",
            "It makes you overwhelmed and stressed",
            "It limits your opportunities",
            "It prevents you from focusing on your current tasks",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question: "What is the first step in creating a career growth plan?",
          options: [
            "Setting clear goals and identifying the steps to achieve them",
            "Ignoring career opportunities",
            "Waiting for a promotion to occur on its own",
            "Focusing only on your current position",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
      ],
    },
    {
      levelId: 3, // Advanced
      subCategoryId: 11, // Cover Letter Writing
      questions: [
        {
          question:
            "How can you leverage mentorship for accelerating career growth?",
          options: [
            "By learning from others' experiences and gaining new perspectives",
            "By relying solely on your own experiences",
            "By avoiding feedback and staying on your current path",
            "By isolating yourself from mentors",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question:
            "What is the role of strategic career planning in long-term growth?",
          options: [
            "It helps you set a clear direction and make informed decisions about your career",
            "It keeps you stuck in your current role",
            "It prevents you from exploring new opportunities",
            "It only focuses on short-term goals",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question:
            "How can you improve your decision-making for career advancement?",
          options: [
            "By seeking advice, weighing options, and considering long-term goals",
            "By making decisions based on emotions",
            "By avoiding risks and sticking to familiar paths",
            "By only focusing on immediate needs",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question:
            "What are the benefits of expanding your skill set for career growth?",
          options: [
            "It makes you more adaptable and valuable in your career",
            "It leads to overqualification for your role",
            "It creates confusion about your job responsibilities",
            "It slows down your career progression",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question: "How can you ensure long-term career success?",
          options: [
            "By continuously learning, adapting, and seeking new opportunities",
            "By staying in the same role without change",
            "By avoiding any new challenges or responsibilities",
            "By focusing only on your current job",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question:
            "Why is it important to develop emotional intelligence for career growth?",
          options: [
            "It helps you build strong relationships and navigate workplace challenges",
            "It prevents you from advancing in your career",
            "It focuses solely on technical skills",
            "It makes you less adaptable",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question:
            "How can you demonstrate leadership potential for career growth?",
          options: [
            "By taking initiative, mentoring others, and showing problem-solving skills",
            "By avoiding responsibilities and staying passive",
            "By staying focused only on individual tasks",
            "By following others' lead without taking action",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question: "How can you handle career stagnation?",
          options: [
            "By reassessing your goals, seeking feedback, and exploring new opportunities",
            "By ignoring career opportunities and staying where you are",
            "By blaming others for your lack of growth",
            "By sticking only to what you know",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question:
            "What is the importance of self-reflection in career growth?",
          options: [
            "It helps you assess progress, identify areas for improvement, and adjust goals",
            "It prevents you from moving forward",
            "It creates uncertainty and confusion",
            "It focuses only on weaknesses",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question: "How can you use feedback to boost your career growth?",
          options: [
            "By using it to identify areas of improvement and continuously develop",
            "By ignoring feedback and staying the same",
            "By taking feedback personally and feeling discouraged",
            "By focusing only on positive feedback and avoiding constructive criticism",
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
        pointId: q.pointId, // Added pointId for each question
      })),
    });
  }
}
