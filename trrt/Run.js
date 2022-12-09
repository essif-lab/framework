"use strict";
exports.__esModule = true;
var Resolver_1 = require("./Resolver");
var tslog_1 = require("tslog");
var directoryPath = "C:\\Users\\degachic\\Documents\\workspace\\trrt\\framework-trrt\\docs\\tev2\\tests\\";
var outputPath = "C:\\Users\\degachic\\Documents\\workspace\\trrt\\framework-trrt\\docs\\tev2\\tests_converted\\";
var safPath = "C:\\Users\\degachic\\Documents\\workspace\\trrt\\framework-trrt\\docs\\tev2\\saf.yaml";
function main() {
    var log = new tslog_1.Logger();
    var resolver = new Resolver_1.Resolver(outputPath, safPath, directoryPath);
    if (resolver.resolve()) {
        log.info("Resolution complete...");
    }
    else {
        log.error("Failed to resolve terms, see logs....");
    }
}
main();
