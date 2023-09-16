//print variable
console.log("Hello Node.js");
console.log(global);
console.log(__dirname);
console.log(__filename);
console.log(module);
console.log(exports);
console.log(module.exports === exports);

//blocking
console.log("blocking");
const fs = require("fs");
const content = fs.readFileSync("./data.js", "utf8");
console.log(content);

//non blocking
console.log("non blocking");
fs.readFile("./data.js", "utf8", function (err, content) {
  console.log(content);
});
