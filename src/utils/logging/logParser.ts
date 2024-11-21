import { LogEvent, LogLevel } from "./logger.types";

export type LogParser = (level: LogLevel, log: Error | string) => LogEvent;

export function createLogParser() {
  return (level: LogLevel, log: Error | string): LogEvent => {
    const event: LogEvent = {
      level,
    } as LogEvent;
    if (log instanceof Error) {
      event.error = log;
      event.message = log.message;
      return event;
    }

    if (typeof log === "string") {
      event.message = log || "(Log message not present)";
      return event;
    }

    console.error("Unexpected log data", log);

    return event;
  };
}
