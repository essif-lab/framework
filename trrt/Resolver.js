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
var tslog_1 = require("tslog");
var Resolver = /** @class */ (function () {
    function Resolver(outputPath, scopePath, directoryPath, vsn, configPath, interpreterType, converterType) {
        this.log = new tslog_1.Logger();
        this.mrgWritePath = "./mrg.yaml";
        this.directory = ".";
        this.output = outputPath;
        this.scope = scopePath;
        // process optional paramters if not set in config 
        if (configPath != undefined) {
            this.config = configPath;
            this.processConfig();
        }
        else {
            this.setOptionalParams(directoryPath, vsn, interpreterType, converterType);
        }
    }
    Resolver.prototype.processConfig = function () {
        // read config file and set paramters
        this.log.trace("Config path is set: ".concat(this.config));
        var config = new Map(Object.entries(yaml.load(fs.readFileSync(this.config, 'utf8'))));
        if (config.get("output") != "" || config.get("output") != undefined) {
            this.log.trace("Out path is set: ".concat(config.get("output")));
            this.output = config.get("output");
        }
        else if (config.get("scopedir") != "" || config.get("scopedir") != undefined) {
            this.log.trace("Scope path is set: ".concat(config.get("scopedir")));
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
                this.log.error(interpreterType + " is not a known interpreter, creating standard interpreter.");
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
                this.log.error(converterType + " is not a known converter, creating Markdown converter.");
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
        this.log.trace("Locating MRG from SAF at: " + this.scope);
        var safDocument = new Map(Object.entries(yaml.load(fs.readFileSync(this.scope, 'utf8'))));
        // JSON.stringfy() used to force object to string casting as javascript does not support typing otherwise
        var scopeMap = new Map(Object.entries(yaml.load(JSON.stringify(safDocument.get("scope")))));
        var mrgURL = "";
        if (scopeMap.get("scopedir") != "" && scopeMap.get("scopedir") != undefined) {
            mrgURL = mrgURL + scopeMap.get("scopedir");
        }
        else {
            this.log.error("No scopedir defined in SAF");
            return "";
        }
        if (scopeMap.get("glossarydir") != "" && scopeMap.get("glossarydir") != undefined) {
            mrgURL = mrgURL + "/" + scopeMap.get("glossarydir");
        }
        else {
            this.log.error("No glossarydir defined in SAF");
            return "";
        }
        if (scopeMap.get("mrgfile") != "" && scopeMap.get("mrgfile") != undefined) {
            mrgURL = mrgURL + "/" + scopeMap.get("mrgfile");
        }
        else {
            this.log.error("No mrgfile defined in SAF");
            return "";
        }
        this.log.trace("MRG URL is: ".concat(mrgURL));
        return mrgURL;
    };
    Resolver.prototype.readGlossary = function () {
        var glossary = new Map();
        if (this.tmpLocalMrgFile) {
            var mrgDocument = yaml.load(fs.readFileSync(this.tmpLocalMrgFile, 'utf8'));
            this.populateGlossary(mrgDocument, glossary);
            this.log.info("Populated gloassary of ".concat(this.scope, ":").concat(this.version, ": ").concat(glossary));
        }
        else {
            // remote mrg file            
            var mrgURL = this.getMrgUrl();
            if (mrgURL != "") {
                // TODO make sure this is synchronus 
                var mrgFileDownload = fs.createWriteStream(this.mrgWritePath);
                https.get(mrgURL, function (response) {
                    this.log.trace("Downloading MRG....");
                    response.pipe(mrgFileDownload);
                    mrgFileDownload.on('finish', function () {
                        mrgFileDownload.close();
                    });
                }).on('error', function (err) {
                    this.log.error(err);
                });
                var mrgDocument = yaml.load(fs.readFileSync(this.mrgWritePath, 'utf8'));
                this.log.info("MRG loaded: ".concat(mrgDocument));
                this.populateGlossary(mrgDocument, glossary);
                this.log.info("Populated gloassary of ".concat(this.scope, ":").concat(this.version, ": ").concat(glossary));
            }
        }
        return glossary;
    };
    Resolver.prototype.populateGlossary = function (mrgDocument, glossary) {
        var mrg = new Map(Object.entries(mrgDocument));
        for (var _i = 0, _a = Object.entries(mrg.get("entries")); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            var stringValue = JSON.stringify(value);
            var innerValues = new Map(Object.entries(yaml.load(stringValue)));
            glossary.set(innerValues.get("term"), innerValues.get("navurl"));
        }
        return glossary;
    };
    Resolver.prototype.createOutputDir = function () {
        var _this = this;
        if (!fs.existsSync(this.output)) {
            this.log.info("Creating output directoy: " + this.output + ".....");
            fs.mkdir(this.output, function (err) {
                if (err) {
                    _this.log.error(err);
                    return false;
                }
            });
            return true;
        }
    };
    Resolver.prototype.writeFile = function (file, data) {
        this.log.trace("Writing: " + file);
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
        this.log.info("Reading " + this.directory + ".....");
        files.forEach(function (file) {
            if (path.extname(file) == ".md" || path.extname(file) == ".html") {
                var data = fs.readFileSync(_this.directory + file, 'utf8');
                _this.log.trace("Reading: " + file);
                data = _this.interpertAndConvert(data, _this.readGlossary());
                _this.writeFile(file, data);
            }
            else {
                _this.log.error(file + " does not have a recognised file type (*.md, *.html)");
            }
        });
        return true;
    };
    return Resolver;
}());
exports.Resolver = Resolver;
