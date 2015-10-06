"use strict";

var modernizr = require("modernizr");

module.exports = function (config) {
    var cb = this.async();

    modernizr.build(JSON.parse(config), function (output) {
        cb(null, output);
    });
};
