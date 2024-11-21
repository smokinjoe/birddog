export const logLevels = ["debug", "info", "warn", "error"] as const;
export type LogLevel = (typeof logLevels)[number];

export type LogEvent = {
  level: LogLevel;
  message: string;
  error?: Error;
  data?: object;
};

export type LogEmitter = {
  emit: (event: LogEvent) => void;
};
