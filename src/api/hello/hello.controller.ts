const getHello = async (_req, res) => {
  const body = { message: 'hello' }
  res.send(body);
}

export { getHello };