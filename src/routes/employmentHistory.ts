import express, { Request, Response } from "express";
import { getEmploymentHistoryHandler } from "../handlers/employmentHistory";
import { getErrorMessage } from "../utils/errors/getErrorMessage";
import { handleError } from "../utils/errors/handleError";

const employmentHistoryRouter = express.Router();

employmentHistoryRouter.get(
  "/employment-history",
  async (_req: Request, res: Response) => {
    try {
      const employmentHistory = await getEmploymentHistoryHandler();
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(employmentHistory));
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      handleError({ res, errorMessage, statusCode: 500 });
    }
  }
);

export default employmentHistoryRouter;
