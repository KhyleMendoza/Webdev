// console.log("Hello from Node!")

// let name = "Khyle";

// for (i = 0; i < 3; i++) {
//     console.log(name)
// }

import http from "http";
import url from "url";

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

    if (parsedUrl.pathname === "/" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>Wecome to the homepage! </h1>");
    } else if (parsedUrl.pathname === "/about" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>About us</h1>");
    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>Page not found</h1>")
    }
})

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000/")
})