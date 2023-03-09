const express = require('express');

const apiRouter = require('./apiRouter');

const app = express();

app.use('/apiRouter', apiRouter);

module.exports = app;