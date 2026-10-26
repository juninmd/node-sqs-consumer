# node-sqs-consumer

Small TypeScript service that polls an AWS SQS queue with
[`sqs-consumer`](https://github.com/bbc/sqs-consumer) and exposes a minimal Express
endpoint (`GET /` returns `{ "message": "hello" }`).

## Installation

```bash
git clone https://github.com/juninmd/node-sqs-consumer.git
cd node-sqs-consumer
yarn install
```

## Configuration

Environment variables (read from the process or from `envs/.env-<NODE_ENV>`, which is git-ignored):

| Variable | Description |
|---|---|
| `AWS_REGION` | AWS region of the queue |
| `AWS_ACCESS_KEY_ID` / `AWS_SECRET_ACCESS_KEY` | AWS credentials |
| `AWS_QUEUE_URL` | Full URL of the SQS queue |
| `AWS_BATCH_SIZE` | Optional. Messages per poll; the `sqs-consumer` default is used when unset |
| `PORT` | Optional. HTTP port, default `9001` |

## Usage

```bash
NODE_ENV=development npx ts-node src/index.ts
```

Messages are handled in `src/consumer/index.ts` (`handleMessage`, which currently just logs them).
On `SIGTERM`/`SIGINT` the consumer stops polling so in-flight messages can finish.

## Layout

* `src/index.ts`: entry point (env loading, consumer start, graceful shutdown)
* `src/consumer/`: SQS consumer wrapper
* `src/api/`, `src/server.ts`: Express app
* `src/configs/`, `src/tools/`: configuration and env loading
