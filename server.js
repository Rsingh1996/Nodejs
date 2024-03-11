const http = require("http"); // In nodejs, it handles the request and response of server
http
  .createServer((req, resp) => {
    resp.write("<h1>Hello Server</h1>");
    resp.end();
  })
  .listen(5000);
