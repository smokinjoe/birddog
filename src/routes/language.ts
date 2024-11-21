import express, { Request, Response } from "express";
import { getLanguageHandler } from "../handlers/language";
import { getErrorMessage } from "../utils/errors/getErrorMessage";
import { handleError } from "../utils/errors/handleError";

const languageRouter = express.Router();

languageRouter.get("/language", async (_req: Request, res: Response) => {
  try {
    const language = await getLanguageHandler();
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(language));
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    handleError({ res, errorMessage, statusCode: 500 });
  }
});

export default languageRouter;
