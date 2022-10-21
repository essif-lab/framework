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
var term_regex = /(?<=[^`\\])\[(?=[^@\]]+\]\([#a-z0-9_-]*@[:a-z0-9_-]*\))(?<showtext>.+?)\]\((?<id>[a-z0-9_-]+?)(?:#(?<trait>[a-z0-9_-]+?))?@(?<scopetag>[a-z0-9_-]*)(?::(?<vsntag>[a-z0-9_-]+?))?\)/g;
function resolve_terms(directory, output) {
    show_status("Reading " + directory + ".....");
    if (!fs.existsSync(output)) {
        fs.mkdir(output, function (err) {
            if (err)
                throw err;
        });
    }
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
            data = replace_terms(data, directory);
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
function replace_terms(data, term_path) {
    // good example term.md
    var matches = data.matchAll(term_regex);
    // basic syntax, i.e. [showtext](term#trait@scopetag:vsntag);
    // alternative syntax, e.g. [show text@]
    // markdown output: [showtext](current-path/term#trait)
    for (var _i = 0, _a = Array.from(matches); _i < _a.length; _i++) {
        var match = _a[_i];
        var showtext = "";
        var id = "";
        var term = "";
        var trait = "";
        var scopetag = "";
        var vsntag = "";
        if (match.groups.showtext != undefined) {
            showtext = match.groups.showtext;
        }
        else {
            showtext = "Missing Input";
        }
        if (match.groups.id != undefined) {
            id = match.groups.id;
        }
        else {
            id = "Missing Input";
        }
        if (match.groups.term != undefined) {
            term = match.groups.trait;
        }
        else {
            term = "Missing Input";
        }
        if (match.groups.trait != undefined) {
            trait = match.groups.trait;
        }
        else {
            trait = "Default";
        }
        if (match.groups.scopetag != undefined) {
            scopetag = match.groups.scopetag;
        }
        else {
            scopetag = "default";
        }
        if (match.groups.vsntag != undefined) {
            vsntag = match.groups.vsntag;
        }
        else {
            vsntag = "latest";
        }
        var markdown_out = "[".concat(showtext, "](").concat(term_path, "/").concat(id, "/").concat(trait, "/").concat(scopetag, "/").concat(vsntag, ")");
        data = data.replace(term_regex, markdown_out);
    }
    return data;
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
    // console.log(replace_terms("these are the acts [the purpose of actors](actor#purpose@essif-lab) and so on [the purpose of actors] and so on @essif-lab [the purpose of actors](actor#purpose@essif-lab)", "/current_path"));
}
main();
