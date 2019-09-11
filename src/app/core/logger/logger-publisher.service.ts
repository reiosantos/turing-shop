import { Injectable } from '@angular/core';
import { VcLoggerFactory, VcLoggerType } from '@turing/shared/interfaces/vc-logger-factory';
import { VcLoggerPublisher } from '@turing/shared/interfaces/vc-logger-publisher';

@Injectable()
export class LoggerPublisherService extends VcLoggerPublisher {
  publishers: VcLoggerType[] = [];

  constructor() {
    super();
    this.buildPublishers();
  }

  addPublisher = (publisher: VcLoggerType) => {
    this.publishers.push(publisher);
  };

  buildPublishers = () => {
    // add console publisher to array
    this.publishers.push(VcLoggerFactory.getLogger('console'));
  }
}
