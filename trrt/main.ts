// need this library to read files 
// for working in browser
// var fs = require('browserify-fs');
// for working locally 
import fs = require("fs");

import path = require('path');

const directory_path: string = "C:\\Users\\degachic\\Documents\\workspace\\trrt\\framework-trrt\\docs\\terms";
const output_path: string =
      "C:\\Users\\degachic\\Documents\\workspace\\trrt\\framework-trrt\\docs\\terms_updated";

const term_regex: RegExp = new RegExp("(?<=[^`\\])\[(?=[^@\]]+\]\([#a-z0-9_-]*@[:a-z0-9_-]*\))");

function resolve_terms(directory: string, output: string) {
      show_status("Reading " + directory + ".....");
      fs.readdir(directory, (err: Error, files: Array<string>) => {
            if (err) show_status(" \t " + err);
            else {
                  files.forEach(file => {
                        if (path.extname(file) == ".md") {
                              show_status(" \t " + file);
                              read_file(file, output);
                        }
                  });
            }
      });
}

function read_file(file: string, output: string) {
      fs.readFile(file, 'utf8', (err: Error, data: string) => {
            if (err)
                  show_status(" \t " + err);
            data = replace_terms(data);
            write_file(output, file, data);
      });
}

function write_file(output: string, file: string, data: string) {
      fs.writeFile((output + "/" + file), data, (err) => {
            if (err)
                  show_status(" \t " + err);
            console.log('The file has been saved!');
      });
}

function replace_terms(data: string): string {
      return data.replace(term_regex, "");
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
}

main();