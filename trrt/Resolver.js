"use strict";
exports.__esModule = true;
exports.Resolver = void 0;
var StandardInterpreter_1 = require("./StandardInterpreter");
var MarkdownConverter_1 = require("./MarkdownConverter");
var AltInterpreter_1 = require("./AltInterpreter");
var fs = require("fs");
var path = require("path");
var yaml = require("js-yaml");
var console = require("console");
var Resolver = /** @class */ (function () {
    function Resolver(outputPath, scopePath, directoryPath, configPath, interpreterType, covnerterType) {
        this.localMargFile = "C:\\Users\\degachic\\Documents\\workspace\\trrt\\framework-trrt\\docs\\tev2\\glossaries\\mrg.mrgtest.yaml"; // temp
        this.config = "";
        this.directory = ".";
        this.version = "";
        this.glossary = new Map();
        this.output = outputPath;
        this.scope = scopePath;
        // process optional paramters if not set in config 
        if (configPath != undefined) {
            console.log("config path is set");
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
            }
        });
        this.setOptionalParams("", "", "");
        return true;
    };
    Resolver.prototype.readGlossary = function () {
        var _this = this;
        var mrgURL = ""; // create 'scopedir`/`mrgfile` url to download
        fs.readFile(this.scope, 'utf8', function (err, data) {
            if (err) {
                console.log(" \t " + err);
                return null;
            }
            else {
                console.log("Loading gloassary from: " + _this.scope);
                var safDocument = yaml.load(data);
                for (var _i = 0, _a = Object.entries(safDocument); _i < _a.length; _i++) {
                    var _b = _a[_i], key = _b[0], value = _b[1];
                    if (key == "scope") {
                        for (var _c = 0, _d = Object.entries(value); _c < _d.length; _c++) {
                            var _e = _d[_c], innerKey = _e[0], innerValue = _e[1];
                            if (innerKey == "scopedir") {
                                mrgURL = mrgURL + innerValue;
                            }
                            if (innerKey == "mrgfile") {
                                mrgURL = mrgURL + "/glossaries/" + innerValue;
                            }
                        }
                    }
                }
                // remote mrg file
                // console.log("Dowloading MRG from: " + mrgURL);
                // var mrgFileDownload = fs.createWriteStream(this.localMargFile);
                // https.get(mrgURL, function (response) {
                //       response.pipe(mrgFileDownload);
                //       mrgFileDownload.on('finish', function () {
                //             mrgFileDownload.close();
                //       });
                // }).on('error', function (err) {
                //       console.log(err)
                // });
            }
        });
        fs.readFile(this.localMargFile, 'utf8', function (err, data) {
            if (err) {
                console.log(err);
            }
            else {
                var mrgDocument = yaml.load(data);
                for (var _i = 0, _a = Object.entries(mrgDocument); _i < _a.length; _i++) {
                    var _b = _a[_i], key = _b[0], value = _b[1];
                    _this.glossary.set(key, value);
                }
                console.log(_this.glossary);
            }
        });
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
    Resolver.prototype.resolve_terms = function () {
        var _this = this;
        this.glossary = this.readGlossary();
        this.createOutputDir();
        fs.readdir(this.directory, function (err, files) {
            console.log("Reading " + _this.directory + ".....");
            if (err) {
                console.log("\t " + err);
                return false;
            }
            else {
                files.forEach(function (file) {
                    if (path.extname(file) == ".md" || path.extname(file) == ".html") {
                        fs.readFile(_this.directory + file, 'utf8', function (err, data) {
                            if (err) {
                                console.log(" \t " + err);
                            }
                            else {
                                console.log("Reading: " + file);
                                var termProperties = _this.interpreter.interpert(data);
                                data = _this.converter.convert(data, _this.glossary, termProperties);
                                _this.writeFile(file, data);
                            }
                        });
                    }
                    else {
                        console.log(file + " does not have a recognised file type (*.md, *.html)");
                    }
                });
            }
        });
        return true;
    };
    return Resolver;
}());
exports.Resolver = Resolver;
