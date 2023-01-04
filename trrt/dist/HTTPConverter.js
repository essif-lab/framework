"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTPConverter = void 0;
var tslog_1 = require("tslog");
var HTTPConverter = /** @class */ (function () {
    function HTTPConverter() {
        this.log = new tslog_1.Logger();
    }
    HTTPConverter.prototype.getType = function () {
        return "HTTP";
    };
    HTTPConverter.prototype.convert = function (glossary, properties) {
        var htmlOut = "";
        if (properties.get("scopetag") == "default") {
            if (properties.get("vsntag") == "latest") {
                var term = glossary.get(properties.get("term"));
                if (properties.get("trait") != "default") {
                    htmlOut = "<a href=\"".concat(term, "#").concat(properties.get("trait"), "\"><span style=\"font-weight:bold>").concat(properties.get("showtext"), "</span></a>");
                }
                else {
                    htmlOut = "<a href=\"".concat(term, "\"><span style=\"font-weight:bold>").concat(properties.get("showtext"), "</span></a>");
                }
                this.log.info("The html term is: " + htmlOut);
            }
            else {
                this.log.error("No access for this version yet");
                return htmlOut;
                // TODO go back and get the correct glossary   
            }
        }
        else {
            this.log.error("No access for this scope yet");
            return htmlOut;
            // TODO go back and get the correct glossary
        }
        return htmlOut;
    };
    return HTTPConverter;
}());
exports.HTTPConverter = HTTPConverter;
