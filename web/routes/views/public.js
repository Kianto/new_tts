var express = require("express");
var router = express.Router();

router.get("/", (req, res, next) => {
  if (res.locals.user) {
    console.log(res.locals.user);
    return res.render("main", {user: res.locals.user})
    
  }
  res.render("main");
});

router.get("/login", (req, res, next) => {
  res.render("login");
});

router.get("/register", (req, res, next) => {
  res.render("register");
});

module.exports = router;
