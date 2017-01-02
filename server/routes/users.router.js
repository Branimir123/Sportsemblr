module.exports = (router, userController, passportConfig) => {
    router.get('/users', userController.getUsers);
}