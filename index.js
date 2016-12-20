"use strict";

var modernizr = require("modernizr");

function wrapOutput(output) {
    // Exposing Modernizr as a module.
    return ";(function(window){\n" +
            output + "\n" +
            "module.exports = window.Modernizr;\n" +
            "})({});";
}

module.exports = function (config) {
    if (typeof this.cacheable === 'function') {
        this.cacheable()
    }

    var cb = this.async();

    modernizr.build(this.exec(config, this.resource), function (output) {
        cb(null, wrapOutput(output));
    });
};
