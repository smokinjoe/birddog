import express, { Request, Response } from "express";
import { getEducationHandler } from "@/handlers/education";
import { assertIsDefined } from "@/utils/assertions";
import { handleBirddogError } from "@/utils/errors/handleError";
import { NotFoundError } from "@/utils/errors/error";
import { asyncHandler } from "@/utils/asyncHandler";

const educationHandler = express.Router();

const get = async (_req: Request, res: Response) => {
  try {
    const education = await getEducationHandler();
    assertIsDefined(education, new NotFoundError("Education record not found"));
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(education));
  } catch (error) {
    handleBirddogError({ error, res });
  }
};

educationHandler.get("/education", asyncHandler(get));

export default educationHandler;
