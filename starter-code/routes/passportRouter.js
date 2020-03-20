
const express        = require('express')
const bcrypt         = require('bcrypt')
const User           = require('../models/user')
const passport       = require('passport')

const passportRouter = express.Router()

// Require user model

// Add bcrypt to encrypt passwords

// Add passport 


const ensureLogin = require("connect-ensure-login");


passportRouter.get("/private-page", ensureLogin.ensureLoggedIn(), (req, res) => {
  res.render("passport/private", { user: req.user });
});

passportRouter.get("/signup", (req, res) => {
  res.render("passport/signup");
});

// POST routes

passportRouter.post("/signup", (req, res, next) => {
  res.render("passport/signup");
});

module.exports = passportRouter;