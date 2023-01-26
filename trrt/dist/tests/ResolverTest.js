"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var globals_1 = require("@jest/globals");
var Resolver_1 = require("../Resolver");
(0, globals_1.beforeEach)(function () { });
(0, globals_1.afterEach)(function () { });
(0, globals_1.describe)('construct resolver without config file or optional pramaters', function () {
    (0, globals_1.test)('if not config file and not optional paramters use default values', function () {
        var resolver = new Resolver_1.Resolver({ outputPath: "", scopePath: "" });
        (0, globals_1.expect)(resolver.getDirectory).toBe(".");
        (0, globals_1.expect)(resolver.getInterpreterType).toBe("Standard");
        (0, globals_1.expect)(resolver.getConverterType).toBe("Markdown");
    });
});
(0, globals_1.describe)('construct resolver with config file and no optional pramaters', function () {
    (0, globals_1.test)('if config file and not optional paramters use config values', function () {
        var resolver = new Resolver_1.Resolver({ outputPath: "", scopePath: "", directoryPath: "" });
        (0, globals_1.expect)(resolver.getDirectory).toBe("/config-directory");
        (0, globals_1.expect)(resolver.getInterpreterType).toBe("config-interpreter");
        (0, globals_1.expect)(resolver.getConverterType).toBe("config-converter");
    });
});
(0, globals_1.describe)('construct resolver with no config file and optional pramaters', function () {
    (0, globals_1.test)('if not config file and optional paramters use optional pramaters', function () {
        var resolver = new Resolver_1.Resolver({ outputPath: "", scopePath: "", directoryPath: "" });
        (0, globals_1.expect)(resolver.getDirectory).toBe("/optional-directory");
        (0, globals_1.expect)(resolver.getInterpreterType).toBe("optional-interpreter");
        (0, globals_1.expect)(resolver.getConverterType).toBe("optional-converter");
    });
});
(0, globals_1.describe)('construct resolver with config file and optional pramaters', function () {
    (0, globals_1.test)('if both config file and optional paramters use optional pramaters', function () {
        var resolver = new Resolver_1.Resolver({ outputPath: "", scopePath: "", directoryPath: "" });
        (0, globals_1.expect)(resolver.getDirectory).toBe("/optional-directory");
        (0, globals_1.expect)(resolver.getInterpreterType).toBe("optional-interpreter");
        (0, globals_1.expect)(resolver.getConverterType).toBe("optional-converter");
    });
});
(0, globals_1.describe)('get correct mrg url from saf file', function () {
    (0, globals_1.test)("if scope glossary and mrg paths are defined in saf get mrg url", function () {
        var resolver = new Resolver_1.Resolver({ outputPath: "/", scopePath: "/resources/test-saf.yaml" });
        (0, globals_1.expect)(resolver['getMrgUrl']).toBe("http://test.gitlab.com/test/test-saf-mrg.yaml");
    });
});
(0, globals_1.describe)('get empty mrg url from incorrect saf file', function () {
    (0, globals_1.test)("if not scope glossary or mrg paths defined in saf get empty mrg url", function () {
        var resolver = new Resolver_1.Resolver({ outputPath: "/", scopePath: "/resources/empty-test-saf.yaml" });
        (0, globals_1.expect)(resolver['getMrgUrl']).toBe("");
    });
});
(0, globals_1.describe)('get empty glossary from missing mrg url', function () {
    (0, globals_1.test)("if not scope glossary or mrg paths defined in saf get empty mrg url", function () {
        var resolver = new Resolver_1.Resolver({ outputPath: "/", scopePath: "/resources/empty-test-saf.yaml" });
        (0, globals_1.expect)(resolver['readGlossary']).toHaveLength(0);
    });
});
(0, globals_1.describe)('get <term, url> glossary from well defined mrg', function () {
    (0, globals_1.test)("if mrg url is correct and mrg is correctly defined so that there is an srray of terms and they all have corresponding navurls  return a correctly structured glosssary object", function () {
        var resolver = new Resolver_1.Resolver({ outputPath: "/", scopePath: "/resources/test-saf.yaml" });
        var gloassary = new Map();
        gloassary.set("concept", "http://test.gitlab.com/test/test-concept.md");
        (0, globals_1.expect)(resolver['readGlossary']).toEqual(gloassary);
    });
});
(0, globals_1.describe)("get <term, empty> glossary from missing navurl mrg", function () {
    (0, globals_1.test)("if mrg url is correct but mrg entries have terms with missing navurls return glossary object with a map from terms to empty strings", function () {
        var resolver = new Resolver_1.Resolver({ outputPath: "/", scopePath: "/resources/broken-mrg-saf.yaml" });
        var gloassary = new Map();
        gloassary.set("concept", "");
        (0, globals_1.expect)(resolver['readGlossary']).toEqual(gloassary);
    });
});
// todo overall resolve test 
