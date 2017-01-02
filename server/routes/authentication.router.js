module.exports = (router, userController, passportConfig) => {
  router.post('/login', userController.postLogin);
  router.get('/logout', passportConfig.isAuthenticated, userController.logout);
  router.post('/signup', userController.postSignup);
}