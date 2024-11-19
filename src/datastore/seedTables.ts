import fs from "fs";

import {
  Address,
  EmploymentHistory,
  Language,
  Project,
  Resume,
  Education,
} from "../types/schemas";
import { getDB } from "./initializeDatabase";

export function seedTables() {
  const DB = getDB();
  const data = fs.readFileSync("./src/json/resume.json", "utf8");
  const resume = JSON.parse(data);

  /**
   * Seed base resume data
   */
  DB.createTable<Resume>("Resume");
  DB.getTable("Resume").set({
    name: resume.name,
    email: resume.email,
    phone: resume.phone,
    references: resume.references,
    technicalSkills: resume.technicalSkills,
  });

  /**
   * seed address data
   */
  DB.createTable<Address>("Addresses");
  DB.getTable("Addresses").set({ ...resume.address });

  /**
   * seed employment history data
   */
  DB.createTable<EmploymentHistory>("EmploymentHistories");
  resume.employmentHistory.forEach((employment: EmploymentHistory) => {
    DB.getTable("EmploymentHistories").set(employment);
  });

  /**
   * seed language data
   */
  DB.createTable<Language>("Languages");
  resume.languages.forEach((language: Language) => {
    DB.getTable("Languages").set(language);
  });

  /**
   * seed project data
   */
  DB.createTable<Project>("Projects");
  resume.projects.forEach((project: Project) => {
    DB.getTable("Projects").set(project);
  });

  /**
   * Seed school data
   */
  DB.createTable<Education>("Education");
  resume.education.forEach((school: Education) => {
    DB.getTable("Education").set(school);
  });
}
