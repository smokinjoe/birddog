import { getDB } from "../datastore/initializeDatabase";

export async function getEmploymentHistoryHandler() {
  const db = getDB();
  return db.getTable("EmploymentHistories").getAll();
}
