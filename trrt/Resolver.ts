import { Interpreter } from './Interpreter';
import { Converter } from './Converter';
import { StandardInterpreter } from './StandardInterpreter';
import { MarkdownConverter } from './MarkdownConverter';
import { HTTPConverter } from './HTTPConverter';
import { AltInterpreter } from './AltInterpreter';
import { ESSIFConverter } from './ESIFFConverter'
import { Logger } from 'tslog';

import download = require('download');
import fs = require("fs");
import path = require('path');
import yaml = require('js-yaml');

export class Resolver {
      private log = new Logger();
      private output: string;
      // todo switch scope
      private scope: string;
      private tmpLocalMrgFile: string  = ""; //"docs\\tev2\\glossaries\\mrg.mrgtest.yaml"; // temp
      private mrgWritePath = "./mrg.yaml"
      private config?: string;
      private directory: string = ".";
      // todo switch scope based on version 
      private version?: string = "latest";
      private converter?: Converter;
      private interpreter?: Interpreter;
      private baseURL?: string;

      public constructor({ outputPath, scopePath, directoryPath, vsn, configPath, interpreterType, converterType }: { outputPath: string; scopePath: string; directoryPath?: string; vsn?: string; configPath?: string; interpreterType?: string; converterType?: string; }) {
            this.output = outputPath;
            this.scope = scopePath;

            // process optional paramters if not set in config 
            if (configPath) {
                  this.config = configPath;
                  this.processConfig();
            } else {
                  this.setOptionalParams(directoryPath!, vsn!, interpreterType!, converterType!);
            }
      }

      private processConfig(): boolean {
            // read config file and set paramters
            this.log.trace(`Config path is set: ${this.config}`);
            const config: Map<string, string> = new Map(Object.entries(yaml.load(fs.readFileSync(this.config!, 'utf8')!)!));
            if (config.get("output") != "" || config.get("output")) {
                  this.log.trace(`Out path is set: ${config.get("output")}`);
                  this.output = config.get("output")!;
            } else if (config.get("scopedir") != "" || config.get("scopedir")) {
                  this.log.trace(`Scope path is set: ${config.get("scopedir")}`);
                  this.scope = config.get("scopedir")!;
            }

            // method	<methodarg>	n	Text, the syntax and semantics of which remain to be specified (see also the Editor's note below). When this parameter is omitted, term refs are replaced with some default renderable ref. --> TODO update documentation
            this.setOptionalParams(config.get("input")!, config.get("version")!, config.get("interpreter")!, config.get("converter")!);
            return true;
      }

      private setOptionalParams(directoryPath: string, vsn: string, interpreterType: string, converterType: string) {
            if (directoryPath) { this.directory = directoryPath; }
            if (vsn) { this.version = vsn; }
            if (interpreterType) {
                  if (interpreterType == "Standard") {
                        this.interpreter = new StandardInterpreter();
                  } else if (interpreterType == "Alt") {
                        this.interpreter = new AltInterpreter();
                  } else {
                        this.log.error(interpreterType + " is not a known interpreter, creating standard interpreter.");
                        this.interpreter = new StandardInterpreter();
                  }
            } else {
                  this.interpreter = new StandardInterpreter();
            }

            if (converterType) {
                  if (converterType == "Markdown") {
                        this.converter = new MarkdownConverter();
                  } else if (converterType == "HTTP") {
                        this.converter = new HTTPConverter();
                  } else if (converterType == "ESIFF") {
                        this.converter = new ESSIFConverter();
                  } else {
                        this.log.error(converterType + " is not a known converter, creating Markdown converter.");
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
            if (this.interpreter) {
                  return this.interpreter.getType();
            }
            return "";

      }

      public getConverterType(): string {
            if (this.converter) {
                  return this.converter.getType();
            }
            return "";
      }

      private getMrgUrl(): string {
            this.log.trace("Locating MRG from SAF at: " + this.scope);
            const safDocument: Map<string, string> = new Map(Object.entries(yaml.load(fs.readFileSync(this.scope, 'utf8')!)!));
            // JSON.stringfy() used to force object to string casting as javascript does not support typing otherwise
            const scopeMap: Map<string, string> = new Map(Object.entries(yaml.load(JSON.stringify(safDocument.get("scope"))!)!));
            var mrgURL: string = "";

            // move to seperate fuctions
            if (scopeMap.get("website") != "" && scopeMap.get("website")) {
                  this.baseURL = scopeMap.get("website");
            } else {
                  this.log.error("No website defined in SAF");
            }

            if (scopeMap.get("scopedir") != "" && scopeMap.get("scopedir")) {
                  mrgURL = mrgURL + scopeMap.get("scopedir");
            } else {
                  this.log.error("No scopedir defined in SAF");
                  return "";
            }

            if (scopeMap.get("glossarydir") != "" && scopeMap.get("glossarydir")) {
                  mrgURL = mrgURL + "/" + scopeMap.get("glossarydir");
            } else {
                  this.log.error("No glossarydir defined in SAF");
                  return "";
            }

            if (scopeMap.get("mrgfile") != "" && scopeMap.get("mrgfile")) {
                  mrgURL = mrgURL + "/" + scopeMap.get("mrgfile");
            } else {
                  this.log.error("No mrgfile defined in SAF");
                  return "";
            }

            this.log.trace(`MRG URL is: ${mrgURL}`);
            return mrgURL;
      }

      private async readGlossary(): Promise<Map<string, string>> {
            var glossary: Map<string, string> = new Map();
            var mrgURL: string = this.getMrgUrl();
            if (this.tmpLocalMrgFile) {
                  // this is for local testing
                  const mrgDocument: any = yaml.load(fs.readFileSync(this.tmpLocalMrgFile, 'utf8'));
                  this.populateGlossary(mrgDocument, glossary);
                  this.log.info(`Populated glossary of ${this.scope}:${this.version}`);
                  console.log(glossary);
                  return glossary;
            } else {
                  // remote mrg file                  
                  if (mrgURL != "") {
                        // TODO make sure this is synchronus 
                        this.log.trace("Downloading MRG....");
                        fs.writeFileSync(this.mrgWritePath, await download(mrgURL));
                        const mrgDocument: any = yaml.load(fs.readFileSync(this.mrgWritePath, 'utf8'));
                        this.log.info(`MRG loaded: ${mrgDocument}`);
                        this.populateGlossary(mrgDocument, glossary);
                        this.log.info(`Populated gloassary of ${this.scope}:${this.version}`);
                        console.log(glossary);
                        return glossary;
                  } else {
                        this.log.error("No MRG to download, glossary empty");
                        return glossary;
                  }
            }
      }


      private populateGlossary(mrgDocument: Object, glossary: Map<string, string>): Map<string, string> {
            const mrg: Map<string, string> = new Map(Object.entries(mrgDocument));
            for (const [key, value] of Object.entries(mrg.get("entries")!)) {
                  var alternatives: string[];
                  const innerValues: Map<string, string> = new Map(Object.entries(yaml.load(JSON.stringify(value)!)!));

                  if (innerValues.get("formPhrases")) {
                        alternatives = innerValues.get("formPhrases")!.split(",");
                        alternatives.forEach(t => t.trim());
                        // todo double check the white spaces in this glossary 
                        for (var alternative of alternatives) {
                              if (alternative.includes("{")) {
                                    if (alternative.includes("{ss}")) {
                                          alternatives.push(alternative.replace("{ss}", "s"));
                                          if (alternative.replace("{ss}", "")! in alternatives) {
                                                alternatives.push(alternative.replace("{ss}", ""));
                                          }
                                    } else if (alternative.includes("{yies}")) {
                                          alternatives.push(alternative.replace("{yies}", "ies"));
                                          if (alternative.replace("{yies}", "y")! in alternatives) {
                                                alternatives.push(alternative.replace("{yies}", "y"));
                                          }
                                    } else if (alternative.includes("{ying}")) {
                                          alternatives.push(alternative.replace("{ying}", "ing"));
                                          if (alternative.replace("{ying}", "y")! in alternatives) {
                                                alternatives.push(alternative.replace("{ying}", "y"));
                                          }
                                    }

                              }
                        }


                        glossary.set(innerValues.get("term")!, `${this.baseURL}/${innerValues.get("navurl")}`);
                        for (var alternative of alternatives.filter(s => !s.includes("{"))) {
                              glossary.set(alternative, `${this.baseURL}/${innerValues.get("navurl")}`);
                        }

                  }
            }
            return glossary;
      }

      private createOutputDir(): boolean {
            if (!fs.existsSync(this.output)) {
                  this.log.info("Creating output directoy: " + this.output + ".....");
                  fs.mkdir(this.output, (err) => {
                        if (err) {
                              this.log.error(err);
                              return false;
                        }
                  });
                  return true;
            }
            return true;
      }

      private writeFile(file: string, data: string) {
            this.log.trace("Writing: " + file);
            fs.writeFileSync(this.output + file, data);
      }

      private interpertAndConvert(data: string, glossary: Map<string, string>): string {
            const matches: IterableIterator<RegExpMatchArray> = data.matchAll(this.interpreter!.getGlobalTermRegex());
            for (const match of Array.from(matches)) {
                  var termProperties: Map<string, string> = this.interpreter!.interpert(match);
                  var replacement = this.converter!.convert(glossary, termProperties);
                  if (replacement != "") {
                        data = data.replace(this.interpreter!.getLocalTermRegex(), replacement);
                  }
            }

            return data;
      }

      public async resolve(): Promise<boolean> {
            this.createOutputDir();
            var files = fs.readdirSync(this.directory);
            this.log.info("Reading " + this.directory + ".....");

            files.forEach(async file => {
                  if (path.extname(file) == ".md" || path.extname(file) == ".html") {
                        var data = fs.readFileSync(this.directory + "/" + file, 'utf8')
                        this.log.trace("Reading: " + file);
                        data = this.interpertAndConvert(data, await this.readGlossary());
                        this.writeFile(file, data);
                  } else {
                        this.log.error(file + " does not have a recognised file type (*.md, *.html)");
                  }
            });

            return true;
      }


}