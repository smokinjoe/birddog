import express from "express";

import resumeRouter from "./resume";

const apiV2Router = express.Router();

apiV2Router.use("/", resumeRouter);

export default apiV2Router;
