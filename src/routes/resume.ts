import express, { Request, Response } from "express";

import { getResumeHandler } from "../handlers/resume";
import { asyncHandler } from "../utils/asyncHandler";

const resumeRouter = express.Router();

/**
 * Adding this temporary layer so older api endpoint can still be used
 */
const tempGetRoute = async (_req: Request, res: Response) => {
  const resume = await getResumeHandler();
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(resume));
};

/**
 * TODO: Remove the get(/) route, keep the get(/resume) route
 */
resumeRouter.get("/", asyncHandler(tempGetRoute));
resumeRouter.get("/resume", asyncHandler(tempGetRoute));

export default resumeRouter;
