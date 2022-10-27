import { Converter } from "./Converter";
import { Interpreter } from "./Interpreter";
import fs = require("fs");


export class StandardInterpreter implements Interpreter {
      private term_regex = /(?<=[^`\\])\[(?=[^@\]]+\]\([#a-z0-9_-]*@[:a-z0-9_-]*\))(?<showtext>.+?)\]\((?<id>[a-z0-9_-]+?)(?:#(?<trait>[a-z0-9_-]+?))?@(?<scopetag>[a-z0-9_-]*)(?::(?<vsntag>[a-z0-9_-]+?))?\)/g;

      public constructor() {

      }

      public interpertAndConvert(converter: Converter, glossary: Map<string, string>, file: string, directory_path: string): boolean {
            fs.readFile(directory_path + file, 'utf8', (err: Error, data: string) => {
                  if (err) {
                        console.log(" \t " + err);
                  } else {
                        console.log("Reading: " + file);
                        this.findAndReplaceTerms(data, file, converter, glossary)
                  }
            });
            return true;
      }

      private findAndReplaceTerms(data: string, file: string, converter: Converter, glossary: Map<string, string>) {
            const matches: IterableIterator<RegExpMatchArray> = data.matchAll(this.term_regex);
            // basic syntax, i.e. [showtext](term#trait@scopetag:vsntag);
            // markdown output: [showtext](current-path/term#trait)
            for (const match of Array.from(matches)) {
                  var termProperties: Map<string, string> = new Map();

                  if (match.groups.showtext != undefined) {
                        termProperties.set("showtext", match.groups.showtext);
                  } else {
                        termProperties.set("showtext", "Missing Input");
                  }
                  if (match.groups.id != undefined) {
                        termProperties.set("id", match.groups.id);
                  } else {
                        termProperties.set("id", "Missing Input");
                  }
                  if (match.groups.term != undefined) {
                        termProperties.set("term", match.groups.trait);
                  } else {
                        termProperties.set("term", "Missing Input");
                  }
                  if (match.groups.trait != undefined) {
                        termProperties.set("trait", match.groups.trait);
                  } else {
                        termProperties.set("trait", "default");
                  }
                  if (match.groups.scopetag != undefined) {
                        termProperties.set("scopetag", match.groups.scopetag);
                  } else {
                        termProperties.set("scopetag", "default");
                  }
                  if (match.groups.vsntag != undefined) {
                        termProperties.set("vsntag", match.groups.vsntag);
                  } else {
                        termProperties.set("vsntag", "latest");
                  }

                  converter.convert(data, file, glossary, termProperties);
            }
      }

}