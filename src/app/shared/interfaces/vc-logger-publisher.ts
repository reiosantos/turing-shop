import { LoggingLevel, VcLoggerType } from '@turing/shared/interfaces/vc-logger-factory';

export abstract class VcLoggerPublisher {
  publishers: VcLoggerType[];

  abstract addPublisher(loggerType: VcLoggerType): void;

  abstract buildPublishers(): void;
}

export abstract class VcLogger {
  level: LoggingLevel;
  logWithDate: boolean;

  abstract debug(msg: any, ...info: any[]): void;

  abstract info(msg: any, ...info: any[]): void;

  abstract warning(msg: any, ...info: any[]): void;

  abstract error(msg: any, ...info: any[]): void;

  abstract fatal(msg: any, ...info: any[]): void;
}
