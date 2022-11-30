"use strict";
exports.__esModule = true;
exports.MarkdownConverter = void 0;
var MarkdownConverter = /** @class */ (function () {
    function MarkdownConverter() {
    }
    MarkdownConverter.prototype.convert = function (glossary, properties) {
        // trait (optional)
        // trait identifies a particular kind of descriptive text that is associated with the knowledge artifact. If specified, it must be one of the elements in the list of headingid's as specified in the headingids field of the MRG entry. If omitted, the preceding #-character should also be omitted
        var markdownOut = "";
        if (properties.get("scopetag") == "default") {
            if (properties.get("vsntag") == "latest") {
                // TODO handle empty showtext 
                if (properties.get("trait") != "default") {
                    markdownOut = "[".concat(properties.get("showtext"), "](").concat(glossary.get(properties.get("term")), "#").concat(properties.get("trait"), ")");
                }
                else {
                    markdownOut = "[".concat(properties.get("showtext"), "](").concat(glossary.get(properties.get("term")), ")");
                }
                console.log("The markdown term is: " + markdownOut);
            }
            else {
                console.log("No access for this version yet");
                return markdownOut;
                // TODO go back and get the correct glossary   
            }
        }
        else {
            console.log("No access for this scope yet");
            return markdownOut;
            // TODO go back and get the correct glossary
        }
        // TODO do not change text in file if no match found
        return markdownOut;
    };
    return MarkdownConverter;
}());
exports.MarkdownConverter = MarkdownConverter;
