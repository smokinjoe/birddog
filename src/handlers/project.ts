import { assertIsDefined } from "../utils/assertions";
import { getDB } from "../datastore/initializeDatabase";

export async function getProjectHandler() {
  const db = getDB();
  const project = db.getTable("Projects").getAll();
  assertIsDefined(project, "Project not found");
  return project;
}
