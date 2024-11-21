import express from "express";

import { asyncHandler } from "../utils/asyncHandler";

import resumeRouter from "./resume";
import employmentHistoryRouter from "./employmentHistory";
import projectRouter from "./project";
import languageRouter from "./language";
import educationRouter from "./education";

const apiRouter = express.Router();

apiRouter.use("/", [
  asyncHandler(resumeRouter),
  asyncHandler(employmentHistoryRouter),
  asyncHandler(projectRouter),
  asyncHandler(languageRouter),
  asyncHandler(educationRouter),
]);

export default apiRouter;
