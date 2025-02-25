import { ServiceHero } from "@/components/ServiceHero";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, FileCheck } from "lucide-react";

export default function BackgroundScreeningPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <ServiceHero
        title="Background Screening"
        description="Comprehensive background checks and verification services for confident hiring decisions."
        imageSrc="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1920&h=500&q=80"
      />

      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Thorough Checks</h3>
                <p className="text-muted-foreground">
                  Comprehensive background verification process
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <Clock className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Quick Turnaround</h3>
                <p className="text-muted-foreground">
                  Fast and efficient screening process
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <FileCheck className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Compliance</h3>
                <p className="text-muted-foreground">
                  Fully compliant with legal requirements
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
