const authRoutes = require('./authentication.router');

module.exports = (app, router, passportConfig, data) => {
    require('./authentication.router')(app, router, passportConfig.passport, data);

    router.use((req, res, next) => {
        next();
    });

    app.use('/api', router);

    router.get('/', function (req, res, next) {
        res.sendfile('./public/index.html');
    });
}