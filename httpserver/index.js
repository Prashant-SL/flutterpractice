const http = require("http");
const server = http.createServer((req, res) => {
    res.write("<h1>Listening on the other side</h1>");
    res.end;
});

server.listen(8080, "127.0.0.1", () => {
    console.log("Listening on port 8080");
});