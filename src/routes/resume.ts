import express, { Request, Response } from "express";

import { getResumeHandler } from "../handlers/resume";
import { handleError } from "../utils/errors/handleError";
import { getErrorMessage } from "../utils/errors/getErrorMessage";

const resumeRouter = express.Router();

/**
 * Adding this temporary layer so older api endpoint can still be used
 */
const tempGetRoute = async (_req: Request, res: Response) => {
  try {
    const resume = await getResumeHandler();
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(resume));
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    handleError({ res, errorMessage, statusCode: 500 });
  }
};

/**
 * TODO: Remove the get(/) route, keep the get(/resume) route
 */
resumeRouter.get("/", tempGetRoute);
resumeRouter.get("/resume", tempGetRoute);

export default resumeRouter;
