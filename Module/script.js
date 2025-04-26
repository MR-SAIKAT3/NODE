// console.log(window);

// console.log(global);

let a = 5;
console.log(global.a);

// why it not going global into object?
// "Answer: Beacuse of IFFE Function(exports, require, module, __dirname, __filename)"

// And also the IFFE Function is invisible!

console.log(__dirname);

// where they comming from?
// "Answer: They are comming from IFFE Function Parameter"

console.log(__filename);

const people = require("./people");

// console.log(people.people);
// people.sayHello()

const _ = require("lodash");
console.log(_.last(people));
