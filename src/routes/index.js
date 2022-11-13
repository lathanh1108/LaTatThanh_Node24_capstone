const express = require('express');
const rootRoute = express.Router();
const { chainRoute } = require('./chainRoute');

rootRoute.use('/chain', chainRoute);

module.exports = rootRoute;