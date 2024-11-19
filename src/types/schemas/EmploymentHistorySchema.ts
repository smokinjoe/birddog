import z from "zod";

const EmploymentHistorySchema = z.object({
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
});

export type EmploymentHistory = z.infer<typeof EmploymentHistorySchema>;
