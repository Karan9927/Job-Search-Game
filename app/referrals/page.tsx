import { auth } from "@/auth";
import { Referral } from "@/components/refferal/Refferal";
import { getUserReferralCode, getUserReferrals } from "@/lib/userActions";
import { Users } from "lucide-react";

export default async function ReferralsPage() {
  const session = await auth();
  const userId = session?.user.id;

  const referralCode = await getUserReferralCode(userId || "");
  const referrals = await getUserReferrals(referralCode || "");

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <div className="mx-auto bg-primary/10 text-primary rounded-full p-4 w-20 h-20 flex items-center justify-center mb-6">
            <Users size={40} />
          </div>
          <h1 className="text-4xl font-bold mb-4">Referrals Program</h1>
          <p className="text-xl text-muted-foreground">
            Invite friends, earn rewards, and grow together!
          </p>
        </div>
        <Referral inviteCode={referralCode} referrals={referrals} />
      </main>
    </div>
  );
}
