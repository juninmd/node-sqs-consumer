import configs from '../configs';

import * as AWS from 'aws-sdk';
import * as https from 'https';
import { Consumer } from 'sqs-consumer';

export default class SqsConsumer {
  private static instance: SqsConsumer;
  public consumer: Consumer;

  public static getInstance(): SqsConsumer {
    if (!SqsConsumer.instance) {
      const options: OptionsConsumer = configs.aws;
      SqsConsumer.instance = new SqsConsumer(options);
    }
    return SqsConsumer.instance;
  }

  private constructor(options: OptionsConsumer) {
    AWS.config.update(options);

    this.consumer = Consumer.create({
      batchSize: options.batchSize,
      queueUrl: options.queueUrl,
      sqs: new AWS.SQS({
        httpOptions: {
          agent: new https.Agent({
            keepAlive: true,
          }),
        },
      }),
      handleMessage: this.handleMessage,
    });

    this.consumer.on('error', this.onError);
    this.consumer.on('processing_error', this.onProcessingError);
    this.consumer.on('timeout_error', this.onTimeOutError);
  }

  private async handleMessage(message: AWS.SQS.Message) {
    console.log(message);
  }

  stop(): void {
    if (this.consumer) {
      this.consumer.stop();
    }
  }

  start(): void {
    if (this.consumer) {
      this.consumer.start();
    }
  }

  onError(err): void {
    console.error(err);
  }

  onProcessingError(err): void {
    console.error(err);
  }

  onTimeOutError(err): void {
    console.error(err);
  }
}

interface OptionsConsumer {
  region: string;
  accessKeyId: string;
  secretAccessKey: string;
  queueUrl: string;
  batchSize: number;
}