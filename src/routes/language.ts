import express, { Request, Response } from "express";
import { getLanguageHandler } from "../handlers/language";

const languageRouter = express.Router();

languageRouter.get("/language", async (_req: Request, res: Response) => {
  try {
    const language = await getLanguageHandler();
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(language));
  } catch (e) {
    console.error(e);
  }
});

export default languageRouter;
