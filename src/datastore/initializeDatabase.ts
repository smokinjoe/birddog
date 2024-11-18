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
