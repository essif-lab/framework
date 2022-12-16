"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resolver = void 0;
var StandardInterpreter_1 = require("./StandardInterpreter");
var MarkdownConverter_1 = require("./MarkdownConverter");
var HTTPConverter_1 = require("./HTTPConverter");
var AltInterpreter_1 = require("./AltInterpreter");
var ESIFFConverter_1 = require("./ESIFFConverter");
var tslog_1 = require("tslog");
var download = require("download");
var fs = require("fs");
var path = require("path");
var yaml = require("js-yaml");
var Resolver = /** @class */ (function () {
    function Resolver(outputPath, scopePath, directoryPath, vsn, configPath, interpreterType, converterType) {
        this.log = new tslog_1.Logger();
        this.tmpLocalMrgFile = ""; // = "C:\\Users\\degachic\\Documents\\workspace\\trrt\\framework-trrt\\docs\\tev2\\glossaries\\mrg.mrgtest.yaml"; // temp
        this.mrgWritePath = "./mrg.yaml";
        this.directory = ".";
        // todo switch scope based on version 
        this.version = "latest";
        this.output = outputPath;
        this.scope = scopePath;
        // process optional paramters if not set in config 
        if (configPath) {
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
        if (config.get("output") != "" || config.get("output")) {
            this.log.trace("Out path is set: ".concat(config.get("output")));
            this.output = config.get("output");
        }
        else if (config.get("scopedir") != "" || config.get("scopedir")) {
            this.log.trace("Scope path is set: ".concat(config.get("scopedir")));
            this.scope = config.get("scopedir");
        }
        // method	<methodarg>	n	Text, the syntax and semantics of which remain to be specified (see also the Editor's note below). When this parameter is omitted, term refs are replaced with some default renderable ref. --> TODO update documentation
        this.setOptionalParams(config.get("input"), config.get("version"), config.get("interpreter"), config.get("converter"));
        return true;
    };
    Resolver.prototype.setOptionalParams = function (directoryPath, vsn, interpreterType, converterType) {
        if (directoryPath) {
            this.directory = directoryPath;
        }
        if (vsn) {
            this.version = vsn;
        }
        if (interpreterType) {
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
        if (converterType) {
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
        if (this.interpreter) {
            return this.interpreter.getType();
        }
        return "";
    };
    Resolver.prototype.getConverterType = function () {
        if (this.converter) {
            return this.converter.getType();
        }
        return "";
    };
    Resolver.prototype.getMrgUrl = function () {
        this.log.trace("Locating MRG from SAF at: " + this.scope);
        var safDocument = new Map(Object.entries(yaml.load(fs.readFileSync(this.scope, 'utf8'))));
        // JSON.stringfy() used to force object to string casting as javascript does not support typing otherwise
        var scopeMap = new Map(Object.entries(yaml.load(JSON.stringify(safDocument.get("scope")))));
        var mrgURL = "";
        // move to seperate fuctions
        if (scopeMap.get("website") != "" && scopeMap.get("website")) {
            this.baseURL = scopeMap.get("website");
        }
        else {
            this.log.error("No website defined in SAF");
        }
        if (scopeMap.get("scopedir") != "" && scopeMap.get("scopedir")) {
            mrgURL = mrgURL + scopeMap.get("scopedir");
        }
        else {
            this.log.error("No scopedir defined in SAF");
            return "";
        }
        if (scopeMap.get("glossarydir") != "" && scopeMap.get("glossarydir")) {
            mrgURL = mrgURL + "/" + scopeMap.get("glossarydir");
        }
        else {
            this.log.error("No glossarydir defined in SAF");
            return "";
        }
        if (scopeMap.get("mrgfile") != "" && scopeMap.get("mrgfile")) {
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
        return __awaiter(this, void 0, void 0, function () {
            var glossary, mrgURL, mrgDocument, _a, _b, _c, mrgDocument;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        glossary = new Map();
                        mrgURL = this.getMrgUrl();
                        if (!this.tmpLocalMrgFile) return [3 /*break*/, 1];
                        mrgDocument = yaml.load(fs.readFileSync(this.tmpLocalMrgFile, 'utf8'));
                        this.populateGlossary(mrgDocument, glossary);
                        this.log.info("Populated glossary of ".concat(this.scope, ":").concat(this.version));
                        console.log(glossary);
                        return [2 /*return*/, glossary];
                    case 1:
                        if (!(mrgURL != "")) return [3 /*break*/, 3];
                        // TODO make sure this is synchronus 
                        this.log.trace("Downloading MRG....");
                        _b = (_a = fs).writeFileSync;
                        _c = [this.mrgWritePath];
                        return [4 /*yield*/, download(mrgURL)];
                    case 2:
                        _b.apply(_a, _c.concat([_d.sent()]));
                        mrgDocument = yaml.load(fs.readFileSync(this.mrgWritePath, 'utf8'));
                        this.log.info("MRG loaded: ".concat(mrgDocument));
                        this.populateGlossary(mrgDocument, glossary);
                        this.log.info("Populated gloassary of ".concat(this.scope, ":").concat(this.version));
                        console.log(glossary);
                        return [2 /*return*/, glossary];
                    case 3:
                        this.log.error("No MRG to download, glossary empty");
                        return [2 /*return*/, glossary];
                }
            });
        });
    };
    Resolver.prototype.populateGlossary = function (mrgDocument, glossary) {
        var mrg = new Map(Object.entries(mrgDocument));
        for (var _i = 0, _a = Object.entries(mrg.get("entries")); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            var alternatives;
            var innerValues = new Map(Object.entries(yaml.load(JSON.stringify(value))));
            if (innerValues.get("formPhrases")) {
                alternatives = innerValues.get("formPhrases").split(",");
                alternatives.forEach(function (t) { return t.trim(); });
                // todo double check the white spaces in this glossary 
                for (var _c = 0, alternatives_1 = alternatives; _c < alternatives_1.length; _c++) {
                    var alternative = alternatives_1[_c];
                    if (alternative.includes("{")) {
                        if (alternative.includes("{ss}")) {
                            alternatives.push(alternative.replace("{ss}", "s"));
                            if (alternative.replace("{ss}", "") in alternatives) {
                                alternatives.push(alternative.replace("{ss}", ""));
                            }
                        }
                        else if (alternative.includes("{yies}")) {
                            alternatives.push(alternative.replace("{yies}", "ies"));
                            if (alternative.replace("{yies}", "y") in alternatives) {
                                alternatives.push(alternative.replace("{yies}", "y"));
                            }
                        }
                        else if (alternative.includes("{ying}")) {
                            alternatives.push(alternative.replace("{ying}", "ing"));
                            if (alternative.replace("{ying}", "y") in alternatives) {
                                alternatives.push(alternative.replace("{ying}", "y"));
                            }
                        }
                    }
                }
                glossary.set(innerValues.get("term"), "".concat(this.baseURL, "/").concat(innerValues.get("navurl")));
                for (var _d = 0, _e = alternatives.filter(function (s) { return !s.includes("{"); }); _d < _e.length; _d++) {
                    var alternative = _e[_d];
                    glossary.set(alternative, "".concat(this.baseURL, "/").concat(innerValues.get("navurl")));
                }
            }
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
        return true;
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
        return __awaiter(this, void 0, void 0, function () {
            var files;
            var _this = this;
            return __generator(this, function (_a) {
                this.createOutputDir();
                files = fs.readdirSync(this.directory);
                this.log.info("Reading " + this.directory + ".....");
                files.forEach(function (file) { return __awaiter(_this, void 0, void 0, function () {
                    var data, _a, _b;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                if (!(path.extname(file) == ".md" || path.extname(file) == ".html")) return [3 /*break*/, 2];
                                data = fs.readFileSync(this.directory + file, 'utf8');
                                this.log.trace("Reading: " + file);
                                _a = this.interpertAndConvert;
                                _b = [data];
                                return [4 /*yield*/, this.readGlossary()];
                            case 1:
                                data = _a.apply(this, _b.concat([_c.sent()]));
                                this.writeFile(file, data);
                                return [3 /*break*/, 3];
                            case 2:
                                this.log.error(file + " does not have a recognised file type (*.md, *.html)");
                                _c.label = 3;
                            case 3: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/, true];
            });
        });
    };
    return Resolver;
}());
exports.Resolver = Resolver;
