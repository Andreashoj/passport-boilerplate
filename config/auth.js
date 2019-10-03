const authCheck = (req, res, next) => {
  console.log(req.user);
  if (!req.user) {
    console.log("redirecting");
    res.redirect("/login");
  } else {
    next();
  }
};

module.exports = authCheck;
