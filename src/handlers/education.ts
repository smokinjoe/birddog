import { getDB } from "@/datastore/initializeDatabase";

export async function getEducationHandler() {
  const db = getDB();
  return db.getTable("Education").getAll();
}
