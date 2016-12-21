const _ = require('lodash');
const passport = require('passport');
const request = require('request');
const OpenIDStrategy = require('passport-openid').Strategy;
const OAuthStrategy = require('passport-oauth').OAuthStrategy;
const OAuth2Strategy = require('passport-oauth').OAuth2Strategy;

module.exports = (User) => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });

  // Sign in with Email and Password.
  require('./local-strategy')(passport, User);

  // // Sign in with Facebook.
  // require('./facebook-strategy')(passport, User);

  // // Sign in with Twitter.
  // require('./twitter-strategy')(passport, User);

  // // Sign in with Google.
  // require('./google-strategy')(passport, User);

  // // Sign in with Instagram.
  // require('./instagram-strategy')(passport, User);

  return {
    passport: passport,
    // Login Required middleware.
    isAuthenticated: (req, res, next) => {
      if (req.isAuthenticated()) {
        return next();
      }
      res.redirect('/login');
    },
    // Authorization Required middleware.
    isAuthorized: (req, res, next) => {
      const provider = req.path.split('/').slice(-1)[0];

      if (_.find(req.user.tokens, {
          kind: provider
        })) {
        next();
      } else {
        res.redirect(`/auth/${provider}`);
      }
    }
  }
}