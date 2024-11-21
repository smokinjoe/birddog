import express, { Request, Response } from "express";
import { getEducationHandler } from "../handlers/education";
import { getErrorMessage } from "../utils/errors/getErrorMessage";
import { handleError } from "../utils/errors/handleError";

const educationHandler = express.Router();

educationHandler.get("/education", async (_req: Request, res: Response) => {
  try {
    const education = await getEducationHandler();
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(education));
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    handleError({ res, errorMessage, statusCode: 500 });
  }
});

export default educationHandler;
