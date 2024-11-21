import { getDB } from "../datastore/initializeDatabase";
import { buildResumeResponseObject } from "../datastore/buildResumeResponseObject";

export async function getResumeHandler() {
  const db = getDB();
  return buildResumeResponseObject(db);
}
