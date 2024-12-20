import { z } from "zod";
import { AddressSchema } from "./AddressSchema";
import { EducationSchema } from "./EducationSchema";
import { EmploymentHistorySchema } from "./EmploymentHistorySchema";
import { LanguageSchema } from "./LanguageSchema";
import { ProjectSchema } from "./ProjectSchema";

export const ResumeSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  address: AddressSchema,
  technicalSkills: z.array(z.string()), // TODO: make SkillSchema
  employmentHistory: z.array(EmploymentHistorySchema),
  languages: z.array(LanguageSchema),
  education: z.array(EducationSchema),
  projects: z.array(ProjectSchema),
  references: z.string(),
});

export type Resume = z.infer<typeof ResumeSchema>;
