// seed.js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createQuestionNine() {
  // Data for seeding
  const questionsData = [
    {
      levelId: 1, // Beginner
      subCategoryId: 9, // Cover Letter Writing
      questions: [
        {
          question: "Why is networking important for career growth?",
          options: [
            "It helps build relationships and access new opportunities",
            "It is only useful for job seekers",
            "It guarantees an immediate promotion",
            "It is not important in professional life",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question: "Which of the following is a good networking habit?",
          options: [
            "Following up with new connections",
            "Only reaching out when you need a favor",
            "Sending generic messages to everyone",
            "Avoiding networking events",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question: "What is a common mistake in networking?",
          options: [
            "Failing to personalize messages",
            "Engaging in meaningful conversations",
            "Offering help to new connections",
            "Maintaining long-term relationships",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question:
            "How can you make a strong first impression when networking?",
          options: [
            "By showing genuine interest and listening actively",
            "By talking only about yourself",
            "By handing out as many business cards as possible",
            "By ignoring follow-ups",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question:
            "What is a good way to start a conversation at a networking event?",
          options: [
            "Asking open-ended questions",
            "Immediately asking for a job",
            "Talking about unrelated topics",
            "Ignoring others and waiting for them to approach",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question: "Why should you network beyond your immediate industry?",
          options: [
            "To discover unexpected opportunities and insights",
            "To focus only on your current field",
            "To avoid competition",
            "To limit your professional growth",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question: "What should you do after meeting a new contact?",
          options: [
            "Send a follow-up message or email",
            "Forget about them until you need something",
            "Wait for them to reach out first",
            "Remove them from your network",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question:
            "Which of the following is an effective way to network online?",
          options: [
            "Engaging with posts and sharing valuable content",
            "Sending mass connection requests with no message",
            "Only using networking platforms when job hunting",
            "Ignoring direct messages from potential contacts",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question: "What is a key benefit of informational interviews?",
          options: [
            "Gaining industry insights and building relationships",
            "Immediately getting a job offer",
            "Impressing people with your knowledge",
            "Avoiding direct conversations with professionals",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
        {
          question: "What is an example of good networking etiquette?",
          options: [
            "Being respectful of people’s time and interests",
            "Only talking about yourself",
            "Spamming people with repeated messages",
            "Avoiding introductions and icebreakers",
          ],
          correctAnswer: 0,
          pointId: 1, // Added pointId for Beginner level
        },
      ],
    },
    {
      levelId: 2, // Intermediate
      subCategoryId: 9, // Cover Letter Writing
      questions: [
        {
          question:
            "What is an effective way to provide value in a networking relationship?",
          options: [
            "Sharing useful resources or making relevant introductions",
            "Asking for favors without offering anything in return",
            "Avoiding communication after connecting",
            "Requesting job leads from all contacts",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question: "Why is it important to have a diverse network?",
          options: [
            "It exposes you to different perspectives and opportunities",
            "It limits your career choices",
            "It prevents you from specializing in one area",
            "It makes networking more difficult",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question: "What is an example of strategic networking?",
          options: [
            "Connecting with professionals who align with your career goals",
            "Adding random people on LinkedIn",
            "Only networking with colleagues in your current company",
            "Avoiding conversations about career development",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question: "How can you maintain a strong professional network?",
          options: [
            "Regularly checking in and offering assistance",
            "Only contacting people when you need a favor",
            "Ignoring messages from your connections",
            "Removing contacts after a short time",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question: "What is a common barrier to effective networking?",
          options: [
            "Fear of reaching out to new people",
            "Being genuinely interested in others",
            "Following up after networking events",
            "Maintaining professional relationships",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question: "How can storytelling enhance networking?",
          options: [
            "By making conversations engaging and memorable",
            "By avoiding personal experiences in conversations",
            "By focusing only on professional topics",
            "By dominating the conversation",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question:
            "Why is it important to maintain long-term networking relationships?",
          options: [
            "To create future opportunities and collaborations",
            "To increase your number of social media connections",
            "To only have contacts for emergencies",
            "To avoid relying on new connections",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question:
            "What is the advantage of networking at industry conferences?",
          options: [
            "Building relationships with key professionals",
            "Only collecting free promotional materials",
            "Focusing on socializing with friends",
            "Avoiding interactions with speakers",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question: "What is the role of mentorship in networking?",
          options: [
            "Guidance, career advice, and professional development",
            "Only getting job referrals",
            "Having a mentor strictly for promotions",
            "Avoiding discussions with experienced professionals",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
        {
          question: "How can networking support career transitions?",
          options: [
            "By providing access to new opportunities and insights",
            "By only networking within the same industry",
            "By avoiding interactions with recruiters",
            "By limiting your connections to close colleagues",
          ],
          correctAnswer: 0,
          pointId: 2, // Added pointId for Intermediate level
        },
      ],
    },
    {
      levelId: 3, // Advanced
      subCategoryId: 9, // Cover Letter Writing
      questions: [
        {
          question:
            "How can you create long-term value in your professional network?",
          options: [
            "By building trust and fostering genuine relationships",
            "By prioritizing your own needs over others",
            "By connecting with as many people as possible without interaction",
            "By avoiding direct communication with key contacts",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question: "What is a key principle of high-level networking?",
          options: [
            "Mutual benefit and long-term collaboration",
            "Seeking immediate job referrals",
            "Limiting networking to formal events",
            "Keeping professional contacts strictly transactional",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question: "Why is thought leadership valuable in networking?",
          options: [
            "It helps establish credibility and attract meaningful connections",
            "It is unnecessary in building a strong network",
            "It only benefits senior professionals",
            "It limits opportunities to network with diverse groups",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question:
            "How can you strategically expand your influence through networking?",
          options: [
            "By engaging in industry discussions and sharing insights",
            "By sending mass emails to professionals",
            "By only networking within your company",
            "By avoiding social media and online platforms",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question:
            "What is the best way to transition a casual contact into a valuable professional relationship?",
          options: [
            "By consistently providing value and staying in touch",
            "By only reaching out when you need something",
            "By avoiding direct communication",
            "By ignoring their updates and career progress",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question: "How does reciprocity impact advanced networking?",
          options: [
            "It strengthens relationships through mutual support",
            "It has no effect on professional growth",
            "It is only important for junior professionals",
            "It limits the scope of networking",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question:
            "Why is it important to network with high-level executives?",
          options: [
            "For mentorship and career advancement opportunities",
            "Only to secure job offers",
            "To show off your knowledge",
            "To avoid interacting with junior employees",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question: "How can you leverage social capital in networking?",
          options: [
            "By using connections to create opportunities for others",
            "By asking for favors without offering anything in return",
            "By ignoring past interactions",
            "By focusing only on personal gains",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question:
            "What is the role of professional associations in networking?",
          options: [
            "Providing industry insights and networking opportunities",
            "Only serving as job boards",
            "Being irrelevant to career growth",
            "Limiting access to career advancement",
          ],
          correctAnswer: 0,
          pointId: 3, // Added pointId for Advanced level
        },
        {
          question: "How can networking contribute to business growth?",
          options: [
            "By creating partnerships and expanding opportunities",
            "By avoiding collaboration",
            "By focusing only on competitors",
            "By ignoring industry trends",
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
