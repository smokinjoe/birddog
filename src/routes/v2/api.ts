import express from "express";

import { asyncHandler } from "../../utils/asyncHandler";

import resumeRouter from "./resume";

const apiV2Router = express.Router();

apiV2Router.use("/", [asyncHandler(resumeRouter)]);

export default apiV2Router;
