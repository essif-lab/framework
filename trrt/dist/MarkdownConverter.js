"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarkdownConverter = void 0;
var tslog_1 = require("tslog");
var MarkdownConverter = /** @class */ (function () {
    function MarkdownConverter() {
        this.log = new tslog_1.Logger();
    }
    MarkdownConverter.prototype.getType = function () {
        return "Markdown";
    };
    MarkdownConverter.prototype.convert = function (glossary, properties) {
        // trait (optional)
        // trait identifies a particular kind of descriptive text that is associated with the knowledge artifact. If specified, it must be one of the elements in the list of headingid's as specified in the headingids field of the MRG entry. If omitted, the preceding #-character should also be omitted
        var markdownOut = "";
        if (properties.get("scopetag") == "default") {
            if (properties.get("vsntag") == "latest") {
                var term = glossary.get(properties.get("term"));
                if (properties.get("trait") != "default") {
                    markdownOut = "[".concat(properties.get("showtext"), "](").concat(term, "#").concat(properties.get("trait"), ")");
                }
                else {
                    markdownOut = "[".concat(properties.get("showtext"), "](").concat(term, ")");
                }
                this.log.info("The converted markdown term is: " + markdownOut);
            }
            else {
                this.log.error("No access for this version yet");
                return markdownOut;
                // TODO go back and get the correct glossary   
            }
        }
        else {
            this.log.error("No access for this scope yet");
            return markdownOut;
            // TODO go back and get the correct glossary
        }
        return markdownOut;
    };
    return MarkdownConverter;
}());
exports.MarkdownConverter = MarkdownConverter;
