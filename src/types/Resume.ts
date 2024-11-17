export type Resume = {
  id: string;
  name: string;
  email: string;
  phone: number;
  address: Address;
  technicalSkills: string[];
  employmentHistory: EmploymentHistory[];
  languages: Language[];
  education: School[];
  projects: Project[];
  references: string;
};

export type Address = {
  street?: string;
  city: string;
  state: string;
  zip?: number;
};

export type EmploymentHistory = {
  company: string;
  title: string;
  location: string;
  dateStart: string;
  dateEnd: string;
  experience: ExperienceItem[];
};

export type ExperienceItem = {
  order: number;
  description: string;
  skills: string[];
};

export type Language = {
  name: string;
  proficiency: number;
};

export type Project = {
  name: string;
  url: string;
  description: string;
};

export type School = {
  name: string;
  degree: string;
  dateStart: string;
  dateEnd: string;
};
