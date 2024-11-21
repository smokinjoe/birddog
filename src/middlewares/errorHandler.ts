import { NextFunction, Request, Response } from "express";
import { handleError } from "../utils/errors/handleError";

export const errorHandler = (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  handleError({ res, error, statusCode: 500 });
};
