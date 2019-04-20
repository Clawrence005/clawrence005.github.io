// *********************************************************************************
var path = require("path");

// Routes
// =============================================================
module.exports = function (app) {
  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads main page index.html
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // portfolio route loads portfolio.html
  app.get("/portfolio", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/portfolio.html"));
  });

  // contact route loads contact.html
  app.get("/contact", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/contact.html"));

    // contact route loads resume.html
    app.get("/resume", function (req, res) {
      res.sendFile(path.join(__dirname, "../public/resume.html"));
      // all others *
      //   app.get("/*", function(req, res) {
      //     res.redirect('/'));
      //   });
    });
  };
