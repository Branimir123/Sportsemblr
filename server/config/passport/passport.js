const _ = require('lodash');
const passport = require('passport');
const request = require('request');
const OpenIDStrategy = require('passport-openid').Strategy;
const OAuthStrategy = require('passport-oauth').OAuthStrategy;
const OAuth2Strategy = require('passport-oauth').OAuth2Strategy;

module.exports = (data) => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    data.findUserById(id)
      .then(user => {
        done(null, user);
      })
      .catch(err => {
        done(err, null);
      });
  });

  // Sign in with Email and Password.
  require('./local-strategy')(passport, data);

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