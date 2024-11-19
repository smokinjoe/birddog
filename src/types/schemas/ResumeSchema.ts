import { z } from "zod";

export const ResumeSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  address: z.object({
    // TODO: make AddressSchema
    id: z.string(),
    street: z.string().optional(),
    city: z.string(),
    state: z.string(),
    zip: z.number().optional(),
  }),
  technicalSkills: z.array(z.string()), // TODO: make SkillSchema
  employmentHistory: z.array(
    z.object({
      // TODO: make EmploymentHistorySchema
      id: z.string(),
      company: z.string(),
      title: z.string(),
      location: z.string(),
      dateStart: z.string(),
      dateEnd: z.string(),
      experience: z.array(
        z.object({
          // TODO: make ExperienceItemSchema
          // id: z.string(),
          order: z.number(),
          description: z.string(),
          skills: z.array(z.string()), // TODO: make SkillSchema
        })
      ),
    })
  ),
  languages: z.array(
    z.object({
      // TODO: make LanguageSchema
      id: z.string(),
      name: z.string(),
      proficiency: z.number(),
    })
  ),
  education: z.array(
    z.object({
      // TODO: make SchoolSchema
      id: z.string(),
      name: z.string(),
      degree: z.string(),
      dateStart: z.string(),
      dateEnd: z.string(),
    })
  ),
  projects: z.array(
    z.object({
      // TODO: make ProjectSchema
      id: z.string(),
      name: z.string(),
      url: z.string(),
      description: z.string(),
    })
  ),
  references: z.string(),
});

export type Resume = z.infer<typeof ResumeSchema>;
