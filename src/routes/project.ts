import express, { Request, Response } from "express";
import { getProjectHandler } from "../handlers/project";
import { getErrorMessage } from "../utils/errors/getErrorMessage";
import { handleError } from "../utils/errors/handleError";

const projectRouter = express.Router();

projectRouter.get("/project", async (_req: Request, res: Response) => {
  try {
    const project = await getProjectHandler();
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(project));
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    handleError({ res, errorMessage, statusCode: 500 });
  }
});

export default projectRouter;
