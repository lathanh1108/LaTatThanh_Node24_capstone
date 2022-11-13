const express = require('express');
const chainRoute = express.Router();
const chainsController = require('../controllers/chainsController');

// Get Users
chainRoute.get('/list', chainsController.list);

// Export route
module.exports = { chainRoute }