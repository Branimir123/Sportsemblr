module.exports = (app, router, passport, data) => {
  const userController = require('../controllers/user-controller')(data, passport);

  router.get('/login', userController.getLogin);
  router.post('/login', userController.postLogin);
  router.get('/logout', userController.logout);
  router.get('/signup', userController.getSignup);
  router.post('/signup', userController.postSignup);
}