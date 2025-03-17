"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useState } from "react";
import { Share2, Copy, Gift, Trophy, Zap, Star } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export const Referral = ({
  inviteCode,
  referrals,
}: {
  inviteCode: string | null;
  referrals: number | undefined; 
}) => {
  const [code] = useState(inviteCode);
  const [referralsCount, setReferralsCount] = useState(referrals || 0); 

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code || "");
    toast.success("Invite code copied to clipboard!");
  };

  return (
    <div className="space-y-12">
      <section className="bg-primary/5 p-8 rounded-lg border border-primary/10">
        <h2 className="text-2xl font-semibold mb-6 flex items-center text-primary">
          <Gift className="mr-3" /> Your Unique Invite Code
        </h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <Input
            value={code || ""}
            readOnly
            className="text-lg font-mono bg-background flex-grow"
          />
          <Button
            onClick={copyToClipboard}
            variant="outline"
            className="hover:bg-primary/10 transition-colors"
          >
            <Copy className="mr-2 h-4 w-4" /> Copy Code
          </Button>
        </div>
      </section>

      <section className="bg-background p-8 rounded-lg shadow-sm border border-border">
        <h3 className="text-2xl font-semibold mb-6 flex items-center text-black">
          <Zap className="mr-3" /> How it works
        </h3>
        <ol className="list-decimal list-inside space-y-3 text-lg text-muted-foreground">
          <li>Share your unique invite code with friends</li>
          <li>Friends sign up using your code</li>
          <li>Both you and your friend receive amazing rewards!</li>
        </ol>
      </section>

      <section className="bg-background p-8 rounded-lg shadow-sm border border-border">
        <h3 className="text-2xl font-semibold mb-6 flex items-center text-foreground">
          <Trophy className="mr-3" /> Your Referral Progress
        </h3>
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <span className="text-xl">Total Referrals:</span>
            <span className="text-3xl font-bold text-primary">{referrals}</span>
          </div>
          <Progress value={(referralsCount / 10) * 100} className="h-3" />
          <p className="text-lg text-muted-foreground">
            {5 - referralsCount} more referrals to enter Referral Expert Badge !
          </p>
        </div>
      </section>

      <section className="bg-background p-8 rounded-lg shadow-sm border border-border">
        <h3 className="text-2xl font-semibold mb-6 flex items-center text-foreground">
          <Star className="mr-3" /> Rewards Tier
        </h3>
        <ul className="space-y-4">
          {[
            {
              level: 1,
              reward:
                "100 bonus points for first referral and earn Referral Newbie Badge",
            },
            { level: 5, reward: "Earn Referral Expert Badge" },
          ].map(({ level, reward }) => (
            <li key={level} className="flex items-center text-lg">
              <div
                className={`w-8 h-8 rounded-full mr-3 flex items-center justify-center ${
                  referralsCount >= level
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {referralsCount >= level ? "✓" : level}
              </div>
              <span
                className={
                  referralsCount >= level
                    ? "text-foreground"
                    : "text-muted-foreground"
                }
              >
                {reward}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Referral;
