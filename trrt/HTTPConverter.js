"use strict";
exports.__esModule = true;
exports.HTTPConverter = void 0;
var HTTPConverter = /** @class */ (function () {
    function HTTPConverter() {
    }
    HTTPConverter.prototype.getType = function () {
        return "HTTP";
    };
    HTTPConverter.prototype.convert = function (glossary, properties) {
        var htmlOut = "";
        if (properties.get("scopetag") == "default") {
            if (properties.get("vsntag") == "latest") {
                if (properties.get("trait") != "default") {
                    htmlOut = "<a href=\"".concat(glossary.get(properties.get("term")), "#").concat(properties.get("trait"), "\"><span style=\"font-weight:bold>").concat(properties.get("showtext"), "</span></a>");
                }
                else {
                    htmlOut = "<a href=\"".concat(glossary.get(properties.get("term")), "\"><span style=\"font-weight:bold>").concat(properties.get("showtext"), "</span></a>");
                }
                console.log("The html term is: " + htmlOut);
            }
            else {
                console.log("No access for this version yet");
                return htmlOut;
                // TODO go back and get the correct glossary   
            }
        }
        else {
            console.log("No access for this scope yet");
            return htmlOut;
            // TODO go back and get the correct glossary
        }
        return htmlOut;
    };
    return HTTPConverter;
}());
exports.HTTPConverter = HTTPConverter;
