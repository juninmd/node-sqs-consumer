import configs from '../configs';

import * as AWS from 'aws-sdk';
import * as https from 'https';
import { Consumer } from 'sqs-consumer';

export default class SqsConsumer {
  private static instance: SqsConsumer;
  public consumer: Consumer;
  public options: any = {};

  public static getInstance(): SqsConsumer {
    if (!SqsConsumer.instance) {
      SqsConsumer.instance = new SqsConsumer();
    }
    return SqsConsumer.instance;
  }

  private constructor() {
    AWS.config.update({
      region: regionConsumer,
      accessKeyId: accessId,
      secretAccessKey: secretId,
    });

    this.consumer = Consumer.create({
      batchSize: Number(batchSizeConsumer),
      queueUrl: urlQueue,
      sqs: new AWS.SQS({
        httpOptions: {
          agent: new https.Agent({
            keepAlive: true,
          }),
        },
      }),
    });

  }

  getConsumer({ regionConsumer, accessId, secretId, batchSizeConsumer, urlQueue }): Consumer {

    return this.consumer;
  }

  startConsumer(regionConsumer, accessId, secretId, batchSizeConsumer, urlQueue): void {
    this.getConsumer({
      regionConsumer,
      accessId,
      secretId,
      batchSizeConsumer,
      urlQueue,
    });
    this.consumer.start();
  }

  stopConsumer(): void {
    if (this.consumer) {
      this.consumer.stop();
    }
  }
}
