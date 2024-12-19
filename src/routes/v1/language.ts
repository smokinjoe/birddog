import express, { Request, Response } from "express";
import { getLanguageHandler } from "@/handlers/language";
import { handleBirddogError } from "@/utils/errors/handleError";
import { assertIsDefined } from "@/utils/assertions";
import { NotFoundError } from "@/utils/errors/error";

const languageRouter = express.Router();

languageRouter.get("/language", async (_req: Request, res: Response) => {
  try {
    const language = await getLanguageHandler();
    assertIsDefined(language, new NotFoundError("Language not found"));
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(language));
  } catch (error) {
    handleBirddogError({ error, res });
  }
});

export default languageRouter;
