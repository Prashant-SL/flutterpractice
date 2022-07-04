const http = require("http");
const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.write("<h1>Listening on the other side</h1>");
    }
    else if (req.url == "/contact") {
        res.write("<h1>Listening on the contact side</h1>");
    }
    else if (req.url == "/about") {
        res.write("<h1>Listening on the about side</h1>");
    }
    else {
        res.writeHead(404, { "Content-type": "text/html" })
        res.end("Error 404. Page does not exist.");
    }
});

server.listen(8080, "127.0.0.1", () => {
    console.log("Listening on port 8080");
});