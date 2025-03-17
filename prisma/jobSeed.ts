import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function jobSeed() {
  await prisma.job.createMany({
    data: [
      {
        title: "Frontend Developer",
        company: "WebTech Solutions",
        description:
          "Seeking a skilled Frontend Developer to build and optimize user interfaces using modern frameworks.",
        requirements: [
          "Develop responsive UI components",
          "Optimize performance and accessibility",
          "Collaborate with backend teams",
          "Ensure cross-browser compatibility",
        ],
        location: "Austin, TX",
        salary: 95000,
        postedById: "8c0ee35b-fff0-4120-81e8-a0e7be5099ca",
      },
      {
        title: "Backend Developer",
        company: "Cloud Systems Inc.",
        description:
          "We need a Backend Developer to build scalable APIs and database solutions.",
        requirements: [
          "Design and maintain server-side applications",
          "Optimize database performance",
          "Implement authentication and security features",
          "Write efficient and scalable code",
        ],
        location: "Seattle, WA",
        salary: 110000,
        postedById: "8c0ee35b-fff0-4120-81e8-a0e7be5099ca",
      },
      {
        title: "Full Stack Developer",
        company: "Innovate IT",
        description:
          "Looking for a Full Stack Developer to work on both frontend and backend systems.",
        requirements: [
          "Develop and integrate frontend and backend systems",
          "Optimize application performance",
          "Implement best coding practices",
          "Collaborate with product and design teams",
        ],
        location: "Chicago, IL",
        salary: 115000,
        postedById: "8c0ee35b-fff0-4120-81e8-a0e7be5099ca",
      },
      {
        title: "DevOps Engineer",
        company: "CloudOps Solutions",
        description:
          "We are hiring a DevOps Engineer to streamline CI/CD pipelines and automate infrastructure.",
        requirements: [
          "Design and implement CI/CD pipelines",
          "Manage cloud infrastructure",
          "Monitor system performance",
          "Automate deployment processes",
        ],
        location: "Remote",
        salary: 125000,
        postedById: "8c0ee35b-fff0-4120-81e8-a0e7be5099ca",
      },
      {
        title: "UI/UX Designer",
        company: "DesignPro",
        description:
          "We are looking for a UI/UX Designer to create engaging user experiences.",
        requirements: [
          "Design intuitive and visually appealing interfaces",
          "Conduct user research and testing",
          "Create wireframes and prototypes",
          "Collaborate with developers for seamless implementation",
        ],
        location: "Los Angeles, CA",
        salary: 85000,
        postedById: "8c0ee35b-fff0-4120-81e8-a0e7be5099ca",
      },
      {
        title: "Cybersecurity Analyst",
        company: "SecureTech",
        description:
          "Join our security team as a Cybersecurity Analyst to protect systems and data.",
        requirements: [
          "Monitor and analyze security threats",
          "Implement security measures",
          "Conduct vulnerability assessments",
          "Ensure compliance with security protocols",
        ],
        location: "Boston, MA",
        salary: 105000,
        postedById: "8c0ee35b-fff0-4120-81e8-a0e7be5099ca",
      },
      {
        title: "AI/ML Engineer",
        company: "AI Innovations",
        description:
          "We need an AI/ML Engineer to develop machine learning models and AI solutions.",
        requirements: [
          "Develop and train machine learning models",
          "Analyze large datasets",
          "Optimize AI algorithms",
          "Work with cloud-based AI tools",
        ],
        location: "San Diego, CA",
        salary: 130000,
        postedById: "8c0ee35b-fff0-4120-81e8-a0e7be5099ca",
      },
      {
        title: "Cloud Architect",
        company: "CloudTech Solutions",
        description:
          "Looking for a Cloud Architect to design scalable cloud infrastructure solutions.",
        requirements: [
          "Design and implement cloud architecture",
          "Optimize cloud cost and performance",
          "Ensure cloud security compliance",
          "Work with cloud service providers",
        ],
        location: "Dallas, TX",
        salary: 135000,
        postedById: "8c0ee35b-fff0-4120-81e8-a0e7be5099ca",
      },
      {
        title: "QA Engineer",
        company: "TestPro",
        description:
          "We are seeking a QA Engineer to ensure the quality and reliability of our applications.",
        requirements: [
          "Develop and execute test cases",
          "Identify and report bugs",
          "Automate testing procedures",
          "Collaborate with developers for debugging",
        ],
        location: "Miami, FL",
        salary: 90000,
        postedById: "8c0ee35b-fff0-4120-81e8-a0e7be5099ca",
      },
      {
        title: "Database Administrator",
        company: "DataSecure Inc.",
        description:
          "Hiring a Database Administrator to manage and optimize our database systems.",
        requirements: [
          "Maintain and optimize databases",
          "Ensure data integrity and security",
          "Perform regular database backups",
          "Monitor database performance and troubleshoot issues",
        ],
        location: "Denver, CO",
        salary: 100000,
        postedById: "8c0ee35b-fff0-4120-81e8-a0e7be5099ca",
      },
    ],
  });
  console.log("Seed data inserted successfully");
}
