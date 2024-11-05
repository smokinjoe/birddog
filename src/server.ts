import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import fs from "fs";
import { createDatabase } from "./datastore/InMemoryDatabase";
import { Resume } from "./types/Resume";
import { assertIsDefined } from "./utils/assertions";

dotenv.config();

if (!process.env.PORT) {
  console.log(`No port value specified.`);
}

const PORT = parseInt(process.env.PORT as string, 10);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

/**
 * Database initialization
 */

const ResumeDatabase = createDatabase<Resume>();
const data = fs.readFileSync("./src/json/resume.json", "utf8");
const resume = JSON.parse(data);
ResumeDatabase.instance.set({
  id: 1,
  ...resume,
});

/**
 * Endpoint routes
 */
app.get("/api/resume", (req, res) => {
  try {
    const resume = ResumeDatabase.instance.get(1);
    assertIsDefined(resume, "Resume not found");
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(resume));
  } catch (e) {
    console.error(e);
  }
});
