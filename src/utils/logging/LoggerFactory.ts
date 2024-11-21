import { getLogger } from "./logger";
import { LoggerBase, LoggerAttributes } from "./logger.types";

export class Logger {
  private logger: LoggerBase;
  customAttributes: LoggerAttributes;

  constructor(customAttributes: LoggerAttributes) {
    this.logger = getLogger();
    this.customAttributes = customAttributes;
  }

  setCustomAttributes(customAttributes: Partial<LoggerAttributes>) {
    this.customAttributes = {
      ...this.customAttributes,
      ...customAttributes,
    };

    return this;
  }

  error(message: string, customAttributes?: LoggerAttributes) {
    this.logger.error(message, {
      ...this.customAttributes,
      ...customAttributes,
      logLevel: "error",
    });
  }
}

export class LoggerFactory {
  static getLogger(customAttributes: LoggerAttributes = {}): Logger {
    return new Logger(customAttributes);
  }
}
