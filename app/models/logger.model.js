const { domainToUnicode } = require('url');
const db = require('../commons/connect');

const Logger = function () {}

Logger.all = function (result) {
    try {
        var queryString = `SELECT * FROM logger`;
        
        db.query(queryString, function (err, table) {
            if (err) {
                result(
                    {
                        "status": "error",
                        "data": null,
                        "message": err
                    }
                );
            }
            else {
                result(
                    {
                        "status": "success",
                        "data": table,
                        "message": null
                    }
                );
            }
        });
    } catch (error) {
        return null;
    }

}

Logger.getLimit = function (limit, result) {
    try {
        var queryString = `SELECT * FROM logger LIMIT ${limit}`;
        
        db.query(queryString, function (err, table) {
            if (err) {
                result(
                    {
                        "status": "error",
                        "data": null,
                        "message": err
                    }
                );
            }
            else {
                result(
                    {
                        "status": "success",
                        "data": table,
                        "message": null
                    }
                );
            }
        });
    } catch (error) {
        return null;
    }

}

module.exports = Logger;