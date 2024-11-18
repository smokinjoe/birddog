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
  id: string;
  street?: string;
  city: string;
  state: string;
  zip?: number;
};

export type EmploymentHistory = {
  id: string;
  company: string;
  title: string;
  location: string;
  dateStart: string;
  dateEnd: string;
  experience: ExperienceItem[];
};

export type ExperienceItem = {
  id: string;
  order: number;
  description: string;
  skills: string[];
};

export type Language = {
  id: string;
  name: string;
  proficiency: number;
};

export type Project = {
  id: string;
  name: string;
  url: string;
  description: string;
};

export type School = {
  id: string;
  name: string;
  degree: string;
  dateStart: string;
  dateEnd: string;
};
