import { assertIsDefined } from "../utils/assertions";
import { getDB } from "../datastore/initializeDatabase";
import { InMemoryDatabase } from "../datastore/DatabaseWithTables";
import { Resume } from "../types/Resume";

function buildResumeResponseObject(db: InMemoryDatabase): Resume {
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

export async function getResumeHandler() {
  const db = getDB();
  const resume = buildResumeResponseObject(db);
  assertIsDefined(resume, "Resume not found");
  return resume;
}
