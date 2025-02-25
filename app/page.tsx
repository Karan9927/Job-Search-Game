import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { ChevronRight, Trophy, Users, BookOpen, Briefcase } from "lucide-react";
import BadgeSection from "@/components/ui/badge-section";

export default function Home() {
  const features = [
    {
      icon: Trophy,
      title: "Gamified Learning",
      description:
        "Enhance your job-seeking skills through interactive challenges",
    },
    {
      icon: Users,
      title: "Networking",
      description:
        "Connect with professionals and expand your career opportunities",
    },
    {
      icon: BookOpen,
      title: "Expert Resources",
      description: "Access curated content from industry experts",
    },
    {
      icon: Briefcase,
      title: "Job Matching",
      description: "Find opportunities tailored to your skills and preferences",
    },
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      text: "Guhuza helped me land my dream job! The interview practice was invaluable.",
    },
    {
      name: "Michael L.",
      text: "I've made great connections through the networking challenges. Highly recommended!",
    },
    {
      name: "Emily R.",
      text: "The resume writing tips I learned from Guhuza made a huge difference in my job applications.",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8 space-y-12">
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            Level Up Your Career with Guhuza
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Master job-seeking skills, connect with professionals, and land your
            dream job through our gamified platform.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/game" passHref>
              <Button size="lg" className="text-lg px-8">
                Start Playing
              </Button>
            </Link>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="flex flex-col items-center text-center p-6"
            >
              <feature.icon className="h-12 w-12 mb-4 text-primary" />
              <CardTitle className="mb-2">{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </Card>
          ))}
        </section>

        <section>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">How It Works</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-4">
                <li className="flex items-center space-x-4">
                  <Badge className="h-8 w-8 rounded-full text-center flex items-center justify-center">
                    1
                  </Badge>
                  <span>
                    Create your profile and customize your virtual job seeker
                  </span>
                </li>
                <li className="flex items-center space-x-4">
                  <Badge className="h-8 w-8 rounded-full text-center flex items-center justify-center">
                    2
                  </Badge>
                  <span>
                    Complete challenges in resume writing, interviewing, and
                    networking
                  </span>
                </li>
                <li className="flex items-center space-x-4">
                  <Badge className="h-8 w-8 rounded-full text-center flex items-center justify-center">
                    3
                  </Badge>
                  <span>
                    Earn points and badges as you progress through different
                    career stages
                  </span>
                </li>
                <li className="flex items-center space-x-4">
                  <Badge className="h-8 w-8 rounded-full text-center flex items-center justify-center">
                    4
                  </Badge>
                  <span>
                    Compete with other players and climb the leaderboard
                  </span>
                </li>
                <li className="flex items-center space-x-4">
                  <Badge className="h-8 w-8 rounded-full text-center flex items-center justify-center">
                    5
                  </Badge>
                  <span>
                    Apply your new skills to boost your real-world job search
                  </span>
                </li>
              </ol>
            </CardContent>
          </Card>
        </section>

        <BadgeSection />

        <section>
          <h2 className="text-3xl font-bold mb-6 text-center">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="flex flex-col justify-between">
                <CardContent className="pt-6">
                  <p className="italic mb-4">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <p className="font-semibold text-right">
                    - {testimonial.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* <section className="text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <Link href="/signup" passHref>
            <Button size="lg" className="text-lg px-8">
              Join Guhuza Now <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </section> */}
      </main>
    </div>
  );
}
