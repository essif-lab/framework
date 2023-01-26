#!/usr/bin/env node
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
var Resolver_1 = require("./Resolver");
var tslog_1 = require("tslog");
var chalk = require("chalk");
var clear = require("clear");
var figlet = require("figlet");
var program = require("commander");
// const directoryPath: string = "C:\\Users\\degachic\\Documents\\workspace\\trrt\\framework-trrt\\docs\\tev2\\tests\\";
// const outputPath: string = "C:\\Users\\degachic\\Documents\\workspace\\trrt\\framework-trrt\\docs\\tev2\\tests_converted\\";
// const safPath = "C:\\Users\\degachic\\Documents\\workspace\\trrt\\framework-trrt\\docs\\tev2\\saf.yaml";
clear();
console.log(chalk.red(figlet.textSync('trrt-cli', { horizontalLayout: 'full' })));
program
    .version('0.0.0')
    .description("A CLI for the Term Reference Resolution Toolkit")
    .option('-o, --output <path>', 'Path to outut converted files to (required)')
    .option('-s, --saf <path>', 'Path to read SAF file from (required)')
    .option('-c, --config <path>', 'Path to configuration .yaml file')
    .option('-d, --directory <path>', 'Path to directory where input files are located')
    .option('-V, --defaultversion <vsn>', 'Default version to use when no version is set in term')
    .option('-I, --interpreter <type>', 'Set interpreter to Standard or Alt syntax')
    .option('-C, --converter <type>', 'Set converter to Mardownd HTTP or ESIFF output')
    .parse(process.argv);
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var log, resolver;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    log = new tslog_1.Logger();
                    if (!(!program.output || !program.saf)) return [3 /*break*/, 1];
                    program.outputHelp();
                    return [3 /*break*/, 3];
                case 1:
                    resolver = new Resolver_1.Resolver({ outputPath: program.output, scopePath: program.saf, directoryPath: program.directory, vsn: program.defaultversion, configPath: program.config, interpreterType: program.interpreter, converterType: program.converter });
                    return [4 /*yield*/, resolver.resolve()];
                case 2:
                    if (_a.sent()) {
                        log.info("Resolution complete...");
                    }
                    else {
                        log.error("Failed to resolve terms, see logs....");
                    }
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    });
}
main();
