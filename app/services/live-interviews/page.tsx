import { ServiceHero } from "@/components/ServiceHero";
import { Card, CardContent } from "@/components/ui/card";
import { Video, Users, CheckCircle } from "lucide-react";

export default function LiveInterviewsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <ServiceHero
        title="Live Interviews"
          description="Post your job and allow our matching algorithm to find you the top candidates to interview directly on our platform."
        imageSrc="https://guhuza.com/images/landing/live_interview/live_interviews_background.jpg"
      />

      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <Video className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">HD Video Quality</h3>
                <p className="text-muted-foreground">
                  Crystal clear video and audio for professional interviews
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">
                  Multiple Participants
                </h3>
                <p className="text-muted-foreground">
                  Host panel interviews with multiple interviewers
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <CheckCircle className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">
                  Recording & Notes
                </h3>
                <p className="text-muted-foreground">
                  Record interviews and take notes in real-time
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
