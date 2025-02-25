import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getRoleName(role: string) {
  switch (role) {
    case "JOB_SEEKER":
      return "Job Seeker";
    case "EMPLOYER":
      return "Employer";
    default:
      return role;
  }
}

export const formatDate = (dateString: string | null) => {
  if (!dateString) return "Present";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
};

export const formatDateWithMonth = (dateString: string | null) => {
  if (!dateString) return "Present";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    day: "numeric",
    year: "numeric",
    month: "short",
  });
};
