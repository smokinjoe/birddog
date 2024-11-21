interface IBirddogError extends Error {
  statusCode: number;
  innerError?: Error;
}

export type ErrorOptions = {
  statusCode?: number;
  innerError?: Error;
};

export class BirddogError extends Error implements IBirddogError {
  errorType = "BirddogError";
  innerError?: Error;
  statusCode = 500;

  constructor(message: string, options?: ErrorOptions) {
    super(message);

    this.name = "BirddogError";
    this.innerError = options?.innerError;
    this.statusCode = options?.statusCode ?? 500;
  }
}

export class ValidationError extends BirddogError {
  constructor(message: string, options: ErrorOptions = {}) {
    super(message, options);
    this.name = "ValidationError";
    this.statusCode = 400;
  }
}

export class NotFoundError extends BirddogError {
  constructor(message: string, options: ErrorOptions = {}) {
    super(message, options);
    this.name = "NotFoundError";
    this.statusCode = 404;
  }
}
