const express = require('express');
const apiRoute = express.Router();
const { chainRoute } = require('./chainRoute');

apiRoute.use('/chain', chainRoute)

module.exports = apiRoute;