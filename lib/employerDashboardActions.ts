"use server";
import { PrismaClient } from "@prisma/client";
import { JobFormData } from "@/types/job";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export async function postJob(userId: string, data: JobFormData) {
  if (!userId) {
    throw new Error("User ID is required");
  }

  const job = prisma.job.create({
    data: {
      ...data,
      postedById: userId,
      salary: data.salary,
    },
    include: {
      applications: {
        include: {
          user: {
            select: {
              id: true,
              fullName: true,
              email: true,
            },
          },
        },
      },
      postedBy: {
        select: {
          id: true,
          fullName: true,
        },
      },
    },
  });
  revalidatePath("/employer/dashboard");
  return job;
}

export async function getEmployerJobs(postedById: string) {
  try {
    const jobs = await prisma.job.findMany({
      where: { postedById },
      select: {
        id: true,
        title: true,
        company: true,
        description: true,
        requirements: true,
        location: true,
        salary: true,
        createdAt: true,
        updatedAt: true,
        postedById: true,
        applications: {
          select: {
            id: true,
            userId: true,
            jobId: true,
            status: true,
            createdAt: true,
            user: {
              select: {
                fullName: true,
              },
            },
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return jobs;
  } catch (err) {
    console.error("Failed to fetch employer jobs:", err);
    return [];
  }
}

export async function changeStatus(
  applicationId: string,
  status: "ACCEPTED" | "REJECTED"
) {
  try {
    const application = await prisma.application.update({
      where: { id: applicationId },
      data: {
        status,
      },
    });
    return { success: true, application };
  } catch (error) {
    throw new Error(`Error updating application status: ${error}`);
  }
}

export async function deleteJob(jobId: string) {
  try {
    await prisma.application.deleteMany({
      where: { jobId },
    });

    const deletedJob = await prisma.job.delete({
      where: { id: jobId },
    });

    return deletedJob;
  } catch (error) {
    throw new Error(`Error deleting job: ${error}`);
  }
}
