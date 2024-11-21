import { NextFunction, Request, Response } from "express";
import { getErrorMessage } from "../utils/errors/getErrorMessage";
import { handleError } from "../utils/errors/handleError";

export const errorHandler = (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  const errorMessage = getErrorMessage(error);
  handleError({ res, errorMessage, statusCode: 500 });
};
