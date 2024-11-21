import { LogEmitter, LoggerAttributes, LogEvent } from "./logger.types";
import { createLogParser } from "./logParser";

const logParser = createLogParser<LoggerAttributes>();

const getLogClient = (emitter: LogEmitter) => {
  return {
    error: (error: Error | string, data?: LoggerAttributes) => {
      emitter.emit(logParser("error", error, data));
    },
    debug: (message: string) => {
      emitter.emit(logParser("debug", message));
    },
  };
};

// Our own internal logger that helps clean up our messages/errors before
// logging it to the console
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
      if (event.data) {
        console.log(levelPrefix, event.data);
      }
    },
  };
  return devLogEmitter;
};

export const getLogger = () => {
  return getLogClient(getDevEmitter());
};
