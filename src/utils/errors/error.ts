export type ErrorOptions = {
  statusCode?: number;
  message?: string;
  innerError?: Error;
};

export class BirddogError extends Error {
  errorType = "BirddogError";
  innerError?: Error;

  statusCode = 500;

  constructor(message: string, options?: ErrorOptions) {
    super(message);

    this.message = message;
    this.innerError = options?.innerError;
    this.statusCode = options?.statusCode ?? this.statusCode;
  }
}

export class ValidationError extends BirddogError {
  errorType = "ValidationError";
  statusCode = 400;
}

export class NotFoundError extends BirddogError {
  errorType = "NotFoundError";
  statusCode = 404;
}
