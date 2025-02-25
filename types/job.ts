export interface User {
  fullName: string;
}

export interface Application {
  id: string;
  userId: string;
  jobId: string;
  status: "PENDING" | "ACCEPTED" | "REJECTED";
  createdAt: Date;
  user: User;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  description: string;
  requirements: any;
  location: string;
  salary: number;
  postedById: string;
  createdAt: Date;
  updatedAt: Date;
  applications: Application[];
}

export interface JobFormData {
  title: string;
  company: string;
  description: string;
  requirements: string[];
  location: string;
  salary: number;
}
