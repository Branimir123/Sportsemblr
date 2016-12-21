const async = require('async');
const crypto = require('crypto');

module.exports = function (data, passport) {
  return {
    postLogin: (req, res, next) => {
      passport.authenticate('local', (err, user, info) => {
        if (err) {
          return next(err);
        }

        if (!user) {
          return res.status(400)
            .send({
              error: 'Account with that email already exists.'
            });
        }

        req.logIn(user, (err) => {
          if (err) {
            return next(err);
          }

          return res.status(200)
            .send({
              msg: 'Success! You are logged in.'
            });
        });
      })(req, res, next);
    },
    logout: (req, res) => {
      req.logout();
      res.send(200);
    },
    postSignup: (req, res, next) => {
      data.findUserByEmail(req.body.email)
        .then((existingUser) => {
          if (existingUser) {
            return res.status(400)
              .send({
                error: 'Account with that email already exists.'
              });
          }

          return data.findUserByUsername(req.body.username);
        })
        .then((existingUser) => {
          if (existingUser) {
            return res.status(400)
              .send({
                error: 'Account with that username already exists.'
              });
          }

          return data.registerUser(req.body.email, req.body.password, req.body.username, req.body.description);
        })
        .then((user) => {
          req.logIn(user, (err) => {
            if (err) {
              return next(err);
            }

            return res.status(200);
          });
        })
        .catch(err => next(err));
    }
  };
};