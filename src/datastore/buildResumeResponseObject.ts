import { InMemoryDatabase } from "../datastore/DatabaseWithTables";
import { Resume } from "../types/Resume";

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

  return responseObject;
}
