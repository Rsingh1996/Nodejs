const http = require("http"); // In nodejs, it handles the request and response of server
const userData = require("./userData");
http
  .createServer((req, resp) => {
    resp.writeHead(200, { "Content-Type": "application/json" });
    resp.write(JSON.stringify(userData));
    resp.end();
  })
  .listen(5000);
