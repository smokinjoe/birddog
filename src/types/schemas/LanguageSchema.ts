import z from "zod";

export const LanguageSchema = z.object({
  id: z.string(),
  name: z.string(),
  proficiency: z.number(),
});

export type Language = z.infer<typeof LanguageSchema>;
