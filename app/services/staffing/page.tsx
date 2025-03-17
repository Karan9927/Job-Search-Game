import { ServiceHero } from "@/components/ServiceHero";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Briefcase, TrendingUp } from "lucide-react";

export default function StaffingPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <ServiceHero
        title="Staffing Firm"
        description="Connect with top talent and streamline your recruitment process with our professional staffing services."
        imageSrc="https://guhuza.com/images/staffing_firm/staffing-bg.jpg"
      />

      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Talent Pool</h3>
                <p className="text-muted-foreground">
                  Access to a vast network of qualified candidates
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <Briefcase className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">
                  Industry Expertise
                </h3>
                <p className="text-muted-foreground">
                  Specialized recruitment for various sectors
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <TrendingUp className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Growth Support</h3>
                <p className="text-muted-foreground">
                  Scale your team efficiently with our support
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
