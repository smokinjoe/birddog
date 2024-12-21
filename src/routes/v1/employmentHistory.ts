import express, { Request, Response } from "express";
import { getEmploymentHistoryHandler } from "@/handlers/employmentHistory";
import { NotFoundError } from "@/utils/errors/error";
import { assertIsDefined } from "@/utils/assertions";
import { handleBirddogError } from "@/utils/errors/handleError";
import { asyncHandler } from "@/utils/asyncHandler";

const employmentHistoryRouter = express.Router();

const get = async (_req: Request, res: Response) => {
  try {
    const employmentHistory = await getEmploymentHistoryHandler();
    assertIsDefined(
      employmentHistory,
      new NotFoundError("Employment history not found")
    );

    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(employmentHistory));
  } catch (error) {
    handleBirddogError({ error, res });
  }
};

employmentHistoryRouter.get("/employment-history", asyncHandler(get));

export default employmentHistoryRouter;
