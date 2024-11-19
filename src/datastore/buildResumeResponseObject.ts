import { InMemoryDatabase } from "../datastore/DatabaseWithTables";
import { Resume, ResumeSchema } from "../types/schemas/ResumeSchema";
import { parseZod } from "../utils/zod-helpers";

export function buildResumeResponseObject(db: InMemoryDatabase): Resume {
  const baseResumeObject = db.getTable("Resume").first();
  const address = db.getTable("Addresses").first();
  const employmentHistory = db.getTable("EmploymentHistories").getAll();
  const languages = db.getTable("Languages").getAll();
  const projects = db.getTable("Projects").getAll();
  const education = db.getTable("Schools").getAll();

  const responseObject = {
    ...baseResumeObject,
    address,
    employmentHistory,
    languages,
    projects,
    education,
  };

  const result = parseZod(ResumeSchema, responseObject);

  if (!result.valid) {
    throw new Error(`Invalid Resume object: ${result.errors.join(", ")}`);
  }

  return responseObject;
}
