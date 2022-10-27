import { Interpreter } from './Interpreter';
import { Converter } from './Converter';
import { StandardInterpreter } from './StandardInterpreter';
import { MarkdownConverter } from './MarkdownConverter';

import fs = require("fs");
import path = require('path');
import { AltInterpreter } from './AltInterpreter';


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
            if (typeof this.config !== undefined) {
                  this.config = configPath;
                  this.processConfig();
            } else {
                  this.setOptionalParams(directoryPath, interpreterType, covnerterType);
            }
      }

      private setOptionalParams(directoryPath: string, interpreterType: string, converterType: string) {
            if (typeof directoryPath !== undefined) {
                  this.directory = directoryPath;
            }
            if (interpreterType !== undefined) {
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

            if (converterType !== undefined) {
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

      private processConfig(): void {
            // read config file and set paramters
            console.log("Reading config file at: " + this.config);
            fs.readFile(this.config, () => { });
            this.setOptionalParams("", "", "");
      }

      private readGlossary(): Map<string, string> {
            console.log("Loading gloassary from: " + this.scope);
            fs.readFile(this.scope, () => { });
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
                                    this.interpreter.interpertAndConvert(this.converter, this.glossary, file, this.directory);
                              } else {
                                    console.log(file + " does not have a recognised file type (*.md, *.html)");
                              }
                        });
                  }
            });

            return true;
      }
}