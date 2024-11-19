import z from "zod";

export const ExperienceItemSchema = z.object({
  // TODO: uncomment once I get a graceful way to seed this data
  // id: z.string(),
  order: z.number(),
  description: z.string(),
  skills: z.array(z.string()),
});

export type ExperienceItem = z.infer<typeof ExperienceItemSchema>;

export const EmploymentHistorySchema = z.object({
  id: z.string(),
  company: z.string(),
  title: z.string(),
  location: z.string(),
  dateStart: z.string(),
  dateEnd: z.string(),
  experience: z.array(ExperienceItemSchema),
});

export type EmploymentHistory = z.infer<typeof EmploymentHistorySchema>;
