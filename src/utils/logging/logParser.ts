import { LogEvent, LogLevel } from "./logger.types";

export type LogParser<T> = (
  level: LogLevel,
  log: Error | string,
  data?: T
) => LogEvent;

export function createLogParser<T>() {
  return (level: LogLevel, log: Error | string, data?: T): LogEvent => {
    const event: LogEvent = {
      level,
    } as LogEvent;
    if (log instanceof Error) {
      event.error = log;
      event.message = log.message;
      if (data) {
        event.data = data;
      }
      return event;
    }

    if (typeof log === "string") {
      event.message = log || "(Missing log message)";
      if (data) {
        event.data = data;
      }
      return event;
    }

    console.error("Unexpected data logged", log);

    return event;
  };
}
