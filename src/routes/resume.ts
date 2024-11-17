import express from "express";

import { getResumeHandler } from "../handlers/resume";

const resumeRouter = express.Router();

resumeRouter.get("/", async (_req, res) => {
  try {
    const resume = await getResumeHandler();
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(resume));
  } catch (e) {
    console.error(e);
  }
});

export default resumeRouter;
