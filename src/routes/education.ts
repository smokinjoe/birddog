import express, { Request, Response } from "express";
import { getEducationHandler } from "../handlers/education";

const educationHandler = express.Router();

educationHandler.get("/education", async (_req: Request, res: Response) => {
  try {
    const education = await getEducationHandler();
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(education));
  } catch (e) {
    console.log("JOE:");
    console.error(e);
  }
});

export default educationHandler;
