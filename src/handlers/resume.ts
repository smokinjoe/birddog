import { assertIsDefined } from "../utils/assertions";
import { getDB } from "../datastore/initializeDatabase";
import { buildResumeResponseObject } from "../datastore/buildResumeResponseObject";

export async function getResumeHandler() {
  const db = getDB();
  const resume = buildResumeResponseObject(db);
  assertIsDefined(resume, "Resume not found");
  return resume;
}
