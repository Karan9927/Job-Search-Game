import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { DashboardContent } from "@/components/employerDashboard/DasboardContent";
import { getEmployerJobs } from "@/lib/employerDashboardActions";

export default async function EmployerDashboard() {
  const session = await auth();
  const userId = session?.user?.id;
  const userRole = session?.user?.role;

  if (!userId) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-lg">
          Please log in to access the employer dashboard.
        </p>
      </div>
    );
  }

  if (userRole !== "EMPLOYER") {
    redirect("/");
  }

  const jobs = await getEmployerJobs(userId);

  return <DashboardContent userId={userId} initialJobs={jobs} />;
}
