"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AltInterpreter = void 0;
var AltInterpreter = /** @class */ (function () {
    function AltInterpreter() {
        this.termRegexGlobal = /(?<=[^`\\])\[(?=[^@\]]+@[:a-z0-9_-]*\](?:\([#a-z0-9_-]+\))?)(?P<showtext>.+?)@(?P<scopetag>[a-z0-9_-]*)(?::(?P<vsntag>[a-z0-9_-]+?))?\](?P<ref>\((?P<id>[a-z0-9_-]*)(?:#(?P<trait>[a-z0-9_-]+?))?\))?/g;
        this.termRegexLocal = /(?<=[^`\\])\[(?=[^@\]]+@[:a-z0-9_-]*\](?:\([#a-z0-9_-]+\))?)(?P<showtext>.+?)@(?P<scopetag>[a-z0-9_-]*)(?::(?P<vsntag>[a-z0-9_-]+?))?\](?P<ref>\((?P<id>[a-z0-9_-]*)(?:#(?P<trait>[a-z0-9_-]+?))?\))?/;
    }
    AltInterpreter.prototype.getType = function () {
        return "Alt";
    };
    AltInterpreter.prototype.interpert = function (match) {
        var termProperties = new Map();
        // todo
        return termProperties;
    };
    AltInterpreter.prototype.getGlobalTermRegex = function () {
        return this.termRegexGlobal;
    };
    AltInterpreter.prototype.getLocalTermRegex = function () {
        return this.termRegexLocal;
    };
    return AltInterpreter;
}());
exports.AltInterpreter = AltInterpreter;
