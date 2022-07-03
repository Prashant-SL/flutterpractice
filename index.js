const fs = require("fs");

// create a new file 
fs.writeFileSync("read.txt", "Welcome to read.txt file");

// appending data
fs.appendFileSync("read.txt", "\nData appended");
// fs.writeFileSync("read.txt", "Added Data");