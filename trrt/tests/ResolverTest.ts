import { describe, expect, test, beforeEach, afterEach } from '@jest/globals';
import exp = require('constants');
import { Resolver } from '../Resolver';

beforeEach(() => { });

afterEach(() => { });

describe('construct resolver without config file or optional pramaters', () => {
     test('if not config file and not optional paramters use default values', () => {
          var resolver: Resolver = new Resolver("", "");
          expect(resolver.getDirectory).toBe(".");
          expect(resolver.getInterpreterType).toBe("Standard");
          expect(resolver.getConverterType).toBe("Markdown");
     });
});

describe('construct resolver with config file and no optional pramaters', () => {
     test('if config file and not optional paramters use config values', () => {
          var resolver: Resolver = new Resolver("", "", "");
          expect(resolver.getDirectory).toBe("/config-directory");
          expect(resolver.getInterpreterType).toBe("config-interpreter");
          expect(resolver.getConverterType).toBe("config-converter");
     });
});

describe('construct resolver with no config file and optional pramaters', () => {
     test('if not config file and optional paramters use optional pramaters', () => {
          var resolver: Resolver = new Resolver("", "", "");
          expect(resolver.getDirectory).toBe("/optional-directory");
          expect(resolver.getInterpreterType).toBe("optional-interpreter");
          expect(resolver.getConverterType).toBe("optional-converter");
     });
});

describe('construct resolver with config file and optional pramaters', () => {
     test('if both config file and optional paramters use optional pramaters', () => {
          var resolver: Resolver = new Resolver("", "", "");
          expect(resolver.getDirectory).toBe("/optional-directory");
          expect(resolver.getInterpreterType).toBe("optional-interpreter");
          expect(resolver.getConverterType).toBe("optional-converter");
     });
});

describe('get correct mrg url from saf file', () => {
     test("if scope glossary and mrg paths are defined in saf get mrg url", () => {
          var resolver: Resolver = new Resolver("/", "/resources/test-saf.yaml");
          expect(resolver['getMrgUrl']).toBe("http://test.gitlab.com/test/test-saf-mrg.yaml");
     });

});

describe('get empty mrg url from incorrect saf file', () => {
     test("if not scope glossary or mrg paths defined in saf get empty mrg url", () => {
          var resolver: Resolver = new Resolver("/", "/resources/empty-test-saf.yaml");
          expect(resolver['getMrgUrl']).toBe("");
     });
});

describe('get empty glossary from missing mrg url', () => {
     test("if not scope glossary or mrg paths defined in saf get empty mrg url", () => {
          var resolver: Resolver = new Resolver("/", "/resources/empty-test-saf.yaml");
          expect(resolver['readGlossary']).toHaveLength(0);
     });
});

describe('get <term, url> glossary from well defined mrg', () => {
     test("if mrg url is correct and mrg is correctly defined so that there is an srray of terms and they all have corresponding navurls  return a correctly structured glosssary object", () => {
          var resolver: Resolver = new Resolver("/", "/resources/test-saf.yaml");
          var gloassary: Map<string, string>;
          gloassary.set("concept", "http://test.gitlab.com/test/test-concept.md")
          expect(resolver['readGlossary']).toEqual(gloassary);
     })
});

describe("get <term, empty> glossary from missing navurl mrg", () => {
     test("if mrg url is correct but mrg entries have terms with missing navurls return glossary object with a map from terms to empty strings", () => {
          // todo
     })
});