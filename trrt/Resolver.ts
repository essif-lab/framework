import { Interpreter } from './Interpreter';
import { Converter } from './Converter';
import { StandardInterpreter } from './StandardInterpreter';
import { MarkdownConverter } from './MarkdownConverter';
import { AltInterpreter } from './AltInterpreter';

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

      public constructor(outputPath: string, scopePath: string, directoryPath?: string, configPath?: string, interpreterType?: string, covnerterType?: string) {
            this.output = outputPath;
            this.scope = scopePath;

            // process optional paramters if not set in config 
            if (configPath != undefined) {
                  console.log("config path is set by user")
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
            var file: string = fs.readFileSync(this.config, 'utf8');
            this.setOptionalParams("", "", "");
            return true;
      }

      private readGlossary(): Map<string, string> {
            var glossary: Map<string, string> = new Map();
            if (this.tmpLocalMrgFile) {
                  const mrgDocument: Object = yaml.load(fs.readFileSync(this.tmpLocalMrgFile, 'utf8'));
                  this.populateGlossary(mrgDocument, glossary);
                  console.log(glossary);
            } else {
                  // remote mrg file            
                  var mrgURL: string = ""; // create 'scopedir`/`mrgfile` url to download          
                  console.log("Loading gloassary from: " + this.scope);
                  const safDocument: Object = yaml.load(fs.readFileSync(this.scope, 'utf8'));
                  for (const [key, value] of Object.entries(safDocument)) {
                        if (key == "scope") {
                              for (const [innerKey, innerValue] of Object.entries(value)) {
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

            return glossary;
      }

      private populateGlossary(mrgDocument: Object, glossary: Map<string, string>): Map<string, string> {
            for (const [key, value] of Object.entries(mrgDocument)) {
                  if (key == "entries") {
                        for (const [innerKey, innerValue] of Object.entries(value)) {
                              for (const [innermostKey, innermostValue] of Object.entries(innerValue)) {
                                    var term: string;
                                    var url: string;
                                    if (innermostKey == "term") {
                                          term = innermostValue as string;
                                    }
                                    if (innermostKey == "navurl") {
                                          url = innermostValue as string;
                                    }
                                    glossary.set(term, url);
                              }
                        }
                  }
            }
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
                        console.log("Replacing the match")
                        data = data.replace(this.interpreter.getLocalTermRegex(), replacement);
                  }
            }
            return data;
      }

      public resolve_terms(): boolean {
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