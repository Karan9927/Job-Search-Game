export interface ProfileFormData {
  fullName?: string;
  email?: string;
  phoneNumber?: string;
  address?: string;
  role?: string;
  profile: {
    bio?: string;
    education: Education[];
    experience: Experience[];
    skills: Skill[];
    achievements: Achievement[];
    avatar?: string;
  };
}

export interface Education {
  id?: number;
  degree: string;
  institution: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Experience {
  id?: number;
  title: string;
  companyName: string;
  description: string;
  startDate: string;
  endDate: string;
}

export interface Skill {
  id?: number;
  skillName: string;
  proficiency: number;
}

export interface Achievement {
  id?: number;
  title: string;
  description: string;
  date: string;
}
