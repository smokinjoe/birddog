type AssertError = string;

function handleError(
  defaultMessage: string,
  errorMessage?: AssertError
): never {
  throw new Error(errorMessage ?? defaultMessage);
}

export function assertIsDefined<TData>(
  value: TData,
  error?: AssertError
): asserts value is NonNullable<TData> {
  if (value == null) {
    handleError("The value must be defined and not null", error);
  }
}
