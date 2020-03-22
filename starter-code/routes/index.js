const express = require('express');
const router  = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const passport = require("passport");
const ensureLogin = require("connect-ensure-login");

/* GET home page */
router.get('/', ensureAuthenticated, (req, res, next) => {
  res.render('index', {user: req.user});
});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  } else {
    res.redirect('/login')
  }
}

module.exports = router;
