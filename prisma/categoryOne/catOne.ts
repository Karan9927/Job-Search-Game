import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createQuestionOne = async () => {
  // Beginner questions for Resume Building
  await prisma.question.createMany({
    data: [
      {
        levelId: 1, // Beginner level
        subCategoryId: 1, // Replace with correct sub-category ID for "Resume Building"
        question: "What is the primary purpose of a resume?",
        options: [
          "To list your favorite books",
          "To present your work experience and qualifications",
          "To create a photo gallery",
          "To show your personality",
        ],
        correctAnswer: 1, // "To present your work experience and qualifications"
        pointId: 1,
      },
      {
        levelId: 1, // Beginner level
        subCategoryId: 1,
        question: "Which of the following should NOT be included in a resume?",
        options: [
          "Education and skills",
          "Your favorite hobbies",
          "Work experience",
          "Contact information",
        ],
        correctAnswer: 1, // "Your favorite hobbies"
        pointId: 1,
      },
      {
        levelId: 1, // Beginner level
        subCategoryId: 1,
        question: "What is the best format for a resume?",
        options: ["JPEG", "PDF", "HTML", "Word Document"],
        correctAnswer: 1, // "PDF"
        pointId: 1,
      },
      {
        levelId: 1, // Beginner level
        subCategoryId: 1,
        question: "How long should a resume typically be?",
        options: ["One page", "Two pages", "Three pages", "As long as needed"],
        correctAnswer: 0, // "One page"
        pointId: 1,
      },
      {
        levelId: 1, // Beginner level
        subCategoryId: 1,
        question: "What is the purpose of a cover letter?",
        options: [
          "To summarize your resume",
          "To introduce yourself and express interest in the job",
          "To list your job skills",
          "To explain your hobbies",
        ],
        correctAnswer: 1, // "To introduce yourself and express interest in the job"
        pointId: 1,
      },
      {
        levelId: 1, // Beginner level
        subCategoryId: 1,
        question:
          "What information should be included in the contact information section?",
        options: [
          "Your name, phone number, and email",
          "Your favorite hobbies",
          "Your previous job experiences",
          "Your skills and education",
        ],
        correctAnswer: 0, // "Your name, phone number, and email"
        pointId: 1,
      },
      {
        levelId: 1, // Beginner level
        subCategoryId: 1,
        question: "Which of these is most important to include in your resume?",
        options: [
          "Favorite color",
          "Relevant work experience",
          "Your favorite foods",
          "Social media handles",
        ],
        correctAnswer: 1, // "Relevant work experience"
        pointId: 1,
      },
      {
        levelId: 1, // Beginner level
        subCategoryId: 1,
        question: "What is the best way to organize your resume?",
        options: [
          "Chronological order",
          "Alphabetical order",
          "By color",
          "By category",
        ],
        correctAnswer: 0, // "Chronological order"
        pointId: 1,
      },
      {
        levelId: 1, // Beginner level
        subCategoryId: 1,
        question:
          "What should you include in the education section of your resume?",
        options: [
          "Your school name, degree, and graduation date",
          "Your favorite subjects",
          "Your social media profiles",
          "Your extracurricular activities",
        ],
        correctAnswer: 0, // "Your school name, degree, and graduation date"
        pointId: 1,
      },
      {
        levelId: 1, // Beginner level
        subCategoryId: 1,
        question: "How can you tailor your resume for a specific job?",
        options: [
          "Use the same resume for every job",
          "Highlight relevant experience and skills",
          "Include personal hobbies",
          "Use an outdated format",
        ],
        correctAnswer: 1, // "Highlight relevant experience and skills"
        pointId: 1,
      },
    ],
  });

  // Intermediate questions for Resume Building
  await prisma.question.createMany({
    data: [
      {
        levelId: 2, // Intermediate level
        subCategoryId: 1,
        question:
          "What is the best way to format your work experience on a resume?",
        options: [
          "Chronological order",
          "Reverse chronological order",
          "Random order",
          "By relevance to the job",
        ],
        correctAnswer: 1, // "Reverse chronological order"
        pointId: 2,
      },
      {
        levelId: 2, // Intermediate level
        subCategoryId: 1,
        question: "What should you avoid including in a resume?",
        options: [
          "Relevant skills",
          "Unrelated hobbies",
          "Contact information",
          "Education history",
        ],
        correctAnswer: 1, // "Unrelated hobbies"
        pointId: 2,
      },
      {
        levelId: 2, // Intermediate level
        subCategoryId: 1,
        question: "How can you make your resume stand out?",
        options: [
          "Use colorful fonts",
          "Include a photo gallery",
          "Highlight relevant achievements",
          "List all your hobbies",
        ],
        correctAnswer: 2, // "Highlight relevant achievements"
        pointId: 2,
      },
      {
        levelId: 2, // Intermediate level
        subCategoryId: 1,
        question: "What is the ideal length for a cover letter?",
        options: ["One page", "Two pages", "Three pages", "Half a page"],
        correctAnswer: 0, // "One page"
        pointId: 2,
      },
      {
        levelId: 2, // Intermediate level
        subCategoryId: 1,
        question: "What is the purpose of a resume summary?",
        options: [
          "To list your hobbies",
          "To provide a brief overview of your qualifications",
          "To explain your favorite books",
          "To show your personality",
        ],
        correctAnswer: 1, // "To provide a brief overview of your qualifications"
        pointId: 2,
      },
      {
        levelId: 2, // Intermediate level
        subCategoryId: 1,
        question: "What is the best way to quantify achievements on a resume?",
        options: [
          "Use vague descriptions",
          "Use specific numbers and metrics",
          "Don't include achievements",
          "List all your hobbies",
        ],
        correctAnswer: 1, // "Use specific numbers and metrics"
        pointId: 2,
      },
      {
        levelId: 2, // Intermediate level
        subCategoryId: 1,
        question: "What is the purpose of the objective section on a resume?",
        options: [
          "To list your hobbies",
          "To briefly explain your career goals",
          "To summarize your education",
          "To list your skills",
        ],
        correctAnswer: 1, // "To briefly explain your career goals"
        pointId: 2,
      },
      {
        levelId: 2, // Intermediate level
        subCategoryId: 1,
        question: "How can you describe gaps in employment on your resume?",
        options: [
          "Leave them blank",
          "Explain the reason for the gap",
          "Ignore the gaps",
          "List hobbies during the gap",
        ],
        correctAnswer: 1, // "Explain the reason for the gap"
        pointId: 2,
      },
      {
        levelId: 2, // Intermediate level
        subCategoryId: 1,
        question: "How can you make your resume visually appealing?",
        options: [
          "Use a bright background",
          "Stick to a clean, simple layout",
          "Include lots of images",
          "Use multiple fonts",
        ],
        correctAnswer: 1, // "Stick to a clean, simple layout"
        pointId: 2,
      },
      {
        levelId: 2, // Intermediate level
        subCategoryId: 1,
        question:
          "What should you do when you don’t have much work experience?",
        options: [
          "List unrelated work experiences",
          "Highlight transferable skills and volunteer work",
          "Leave the experience section blank",
          "Use a generic template",
        ],
        correctAnswer: 1, // "Highlight transferable skills and volunteer work"
        pointId: 2,
      },
    ],
  });

  // Advanced questions for Resume Building
  await prisma.question.createMany({
    data: [
      {
        levelId: 3, // Advanced level
        subCategoryId: 1,
        question:
          "What is the best way to tailor your resume for a specific job?",
        options: [
          "Use the same resume for all jobs",
          "Highlight skills and experiences relevant to the job",
          "Include all your hobbies",
          "List your favorite books",
        ],
        correctAnswer: 1, // "Highlight skills and experiences relevant to the job"
        pointId: 3,
      },
      {
        levelId: 3, // Advanced level
        subCategoryId: 1,
        question: "What is the best way to quantify achievements on a resume?",
        options: [
          "Use vague descriptions",
          "Use specific numbers and metrics",
          "Don't include achievements",
          "List your hobbies instead",
        ],
        correctAnswer: 1, // "Use specific numbers and metrics"
        pointId: 3,
      },
      {
        levelId: 3, // Advanced level
        subCategoryId: 1,
        question: "What is the best way to handle a career change on a resume?",
        options: [
          "Focus on transferable skills",
          "Ignore your previous experience",
          "List all your hobbies",
          "Use a chronological format",
        ],
        correctAnswer: 0, // "Focus on transferable skills"
        pointId: 3,
      },
      {
        levelId: 3, // Advanced level
        subCategoryId: 1,
        question:
          "What is the best way to format a resume for an online application?",
        options: [
          "Use a PDF format",
          "Use a Word document",
          "Use a JPEG format",
          "Use an HTML format",
        ],
        correctAnswer: 0, // "Use a PDF format"
        pointId: 3,
      },
      {
        levelId: 3, // Advanced level
        subCategoryId: 1,
        question:
          "What is the best way to handle a lack of experience on a resume?",
        options: [
          "Focus on relevant skills and volunteer work",
          "Make up experience",
          "List all your hobbies",
          "Leave the experience section blank",
        ],
        correctAnswer: 0, // "Focus on relevant skills and volunteer work"
        pointId: 3,
      },
      {
        levelId: 3, // Advanced level
        subCategoryId: 1,
        question: "How should you handle references on a resume?",
        options: [
          "Include references directly on the resume",
          "State 'References available upon request'",
          "List all references with contact information",
          "Mention you will provide references later",
        ],
        correctAnswer: 1, // "State 'References available upon request'"
        pointId: 3,
      },
      {
        levelId: 3, // Advanced level
        subCategoryId: 1,
        question:
          "What is the most effective way to list multiple skills on a resume?",
        options: [
          "Use a list format",
          "Use paragraphs",
          "Include a table",
          "Ignore skills altogether",
        ],
        correctAnswer: 0, // "Use a list format"
        pointId: 3,
      },
      {
        levelId: 3, // Advanced level
        subCategoryId: 1,
        question: "What is the best way to format job titles on a resume?",
        options: [
          "Use bold font for job titles",
          "Use a smaller font for job titles",
          "List job titles as long paragraphs",
          "Don't include job titles",
        ],
        correctAnswer: 0, // "Use bold font for job titles"
        pointId: 3,
      },
      {
        levelId: 3, // Advanced level
        subCategoryId: 1,
        question:
          "How can you best highlight achievements in the work experience section?",
        options: [
          "Use bullet points with metrics",
          "Use long paragraphs",
          "Use colored text",
          "Ignore achievements and focus on job duties",
        ],
        correctAnswer: 0, // "Use bullet points with metrics"
        pointId: 3,
      },
      {
        levelId: 3, // Advanced level
        subCategoryId: 1,
        question:
          "How should you format your resume for an ATS (Applicant Tracking System)?",
        options: [
          "Use simple, standard formatting",
          "Use flashy colors and fonts",
          "Include complex graphics",
          "Avoid using keywords",
        ],
        correctAnswer: 0, // "Use simple, standard formatting"
        pointId: 3,
      },
    ],
  });
};
