export type Resume = {
  name: string;
  email: string;
  phone: number;
  technicalSkills: TechnicalSkill[];
  relevantExperience: RelevantExperience[];
  education: School[];
  references: string;
};

export type TechnicalSkill = {
  title: string;
  items: string[];
};

export type RelevantExperience = {
  company: string;
  title: string;
  dateStart: string;
  dateEnd: string;
  experience: ExperienceItem[];
};

export type ExperienceItem = {
  order: number;
  description: string;
};

export type School = {
  name: string;
  major: string;
  graduationDate: string;
};
