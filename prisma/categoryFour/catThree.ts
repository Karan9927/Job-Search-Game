// seed.js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createQuestionTwelve() {
  // Data for seeding
  const questionsData = [
    {
      levelId: 1, // Beginner
      subCategoryId: 12, // Cover Letter Writing
      questions: [
        {
          question: "What is a career transition?",
          options: [
            "The process of moving from one job or career field to another",
            "Staying in the same job for many years",
            "Changing your company without changing your role",
            "Taking a break from work",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question: "Why might someone consider a career transition?",
          options: [
            "To pursue new interests, better opportunities, or work-life balance",
            "To avoid learning new skills",
            "To stay in a job they dislike",
            "To avoid challenges",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question: "What is the first step in a career transition?",
          options: [
            "Identifying your skills, interests, and goals",
            "Quitting your current job",
            "Ignoring your strengths",
            "Avoiding networking",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question: "How can networking help with a career transition?",
          options: [
            "It connects you with people who may help you find new opportunities",
            "It prevents you from making changes",
            "It keeps you stuck in your current job",
            "It limits your career options",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question: "What role does upskilling play in a career transition?",
          options: [
            "It helps you acquire new skills necessary for the new role",
            "It keeps you in the same position",
            "It makes it harder to switch careers",
            "It is unnecessary if you already have experience",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question:
            "Why is it important to assess your values during a career transition?",
          options: [
            "To ensure the new career aligns with your personal priorities and satisfaction",
            "To avoid looking for new opportunities",
            "To stay in your current career",
            "To make the transition more difficult",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question:
            "What is one common challenge when transitioning to a new career?",
          options: [
            "Adjusting to a new job role or industry with different expectations",
            "Staying in the same role for years",
            "Avoiding new challenges",
            "Working without any changes",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question:
            "How can you improve your resume during a career transition?",
          options: [
            "By highlighting transferable skills and relevant experiences",
            "By keeping the same resume for every job",
            "By avoiding changes to your resume",
            "By focusing only on past experiences",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question:
            "Why is it important to have a support system during a career transition?",
          options: [
            "A support system provides encouragement, advice, and motivation",
            "It prevents you from taking risks",
            "It limits your opportunities",
            "It makes the transition more difficult",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question:
            "How can taking a temporary job help with a career transition?",
          options: [
            "It provides valuable experience and helps you gain insights into a new industry",
            "It keeps you from making any career changes",
            "It prevents you from advancing in your career",
            "It makes the transition more challenging",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
      ],
    },
    {
      levelId: 2, // Intermediate
      subCategoryId: 12, // Cover Letter Writing
      questions: [
        {
          question:
            "How can you identify transferable skills during a career transition?",
          options: [
            "By analyzing your past job experiences and determining which skills apply to your new field",
            "By ignoring your past roles",
            "By staying in the same job",
            "By avoiding skills development",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question:
            "Why is it important to research the industry you're transitioning into?",
          options: [
            "It helps you understand industry trends, skills in demand, and potential job opportunities",
            "It keeps you stuck in your current job",
            "It makes the transition harder",
            "It limits your options",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question: "How can a mentor help with a career transition?",
          options: [
            "A mentor can provide guidance, advice, and insights into navigating the transition",
            "A mentor prevents you from making changes",
            "A mentor limits your career growth",
            "A mentor is not necessary",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question:
            "What is the role of personal branding in a career transition?",
          options: [
            "Personal branding helps you position yourself as a valuable candidate in your new field",
            "Personal branding is unnecessary during a transition",
            "Personal branding makes it harder to change careers",
            "Personal branding is only for senior professionals",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question: "How can you handle rejection during a career transition?",
          options: [
            "By viewing rejection as an opportunity to learn and improve",
            "By giving up on your goals",
            "By avoiding job applications",
            "By blaming others for your failure",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question:
            "What role does emotional intelligence play in a career transition?",
          options: [
            "It helps you manage stress, communicate effectively, and build relationships in a new career",
            "It is not relevant to a career transition",
            "It limits your opportunities",
            "It makes the transition more difficult",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question: "Why is flexibility important during a career transition?",
          options: [
            "It allows you to adapt to new roles, industries, and opportunities",
            "It keeps you stuck in your current position",
            "It prevents you from learning new skills",
            "It makes the transition more difficult",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question:
            "How can you tailor your job search for a career transition?",
          options: [
            "By focusing on positions that match your transferable skills and goals",
            "By applying for any job without researching the role",
            "By staying in the same industry",
            "By avoiding career changes",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question:
            "What is one key factor in successfully transitioning into a new career?",
          options: [
            "Staying motivated and committed to your long-term goals",
            "Avoiding change",
            "Focusing solely on your previous job",
            "Giving up after facing challenges",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question:
            "How can taking a course or certification help during a career transition?",
          options: [
            "It helps you gain new skills and knowledge required for the new career",
            "It is unnecessary if you have experience",
            "It slows down the transition",
            "It limits your opportunities",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
      ],
    },
    {
      levelId: 3, // Advanced
      subCategoryId: 12, // Cover Letter Writing
      questions: [
        {
          question:
            "How can you build a long-term career strategy during a transition?",
          options: [
            "By setting clear, achievable goals and planning the necessary steps to reach them",
            "By avoiding setting any long-term goals",
            "By staying focused only on short-term opportunities",
            "By not planning and adapting as you go",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question:
            "What are some ways to demonstrate your value during a career transition?",
          options: [
            "By showcasing your transferable skills, experience, and adaptability to potential employers",
            "By focusing only on your past experiences",
            "By avoiding networking",
            "By staying in your comfort zone",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question:
            "How can you develop a strong professional network during a career transition?",
          options: [
            "By attending industry events, joining professional groups, and connecting with key influencers in your new field",
            "By limiting your professional connections",
            "By staying in your current network",
            "By avoiding new professional relationships",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question:
            "How can you successfully navigate a career transition in a competitive industry?",
          options: [
            "By continuously improving your skills, building a strong network, and staying persistent",
            "By avoiding competition",
            "By staying in your current industry",
            "By giving up after facing challenges",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question:
            "What are the potential benefits of career coaching during a transition?",
          options: [
            "Career coaching provides personalized guidance, strategy development, and emotional support during the transition",
            "Career coaching is unnecessary",
            "Career coaching slows down the transition",
            "Career coaching focuses only on job search strategies",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question:
            "How can you assess your progress during a career transition?",
          options: [
            "By regularly reviewing your goals, achievements, and areas for improvement",
            "By avoiding any self-assessment",
            "By ignoring setbacks",
            "By staying in the same position",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question:
            "Why is persistence key to overcoming obstacles during a career transition?",
          options: [
            "Persistence helps you stay focused and motivated, even when facing challenges",
            "Persistence makes the transition more difficult",
            "Persistence prevents growth",
            "Persistence leads to burnout",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question:
            "What role does self-reflection play in a successful career transition?",
          options: [
            "Self-reflection helps you evaluate your skills, strengths, and areas for improvement during the transition",
            "Self-reflection is irrelevant",
            "Self-reflection limits your growth",
            "Self-reflection prevents you from changing careers",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question:
            "How can you adapt your mindset for a successful career transition?",
          options: [
            "By embracing change, staying positive, and being open to new opportunities",
            "By resisting change and staying in your current role",
            "By focusing only on your past job",
            "By avoiding any risks",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question:
            "What is the benefit of setting both short-term and long-term goals during a career transition?",
          options: [
            "It provides clarity, motivation, and a clear direction for achieving career success",
            "It overwhelms you with too many tasks",
            "It prevents you from focusing on your job search",
            "It keeps you stuck in one place",
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
