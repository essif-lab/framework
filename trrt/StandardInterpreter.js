"use strict";
exports.__esModule = true;
exports.StandardInterpreter = void 0;
var StandardInterpreter = /** @class */ (function () {
    function StandardInterpreter() {
        this.term_regex = /(?<=[^`\\])\[(?=[^@\]]+\]\([#a-z0-9_-]*@[:a-z0-9_-]*\))(?<showtext>.+?)\]\((?<id>[a-z0-9_-]+?)(?:#(?<trait>[a-z0-9_-]+?))?@(?<scopetag>[a-z0-9_-]*)(?::(?<vsntag>[a-z0-9_-]+?))?\)/g;
    }
    StandardInterpreter.prototype.interpert = function (match) {
        var termProperties = new Map();
        if (match.groups.showtext != undefined) {
            termProperties.set("showtext", match.groups.showtext);
        }
        else {
            termProperties.set("showtext", "Missing Input");
        }
        if (match.groups.id != undefined) {
            termProperties.set("id", match.groups.id);
        }
        else {
            termProperties.set("id", "Missing Input");
        }
        if (match.groups.term != undefined) {
            termProperties.set("term", match.groups.trait);
        }
        else {
            termProperties.set("term", "Missing Input");
        }
        if (match.groups.trait != undefined) {
            termProperties.set("trait", match.groups.trait);
        }
        else {
            termProperties.set("trait", "default");
        }
        if (match.groups.scopetag != undefined) {
            termProperties.set("scopetag", match.groups.scopetag);
        }
        else {
            termProperties.set("scopetag", "default");
        }
        if (match.groups.vsntag != undefined) {
            termProperties.set("vsntag", match.groups.vsntag);
        }
        else {
            termProperties.set("vsntag", "latest");
        }
        return termProperties;
    };
    StandardInterpreter.prototype.getTermRegex = function () {
        return this.term_regex;
    };
    return StandardInterpreter;
}());
exports.StandardInterpreter = StandardInterpreter;
