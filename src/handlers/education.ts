import { assertIsDefined } from "../utils/assertions";
import { getDB } from "../datastore/initializeDatabase";

export async function getEducationHandler() {
  const db = getDB();
  const education = db.getTable("Education").getAll();
  assertIsDefined(education, "Education not found");
  return education;
}
