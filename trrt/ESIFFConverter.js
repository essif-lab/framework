"use strict";
exports.__esModule = true;
exports.ESSIFConverter = void 0;
var tslog_1 = require("tslog");
var ESSIFConverter = /** @class */ (function () {
    function ESSIFConverter() {
        this.log = new tslog_1.Logger();
    }
    ESSIFConverter.prototype.getType = function () {
        return "ESIFF";
    };
    ESSIFConverter.prototype.convert = function (glossary, properties) {
        var esiffOut = "";
        if (properties.get("scopetag") == "default") {
            if (properties.get("vsntag") == "latest") {
                esiffOut = "<Term popup=\"todo\" reference=\"".concat(properties.get("term"), "\">").concat(properties.get("showtext"), "</Term>");
                this.log.info("The esiff term is: " + esiffOut);
            }
            else {
                this.log.error("No access for this version yet");
                return esiffOut;
                // TODO go back and get the correct glossary   
            }
        }
        else {
            this.log.error("No access for this scope yet");
            return esiffOut;
            // TODO go back and get the correct glossary
        }
        return esiffOut;
    };
    return ESSIFConverter;
}());
exports.ESSIFConverter = ESSIFConverter;
