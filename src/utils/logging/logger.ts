import { LogEmitter, LogEvent } from "./logger.types";
import { createLogParser } from "./logParser";

const logParser = createLogParser();

const getLogClient = (emitter: LogEmitter) => {
  return {
    error: (error: Error | string) => {
      emitter.emit(logParser("error", error));
    },
    debug: (message: string) => {
      emitter.emit(logParser("debug", message));
    },
  };
};

const getDevEmitter = () => {
  const devLogEmitter: LogEmitter = {
    emit: (event: LogEvent) => {
      let levelPrefix = `[${event.level}]`.padEnd(7);

      if (event.message) {
        console.log(`${levelPrefix} ${event.message}`);
      }
      if (event.error) {
        console.log(levelPrefix, event.error);
      }
    },
  };
  return devLogEmitter;
};

export const getLogger = () => {
  return getLogClient(getDevEmitter());
};
