import { getDB } from "@/datastore/initializeDatabase";
import {
  buildResumeResponseObject,
  buildResumeV2ResponseObject,
} from "@/datastore/buildResumeResponseObject";

export async function getResumeHandler() {
  const db = getDB();
  return buildResumeResponseObject(db);
}

export async function getResumeV2Handler() {
  const db = getDB();
  return buildResumeV2ResponseObject(db);
}
