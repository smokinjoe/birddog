import express, { Request, Response } from "express";

import { getResumeHandler } from "@/handlers/resume";
import { asyncHandler } from "@/utils/asyncHandler";
import { handleBirddogError } from "@/utils/errors/handleError";
import { assertIsDefined } from "@/utils/assertions";
import { NotFoundError } from "@/utils/errors/error";

const resumeRouter = express.Router();

/**
 * Adding this temporary layer so older api endpoint can still be used
 */
const tempGetRoute = async (_req: Request, res: Response) => {
  try {
    const resume = await getResumeHandler();
    assertIsDefined(resume, new NotFoundError("Resume not found"));
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(resume));
  } catch (error) {
    handleBirddogError({ res, error });
  }
};

/**
 * TODO: Remove the get(/) route, keep the get(/resume) route
 */
resumeRouter.get("/", asyncHandler(tempGetRoute));
resumeRouter.get("/resume", asyncHandler(tempGetRoute));

export default resumeRouter;
