const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/user");
const passport = require("passport");

const passportRouter = express.Router();

const ensureLogin = require("connect-ensure-login");

passportRouter.get(
  "/private-page",
  ensureLogin.ensureLoggedIn(),
  (req, res) => {
    res.render("passport/private", { user: req.user });
  }
);

passportRouter.get("/signup", (req, res) => {
  res.render("passport/signup");
});

// POST routes

passportRouter.post("/signup", (req, res, next) => {
  const { username, password } = req.body;
  console.log(req.body)
  bcrypt.hash(password, 10).then(hash => {
    return User.create({
      username: username,
      password: hash
    }).then(user => {
      res.send(user);
    });
  });
});

module.exports = passportRouter;
