const fs = require("fs");

// file wirte synchronous way

fs.writeFileSync("file.txt", "Hello");

// file append synchronous way

fs.appendFileSync("file.txt", " i am Saikat");

// always do it in Asynchronouse way that required

const content = "Hi i am";
fs.writeFile("file.txt", content, (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log("file write successfully");
  }
});

const appendContent = " Saikat";
fs.appendFile("file.txt", appendContent, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("data append successfully");
  }
});

//Read file synchornous way

const data = fs.readFileSync("file.txt");
// console.log(data.toString());

// Read file asynchronous way

fs.readFile("file.txt", (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
    console.log(data.toString());
  }
});
