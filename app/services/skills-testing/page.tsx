import { ServiceHero } from "@/components/ServiceHero";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Target, BarChart } from "lucide-react";

export default function SkillsTestingPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <ServiceHero
        title="Skills Testing"
        description="Evaluate candidates' technical and soft skills with our comprehensive testing platform."
       imageSrc="https://guhuza.com/images/landing/skills_testing/hero.jpg"
      />

      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <Brain className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Custom Tests</h3>
                <p className="text-muted-foreground">
                  Create customized assessments for any role
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <Target className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Skill Matching</h3>
                <p className="text-muted-foreground">
                  Match candidates to roles based on skill assessments
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <BarChart className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">
                  Detailed Analytics
                </h3>
                <p className="text-muted-foreground">
                  Get comprehensive reports on candidate performance
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
