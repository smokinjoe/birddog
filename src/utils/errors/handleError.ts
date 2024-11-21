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
  error: unknown;
};

export const handleError = ({
  res,
  statusCode = 500,
  error,
}: HandleErrorProps) => {
  const errorMessage = getErrorMessage(error);
  getLogger().error(error as Error);

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
      error,
    });
  } else {
    handleError({
      res,
      statusCode: 500,
      error,
    });
  }
};
