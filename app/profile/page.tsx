import { redirect } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { StarIcon } from "lucide-react";
import { ProfileEditor } from "@/components/profile/ProfileEditor";
import {
  getJobsPostedByUser,
  getProfile,
  getUserApplication,
  updateProfile,
} from "@/lib/profileActions";
import { auth } from "@/auth";
import Badges from "@/components/Badges";
import { revalidatePath } from "next/cache";
import { getReviewsByUserId } from "@/lib/reviewActions";
import { formatDateWithMonth } from "@/lib/utils";
import { getUserBadges } from "@/lib/badgeActions";

async function updateProfileAction(formData: FormData) {
  "use server";

  const session = await auth();
  if (!session || !session.user?.id) {
    throw new Error("Not authenticated or user ID missing");
  }

  await updateProfile(session.user.id, formData);
  revalidatePath("/profile");
}

export default async function ProfilePage() {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }
  const user = session.user;

  const profile = await getProfile(user.id);
  const jobApplications = await getUserApplication(user.id);
  const jobPosted = await getJobsPostedByUser(user.id);
  const reviews = await getReviewsByUserId(user.id);
  const badgeData = await getUserBadges(user.id);

  const isEliteChallenger = badgeData.find(
    (badge) => badge.name === "Elite Challenger"
  );

  const getProficiencyColor = (proficiency: number) => {
    if (proficiency >= 80) return "bg-green-500";
    if (proficiency >= 60) return "bg-blue-500";
    if (proficiency >= 40) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-6">
            <Card className="bg-gray-100">
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Your professional details</CardDescription>
              </CardHeader>
              <CardContent>
                <ProfileEditor
                  profile={profile}
                  updateProfile={updateProfileAction}
                />
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Badges badgeData={badgeData} />

            {user.role === "JOB_SEEKER" ? (
              <Card>
                <CardHeader>
                  <CardTitle>Job Applications</CardTitle>
                  <CardDescription>
                    Your current job applications
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {jobApplications.length === 0 ? (
                      <p>No job applications available.</p>
                    ) : (
                      jobApplications.map((job, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between border-b pb-2"
                        >
                          <div>
                            <p className="font-semibold">{job.title}</p>
                            <p className="text-sm text-muted-foreground">
                              {job.company}
                            </p>
                          </div>
                          <Badge
                            variant={
                              job.status === "ACCEPTED"
                                ? "default"
                                : "secondary"
                            }
                          >
                            {job.status}
                          </Badge>
                        </div>
                      ))
                    )}
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle>Posted Jobs</CardTitle>
                  <CardDescription>Your posted jobs</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {jobPosted.length === 0 ? (
                      <p>No posted jobs available.</p>
                    ) : (
                      jobPosted.map((job, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between border-b pb-2"
                        >
                          <div>
                            <p className="font-semibold">{job.title}</p>
                            <p className="text-sm text-muted-foreground">
                              {job.company}
                            </p>
                          </div>
                          <p className="text-sm mt-2">
                            Applications: {job.applications.length}
                          </p>
                        </div>
                      ))
                    )}
                  </div>
                </CardContent>
              </Card>
            )}

            <Card>
              <CardHeader>
                <CardTitle>Skill Levels</CardTitle>
                <CardDescription>
                  Your proficiency in various skills
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {(profile?.skills ?? []).length === 0 ? (
                    <p>No skills details provided.</p>
                  ) : (
                    profile?.skills?.map((skill, index) => {
                      const color = getProficiencyColor(skill.proficiency);
                      return (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between">
                            <span>{skill.skillName}</span>
                            <span>{skill.proficiency}%</span>
                          </div>
                          <Progress
                            value={skill.proficiency}
                            className="w-full"
                            indicatorColor={color}
                          />
                        </div>
                      );
                    })
                  )}
                </div>
              </CardContent>
            </Card>
            {isEliteChallenger && (
              <Card>
                <CardHeader>
                  <CardTitle>Reviews</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {reviews?.length > 0 ? (
                      reviews.map((review) => (
                        <div key={review.id} className="border-b pb-4">
                          <div className="flex justify-between items-center">
                            <h4 className="font-semibold">
                              {review.reviewerName}
                            </h4>
                            <Badge variant="secondary">
                              {formatDateWithMonth(review.createdAt.toString())}
                            </Badge>
                          </div>
                          <div className="flex items-center my-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <StarIcon
                                key={star}
                                className={`w-4 h-4 ${
                                  star <= review.rating
                                    ? "text-yellow-400 fill-current"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <p className="text-sm mt-1">{review.comment}</p>
                        </div>
                      ))
                    ) : (
                      <p>No reviews yet. Be the first to leave a review!</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
