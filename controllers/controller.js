var express = require("express");

var router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/messages", function(req, res) {
  res.json();
});

router.post("/contact", function(req, res) {
  // if (result.affectedRows == 0) {
  //   // If no rows were changed, then the ID must not exist, so 404
  //   return res.status(404).end();
  // } else {
  //   res.status(200).end();
  // }
});

// Export routes for server.js to use.
module.exports = router;
