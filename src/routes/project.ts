import express, { Request, Response } from "express";
import { getProjectHandler } from "../handlers/project";
import { handleBirddogError } from "../utils/errors/handleError";
import { assertIsDefined } from "../utils/assertions";
import { NotFoundError } from "../utils/errors/error";

const projectRouter = express.Router();

projectRouter.get("/project", async (_req: Request, res: Response) => {
  try {
    const project = await getProjectHandler();
    assertIsDefined(project, new NotFoundError("Project record not found"));
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(project));
  } catch (error) {
    handleBirddogError({ error, res });
  }
});

export default projectRouter;
