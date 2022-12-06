import { Interpreter } from './Interpreter';
import { Converter } from './Converter';
import { StandardInterpreter } from './StandardInterpreter';
import { MarkdownConverter } from './MarkdownConverter';
import { HTTPConverter } from './HTTPConverter';
import { AltInterpreter } from './AltInterpreter';
import { ESSIFConverter } from './ESIFFConverter'

import fs = require("fs");
import path = require('path');
import yaml = require('js-yaml');
import https = require('https');
import console = require('console');


export class Resolver {
      private output: string;
      private scope: string;
      private tmpLocalMrgFile = "C:\\Users\\degachic\\Documents\\workspace\\trrt\\framework-trrt\\docs\\tev2\\glossaries\\mrg.mrgtest.yaml"; // temp
      private mrgWritePath = "/mrg.yaml"
      private config: string = "";
      private directory: string = ".";

      // todo switch scope based on version 
      private version: string = "";

      private converter: Converter;
      private interpreter: Interpreter;

      public constructor(outputPath: string, scopePath: string, directoryPath?: string, vsn?: string, configPath?: string, interpreterType?: string, converterType?: string) {
            this.output = outputPath;
            this.scope = scopePath;

            // process optional paramters if not set in config 
            if (configPath != undefined) {
                  console.log("config path is set by user")
                  this.config = configPath;
                  this.processConfig();
            } else {
                  this.setOptionalParams(directoryPath, vsn, interpreterType, converterType);
            }
      }

      private processConfig(): boolean {
            // read config file and set paramters
            console.log("Reading config file at: " + this.config);
            const config: Map<string, string> = new Map(Object.entries(yaml.load(fs.readFileSync(this.config, 'utf8'))));

            if (config.get("output") != "" || config.get("output") != undefined) {
                  this.output = config.get("output");
            } else if (config.get("scopedir") != "" || config.get("scopedir") != undefined) {
                  this.scope = config.get("scopedir");
            }

            // method	<methodarg>	n	Text, the syntax and semantics of which remain to be specified (see also the Editor's note below). When this parameter is omitted, term refs are replaced with some default renderable ref. --> TODO update documentation
            this.setOptionalParams(config.get("input"), config.get("version"), config.get("interpreter"), config.get("converter"));
            return true;
      }

      private setOptionalParams(directoryPath: string, vsn: string, interpreterType: string, converterType: string) {
            if (directoryPath != undefined) { this.directory = directoryPath; }
            if (vsn != undefined) { this.version = vsn; }
            if (interpreterType != undefined) {
                  if (interpreterType == "Standard") {
                        this.interpreter = new StandardInterpreter();
                  } else if (interpreterType == "Alt") {
                        this.interpreter = new AltInterpreter();
                  } else {
                        console.log(interpreterType + " is not a known interpreter, creating standard interpreter.");
                        this.interpreter = new StandardInterpreter();
                  }
            } else {
                  this.interpreter = new StandardInterpreter();
            }

            if (converterType != undefined) {
                  if (converterType == "Markdown") {
                        this.converter = new MarkdownConverter();
                  } else if (converterType == "HTTP") {
                        this.converter = new HTTPConverter();
                  } else if (converterType == "ESIFF") {
                        this.converter = new ESSIFConverter();
                  } else {
                        console.log(converterType + " is not a known converter, creating Markdown converter.");
                        this.converter = new MarkdownConverter();
                  }
            } else {
                  this.converter = new MarkdownConverter();
            }
      }

      public getDirectory(): string {
            return this.directory;
      }

      public getInterpreterType(): string {
            return this.interpreter.getType();
      }

      public getConverterType(): string {
            return this.converter.getType();
      }

      private getMrgUrl(): string {
            var mrgURL: string = "";
            console.log("Loading gloassary from: " + this.scope);
            const safDocument: Object = yaml.load(fs.readFileSync(this.scope, 'utf8'));
            for (const [key, value] of Object.entries(safDocument)) {
                  if (key == "scope") {
                        for (const [innerKey, innerValue] of Object.entries(value)) {
                              if (innerKey == "scopedir") {
                                    if (innerValue != "" && innerValue != undefined) {
                                          mrgURL = mrgURL + innerValue;
                                    } else {
                                          console.log("No scope directory defined in SAF");
                                          return "";
                                    }
                              }
                              if (innerKey == "glossarydir") {
                                    if (innerValue != "" && innerValue != undefined) {
                                          mrgURL = mrgURL + "/" + innerValue;
                                    } else {
                                          console.log("No glossary directory defined in SAF");
                                          return "";
                                    }
                              }
                              if (innerKey == "mrgfile") {
                                    if (innerValue != "" && innerValue != undefined) {
                                          mrgURL = mrgURL + "/" + innerValue;
                                    } else {
                                          console.log("No MRG file defined in SAF");
                                          return "";
                                    }
                              }
                        }
                  }
            }
            return mrgURL;
      }

      private readGlossary(): Map<string, string> {
            var glossary: Map<string, string> = new Map();
            if (this.tmpLocalMrgFile) {
                  const mrgDocument: Object = yaml.load(fs.readFileSync(this.tmpLocalMrgFile, 'utf8'));
                  this.populateGlossary(mrgDocument, glossary);
                  console.log(glossary);
            } else {
                  // remote mrg file            
                  var mrgURL: string = this.getMrgUrl();
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
                              console.log(err)
                        });

                        const mrgDocument: Object = yaml.load(fs.readFileSync(this.mrgWritePath, 'utf8'));
                        this.populateGlossary(mrgDocument, glossary);
                        console.log(glossary);
                  }
            }

            return glossary;
      }


      private populateGlossary(mrgDocument: Object, glossary: Map<string, string>): Map<string, string> {
            const mrg: Map<string, string> = new Map(Object.entries(mrgDocument));
            const entries: Map<string, string> = new Map(Object.entries(mrg.get("entries")));
            entries.forEach((key, value) => {
                  const innerValues: Map<string, string> = new Map(Object.entries(yaml.load(value)));
                  glossary.set(innerValues.get("term"), innerValues.get("navurl"));
            })

            return glossary;
      }

      private createOutputDir(): boolean {
            if (!fs.existsSync(this.output)) {
                  console.log("Creating output directoy " + this.output + ".....");
                  fs.mkdir(this.output, (err) => {
                        if (err) {
                              console.log(err);
                              return false;
                        }
                  });
                  return true;
            }
      }

      private writeFile(file: string, data: string) {
            console.log("Writing: " + file);
            fs.writeFileSync(this.output + file, data);
      }

      private interpertAndConvert(data: string, glossary: Map<string, string>): string {
            const matches: IterableIterator<RegExpMatchArray> = data.matchAll(this.interpreter.getGlobalTermRegex());
            for (const match of Array.from(matches)) {
                  var termProperties: Map<string, string> = this.interpreter.interpert(match);
                  var replacement = this.converter.convert(glossary, termProperties);
                  if (replacement != "") {
                        data = data.replace(this.interpreter.getLocalTermRegex(), replacement);
                  }
            }
            return data;
      }

      public resolve(): boolean {
            this.createOutputDir();
            var files = fs.readdirSync(this.directory);
            console.log("Reading " + this.directory + ".....");

            files.forEach(file => {
                  if (path.extname(file) == ".md" || path.extname(file) == ".html") {
                        var data = fs.readFileSync(this.directory + file, 'utf8')
                        console.log("Reading: " + file);
                        data = this.interpertAndConvert(data, this.readGlossary())
                        this.writeFile(file, data);
                  } else {
                        console.log(file + " does not have a recognised file type (*.md, *.html)");
                  }
            });
            return true;
      }


}