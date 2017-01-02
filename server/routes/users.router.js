module.exports = (router, userController, passportConfig) => {
    router.get('/users', userController.getUsers);
    router.get('/users/:username', userController.getUser);
}