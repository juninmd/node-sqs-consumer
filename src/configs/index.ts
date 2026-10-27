export default {
  aws: {
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    queueUrl: process.env.AWS_QUEUE_URL,
    // undefined (not NaN) lets sqs-consumer use its default batch size
    batchSize: process.env.AWS_BATCH_SIZE ? Number(process.env.AWS_BATCH_SIZE) : undefined,
  }
};