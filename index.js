const fs = require("fs");

// create a new file 
fs.writeFileSync("read.txt", "Welcome to read.txt file");

// appending data
fs.appendFileSync("read.txt", "\nData appended");

const org_data = fs.readFileSync("read.txt").toString();
// console.log(org_data);

// To rename the file
fs.renameSync("read.txt", "readwrite.txt");