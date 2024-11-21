import { BirddogError } from "./errors/error";

type AssertError = string | BirddogError;

function handleError(defaultMessage: string, error?: AssertError): never {
  if (error === undefined) {
    throw new Error(defaultMessage);
  }

  if (typeof error === "string") {
    throw new Error(error);
  }

  throw error;
}

export function assertIsDefined<TData>(
  value: TData,
  error?: AssertError
): asserts value is NonNullable<TData> {
  if (value == null) {
    handleError("The value must be defined and not null", error);
  }
}
