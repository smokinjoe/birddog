import express, { Request, Response } from "express";

import { getResumeV2Handler } from "@/handlers/resume";
import { asyncHandler } from "@/utils/asyncHandler";
import { handleBirddogError } from "@/utils/errors/handleError";
import { assertIsDefined } from "@/utils/assertions";
import { NotFoundError } from "@/utils/errors/error";

const resumeRouter = express.Router();

const get = async (_req: Request, res: Response) => {
  try {
    const resume = await getResumeV2Handler();
    assertIsDefined(resume, new NotFoundError("Resume not found"));
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(resume));
  } catch (error) {
    handleBirddogError({ res, error });
  }
};

resumeRouter.get("/resume", asyncHandler(get));

export default resumeRouter;
