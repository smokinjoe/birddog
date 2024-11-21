export const logLevels = ["debug", "info", "warn", "error"] as const;
export type LogLevel = (typeof logLevels)[number];

export type LoggerAttributes = {
  action?: string;
  errorMessage?: string;
  errorCode?: string | number;
  logLevel?: LogLevel;
};

export type Action = (
  message: any,
  customAttributes?: LoggerAttributes
) => void;

export type LoggerBase = {
  debug: Action;
  error: Action;
};

export type LogEvent = {
  level: LogLevel;
  message: string;
  error?: Error;
  data?: object;
};

export type LogEmitter = {
  emit: (event: LogEvent) => void;
};
