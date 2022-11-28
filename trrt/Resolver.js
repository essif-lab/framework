"use strict";
exports.__esModule = true;
exports.Resolver = void 0;
var StandardInterpreter_1 = require("./StandardInterpreter");
var MarkdownConverter_1 = require("./MarkdownConverter");
var AltInterpreter_1 = require("./AltInterpreter");
var fs = require("fs");
var path = require("path");
var yaml = require("js-yaml");
var https = require("https");
var console = require("console");
var Resolver = /** @class */ (function () {
    function Resolver(outputPath, scopePath, directoryPath, configPath, interpreterType, covnerterType) {
        this.tmpLocalMrgFile = "C:\\Users\\degachic\\Documents\\workspace\\trrt\\framework-trrt\\docs\\tev2\\glossaries\\mrg.mrgtest.yaml"; // temp
        this.mrgWritePath = "/mrg.yaml";
        this.config = "";
        this.directory = ".";
        this.version = "";
        this.glossary = new Map();
        this.output = outputPath;
        this.scope = scopePath;
        // process optional paramters if not set in config 
        if (configPath != undefined) {
            console.log("config path is set by user");
            this.config = configPath;
            this.processConfig();
        }
        else {
            this.setOptionalParams(directoryPath, interpreterType, covnerterType);
        }
    }
    Resolver.prototype.setOptionalParams = function (directoryPath, interpreterType, converterType) {
        if (directoryPath != undefined) {
            this.directory = directoryPath;
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
                // create different converter
            }
            else if (converterType == "ESIFF") {
                // create different converter
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
    Resolver.prototype.processConfig = function () {
        // read config file and set paramters
        console.log("Reading config file at: " + this.config);
        fs.readFile(this.config, 'utf8', function (err, data) {
            if (err) {
                console.log(" \t " + err);
                return false;
            }
            else {
                // TODO read config file and ser optionalParams from those values 
            }
        });
        this.setOptionalParams("", "", "");
        return true;
    };
    Resolver.prototype.readGlossary = function () {
        var mrgURL = ""; // create 'scopedir`/`mrgfile` url to download          
        console.log("Loading gloassary from: " + this.scope);
        var safDocument = yaml.load(fs.readFileSync(this.scope, 'utf8'));
        for (var _i = 0, _a = Object.entries(safDocument); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (key == "scope") {
                for (var _c = 0, _d = Object.entries(value); _c < _d.length; _c++) {
                    var _e = _d[_c], innerKey = _e[0], innerValue = _e[1];
                    if (innerKey == "scopedir") {
                        mrgURL = mrgURL + innerValue;
                    }
                    if (innerKey == "glossarydir") {
                        mrgURL = mrgURL + "/" + innerValue;
                    }
                    if (innerKey == "mrgfile") {
                        mrgURL = mrgURL + "/" + innerValue;
                    }
                }
            }
        }
        console.log("The mrg URL is: " + mrgURL);
        if (this.tmpLocalMrgFile) {
            var mrgDocument = yaml.load(fs.readFileSync(this.tmpLocalMrgFile, 'utf8'));
            for (var _f = 0, _g = Object.entries(mrgDocument); _f < _g.length; _f++) {
                var _h = _g[_f], key = _h[0], value = _h[1];
                if (key == "entries") {
                    for (var _j = 0, _k = Object.entries(value); _j < _k.length; _j++) {
                        var _l = _k[_j], innerKey = _l[0], innerValue = _l[1];
                        var term;
                        var url;
                        if (innerKey == "term") {
                            term = innerValue;
                        }
                        if (innerKey == "navurl") {
                            url = innerValue;
                        }
                        this.glossary.set(term, url);
                    }
                }
            }
            console.log(this.glossary.values);
        }
        else {
            // remote mrg file
            console.log("Dowloading MRG from: " + mrgURL);
            var mrgFileDownload = fs.createWriteStream(this.mrgWritePath);
            https.get(mrgURL, function (response) {
                response.pipe(mrgFileDownload);
                mrgFileDownload.on('finish', function () {
                    mrgFileDownload.close();
                });
            }).on('error', function (err) {
                console.log(err);
            });
        }
        return this.glossary;
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
        fs.writeFile((this.output + file), data, function (err) {
            if (err) {
                console.log(" \t " + err);
            }
            else {
                console.log("Writing: " + file);
            }
        });
    };
    Resolver.prototype.interpertAndConvert = function (data) {
        var matches = data.matchAll(this.interpreter.getTermRegex());
        for (var _i = 0, _a = Array.from(matches); _i < _a.length; _i++) {
            var match = _a[_i];
            var termProperties = this.interpreter.interpert(match);
            data = data.replace(this.interpreter.getTermRegex(), this.converter.convert(this.glossary, termProperties));
        }
        return data;
    };
    Resolver.prototype.resolve_terms = function () {
        var _this = this;
        this.glossary = this.readGlossary();
        this.createOutputDir();
        var files = fs.readdirSync(this.directory);
        console.log("Reading " + this.directory + ".....");
        files.forEach(function (file) {
            if (path.extname(file) == ".md" || path.extname(file) == ".html") {
                var data = fs.readFileSync(_this.directory + file, 'utf8');
                console.log("Reading: " + file);
                data = _this.interpertAndConvert(data);
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
