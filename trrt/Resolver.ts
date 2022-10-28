import { Interpreter } from './Interpreter';
import { Converter } from './Converter';
import { StandardInterpreter } from './StandardInterpreter';
import { MarkdownConverter } from './MarkdownConverter';
import { AltInterpreter } from './AltInterpreter';

import fs = require("fs");
import path = require('path');
import yaml = require('js-yaml');
import http = require('http');

export class Resolver {
      private output: string;
      private scope: string;

      private config: string = "";
      private directory: string = ".";
      private version: string = "";

      private converter: Converter;
      private interpreter: Interpreter;
      private glossary: Map<string, string> = new Map();

      public constructor(outputPath: string, scopePath: string, directoryPath?: string, configPath?: string, interpreterType?: string, covnerterType?: string) {
            this.output = outputPath;
            this.scope = scopePath;

            // process optional paramters if not set in config 
            if (configPath != undefined) {
                  console.log("config path is set")
                  this.config = configPath;
                  this.processConfig();
            } else {
                  this.setOptionalParams(directoryPath, interpreterType, covnerterType);
            }
      }

      private setOptionalParams(directoryPath: string, interpreterType: string, converterType: string) {
            if (directoryPath != undefined) {
                  this.directory = directoryPath;
            }
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
                        // create different converter
                  } else if (converterType == "ESIFF") {
                        // create different converter
                  } else {
                        console.log(converterType + " is not a known converter, creating Markdown converter.");
                        this.converter = new MarkdownConverter();
                  }
            } else {
                  this.converter = new MarkdownConverter();
            }
      }

      private processConfig(): boolean {
            // read config file and set paramters
            console.log("Reading config file at: " + this.config);
            fs.readFile(this.config, 'utf8', (err: Error, data: string) => {
                  if (err) {
                        console.log(" \t " + err);
                        return false;
                  } else {

                  }
            });
            this.setOptionalParams("", "", "");
            return true;
      }

      private readGlossary(): Map<string, string> {
            var mrgURL: string = ""; // create 'scopedir`/`mrgfile` url to download
            fs.readFile(this.scope, 'utf8', (err: Error, data: string) => {
                  if (err) {
                        console.log(" \t " + err);
                        return null;
                  } else {
                        console.log("Loading gloassary from: " + this.scope);
                        const safDocument: Object = yaml.load(data);
                        for (const [key, value] of Object.entries(safDocument)) {
                              if (key == "scope") {
                                    for (const [innerKey, innerValue] of Object.entries(value)) {
                                          if (innerKey == "scopedir") {
                                                mrgURL = mrgURL + innerValue;
                                          }
                                          if (innerKey == "mrgfile") {
                                                mrgURL = mrgURL + "/" + innerValue;
                                          }
                                    }
                              }
                        }

                        console.log("Dowloading MRG from: " + mrgURL);
                        var mrgFile = fs.createWriteStream("");
                        http.get(mrgURL, function (response) {
                              response.pipe(mrgFile);
                              mrgFile.on('finish', function () {
                                    mrgFile.close();
                              });
                        }).on('error', function (err) {
                              throw err;
                        });
                  }
            });
            return null;
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
            fs.writeFile((this.output + file), data, (err) => {
                  if (err) {
                        console.log(" \t " + err);
                  } else {
                        console.log("Writing: " + file);
                  }
            });
      }

      public resolve_terms(): boolean {
            this.glossary = this.readGlossary();
            this.createOutputDir();

            fs.readdir(this.directory, (err: Error, files: Array<string>) => {
                  console.log("Reading " + this.directory + ".....");
                  if (err) {
                        console.log("\t " + err);
                        return false;
                  } else {
                        files.forEach(file => {
                              if (path.extname(file) == ".md" || path.extname(file) == ".html") {
                                    fs.readFile(this.directory + file, 'utf8', (err: Error, data: string) => {
                                          if (err) {
                                                console.log(" \t " + err);
                                          } else {
                                                console.log("Reading: " + file);
                                                var termProperties: Array<Map<string, string>> = this.interpreter.interpert(data);
                                                data = this.converter.convert(data, this.glossary, termProperties);
                                                this.writeFile(file, data);
                                          }
                                    });
                              } else {
                                    console.log(file + " does not have a recognised file type (*.md, *.html)");
                              }
                        });
                  }
            });

            return true;
      }
}