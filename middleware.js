module.exports = requestFilter = (req, resp, next) => {
  if (!req.query.age) {
    resp.send("<h2>Page not available</h2>");
  } else if (req.query.age < 18) {
    resp.send("<h2>Page not accessible for age below 18</h2>");
  } else {
    next();
  }
  console.log("requestFilter called");
};
