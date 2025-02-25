import { auth } from "@/auth";
import Resume from "@/components/ui/resume";
import { getProfile } from "@/lib/profileActions";

export default async function ResumePage() {
  const session = await auth();
  const userId = session?.user.id || "";

  const profile = await getProfile(userId);

  const isProfileIncomplete =
    !profile?.experience?.length ||
    !profile?.skills?.length ||
    !profile?.education?.length;

  if (isProfileIncomplete) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center p-6">
          <h2 className="text-xl font-semibold mb-2">Profile Incomplete</h2>
          <p className="text-muted-foreground">
            Please complete your profile with experience, skills, and education
            details first.
          </p>
        </div>
      </div>
    );
  }

  return <Resume profile={profile} />;
}
