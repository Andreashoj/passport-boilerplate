const router = require("express").Router();
const authCheck = require('../config/auth')

router.get("/", authCheck, (req, res) => {
  res.render("index");
});

module.exports = router;
