const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 3000;

const server = http.createServer((req, res) => {
    // console.log(req);
    // console.log(res);

    const filePath = path.join(__dirname, req.url === "/" ? "index.html" : req.url);

    const extName = String(path.extname(filePath)).toLowerCase();

    const mimeType = {
        '.html' : 'text/html',
        '.css' : 'text/css',
        '.js' : 'text/javascript',
        '.png' : 'text/png'
    };

    const contentType = mimeType[extName] || 'application/octet-stream';

    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                res.writeHead(404, { "content-Type": 'text/plain' });
                res.end('404: Fole not found BRoooo!')
            }
        } else{
            res.writeHead(200, {'content-Type' : contentType});
            res.end(content, 'utf-8')
        }
    })
    
});

server.listen(port, () => {
    console.log(`Server is listening on port ${port} `);
    
})