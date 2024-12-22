import express from "express";

import resumeRouter from "./resume";
import employmentHistoryRouter from "./employmentHistory";
import projectRouter from "./project";
import languageRouter from "./language";
import educationRouter from "./education";

const apiRouter = express.Router();

apiRouter.use("/", [
  resumeRouter,
  employmentHistoryRouter,
  projectRouter,
  languageRouter,
  educationRouter,
]);

export default apiRouter;
