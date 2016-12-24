const authRoutes = require('./authentication.router');

module.exports = (app, router, passportConfig, controllers) => {
    require('./authentication.router')(router, controllers.userController, passportConfig);
    require('./event.router')(router, controllers.eventController, passportConfig);

    router.use((req, res, next) => {
        next();
    });

    app.use('/api', router);

    router.get('/', function (req, res, next) {
        res.sendfile('./public/index.html');
    });
}