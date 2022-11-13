const Models = require('../models/index');
const { successResponse, failedResponse, errorResponse } = require('../utils/response');

const Chain = Models.cinema_chains;

const list = async (req, res) => {
    try {
        let data = await Chain.findAll();

        successResponse(res, data, "Chain list");
    } catch (err) {
        errorResponse(res, err);
    }
}

module.exports = { list }