"use strict";
exports.__esModule = true;
exports.Resolver = void 0;
var StandardInterpreter_1 = require("./StandardInterpreter");
var MarkdownConverter_1 = require("./MarkdownConverter");
var HTTPConverter_1 = require("./HTTPConverter");
var AltInterpreter_1 = require("./AltInterpreter");
var ESIFFConverter_1 = require("./ESIFFConverter");
var fs = require("fs");
var path = require("path");
var yaml = require("js-yaml");
var https = require("https");
var console = require("console");
var Resolver = /** @class */ (function () {
    function Resolver(outputPath, scopePath, directoryPath, vsn, configPath, interpreterType, converterType) {
        this.tmpLocalMrgFile = "C:\\Users\\degachic\\Documents\\workspace\\trrt\\framework-trrt\\docs\\tev2\\glossaries\\mrg.mrgtest.yaml"; // temp
        this.mrgWritePath = "/mrg.yaml";
        this.config = "";
        this.directory = ".";
        // todo switch scope based on version 
        this.version = "";
        this.output = outputPath;
        this.scope = scopePath;
        // process optional paramters if not set in config 
        if (configPath != undefined) {
            console.log("config path is set by user");
            this.config = configPath;
            this.processConfig();
        }
        else {
            this.setOptionalParams(directoryPath, vsn, interpreterType, converterType);
        }
    }
    Resolver.prototype.processConfig = function () {
        // read config file and set paramters
        console.log("Reading config file at: " + this.config);
        var config = new Map(Object.entries(yaml.load(fs.readFileSync(this.config, 'utf8'))));
        if (config.get("output") != "" || config.get("output") != undefined) {
            this.output = config.get("output");
        }
        else if (config.get("scopedir") != "" || config.get("scopedir") != undefined) {
            this.scope = config.get("scopedir");
        }
        // method	<methodarg>	n	Text, the syntax and semantics of which remain to be specified (see also the Editor's note below). When this parameter is omitted, term refs are replaced with some default renderable ref. --> TODO update documentation
        this.setOptionalParams(config.get("input"), config.get("version"), config.get("interpreter"), config.get("converter"));
        return true;
    };
    Resolver.prototype.setOptionalParams = function (directoryPath, vsn, interpreterType, converterType) {
        if (directoryPath != undefined) {
            this.directory = directoryPath;
        }
        if (vsn != undefined) {
            this.version = vsn;
        }
        if (interpreterType != undefined) {
            if (interpreterType == "Standard") {
                this.interpreter = new StandardInterpreter_1.StandardInterpreter();
            }
            else if (interpreterType == "Alt") {
                this.interpreter = new AltInterpreter_1.AltInterpreter();
            }
            else {
                console.log(interpreterType + " is not a known interpreter, creating standard interpreter.");
                this.interpreter = new StandardInterpreter_1.StandardInterpreter();
            }
        }
        else {
            this.interpreter = new StandardInterpreter_1.StandardInterpreter();
        }
        if (converterType != undefined) {
            if (converterType == "Markdown") {
                this.converter = new MarkdownConverter_1.MarkdownConverter();
            }
            else if (converterType == "HTTP") {
                this.converter = new HTTPConverter_1.HTTPConverter();
            }
            else if (converterType == "ESIFF") {
                this.converter = new ESIFFConverter_1.ESSIFConverter();
            }
            else {
                console.log(converterType + " is not a known converter, creating Markdown converter.");
                this.converter = new MarkdownConverter_1.MarkdownConverter();
            }
        }
        else {
            this.converter = new MarkdownConverter_1.MarkdownConverter();
        }
    };
    Resolver.prototype.getDirectory = function () {
        return this.directory;
    };
    Resolver.prototype.getInterpreterType = function () {
        return this.interpreter.getType();
    };
    Resolver.prototype.getConverterType = function () {
        return this.converter.getType();
    };
    Resolver.prototype.getMrgUrl = function () {
        var mrgURL = "";
        console.log("Loading gloassary from: " + this.scope);
        var safDocument = yaml.load(fs.readFileSync(this.scope, 'utf8'));
        for (var _i = 0, _a = Object.entries(safDocument); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (key == "scope") {
                for (var _c = 0, _d = Object.entries(value); _c < _d.length; _c++) {
                    var _e = _d[_c], innerKey = _e[0], innerValue = _e[1];
                    if (innerKey == "scopedir") {
                        if (innerValue != "" && innerValue != undefined) {
                            mrgURL = mrgURL + innerValue;
                        }
                        else {
                            console.log("No scope directory defined in SAF");
                            return "";
                        }
                    }
                    if (innerKey == "glossarydir") {
                        if (innerValue != "" && innerValue != undefined) {
                            mrgURL = mrgURL + "/" + innerValue;
                        }
                        else {
                            console.log("No glossary directory defined in SAF");
                            return "";
                        }
                    }
                    if (innerKey == "mrgfile") {
                        if (innerValue != "" && innerValue != undefined) {
                            mrgURL = mrgURL + "/" + innerValue;
                        }
                        else {
                            console.log("No MRG file defined in SAF");
                            return "";
                        }
                    }
                }
            }
        }
        return mrgURL;
    };
    Resolver.prototype.readGlossary = function () {
        var glossary = new Map();
        if (this.tmpLocalMrgFile) {
            var mrgDocument = yaml.load(fs.readFileSync(this.tmpLocalMrgFile, 'utf8'));
            this.populateGlossary(mrgDocument, glossary);
            console.log(glossary);
        }
        else {
            // remote mrg file            
            var mrgURL = this.getMrgUrl();
            if (mrgURL != "") {
                console.log("Dowloading MRG from: " + mrgURL);
                // TODO make sure this is synchronus 
                var mrgFileDownload = fs.createWriteStream(this.mrgWritePath);
                https.get(mrgURL, function (response) {
                    response.pipe(mrgFileDownload);
                    mrgFileDownload.on('finish', function () {
                        mrgFileDownload.close();
                    });
                }).on('error', function (err) {
                    console.log(err);
                });
                var mrgDocument = yaml.load(fs.readFileSync(this.mrgWritePath, 'utf8'));
                this.populateGlossary(mrgDocument, glossary);
                console.log(glossary);
            }
        }
        return glossary;
    };
    Resolver.prototype.populateGlossary = function (mrgDocument, glossary) {
        var mrg = new Map(Object.entries(mrgDocument));
        var entries = new Map(Object.entries(mrg.get("entries")));
        var innerValues = new Map(Object.entries(entries));
        console.log("InnerValues");
        console.log(innerValues);
        glossary.set(innerValues.get("term"), innerValues.get("navurl"));
        return glossary;
    };
    Resolver.prototype.createOutputDir = function () {
        if (!fs.existsSync(this.output)) {
            console.log("Creating output directoy " + this.output + ".....");
            fs.mkdir(this.output, function (err) {
                if (err) {
                    console.log(err);
                    return false;
                }
            });
            return true;
        }
    };
    Resolver.prototype.writeFile = function (file, data) {
        console.log("Writing: " + file);
        fs.writeFileSync(this.output + file, data);
    };
    Resolver.prototype.interpertAndConvert = function (data, glossary) {
        var matches = data.matchAll(this.interpreter.getGlobalTermRegex());
        for (var _i = 0, _a = Array.from(matches); _i < _a.length; _i++) {
            var match = _a[_i];
            var termProperties = this.interpreter.interpert(match);
            var replacement = this.converter.convert(glossary, termProperties);
            if (replacement != "") {
                data = data.replace(this.interpreter.getLocalTermRegex(), replacement);
            }
        }
        return data;
    };
    Resolver.prototype.resolve = function () {
        var _this = this;
        this.createOutputDir();
        var files = fs.readdirSync(this.directory);
        console.log("Reading " + this.directory + ".....");
        files.forEach(function (file) {
            if (path.extname(file) == ".md" || path.extname(file) == ".html") {
                var data = fs.readFileSync(_this.directory + file, 'utf8');
                console.log("Reading: " + file);
                data = _this.interpertAndConvert(data, _this.readGlossary());
                _this.writeFile(file, data);
            }
            else {
                console.log(file + " does not have a recognised file type (*.md, *.html)");
            }
        });
        return true;
    };
    return Resolver;
}());
exports.Resolver = Resolver;
