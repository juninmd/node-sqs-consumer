import LogQueue from '../../producer/console.queue';

const getHello = async (_req, res) => {
  const body = { message: 'hello' }
  await LogQueue.getInstance().add(body);

  res.send(body);
}

export { getHello };