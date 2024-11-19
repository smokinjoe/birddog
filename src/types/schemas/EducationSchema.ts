import z from "zod";

export const EducationSchema = z.object({
  id: z.string(),
  name: z.string(),
  degree: z.string(),
  dateStart: z.string(),
  dateEnd: z.string(),
});

export type Education = z.infer<typeof EducationSchema>;
