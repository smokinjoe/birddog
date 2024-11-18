import express, { Request, Response } from "express";
import { getEmploymentHistoryHandler } from "../handlers/employmentHistory";

const employmentHistoryRouter = express.Router();

employmentHistoryRouter.get(
  "/employment-history",
  async (_req: Request, res: Response) => {
    try {
      const employmentHistory = await getEmploymentHistoryHandler();
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(employmentHistory));
    } catch (e) {
      console.error(e);
    }
  }
);

export default employmentHistoryRouter;
