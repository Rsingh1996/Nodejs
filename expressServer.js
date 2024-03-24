const express = require("express");
const path = require("path");

const PORT = 8000;
const app = express();
const publicPath = path.join(__dirname, "public");

// initializing ejs template
app.set("view engine", "ejs");

// Creating basic middleware
const requestFilter = (req, resp, next) => {
  if (!req.query.age) {
    resp.send("<h2>Page not available</h2>");
  } else if (req.query.age < 18) {
    resp.send("<h2>Page not accessible for age below 18</h2>");
  } else {
    next();
  }
  console.log("requestFilter called");
};
// app.use(requestFilter); // Application level middleware

// app.use(express.static(publicPath)); // Used to redner static html page with extension

// creating extension free pages

app.get("/", (_, response) => {
  response.sendFile(`${publicPath}/index.html`);
});
app.get("/about", (_, response) => {
  response.sendFile(`${publicPath}/about.html`);
});
app.get("/contact", (_, response) => {
  response.sendFile(`${publicPath}/contact.html`);
});
app.get("/profile", (_, response) => {
  const user = {
    userName: `Peter Sharpe`,
    email: `peter@gmail.com`,
    city: `Salt Lake City`,
    skills: [`JavaScript`, `Python`, `Java`, `C`, `C++`, `NodeJS`],
  };
  response.render("profile", { user });
});

app.get("/login", requestFilter, (_, response) => {
  // route level middleware
  response.render("login");
});
app.get("/*", (_, response) => {
  response.sendFile(`${publicPath}/404.html`);
});

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
