const app = require('express')();
const cors = require('cors');
const bodyParser = require('body-parser');

import api from './api'

app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(api);

const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(`Aplicação - Ativa :D | ${port}`);
});