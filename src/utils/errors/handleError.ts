import { Response } from "express";
import { getLogger } from "../logging/logger";
import { getErrorMessage } from "./getErrorMessage";
import { BirddogError } from "./error";

/**
 * Need to figure out where I can use this
 */
type ApiError = {
  message: string;
  code: number;
};

const getErrorResponse = (
  errorMessage: string,
  statusCode: number
): ApiError => {
  return {
    message: errorMessage,
    code: statusCode,
  };
};

type HandleErrorProps = {
  res: Response;
  statusCode?: number;
  errorMessage?: string;
};

export const handleError = ({
  res,
  statusCode = 500,
  errorMessage = "An error occurred.",
}: HandleErrorProps) => {
  getLogger().error(errorMessage);

  res.setHeader("Content-Type", "application/json");
  res.status(statusCode).json(getErrorResponse(errorMessage, statusCode));
};

type HandleBirddogError = {
  res: Response;
  error: unknown;
};

export const handleBirddogError = ({ res, error }: HandleBirddogError) => {
  if (error instanceof BirddogError) {
    handleError({
      res,
      statusCode: error.statusCode,
      errorMessage: error.message,
    });
  } else {
    handleError({
      res,
      statusCode: 500,
      errorMessage: getErrorMessage(error),
    });
  }
};
