const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hey there!");
    res.write("How are you?");
    res.end();
  } else if (req.url === "/about") {
    res.write("This is about us page");
    res.end();
  } else {
    res.write("Not found");
    res.end();
  }
});

// we never use this because it low leavel

server.on("connection", (socket) => {
  // console.log('new connection...')
});

server.listen(3000);

console.log("listening on port 3000");
