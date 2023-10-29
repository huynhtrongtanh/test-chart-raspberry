var Logger = require('../models/logger.model');

exports.all = function (req, res) {
    Logger.all(function (response) {
        res.send({ result: response });
    });
}

exports.getLimit = function (req, res) {
    var limit = req.params.limit;
    Logger.getLimit(limit, function (response) {
        res.send({ result: response });
    });
}