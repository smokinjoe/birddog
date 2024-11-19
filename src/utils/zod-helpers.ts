import z, { ZodError, ZodTypeAny } from "zod";

export const zcustom = {
  url: () =>
    z.string().refine((value: string) => isValidUrl(value), {
      message: "String must be a valid URL",
    }),
};

/**
 * Validate a zod schema, and throw a Response error with friendly message if fails
 */
export function parseZod<T extends ZodTypeAny>(
  zodObject: T,
  data: unknown
): { valid: true; data: T["_output"] } | { valid: false; errors: string[] } {
  const parsed = zodObject.safeParse(data);
  if (parsed.success) {
    return { valid: true, data: parsed.data };
  }

  const validationErrors = formatZodError(parsed.error);
  return { valid: false, errors: validationErrors };
}

function isValidUrl(value: string): boolean {
  try {
    new URL(value);
    return true;
  } catch {
    return false;
  }
}

function formatZodError(zodError: ZodError<any>): string[] {
  const formattedZodError = zodError.issues.map((issue) => {
    const varname = issue.path.join(".");
    const error = issue.message;
    if (!issue.path.length) {
      return error;
    }
    return `'${varname}': ${error}`;
  });
  return formattedZodError;
}
