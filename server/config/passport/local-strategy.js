module.exports = function (passport, data) {
  const LocalStrategy = require('passport-local').Strategy;

  const strategy = new LocalStrategy({
    usernameField: 'email'
  }, (email, password, done) => {
    data.findUserByEmail(email.toLowerCase())
      .then(user => {
        if (!user) {
          return done(null, false, {
            msg: `Email ${email} not found.`
          });
        }

        user.comparePassword(password, (err, isMatch) => {
          if (err) {
            return done(err);
          }

          if (isMatch) {
            return done(null, user);
          }

          return done(null, false, {
            msg: 'Invalid email or password.'
          });
        });
      })
      .catch(err => {
        return done(err);
      });
  });

  passport.use(strategy);
};