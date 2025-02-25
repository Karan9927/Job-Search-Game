import { auth } from "@/auth";
import Badges from "@/components/Badges";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ReviewForm } from "@/components/ui/review-form";
import { getUserBadges } from "@/lib/badgeActions";
import { getProfile } from "@/lib/profileActions";
import { getReviewsByUserId } from "@/lib/reviewActions";
import { formatDate, formatDateWithMonth, getRoleName } from "@/lib/utils";
import { StarIcon } from "lucide-react";

export default async function ProfilePage({
  params,
}: {
  params: { id: string };
}) {
  const profileData = await getProfile(params.id);
  const reviews = await getReviewsByUserId(params.id);
  const session = await auth();
  const reviewerId = session?.user.id || "";

  const hasUserReviewed = reviews?.some((review) => {
    return review.reviewerId === session?.user.id;
  });

  const badgeData = await getUserBadges(params.id);

  const isEliteChallenger = badgeData.find(
    (badge) => badge.name === "Elite Challenger"
  );

  if (!profileData) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="text-center text-red-500">
            Failed to load profileData.
          </div>
        </main>
      </div>
    );
  }

  const ProfileField = ({ label, value }: { label: any; value: any }) => (
    <div className="space-y-1">
      <p className="text-sm font-medium text-muted-foreground">{label}</p>
      <p className="text-sm">{value || "Not specified"}</p>
    </div>
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
          <Card className="bg-gray-100">
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Your professional details</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Avatar className="w-20 h-20">
                    <AvatarImage
                      src={profileData.avatar || "/placeholder.svg"}
                      alt={profileData.fullName || "Profile"}
                    />
                    <AvatarFallback>
                      {profileData.fullName?.[0] || "U"}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="text-2xl font-bold">
                      {profileData.fullName || "User"}
                    </h2>
                    <p className="text-muted-foreground">
                      {getRoleName(profileData.role) || "No role specified"}
                    </p>
                  </div>
                </div>

                <div className="grid gap-6">
                  <ProfileField label="Email" value={profileData.email || ""} />
                  <ProfileField
                    label="Bio"
                    value={profileData.bio || "No bio provided"}
                  />

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Education</h3>
                    {profileData.education &&
                    profileData.education.length > 0 ? (
                      (profileData.education || []).map(
                        (edu: any, index: number) => (
                          <Card key={index} className="p-4">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold">{edu.degree}</h4>
                              <Badge variant="secondary">
                                {formatDate(edu.startDate)} -{" "}
                                {formatDate(edu.endDate)}
                              </Badge>
                            </div>
                            <p>{edu.institution}</p>
                            <p className="text-sm text-muted-foreground mt-2">
                              {edu.description}
                            </p>
                          </Card>
                        )
                      )
                    ) : (
                      <p className="text-sm whitespace-pre-line">
                        No education details provided
                      </p>
                    )}
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Experience</h3>
                    {profileData.experience &&
                    profileData.experience.length > 0 ? (
                      (profileData.experience || []).map(
                        (exp: any, index: number) => (
                          <Card key={index} className="p-4">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold">{exp.title}</h4>
                              <Badge variant="secondary">
                                {formatDate(exp.startDate)} -{" "}
                                {formatDate(exp.endDate)}
                              </Badge>
                            </div>
                            <p>{exp.companyName}</p>
                            <p className="text-sm text-muted-foreground mt-2">
                              {exp.description}
                            </p>
                          </Card>
                        )
                      )
                    ) : (
                      <p className="text-sm whitespace-pre-line">
                        No experience details provided
                      </p>
                    )}
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Skills</h3>
                    {profileData.skills && profileData.skills.length > 0 ? (
                      (profileData.skills || []).map(
                        (skill: any, index: number) => (
                          <Badge key={index} variant="default" className="mx-2">
                            <p className="font-semibold">{skill.skillName}</p>
                          </Badge>
                        )
                      )
                    ) : (
                      <p className="text-sm whitespace-pre-line">
                        No skills details provided
                      </p>
                    )}
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Achievements</h3>
                    {profileData.achievements &&
                    profileData.achievements.length > 0 ? (
                      (profileData.achievements || []).map(
                        (achievement: any, index: number) => (
                          <Card key={index} className="p-4">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold">
                                {achievement.title}
                              </h4>
                              <Badge variant="secondary">
                                {formatDate(achievement.date)}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mt-2">
                              {achievement.description}
                            </p>
                          </Card>
                        )
                      )
                    ) : (
                      <p className="text-sm whitespace-pre-line">
                        No achievement details provided
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Badges badgeData={badgeData} />
            <Card>
              <CardHeader>
                <CardTitle>Skill Levels</CardTitle>
                <CardDescription>
                  Your proficiency in various skills
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {profileData?.skills.length === 0 ? (
                    <p>No skills details provided.</p>
                  ) : (
                    profileData?.skills.map((skill, index) => {
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
              <>
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
                                {formatDateWithMonth(
                                  review.createdAt.toString()
                                )}
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

                <Card>
                  <CardHeader>
                    <CardTitle>Leave a Review</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {hasUserReviewed ? (
                      <div className="text-center p-4 bg-green-100 rounded-md">
                        <p className="text-green-700 font-semibold">
                          Thank you for your review!
                        </p>
                        <p className="text-green-600">
                          You have already submitted a review.
                        </p>
                      </div>
                    ) : (
                      <ReviewForm userId={params.id} reviewerId={reviewerId} />
                    )}
                  </CardContent>
                </Card>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
