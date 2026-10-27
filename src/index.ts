import { loadEnvs } from './tools/envs.tools';
loadEnvs(`${__dirname}/../envs/.env-${process.env.NODE_ENV}`)
import './server';
import SqsConsumer from './consumer';

SqsConsumer.getInstance().start();

// Stop polling and let in-flight messages finish before the process exits.
['SIGTERM', 'SIGINT'].forEach((signal) =>
  process.on(signal, () => {
    console.log(`${signal} received, stopping consumer`);
    SqsConsumer.getInstance().stop();
  }),
);

process.on('uncaughtException', (error: Error) => {
  console.error(`uncaughtException ${error.message}`);
});

process.on('unhandledRejection', (reason: any) => {
  console.error(`unhandledRejection ${reason}`);
});