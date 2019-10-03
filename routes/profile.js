const router = require("express").Router();
const authCheck = require("../config/auth");

router.get("/", authCheck, (req, res) => {
  res.send("Hello " + req.user.username);
  console.log(req.user);
});

module.exports = router;
