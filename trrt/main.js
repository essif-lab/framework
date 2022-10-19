"use strict";
exports.__esModule = true;
// need this library to read files 
// for working in browser
// var fs = require('browserify-fs');
// for working locally 
var fs = require("fs");
var path = require("path");
var directory_path = "C:\\Users\\degachic\\Documents\\workspace\\trrt\\framework-trrt\\docs\\terms\\";
var output_path = "C:\\Users\\degachic\\Documents\\workspace\\trrt\\framework-trrt\\docs\\terms_updated\\";
var term_regex = new RegExp("(?<=[^`\\])\[(?=[^@\]]+\]\([#a-z0-9_-]*@[:a-z0-9_-]*\))");
function resolve_terms(directory, output) {
    show_status("Reading " + directory + ".....");
    fs.mkdir(output, function (err) {
        if (err)
            throw err;
    });
    fs.readdir(directory, function (err, files) {
        if (err)
            show_status(" \t " + err);
        else {
            files.forEach(function (file) {
                if (path.extname(file) == ".md") {
                    read_file(directory, file, output);
                }
            });
        }
    });
}
function read_file(directory, file, output) {
    fs.readFile(directory + file, 'utf8', function (err, data) {
        if (err) {
            show_status(" \t " + err);
        }
        else {
            show_status("Reading: " + file);
            data = replace_terms(data);
            write_file(output, file, data);
        }
    });
}
function write_file(output, file, data) {
    fs.writeFile((output + file), data, function (err) {
        if (err) {
            show_status(" \t " + err);
        }
        else {
            show_status("Writing " + file);
        }
    });
}
function replace_terms(data) {
    return data.replace(term_regex, "placeholder");
}
function show_status(status) {
    // for working locally
    console.log(status);
    // for working in browser
    // const elt = document.getElementById("status");
    // elt.innerText = elt.innerText + "\n" + status;
}
function main() {
    resolve_terms(directory_path, output_path);
}
main();
