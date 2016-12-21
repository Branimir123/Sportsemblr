const async = require('async');
const crypto = require('crypto');

module.exports = function (data, passport) {
  return {
    getLogin: (req, res) => {
      if (req.user) {
        return res.redirect('/');
      }

      res.render('account/login', {
        title: 'Login'
      });
    },
    postLogin: (req, res, next) => {
      req.assert('email', 'Email is not valid').isEmail();
      req.assert('password', 'Password cannot be blank').notEmpty();
      req.sanitize('email').normalizeEmail({
        remove_dots: false
      });
      console.log(req);

      passport.authenticate('local', (err, user, info) => {
        if (err) {
          return next(err);
        }
        if (!user) {
          req.flash('errors', info);
          return res.redirect('/login');
        }
        req.logIn(user, (err) => {
          if (err) {
            return next(err);
          }
          req.flash('success', {
            msg: 'Success! You are logged in.'
          });
          res.redirect(req.session.returnTo || '/');
        });
      })(req, res, next);
    },
    logout: (req, res) => {
      req.logout();
      res.redirect('/');
    },
    getSignup: (req, res) => {
      if (req.user) {
        return res.redirect('/');
      }

      res.render('account/signup', {
        title: 'Create Account'
      });
    },
    postSignup: (req, res, next) => {
      console.log(req.body);

      // data.findUserByEmail(req.body.email)
      //   .then((existingUser) => {
      //     if (existingUser) {
      //       req.flash('errors', {
      //         msg: 'Account with that email address already exists.'
      //       });

      //       return res.redirect('/signup');
      //     }

      //     return data.findUserByUsername(req.body.username);
      //   })
      //   .then((existingUser) => {
      //     if (existingUser) {
      //       req.flash('errors', {
      //         msg: 'Account with that username already exists.'
      //       });

      //       return res.redirect('/signup');
      //     }

      //     return data.registerUser(req.body.email, req.body.password, req.body.username, req.body.description);
      //   })
      //   .then((user) => {
      //     req.logIn(user, (err) => {
      //       if (err) {
      //         return next(err);
      //       }
      //       res.redirect('/');
      //     });
      //   })
      //   .catch(err => next(err));
    },
    getAccount: (req, res) => {
      res.render('account/profile', {
        title: 'Account Management'
      });
    },
    postUpdateProfile: (req, res, next) => {
      req.assert('email', 'Please enter a valid email address.').isEmail();
      req.sanitize('email').normalizeEmail({
        remove_dots: false
      });

      const errors = req.validationErrors();

      if (errors) {
        req.flash('errors', errors);
        return res.redirect('/account');
      }

      let oldUsername = '';

      data.findUserById(req.user.id)
        .then((user) => {
          const options = {
            email: req.body.email || user.email,
            profileName: req.body.name || user.profile.name,
            profileGender: req.body.gender || user.profile.gender,
            profileLocation: req.body.location || user.profile.location,
            profileWebsite: req.body.website || user.profile.website,
            username: req.body.username || user.username,
            description: req.body.description || user.description
          };

          oldUsername = user.username;

          return data.updateUserById(user.id, options);
        })
        .then(user => data.changePhotosUsername(oldUsername, user.username))
        .then(() => {
          req.flash('success', {
            msg: 'Profile information has been updated.'
          });
          res.redirect('/account');
        })
        .catch((err) => {
          if (err.code === 11000) {
            req.flash('errors', {
              msg: 'The email address or username you have entered is already associated with an account.'
            });
            return res.redirect('/account');
          }

          next(err);
        });
    }
  };
};