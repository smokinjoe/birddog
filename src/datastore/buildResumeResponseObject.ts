import { InMemoryDatabase } from "../datastore/DatabaseWithTables";
import {
  Resume,
  ResumeSchema,
  ResumeV2,
  ResumeV2Schema,
} from "../types/schemas/ResumeSchema";
import { ValidationError } from "../utils/errors/error";
import { parseZod } from "../utils/zod-helpers";

export function buildResumeResponseObject(db: InMemoryDatabase): Resume {
  const baseResumeObject = db.getTable("Resume").first();
  const address = db.getTable("Addresses").first();
  const employmentHistory = db.getTable("EmploymentHistories").getAll();
  const languages = db.getTable("Languages").getAll();
  const projects = db.getTable("Projects").getAll();
  const education = db.getTable("Education").getAll();

  const responseObject = {
    ...baseResumeObject,
    address,
    employmentHistory,
    languages,
    projects,
    education,
  };

  const result = parseZod(ResumeSchema, responseObject);

  if (!result.valid) {
    throw new ValidationError(
      `Invalid Resume object: ${result.errors.join(", ")}`
    );
  }

  return responseObject;
}

export function buildResumeV2ResponseObject(db: InMemoryDatabase): ResumeV2 {
  const baseResumeObject = db.getTable("Resume").first();
  const address = db.getTable("Addresses").first();
  const employmentHistory = db.getTable("EmploymentHistories").getAll();
  const languages = db.getTable("Languages").getAll();
  const projects = db.getTable("Projects").getAll();
  const education = db.getTable("Education").getAll();

  const responseObject = {
    ...baseResumeObject,
    address,
    employmentHistory,
    languages,
    projects,
    education,
  };

  const result = parseZod(ResumeV2Schema, responseObject);

  if (!result.valid) {
    throw new ValidationError(
      `Invalid Resume object: ${result.errors.join(", ")}`
    );
  }

  return responseObject;
}
