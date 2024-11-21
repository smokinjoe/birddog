import { Request, Response, NextFunction } from "express";

// Utility function to wrap async route handlers for cleaner error handling
export const asyncHandler =
  (fn: Function) => (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
