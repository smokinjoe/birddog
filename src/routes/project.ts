import express, { Request, Response } from "express";
import { getProjectHandler } from "../handlers/project";

const projectRouter = express.Router();

projectRouter.get("/project", async (_req: Request, res: Response) => {
  try {
    const project = await getProjectHandler();
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(project));
  } catch (e) {
    console.log("JOE:");
    console.error(e);
  }
});

export default projectRouter;
