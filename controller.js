'use strict';

var response = require('./res');
var connect = require('./connect');

exports.index = function (req, res) {
    response.ok("Aplikasi REST API ku berjalan")
};