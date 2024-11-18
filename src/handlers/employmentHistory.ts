import { assertIsDefined } from "../utils/assertions";
import { getDB } from "../datastore/initializeDatabase";

export async function getEmploymentHistoryHandler() {
  const db = getDB();
  const employmentHistory = db.getTable("EmploymentHistories").getAll();
  assertIsDefined(employmentHistory, "Employment history not found");
  return employmentHistory;
}
