import z from "zod";
import { zcustom } from "../../utils/zod-helpers";

export const ProjectSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  url: zcustom.url(),
});

export type Project = z.infer<typeof ProjectSchema>;
