import { assertIsDefined } from "../utils/assertions";
import { getDB } from "../datastore/initializeDatabase";

export async function getLanguageHandler() {
  const db = getDB();
  const language = db.getTable("Languages").getAll();
  assertIsDefined(language, "Language not found");
  return language;
}
