const path = require("path");
const myPath = "D:/web-development-pro/Node-JS/Module-System/script.js";

console.log(`BaseName: ${path.basename(myPath)}`);
console.log(`Delimiter: ${path.delimiter}`);
console.log(`DirName: ${path.dirname(myPath)}`);
console.log(`ExtName: ${path.extname(myPath)}`);
console.log("Parse:", path.parse(myPath));
console.log(`isAbsolute: ${path.isAbsolute(myPath)}`);

console.log(process.env.PATH.split(path.delimiter));
