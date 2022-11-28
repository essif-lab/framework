"use strict";
exports.__esModule = true;
exports.AltInterpreter = void 0;
var AltInterpreter = /** @class */ (function () {
    function AltInterpreter() {
        this.term_regex = /p/g;
    }
    AltInterpreter.prototype.interpert = function (match) {
        var termProperties = new Map();
        return termProperties;
    };
    AltInterpreter.prototype.getTermRegex = function () {
        return this.term_regex;
    };
    return AltInterpreter;
}());
exports.AltInterpreter = AltInterpreter;
