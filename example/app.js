require('dotenv').config();

const express = require('express');
const { logger, loggerMiddleware } = require('node-express-logging');

const app = express();

app.use(loggerMiddleware);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  logger.info('Example app listening at: http://localhost:3000');
});
