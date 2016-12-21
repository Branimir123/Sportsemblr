module.exports = (app, router, passport, data) => {
  const userController = require('../controllers/user-controller')(data, passport);

  router.post('/login', userController.postLogin);
  router.get('/logout', userController.logout);
  router.post('/signup', userController.postSignup);
}