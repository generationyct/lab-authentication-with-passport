const express = require("express");
const bcrypt = require("bcrypt");
const User = require('../models/user');
const Post = require('../models/post');
const passport = require("passport");

const pageRouter = express.Router();

const ensureLogin = require("connect-ensure-login");

pageRouter.get(
  '/page',
  ensureLogin.ensureLoggedIn(),
  (req, res, next) => {
    res.render("page/page", { user: req.user });
  }
);

// pageRouter.get('/page', (req, res, next) => {
//     res.render('page/page');
//   }
// );

// res.render("/post/post", { user: req.user });

// POST routes

// passportRouter.post("/signup", (req, res, next) => {
//   const { username, password } = req.body;
//   console.log(req.body)
//   bcrypt.hash(password, 10).then(hash => {
//     return User.create({
//       username: username,
//       password: hash
//     }).then(user => {
//       res.send(user);
//     });
//   });
// });

// passportRouter.post('/login', passport.authenticate('local', {
//   successRedirect:'/',
//   failureRedirect:'/login',
//   failureFlash: true
// }))

module.exports = pageRouter;
