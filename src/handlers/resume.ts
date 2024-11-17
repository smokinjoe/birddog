import { assertIsDefined } from "../utils/assertions";
import { getDB, getResumeId } from "../datastore/initializeDatabase";

export async function getResumeHandler() {
  const db = getDB();
  const resumeId = await getResumeId();
  const resume = db.getTable("resume").get(resumeId);
  assertIsDefined(resume, "Resume not found");
  return resume;
}
