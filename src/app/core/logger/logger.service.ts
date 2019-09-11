import { Injectable } from '@angular/core';
import { VcLogger, VcLoggerPublisher } from '@turing/shared/interfaces/vc-logger-publisher';
import { LogEntry, LoggingLevel, VcLoggerType } from '@turing/shared/interfaces/vc-logger-factory';

@Injectable()
export class LoggerService extends VcLogger {
  level: LoggingLevel = LoggingLevel.ALL;
  logWithDate = true;

  constructor(private vcLoggerPublisher: VcLoggerPublisher) {
    super();
  }

  debug = (msg: any, ...info: any[]) => {
    this.writeToLog(msg, LoggingLevel.DEBUG, info);
  };

  info = (msg: any, ...info: any[]) => {
    this.writeToLog(msg, LoggingLevel.INFO, info);
  };

  warning = (msg: any, ...info: any[]) => {
    this.writeToLog(msg, LoggingLevel.WARNING, info);
  };

  error = (msg: any, ...info: any[]) => {
    this.writeToLog(msg, LoggingLevel.ERROR, info);
  };

  fatal = (msg: any, ...info: any[]) => {
    this.writeToLog(msg, LoggingLevel.FATAL, info);
  };

  private shouldLog(level: LoggingLevel): boolean {
    let ret = false;
    if ((level >= this.level && level !== LoggingLevel.OFF) ||
      this.level === LoggingLevel.ALL) {
      ret = true;
    }
    return ret;
  }

  private writeToLog(msg: any, level: LoggingLevel, params: any[]) {
    if (this.shouldLog(level)) {
      const entry: LogEntry = new LogEntry();
      entry.message = msg;
      entry.level = level;
      entry.extraInfo = params;
      entry.logWithDate = this.logWithDate;
      this.vcLoggerPublisher.publishers.forEach((logger: VcLoggerType) => {
        logger.log(entry).subscribe(() => {
        });
      });
    }
  }
}
