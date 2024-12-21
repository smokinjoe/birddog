import express, { Request, Response } from "express";
import { getProjectHandler } from "@/handlers/project";
import { handleBirddogError } from "@/utils/errors/handleError";
import { assertIsDefined } from "@/utils/assertions";
import { NotFoundError } from "@/utils/errors/error";
import { asyncHandler } from "@/utils/asyncHandler";

const projectRouter = express.Router();

const get = async (_req: Request, res: Response) => {
  try {
    const project = await getProjectHandler();
    assertIsDefined(project, new NotFoundError("Project record not found"));
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(project));
  } catch (error) {
    handleBirddogError({ error, res });
  }
};

projectRouter.get("/project", asyncHandler(get));

export default projectRouter;
