import { getDB } from "@/datastore/initializeDatabase";

export async function getLanguageHandler() {
  const db = getDB();
  return db.getTable("Languages").getAll();
}
