import { Response } from "express";
import { Logger, LoggerFactory } from "../logging/LoggerFactory";
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
  logger?: Logger;
};

export const handleError = ({
  res,
  statusCode = 500,
  errorMessage = "An error occurred.",
  logger,
}: HandleErrorProps) => {
  if (logger) {
    logger.setCustomAttributes({ errorCode: statusCode }).error(errorMessage);
  } else {
    LoggerFactory.getLogger()
      .setCustomAttributes({ errorCode: statusCode })
      .error(errorMessage);
  }

  res.setHeader("Content-Type", "application/json");
  res
    .status(statusCode)
    .send(JSON.stringify(getErrorResponse(errorMessage, statusCode)));
  // .json(getErrorResponse(errorMessage, statusCode));
};

type HandleBirddogError = {
  res: Response;
  error: unknown;
  logger?: Logger;
};

export const handleBirddogError = ({
  res,
  error,
  logger,
}: HandleBirddogError) => {
  if (error instanceof BirddogError) {
    handleError({
      res,
      statusCode: error.statusCode,
      errorMessage: error.message,
      logger,
    });
  } else {
    handleError({
      res,
      statusCode: 500,
      errorMessage: getErrorMessage(error),
      logger,
    });
  }
};
