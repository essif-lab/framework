// need this library to read files 
// for working in browser
// var fs = require('browserify-fs');
// for working locally 
import fs = require("fs");

import path = require('path');

const directory_path: string = "C:\\Users\\degachic\\Documents\\workspace\\trrt\\framework-trrt\\docs\\terms\\";
const output_path: string =
      "C:\\Users\\degachic\\Documents\\workspace\\trrt\\framework-trrt\\docs\\terms_updated\\";
const term_regex = /(?<=[^`\\])\[(?=[^@\]]+\]\([#a-z0-9_-]*@[:a-z0-9_-]*\))(?<showtext>.+?)\]\((?<id>[a-z0-9_-]+?)(?:#(?<trait>[a-z0-9_-]+?))?@(?<scopetag>[a-z0-9_-]*)(?::(?<vsntag>[a-z0-9_-]+?))?\)/g;


function resolve_terms(directory: string, output: string) {
      show_status("Reading " + directory + ".....");

      if (!fs.existsSync(output)) {
            fs.mkdir(output, (err) => {
                  if (err) throw err;
            });
      }

      fs.readdir(directory, (err: Error, files: Array<string>) => {
            if (err) show_status(" \t " + err);
            else {
                  files.forEach(file => {
                        if (path.extname(file) == ".md") {
                              read_file(directory, file, output);
                        }
                  });
            }
      });
}

function read_file(directory: string, file: string, output: string) {
      fs.readFile(directory + file, 'utf8', (err: Error, data: string) => {
            if (err) {
                  show_status(" \t " + err);
            } else {
                  show_status("Reading: " + file);
                  data = replace_terms(data, directory);
                  write_file(output, file, data);
            }
      });
}

function write_file(output: string, file: string, data: string) {
      fs.writeFile((output + file), data, (err) => {
            if (err) {
                  show_status(" \t " + err);
            } else {
                  show_status("Writing " + file);
            }
      });
}

function replace_terms(data: string, term_path: string): string {
      // good example term.md
      const matches: IterableIterator<RegExpMatchArray> = data.matchAll(term_regex);
      // basic syntax, i.e. [showtext](term#trait@scopetag:vsntag);
      // alternative syntax, e.g. [show text@]
      // markdown output: [showtext](current-path/term#trait)
      for (const match of Array.from(matches)) {
            var showtext: string = "";
            var id: string = "";
            var term: string = "";
            var trait: string = "";
            var scopetag: string = "";
            var vsntag: string = "";

            if (match.groups.showtext != undefined) {
                  showtext = match.groups.showtext;
            } else {
                  showtext = "Missing Input";
            }
            if (match.groups.id != undefined) {
                  id = match.groups.id;
            } else {
                  id = "Missing Input";
            }
            if (match.groups.term != undefined) {
                  term = match.groups.trait;
            } else {
                  term = "Missing Input";
            }
            if (match.groups.trait != undefined) {
                  trait = match.groups.trait;
            } else {
                  trait = "Default";
            }
            if (match.groups.scopetag != undefined) {
                  scopetag = match.groups.scopetag;
            } else {
                  scopetag = "default";
            }
            if (match.groups.vsntag != undefined) {
                  vsntag = match.groups.vsntag
            } else {
                  vsntag = "latest"
            }

            var markdown_out: string = `[${showtext}](${term_path}/${id}/${trait}/${scopetag}/${vsntag})`;

            data = data.replace(term_regex, markdown_out);
      }

      return data;
}

function show_status(status: string): void {
      // for working locally
      console.log(status);

      // for working in browser
      // const elt = document.getElementById("status");
      // elt.innerText = elt.innerText + "\n" + status;
}

function main(): void {
      resolve_terms(directory_path, output_path);
      // console.log(replace_terms("these are the acts [the purpose of actors](actor#purpose@essif-lab) and so on [the purpose of actors] and so on @essif-lab [the purpose of actors](actor#purpose@essif-lab)", "/current_path"));
}

main();