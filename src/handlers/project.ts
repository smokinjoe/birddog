import { getDB } from "../datastore/initializeDatabase";

export async function getProjectHandler() {
  const db = getDB();
  return db.getTable("Projects").getAll();
}
