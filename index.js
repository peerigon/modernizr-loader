"use strict";

var modernizr = require("modernizr");

function wrapOutput(output) {
    // Exposing Modernizr as a module.
    return ";(function(window){\n" +
            output + "\n" +
            "module.exports = window.Modernizr;\n" +
            "})(window);";
}

module.exports = function (config) {
    var cb = this.async();

    modernizr.build(config, function (output) {
        cb(null, wrapOutput(output));
    });
};
