import { assertIsDefined } from "../utils/assertions";
import { getDB } from "../datastore/initializeDatabase";

export async function getEducationHandler() {
  const db = getDB();
  const education = db.getTable("Schools").getAll();
  assertIsDefined(education, "Education not found");
  return education;
}
