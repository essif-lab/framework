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

      fs.mkdir(output, (err) => {
            if (err) throw err;
      });

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
                  data = replace_terms(data);
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

function replace_terms(data: string): string {
      // good example term.md
      const matches: IterableIterator<RegExpMatchArray> = data.matchAll(term_regex);
      // basic syntax, i.e. [showtext](term#trait@scopetag:vsntag);
      // alternative syntax, e.g. [show text@]
      // markdown output: [showtext](current-path/term#trait)
      for (const match of Array.from(matches)) {
            console.log("Match")
            console.log(match.groups.showtext);
            console.log(match.groups.id);
            console.log(match.groups.trait);
            console.log(match.groups.scopetag);
            console.log(match.groups.vsntag);
            // data = data.replace(match.groups.showtext, "placeholder");
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
      // resolve_terms(directory_path, output_path);
      console.log(replace_terms("these are the acts [the purpose of actors](actor#purpose@essif-lab) and so on [the purpose of actors] and so on @essif-lab [the purpose of actors](actor#purpose@essif-lab)"));
}

main();