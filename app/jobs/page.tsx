import { auth } from "@/auth";
import FilterSection from "@/components/job/FilterSection";
import JobDetails from "@/components/job/job-details";
import JobsList from "@/components/job/job-list";
import { getJobs } from "@/lib/dataActions";
import { submitApplication } from "@/lib/userActions";
import { revalidatePath } from "next/cache";

export default async function JobsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const titleFilter = searchParams.title || "";
  const locationFilter = searchParams.location || "";
  const minSalary = Number(searchParams.minSalary) || 0;
  const maxSalary = Number(searchParams.maxSalary) || 200000;

  const jobs = await getJobs();
  const session = await auth();
  const userId = session?.user.id || "";

  const filteredJobs = jobs.filter((job) => {
    const titleMatch = job.title
      .toLowerCase()
      .includes(titleFilter.toLowerCase());
    const locationMatch = job.location
      .toLowerCase()
      .includes(locationFilter.toLowerCase());
    const salaryMatch = job.salary >= minSalary && job.salary <= maxSalary;
    return titleMatch && locationMatch && salaryMatch;
  });

  const uniqueLocations = Array.from(new Set(jobs.map((job) => job.location)));

  async function handleJobApplication(jobId: string) {
    "use server";
    try {
      const response = await submitApplication(userId, jobId, "PENDING");

      if (response.success) {
        revalidatePath("/jobs");
        return {
          success: true,
          message: "Application submitted successfully!",
        };
      } else {
        return {
          success: false,
          message: response.message || "Application failed",
        };
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      return {
        success: false,
        message: "Failed to submit application. Please try again.",
      };
    }
  }
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8 overflow-hidden">
        <h1 className="text-3xl font-bold mb-6">Job Listings</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[calc(100vh-200px)] ">
          <div
            className="md:col-span-1 space-y-4 overflow-y-auto pr-4 [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
          >
            <FilterSection
              uniqueLocations={uniqueLocations}
              currentFilters={{
                title: titleFilter,
                location: locationFilter,
                minSalary,
                maxSalary,
              }}
            />
            <JobsList jobs={filteredJobs} selectedJobId={searchParams.jobId} />
          </div>
          <div className="md:col-span-2 overflow-y-auto">
            <JobDetails
              jobs={jobs.map((job) => ({
                ...job,
                postedById: userId,
                applications: (job.applications as any) || [],
              }))}
              selectedJobId={searchParams.jobId}
              userId={userId}
              handleJobApplication={handleJobApplication}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
