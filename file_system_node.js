// file system modules
const { error } = require("console");
const fs = require("fs");

let read = fs.readFileSync('./anagram.js')

console.log("Value  " + read);

let write = fs.writeFileSync('./f1.txt', "This is added data through write file");
console.log(write);

let update = fs.appendFileSync("./f1.txt", "Updated without deleting the previous");
console.log(update);

// deleting
fs.unlinkSync('path to file to delete')