const express = require('express');

const router = express.Router();

import { getHello } from './hello/hello.controller';
router.use('/', getHello);

export default router;