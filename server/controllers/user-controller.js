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
              error: 'User not found'
            });
        }

        req.logIn(user, (err) => {
          if (err) {
            return next(err);
          }

          return res.status(200)
            .send({
              username: user.username,
              token: user.id,
              name: user.name
            });
        });
      })(req, res, next);
    },
    logout: (req, res) => {
      req.logout();
      res.send(200);
    },
    postSignup: (req, res, next) => {
      const user = req.body.user;

      data.findUserByEmail(user.email)
        .then((existingUser) => {
          if (existingUser) {
            return res.status(400)
              .send({
                error: 'Account with that email already exists.'
              });
          }

          return data.findUserByUsername(user.username);
        })
        .then((existingUser) => {
          if (existingUser) {
            return res.status(400)
              .send({
                error: 'Account with that username already exists.'
              });
          }

          return data.registerUser(user.email, user.password, user.username, user.description, user.name);
        })
        .then((user) => {
          req.logIn(user, (err) => {
            if (err) {
              return next(err);
            }

            return res.status(200);
          });
        })
        .catch(err => {
          console.log(err);
          return next(err);
        });
    },
    getUser: (req, res) => {
      const username = req.params.username;

      data.findUserByUsername(username)
        .then(ev => {
          return res.status(200)
            .send(ev);
        })
        .catch(err => {
          console.log(err);
          return res.status(500);
        });
    },
    getUsers: (req, res) => {
      data.getAllUsers()
        .then(users => {
          return res.send(users);
        })
        .catch(err => {
          console.log(err);
          res.status(500).send(err);
        })
    },
    editUser: (req, res) =>  {
      console.log("WE GET HERE?");
      console.log(req);
      const id = req.params.id,
            options = req.body;
            
      data.updateUserById(id, options)
          .then(ev => {
                res.send(ev);
          })
          .catch(err => {
                console.log(err);
                res.send(err)
         });
    } 
  };
};