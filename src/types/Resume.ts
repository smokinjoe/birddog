export type Resume = {
  id: number;
  name: string;
  email: string;
  phone: number;
  address: Address;
  technicalSkills: TechnicalSkill[];
  employmentHistory: EmploymentHistory[];
  languages: Language[];
  education: School[];
  projects: Project[];
  references: string;
};

export type Address = {
  street: string;
  city: string;
  state: string;
  zip: number;
};

export type TechnicalSkill = {
  description: string;
  score: number;
};

export type EmploymentHistory = {
  company: string;
  title: string;
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
  rating: number;
};

export type Project = {
  title: string;
  url: string;
  description: string;
};

export type School = {
  name: string;
  major: string;
  graduationDate: string;
};
