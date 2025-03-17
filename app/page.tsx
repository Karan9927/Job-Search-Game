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

import {
  Trophy,
  Users,
  BookOpen,
  Briefcase,
  Search,
  FileQuestion,
  Newspaper,
} from "lucide-react";
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
      src: "https://guhuza.com/images/landing/headshots/headshot_2.jpg",
    },
    {
      name: "Michael L.",
      text: "I've made great connections through the networking challenges. Highly recommended!",
      src: "https://guhuza.com/images/landing/headshots/headshot_1.jpg",
    },
    {
      name: "Emily R.",
      text: "The resume writing tips I learned from Guhuza made a huge difference in my job applications.",
      src: "https://guhuza.com/images/landing/headshots/headshot_3.jpg",
    },
  ];

  const services = [
    {
      title: "Live Interviews",
      description:
        "Find the perfect match and interview live directly through our platform.",
      href: "/services/live-interviews",
    },
    {
      title: "Skills Testing",
      description:
        "Take the guess work out of training and hiring. Choose from 500 standard job based and subject based tests.",
      href: "/services/skills-testing",
    },
    {
      title: "Background Checks",
      description:
        "Reduce your time to hire by 80% and get results in minutes.",
      href: "/services/background-screening",
    },
  ];

  const partners = [
    {
      href: "https://guhuza.com/media/1025/guhuza-and-monster-join-forces-to-transform-hiring-with-ai-technology",
      src: "https://guhuza.com/partners/monstor.jpg",
    },
    {
      href: "https://www.torontojobs.ca/",
      src: "https://guhuza.com/partners/TorontoJobs.ca.jpg",
    },
    {
      href: "https://www.resume-library.com/hiring/request-a-demo?source=Guhuza%20ATS%20Demo",
      src: "https://guhuza.com/partners/resume-library-logo.png",
    },
    {
      href: "https://dmz.torontomu.ca/",
      src: "https://guhuza.com/partners/DMZ.png",
    },
    {
      href: "https://www.linkedin.com/company/torontorecruitersconference",
      src: "https://guhuza.com/partners/TorontoRecruitersConference.webp",
    },
    {
      href: "https://www.linkedin.com/company/totech-career-fair/",
      src: "https://guhuza.com/partners/TotechCareerFair.png",
    },
    {
      href: "https://www.linkedin.com/company/torontoentrepreneurs-ca/",
      src: "https://guhuza.com/partners/TorontoEntrePreneursConference.jpg",
    },
    {
      href: "https://www.venturelab.ca/",
      src: "https://guhuza.com/partners/ventureLAB_full_color.png",
    },
    {
      href: "https://humber.ca/",
      src: "https://guhuza.com/partners/Humber_Logo.png",
    },
    {
      href: "https://www.trios.com/",
      src: "https://guhuza.com/partners/TriosCollege.png",
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
          <h2 className="text-3xl font-bold mb-6 text-center">
            EMPLOYER SERVICES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="flex flex-col justify-between">
                <CardContent className="pt-6 flex flex-col justify-between">
                  <p className="text-2xl font-semibold">{service.title}</p>
                  <p className="mt-6 h-28">{service.description}</p>
                  <Link
                    className="bg-black hover:bg-black/70 text-white px-4 py-2 rounded-md w-max"
                    href={service.href}
                  >
                    Learn More
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
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
                  <Badge className="h-8 w-8 rounded-full text-center flex items-center justify-center ">
                    2
                  </Badge>
                  <span>
                    Complete challenges in resume writing, interviewing, and
                    networking
                  </span>
                </li>
                <li className="flex items-center space-x-4">
                  <Badge className="h-8 w-8 rounded-full text-center flex items-center justify-center ">
                    3
                  </Badge>
                  <span>
                    Earn points and badges as you progress through different
                    career stages
                  </span>
                </li>
                <li className="flex items-center space-x-4">
                  <Badge className="h-8 w-8 rounded-full text-center flex items-center justify-center ">
                    4
                  </Badge>
                  <span>
                    Compete with other players and climb the leaderboard
                  </span>
                </li>
                <li className="flex items-center space-x-4">
                  <Badge className="h-8 w-8 rounded-full text-center flex items-center justify-center ">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="flex flex-col justify-between">
                <CardContent className="pt-6 relative bg-black rounded-md h-full">
                  <img
                    className="absolute w-28 h-28 left-0 right-0 top-[-45px] mx-auto rounded-full bg-white border-2 border-secondary-main object-cover"
                    src={testimonial.src}
                  />
                  <p className="italic mb-4 mt-16  text-white">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <p className="font-semibold text-right text-white">
                    - {testimonial.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-10">
          <p className="text-center mt-16">
            Our advanced technology matches the job seekers profile with jobs on
            our site and ranks them for our employers based on skills required
            for the position.
            <br />
            Once the match has been made, live interviews can be conducted
            immediately right through our platform!
          </p>
          <p className="text-center my-4 text-4xl px-36 text-blue-700">
            Guhuza&apos;s cutting edge technology eliminates 90% of the{" "}
            <strong>time</strong> in the hiring & job search process.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 md:mx-36 gap-16">
            <div className="flex gap-6 items-start">
              <Search size={42} />
              <p className="text-xl">
                No applying - no wasted time on applications or research
              </p>
            </div>
            <div className="flex gap-6 items-start">
              <Users size={42} />
              <p className="text-xl">
                Our matching AI technology connects job seekers and employers
                instantly
              </p>
            </div>
            <div className="flex gap-6 items-start">
              <FileQuestion size={42} />
              <p className="text-xl">
                Entire process automated from job opening to the job seeker
                starting
              </p>
            </div>
            <div className="flex gap-6 items-start">
              <Newspaper size={42} />
              <p className="text-xl">
                Less than 24 hours to have someone start (interviewed & all
                checks done)
              </p>
            </div>
          </div>
        </section>

        <section className="grid place-items-center">
          <h2 className="text-3xl font-bold mb-6 text-center my-20">
            Our Partners
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {partners.map((partner) => (
              <div
                key={partner.href}
                className="flex justify-center items-center"
              >
                <a href={partner.href} className="mx-10">
                  <img src={partner.src} alt="Partner logo" className="w-40" />
                </a>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
