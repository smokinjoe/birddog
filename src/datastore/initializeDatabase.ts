import { createDatabase, InMemoryDatabase } from "./DatabaseWithTables";
import { seedTables } from "./seedTables";

let DB: InMemoryDatabase;

/**
 * Database initialization
 */
export function initializeDatabase() {
  if (DB === undefined) {
    DB = createDatabase();
    seedTables();
  }
}

export function getDB() {
  return DB;
}

/**
 * TODO: We'll want to move this to seedTables.ts .... I think
 */
// let resumeId: string | undefined;
// export function getResumeId(): Promise<string> {
//   return new Promise((resolve, reject) => {
//     let retries = 0;
//     const intervalId = setInterval(() => {
//       if (resumeId) {
//         resolve(resumeId);
//         clearInterval(intervalId);
//       }

//       if (retries === 5) {
//         reject("Could not retrieve resume id");
//         throw new Error("Could not retrieve resume id");
//       }

//       ++retries;
//     }, 1000);
//   });
// }
