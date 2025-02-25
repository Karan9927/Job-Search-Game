// seed.js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createQuestionTwo() {
  // Data for seeding
  const questionsData = [
    {
      levelId: 1, // Beginner
      subCategoryId: 2, // Cover Letter Writing
      questions: [
        {
          question: "What is the primary purpose of a cover letter?",
          options: [
            "To list your favorite books",
            "To introduce yourself and express interest in the job",
            "To create a photo gallery",
            "To show your personality",
          ],
          correctAnswer: 1,
          pointId: 1,
        },
        {
          question: "What should you avoid including in a cover letter?",
          options: [
            "Your interest in the job",
            "Irrelevant personal information",
            "Your contact information",
            "Your skills and qualifications",
          ],
          correctAnswer: 1,
          pointId: 1,
        },
        {
          question: "What is the best way to start a cover letter?",
          options: [
            "With a generic greeting",
            "With a personalized greeting",
            "With a list of your hobbies",
            "With a demand for an interview",
          ],
          correctAnswer: 1,
          pointId: 1,
        },
        {
          question: "What is the best way to end a cover letter?",
          options: [
            "With a polite closing and a call to action",
            "With a list of your hobbies",
            "With a demand for an interview",
            "With a summary of your resume",
          ],
          correctAnswer: 0,
          pointId: 1,
        },
        {
          question: "What is the ideal length for a cover letter?",
          options: ["One page", "Two pages", "Three pages", "Half a page"],
          correctAnswer: 0,
          pointId: 1,
        },
        {
          question: "What should you do before submitting a cover letter?",
          options: [
            "Proofread it for errors",
            "Add as much personal information as possible",
            "Include a photo gallery",
            "List all your hobbies",
          ],
          correctAnswer: 0,
          pointId: 1,
        },
        {
          question:
            "What is the best way to tailor a cover letter for a specific job?",
          options: [
            "Use the same cover letter for all jobs",
            "Highlight your interest in the job and company",
            "Include all your hobbies",
            "List your favorite books",
          ],
          correctAnswer: 1,
          pointId: 1,
        },
        {
          question:
            "What is the most important thing to include in a cover letter?",
          options: [
            "Your favorite books",
            "Your interest in the job and company",
            "Your hobbies",
            "Your photo",
          ],
          correctAnswer: 1,
          pointId: 1,
        },
        {
          question:
            "What is the best way to handle a lack of experience in a cover letter?",
          options: [
            "Focus on relevant skills and volunteer work",
            "Make up experience",
            "List all your hobbies",
            "Leave the experience section blank",
          ],
          correctAnswer: 0,
          pointId: 1,
        },
        {
          question:
            "What is the best way to handle a cover letter for a creative job?",
          options: [
            "Use a traditional format",
            "Use a creative format that showcases your skills",
            "List all your hobbies",
            "Use a JPEG format",
          ],
          correctAnswer: 1,
          pointId: 1,
        },
      ],
    },
    {
      levelId: 2, // Intermediate
      subCategoryId: 2, // Cover Letter Writing
      questions: [
        {
          question: "What is the best way to structure a cover letter?",
          options: [
            "Introduction, body, conclusion",
            "Random order",
            "List of hobbies",
            "Summary of your resume",
          ],
          correctAnswer: 0,
          pointId: 2,
        },
        {
          question: "What is the best way to address a cover letter?",
          options: [
            "To whom it may concern",
            "Dear Hiring Manager",
            "Hello",
            "Hi there",
          ],
          correctAnswer: 1,
          pointId: 2,
        },
        {
          question:
            "What is the best way to highlight your qualifications in a cover letter?",
          options: [
            "List all your skills",
            "Focus on skills relevant to the job",
            "List your hobbies",
            "Use a creative format",
          ],
          correctAnswer: 1,
          pointId: 2,
        },
        {
          question:
            "What is the best way to handle a cover letter for a technical job?",
          options: [
            "Focus on technical skills and certifications",
            "List all your hobbies",
            "Use a creative format",
            "Use a JPEG format",
          ],
          correctAnswer: 0,
          pointId: 2,
        },
        {
          question:
            "What is the best way to handle a cover letter for a management position?",
          options: [
            "Focus on leadership experience and achievements",
            "List all your hobbies",
            "Use a creative format",
            "Use a JPEG format",
          ],
          correctAnswer: 0,
          pointId: 2,
        },
        {
          question:
            "What is the best way to handle a cover letter for a creative job?",
          options: [
            "Use a traditional format",
            "Use a creative format that showcases your skills",
            "List all your hobbies",
            "Use a JPEG format",
          ],
          correctAnswer: 1,
          pointId: 2,
        },
        {
          question: "How should you address the company in a cover letter?",
          options: [
            "By using a formal title and company name",
            "By using casual greetings",
            "By leaving out any address",
            "By mentioning your previous experience",
          ],
          correctAnswer: 0,
          pointId: 2,
        },
        {
          question:
            "How can you demonstrate your enthusiasm in a cover letter?",
          options: [
            "By using a formal tone",
            "By showing excitement about the company's goals",
            "By listing your hobbies",
            "By using technical jargon",
          ],
          correctAnswer: 1,
          pointId: 2,
        },
        {
          question:
            "What is the best way to handle a cover letter for a customer service job?",
          options: [
            "Focus on interpersonal skills and customer handling experience",
            "Use creative design elements",
            "List all your hobbies",
            "Use a formal business language",
          ],
          correctAnswer: 0,
          pointId: 2,
        },
        {
          question:
            "What is the importance of including specific examples in a cover letter?",
          options: [
            "It shows that you're qualified and can back up your claims",
            "It makes the letter too long",
            "It makes the letter more creative",
            "It highlights your hobbies",
          ],
          correctAnswer: 0,
          pointId: 2,
        },
      ],
    },
    {
      levelId: 3, // Advanced
      subCategoryId: 2, // Cover Letter Writing
      questions: [
        {
          question:
            "What is the most effective way to research a company before writing a cover letter?",
          options: [
            "Visit the company's website and understand their values",
            "Ask your friends about the company",
            "Read their social media pages",
            "Look at their logo",
          ],
          correctAnswer: 0,
          pointId: 3,
        },
        {
          question: "How can you customize your cover letter for a remote job?",
          options: [
            "Emphasize your experience working independently and remotely",
            "Focus on your commute skills",
            "List your hobbies",
            "Ignore the remote aspect",
          ],
          correctAnswer: 0,
          pointId: 3,
        },
        {
          question:
            "What should you do if you are applying for a job in a field you have limited experience in?",
          options: [
            "Highlight transferable skills and enthusiasm to learn",
            "List all your hobbies",
            "Include a generic cover letter",
            "Make up experience",
          ],
          correctAnswer: 0,
          pointId: 3,
        },
        {
          question:
            "How can you show that you've researched the job position in your cover letter?",
          options: [
            "By mentioning the skills and experiences they are specifically seeking",
            "By using a generic template",
            "By writing about unrelated job experiences",
            "By avoiding job-specific references",
          ],
          correctAnswer: 0,
          pointId: 3,
        },
        {
          question:
            "What is the best way to highlight achievements in a cover letter?",
          options: [
            "By using specific metrics and examples",
            "By listing every achievement in a bulleted format",
            "By mentioning personal goals",
            "By keeping them vague",
          ],
          correctAnswer: 0,
          pointId: 3,
        },
        {
          question:
            "Why is it important to avoid spelling or grammatical errors in a cover letter?",
          options: [
            "It shows attention to detail and professionalism",
            "It makes the cover letter more interesting",
            "It shows your creativity",
            "It doesn't really matter",
          ],
          correctAnswer: 0,
          pointId: 3,
        },
        {
          question:
            "What should you do if the job description asks for specific qualifications you don't have?",
          options: [
            "Focus on your transferable skills and how you can grow in the role",
            "Pretend you have the qualifications",
            "Leave that section blank",
            "Write about unrelated qualifications",
          ],
          correctAnswer: 0,
          pointId: 3,
        },
        {
          question: "What role does the tone of your cover letter play?",
          options: [
            "It reflects your personality and fits the company culture",
            "It should be casual and friendly",
            "It should be formal only",
            "It doesn't matter",
          ],
          correctAnswer: 0,
          pointId: 3,
        },
        {
          question: "How can you follow up after sending a cover letter?",
          options: [
            "Politely inquire about the status of your application after a week or two",
            "Send multiple emails in the first few days",
            "Call the company every day",
            "Avoid following up",
          ],
          correctAnswer: 0,
          pointId: 3,
        },
        {
          question:
            "What is the benefit of including a professional closing in your cover letter?",
          options: [
            "It leaves a strong, professional impression",
            "It shows you don't know the company culture",
            "It makes the cover letter longer",
            "It adds humor",
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
