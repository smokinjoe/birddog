import { Response } from "express";
import { Logger, LoggerFactory } from "../logging/LoggerFactory";

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
};
