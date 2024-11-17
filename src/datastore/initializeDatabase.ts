import fs from "fs";
import { createDatabase } from "./DatabaseWithTables";
import { Resume } from "../types/Resume";

let resumeId: string | undefined;
const DB: ReturnType<typeof createDatabase> = createDatabase();

/**
 * Database initialization
 */
export function initializeDatabase() {
  DB.createTable<Resume>("resume");

  const data = fs.readFileSync("./src/json/resume.json", "utf8");
  const resume = JSON.parse(data);

  resumeId = DB.getTable("resume").set({
    ...resume,
  });
}

export function getDB() {
  return DB;
}

export function getResumeId(): Promise<string> {
  return new Promise((resolve, reject) => {
    let retries = 0;
    const intervalId = setInterval(() => {
      if (resumeId) {
        resolve(resumeId);
        clearInterval(intervalId);
      }

      if (retries === 5) {
        reject("Could not retrieve resume id");
        throw new Error("Could not retrieve resume id");
      }

      ++retries;
    }, 1000);
  });
}
