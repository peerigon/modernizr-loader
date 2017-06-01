"use strict";

var modernizr = require("modernizr");

function wrapOutput(output) {
    // Exposing Modernizr as a module.
    return ";(function(window){\n" +
           "var hadGlobal = 'Modernizr' in window;\n" +
           "var oldGlobal = window.Modernizr;\n" +
           output + "\n" +
           "module.exports = window.Modernizr;\n" +
           "if (hadGlobal) { window.Modernizr = oldGlobal; }\n" +
           "else { delete window.Modernizr; }\n" +
           "})(window);";
}

module.exports = function (config) {
    if (typeof this.cacheable === 'function') {
        this.cacheable();
    }

    var cb = this.async();

    // `this.exec` is deprecated
    var options = require(this.resourcePath) || {};

    modernizr.build(options, function (output) {
        cb(null, wrapOutput(output));
    });
};
