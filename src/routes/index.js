const express = require('express');
const rootRoute = express.Router();
const apiRoute = require('./apiRoute');

rootRoute.use('/api', apiRoute);

module.exports = rootRoute;