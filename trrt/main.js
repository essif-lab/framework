"use strict";
// need this library to read files 
exports.__esModule = true;
// for working in browser
// var fs = require('browserify-fs');
// for working locally 
var fs = require("fs");
var directory_path = "C:\\Users\\degachic\\Documents\\workspace\\trrt\\framework-trrt\\docs\\terms";
function read_dir(path) {
    show_status("Reading " + path + ".....");
    fs.readdir(path, function (err, files) {
        if (err)
            show_status(" \t " + err);
        else {
            files.forEach(function (file) {
                show_status(" \t " + file);
            });
        }
    });
}
function show_status(status) {
    // for working locally
    console.log(status);
    // for working in browser
    // const elt = document.getElementById("status");
    // elt.innerText = elt.innerText + "\n" + status;
}
function main() {
    read_dir(directory_path);
}
main();
