import { Logger } from "tslog";
import { Interpreter } from "./Interpreter";

export class StandardInterpreter implements Interpreter {
      private log = new Logger();
      private termRegexGlobal: RegExp = /(?<=[^`\\])\[(?=[^@\]]+\]\([#a-z0-9_-]*@[:a-z0-9_-]*\))(?<showtext>.+?)\]\((?<id>[a-z0-9_-]+?)(?:#(?<trait>[a-z0-9_-]+?))?@(?<scopetag>[a-z0-9_-]*)(?::(?<vsntag>[a-z0-9_-]+?))?\)/g;
      private termRegexLocal: RegExp = /(?<=[^`\\])\[(?=[^@\]]+\]\([#a-z0-9_-]*@[:a-z0-9_-]*\))(?<showtext>.+?)\]\((?<id>[a-z0-9_-]+?)(?:#(?<trait>[a-z0-9_-]+?))?@(?<scopetag>[a-z0-9_-]*)(?::(?<vsntag>[a-z0-9_-]+?))?\)/;
      public constructor() { }

      getType(): string {
            return "Standard";
      }

      interpert(match: RegExpMatchArray): Map<string, string> {
            var termProperties: Map<string, string> = new Map();

            if (match.groups.showtext != undefined && match.groups.showtext != "") {
                  termProperties.set("showtext", match.groups.showtext);
            } else {
                  termProperties.set("showtext", "Missing Input");
            }
            if (match.groups.id != undefined && match.groups.id != "") {
                  termProperties.set("term", match.groups.id);
            } else {
                  // term is a text that identifies a knowledge artifact, and is specified in the curated text that documents that artifact (in a specific version of the terminology of a specific scope). It will be matched against the term fields of MRG entries in the MRG that documents said terminology. If omitted, it is generated as follows (assuming the MRG to be used has already been identified):

                  // - set term:=showtext;
                  // - convert every character in the (regex) range [A-Z] to lower-case;
                  // - convert every sequence of characters [^A-Za-z_-]+ to (a single) - character;
                  // - if the resulting term matches an element in the list of texts in the formphrases field of an MRG entry, then replace term with 
                  //   the contents of the term-field of that same MRG entry.
                  if (termProperties.get("showtext") != "Missing Input") {
                        var term = termProperties.get("showtext").toLowerCase().replace(/[^A-Za-z_-]+/g, "-");
                        termProperties.set("term", term);
                  } else {
                        termProperties.set("term", "Missing Input");
                  }
            }
            if (match.groups.trait != undefined && match.groups.trait != "") {
                  termProperties.set("trait", match.groups.trait);
            } else {
                  termProperties.set("trait", "default");
            }
            if (match.groups.scopetag != undefined && match.groups.scopetag != "") {
                  termProperties.set("scopetag", match.groups.scopetag);
            } else {
                  termProperties.set("scopetag", "default");
            }
            if (match.groups.vsntag != undefined && match.groups.vsntag != "") {
                  termProperties.set("vsntag", match.groups.vsntag);
            } else {
                  termProperties.set("vsntag", "latest");
            }
            this.log.trace(`Found term: ${match}`);
            return termProperties;
      }

      public getGlobalTermRegex(): RegExp {
            return this.termRegexGlobal;
      }

      public getLocalTermRegex(): RegExp {
            return this.termRegexLocal;
      }
}