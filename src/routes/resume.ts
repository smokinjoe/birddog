import express from "express";
import { assertIsDefined } from "../utils/assertions";
import { getDB, getResumeId } from "../datastore/initializeDatabase";

const resumeRouter = express.Router();

resumeRouter.get("/", async (_req, res) => {
  try {
    const db = getDB();
    const resumeId = await getResumeId();
    const resume = db.getTable("resume").get(resumeId);
    assertIsDefined(resume, "Resume not found");

    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(resume));
  } catch (e) {
    console.error(e);
  }
});

export default resumeRouter;
