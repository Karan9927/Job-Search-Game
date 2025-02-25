// seed.js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createQuestionThree() {
  // Data for seeding
  const questionsData = [
    {
      levelId: 1, // Beginner
      subCategoryId: 3, // Cover Letter Writing
      questions: [
        {
          question: "What is the primary goal of a resume?",
          options: [
            "To get an interview",
            "To list your hobbies",
            "To tell your life story",
            "To showcase your artwork",
          ],
          correctAnswer: 0,
          pointId: 1,
        },
        {
          question: "Which of these is typically included in a resume?",
          options: [
            "Work experience",
            "Personal opinions",
            "Financial details",
            "Medical history",
          ],
          correctAnswer: 0,
          pointId: 1,
        },
        {
          question: "What is a cover letter?",
          options: [
            "An introduction to your resume",
            "A list of your references",
            "A copy of your transcripts",
            "A thank you note",
          ],
          correctAnswer: 0,
          pointId: 1,
        },
        {
          question: "True or False: Typos are okay on a resume.",
          options: ["True", "False"],
          correctAnswer: 1,
          pointId: 1,
        },
        {
          question: "What's a good way to format your resume?",
          options: [
            "Easy to read and scan",
            "With lots of colors and fonts",
            "Handwritten on notebook paper",
            "Very long and detailed",
          ],
          correctAnswer: 0,
          pointId: 1,
        },
        {
          question: "What should you do before submitting your application?",
          options: [
            "Proofread everything carefully",
            "Send it to everyone you know",
            "Post it on social media",
            "Forget about it",
          ],
          correctAnswer: 0,
          pointId: 1,
        },
        {
          question: "What's a common file format for resumes?",
          options: ["PDF", "JPEG", "MP3", "GIF"],
          correctAnswer: 0,
          pointId: 1,
        },
        {
          question: "Should your resume be tailored to each job?",
          options: [
            "Yes, always",
            "No, never",
            "Only for important jobs",
            "Only if you have time",
          ],
          correctAnswer: 0,
          pointId: 1,
        },
        {
          question: "What is the purpose of the 'Experience' section?",
          options: [
            "To describe your previous jobs",
            "To list your hobbies",
            "To share your dreams",
            "To talk about your family",
          ],
          correctAnswer: 0,
          pointId: 1,
        },
        {
          question:
            "Which is NOT a good way to follow up on a job application?",
          options: [
            "Call the hiring manager repeatedly",
            "Send a polite email",
            "Connect with someone on LinkedIn",
            "Thank them for their time",
          ],
          correctAnswer: 0,
          pointId: 1,
        },
      ],
    },
    {
      levelId: 2, // Intermediate
      subCategoryId: 3, // Cover Letter Writing
      questions: [
        {
          question: "What does 'tailoring your resume' mean?",
          options: [
            "Adjusting it to fit the specific job",
            "Making it longer and more detailed",
            "Using fancy fonts and colors",
            "Printing it on special paper",
          ],
          correctAnswer: 0,
          pointId: 2,
        },
        {
          question: "What is a 'functional' resume best for?",
          options: [
            "Highlighting skills over work history",
            "Listing jobs in reverse order",
            "Including lots of personal information",
            "Being very short and concise",
          ],
          correctAnswer: 0,
          pointId: 2,
        },
        {
          question: "What are 'keywords' in a resume?",
          options: [
            "Words related to the job description",
            "Technical terms you don't understand",
            "Impressive-sounding phrases",
            "Random words you like",
          ],
          correctAnswer: 0,
          pointId: 2,
        },
        {
          question:
            "Besides skills and experience, what else might you include?",
          options: [
            "Volunteer work or projects",
            "Your shoe size",
            "Your favorite movies",
            "Your astrological sign",
          ],
          correctAnswer: 0,
          pointId: 2,
        },
        {
          question:
            "What is the purpose of a 'Summary' or 'Objective' statement?",
          options: [
            "To briefly highlight your key qualifications",
            "To list your salary expectations",
            "To explain why you left your last job",
            "To tell a funny story about yourself",
          ],
          correctAnswer: 0,
          pointId: 2,
        },
        {
          question: "What is the STAR method used for?",
          options: [
            "Structuring behavioral interview answers",
            "Writing a thank you note after an interview",
            "Negotiating a salary",
            "Researching a company",
          ],
          correctAnswer: 0,
          pointId: 2,
        },
        {
          question: "What is a 'chronological' resume format?",
          options: [
            "Listing work history from most recent to oldest",
            "Listing skills alphabetically",
            "Grouping jobs by industry",
            "Omitting dates of employment",
          ],
          correctAnswer: 0,
          pointId: 2,
        },
        {
          question: "Why is networking important in job searching?",
          options: [
            "It can lead to unadvertised job openings",
            "It guarantees you a job",
            "It's a waste of time",
            "It's only for certain industries",
          ],
          correctAnswer: 0,
          pointId: 2,
        },
        {
          question: "What should you research before a job interview?",
          options: [
            "The company and the position",
            "The interviewer's personal life",
            "The company's stock price",
            "The local weather forecast",
          ],
          correctAnswer: 0,
          pointId: 2,
        },
        {
          question: "What is the difference between a resume and a CV?",
          options: [
            "CVs are more detailed and used for academic jobs",
            "Resumes are used in Europe, CVs in the US",
            "They are exactly the same thing",
            "CVs are shorter than resumes",
          ],
          correctAnswer: 0,
          pointId: 2,
        },
      ],
    },
    {
      levelId: 3, // Advanced
      subCategoryId: 3, // Cover Letter Writing
      questions: [
        {
          question:
            "What are some common mistakes to avoid in a job interview?",
          options: [
            "Being late, unprepared, and negative",
            "Asking too many questions, being too informal",
            "Not researching the company, speaking poorly of past employers",
            "All of the above",
          ],
          correctAnswer: 3,
          pointId: 3,
        },
        {
          question: "What is 'behavioral interviewing'?",
          options: [
            "Asking candidates to describe past work situations",
            "Giving candidates a skills test",
            "Asking candidates about their personality traits",
            "Having candidates work on a group project",
          ],
          correctAnswer: 0,
          pointId: 3,
        },
        {
          question: "How can you prepare for behavioral interview questions?",
          options: [
            "Use the STAR method to structure your answers",
            "Memorize a list of your skills",
            "Practice lying convincingly",
            "Avoid talking about your weaknesses",
          ],
          correctAnswer: 0,
          pointId: 3,
        },
        {
          question:
            "What is the purpose of a 'thank you' note after an interview?",
          options: [
            "To reiterate your interest and thank the interviewer",
            "To ask about the hiring decision timeline",
            "To negotiate salary and benefits",
            "To complain about the interview process",
          ],
          correctAnswer: 0,
          pointId: 3,
        },
        {
          question: "What is 'salary negotiation' and when is it appropriate?",
          options: [
            "Discussing your desired compensation after a job offer",
            "Asking about salary during the initial phone screening",
            "Demanding a specific salary before the interview",
            "Avoiding the topic of salary altogether",
          ],
          correctAnswer: 0,
          pointId: 3,
        },
        {
          question:
            "What are some strategies for effective salary negotiation?",
          options: [
            "Researching industry benchmarks, knowing your worth, and being confident",
            "Demanding a high salary without justification",
            "Accepting the first offer without negotiation",
            "Being aggressive and confrontational",
          ],
          correctAnswer: 0,
          pointId: 3,
        },
        {
          question: "What is an 'offer letter'?",
          options: [
            "A formal document outlining the terms of employment",
            "An informal email expressing interest in hiring you",
            "A request for references",
            "A rejection of your application",
          ],
          correctAnswer: 0,
          pointId: 3,
        },
        {
          question: "What should you do if you receive a job offer?",
          options: [
            "Review the offer carefully, ask clarifying questions, and negotiate if needed",
            "Accept the offer immediately without reading it",
            "Decline the offer without explanation",
            "Ignore the offer and wait for a better one",
          ],
          correctAnswer: 0,
          pointId: 3,
        },
        {
          question: "What is 'onboarding' in the context of a new job?",
          options: [
            "The process of integrating new employees into the company",
            "The first day of work",
            "The probationary period",
            "The exit interview",
          ],
          correctAnswer: 0,
          pointId: 3,
        },
        {
          question:
            "What is the importance of 'professionalism' in the job application process?",
          options: [
            "It demonstrates your skills and suitability for the role",
            "It guarantees you a job offer",
            "It's not important as long as you have the right skills",
            "It's only necessary for certain industries",
          ],
          correctAnswer: 0,
          pointId: 3,
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
        pointId: q.pointId,
      })),
    });
  }
}
