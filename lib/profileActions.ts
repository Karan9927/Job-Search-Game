"use server";
import prisma from "@/prisma/prisma";
import { ProfileFormData } from "@/types/profile";
import { revalidatePath } from "next/cache";

export async function getProfile(userId: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        profile: {
          include: {
            education: true,
            experience: true,
            skills: true,
            achievements: true,
          },
        },
        userBadges: true,
        leaderboard: true,
      },
    });

    if (!user || !user.profile) {
      throw new Error("Profile not found");
    }

    return {
      id: user.id,
      userId: user.id,
      fullName: user.fullName,
      email: user.email,
      phone: user.phoneNumber,
      bio: user.profile.bio,
      avatar: user.profile.avatar,
      role: user.role,
      education: user.profile.education,
      experience: user.profile.experience,
      skills: user.profile.skills,
      achievements: user.profile.achievements,
    };
  } catch (error) {
    console.error("Error fetching profile:", error);
    throw new Error("Failed to fetch profile");
  }
}

function toISODate(dateString: string | null): string | null {
  if (!dateString) return null;
  return new Date(dateString).toISOString();
}

export async function updateProfile(userId: string, formData: FormData) {
  try {
    const education = JSON.parse(
      (formData.get("education") as string) || "[]"
    ).map((edu: any) => ({
      degree: edu.degree,
      institution: edu.institution,
      startDate: toISODate(edu.startDate),
      endDate: toISODate(edu.endDate),
      description: edu.description,
    }));

    const experience = JSON.parse(
      (formData.get("experience") as string) || "[]"
    ).map((exp: any) => ({
      title: exp.title,
      companyName: exp.companyName,
      startDate: toISODate(exp.startDate),
      endDate: toISODate(exp.endDate),
      description: exp.description,
    }));

    const achievements = JSON.parse(
      (formData.get("achievements") as string) || "[]"
    ).map((achievement: any) => ({
      title: achievement.title,
      description: achievement.description,
      date: toISODate(achievement.date),
    }));
    const skills = JSON.parse((formData.get("skills") as string) || "[]").map(
      (skill: any) => ({
        skillName: skill.skillName,
        proficiency: skill.proficiency,
      })
    );

    const bio = formData.get("bio") as string;
    const phone = formData.get("phone");
    const avatar = formData.get("avatar");
    const avatarString =
      avatar instanceof File ? undefined : avatar ?? undefined;

    const data: ProfileFormData = {
      profile: {
        bio,
        education,
        experience,
        skills,
        achievements,
        avatar: avatarString,
      },
    };

    const updatedProfile = await prisma.user.update({
      where: { id: userId },
      data: {
        profile: {
          upsert: {
            create: {
              bio: data.profile.bio,
              education: {
                createMany: {
                  data: data.profile.education.map((edu) => ({
                    degree: edu.degree,
                    institution: edu.institution,
                    startDate: edu.startDate,
                    endDate: edu.endDate,
                    description: edu.description,
                  })),
                },
              },
              experience: {
                createMany: {
                  data: data.profile.experience.map((exp) => ({
                    title: exp.title,
                    companyName: exp.companyName,
                    startDate: exp.startDate,
                    endDate: exp.endDate,
                    description: exp.description,
                  })),
                },
              },
              skills: {
                createMany: {
                  data: data.profile.skills.map((skill) => ({
                    skillName: skill.skillName,
                    proficiency: skill.proficiency,
                  })),
                },
              },
              achievements: {
                createMany: {
                  data: data.profile.achievements.map((achievement) => ({
                    title: achievement.title,
                    description: achievement.description,
                    date: achievement.date,
                  })),
                },
              },
              avatar: avatarString,
            },
            update: {
              bio: data.profile.bio,
              education: {
                deleteMany: {},
                createMany: {
                  data: data.profile.education.map((edu) => ({
                    degree: edu.degree,
                    institution: edu.institution,
                    startDate: edu.startDate,
                    endDate: edu.endDate,
                    description: edu.description,
                  })),
                },
              },
              experience: {
                deleteMany: {},
                createMany: {
                  data: data.profile.experience.map((exp) => ({
                    title: exp.title,
                    companyName: exp.companyName,
                    startDate: exp.startDate,
                    endDate: exp.endDate,
                    description: exp.description,
                  })),
                },
              },
              skills: {
                deleteMany: {},
                createMany: {
                  data: data.profile.skills.map((skill) => ({
                    skillName: skill.skillName,
                    proficiency: skill.proficiency,
                  })),
                },
              },
              achievements: {
                deleteMany: {},
                createMany: {
                  data: data.profile.achievements.map((achievement) => ({
                    title: achievement.title,
                    description: achievement.description,
                    date: achievement.date,
                  })),
                },
              },
              avatar: avatarString,
            },
          },
        },
      },
      include: {
        profile: {
          include: {
            education: true,
            experience: true,
            skills: true,
            achievements: true,
          },
        },
      },
    });

    revalidatePath("/profile");
    return updatedProfile;
  } catch (error) {
    console.error("Error updating profile:", error);
  }
}

export async function getUserApplication(userId: string) {
  try {
    const applications = await prisma.application.findMany({
      where: {
        userId,
      },
      include: {
        job: {
          select: {
            title: true,
            company: true,
            location: true,
            salary: true,
            createdAt: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return applications.map((app) => ({
      id: app.id,
      jobId: app.jobId,
      status: app.status,
      createdAt: app.createdAt,
      title: app.job.title,
      company: app.job.company,
      location: app.job.location,
      salary: app.job.salary,
      postedAt: app.job.createdAt,
    }));
  } catch (error) {
    console.error("Error fetching user applications:", error);
    throw new Error("Failed to fetch user applications");
  }
}

export async function getJobsPostedByUser(userId: string) {
  try {
    const jobs = await prisma.job.findMany({
      where: {
        postedById: userId,
      },
      include: {
        applications: {
          select: {
            id: true,
            status: true,
            user: {
              select: {
                id: true,
                email: true,
                profile: {
                  select: {
                    user: true,
                  },
                },
              },
            },
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return jobs.map((job) => ({
      id: job.id,
      title: job.title,
      company: job.company,
      location: job.location,
      salary: job.salary,
      description: job.description,
      requirements: job.requirements,
      createdAt: job.createdAt,
      applications: job.applications.map((app) => ({
        id: app.id,
        status: app.status,
        userId: app.user.id,
        email: app.user.email,
        fullName: app.user.profile?.user.fullName || "Unknown",
      })),
    }));
  } catch (error) {
    console.error("Error fetching jobs posted by user:", error);
    throw new Error("Failed to fetch jobs posted by user");
  }
}
